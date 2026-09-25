import sharp, { type Sharp } from 'sharp'

/**
 * Alpha matte for product photos shot on a white studio background.
 *
 * Flood-fills the background from the image borders through near-white, near-neutral pixels.
 * The fill keeps going through light neutral pixels (soft shadows, anti-aliased edges), which
 * get colour-to-alpha against white, and stops at the product body, so light-grey plastics stay
 * fully opaque.
 */
export async function matte(input: Buffer, { stop = 212, clear = 250 } = {}): Promise<Sharp> {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  const n = w * h
  const out = Buffer.alloc(n * 4)
  const lo = (i: number) => Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2])
  const hi = (i: number) => Math.max(data[i * 3], data[i * 3 + 1], data[i * 3 + 2])

  const background = new Uint8Array(n)
  const stack = new Int32Array(n)
  let sp = 0
  const visit = (i: number) => {
    if (!background[i] && lo(i) >= stop && hi(i) - lo(i) < 24) {
      background[i] = 1
      stack[sp++] = i
    }
  }
  for (let x = 0; x < w; x++) {
    visit(x)
    visit((h - 1) * w + x)
  }
  for (let y = 0; y < h; y++) {
    visit(y * w)
    visit(y * w + w - 1)
  }
  while (sp) {
    const i = stack[--sp]
    const x = i % w
    if (x > 0) visit(i - 1)
    if (x < w - 1) visit(i + 1)
    if (i >= w) visit(i - w)
    if (i < n - w) visit(i + w)
  }

  for (let i = 0; i < n; i++) {
    let r = data[i * 3]
    let g = data[i * 3 + 1]
    let b = data[i * 3 + 2]
    let a = 255
    if (background[i]) {
      const m = lo(i)
      if (m >= clear) {
        a = 0
      } else {
        const coverage = Math.max(255 - r, 255 - g, 255 - b) / 255
        const ramp = Math.min(1, (clear - m) / (clear - stop))
        a = Math.round(255 * Math.min(1, coverage * 1.6) * ramp)
        const k = Math.max(coverage, 1e-3)
        r = Math.round(255 - (255 - r) / k)
        g = Math.round(255 - (255 - g) / k)
        b = Math.round(255 - (255 - b) / k)
      }
    }
    out[i * 4] = r
    out[i * 4 + 1] = g
    out[i * 4 + 2] = b
    out[i * 4 + 3] = a
  }
  return sharp(out, { raw: { width: w, height: h, channels: 4 } })
}
