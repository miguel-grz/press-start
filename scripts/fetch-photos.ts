/**
 * Downloads each console's public-domain photo from Wikimedia Commons, trims the white studio
 * margin, cuts the product out onto transparency (see matte.ts) and writes responsive
 * AVIF/WebP files to public/assets/<slug>/ plus their intrinsic
 * sizes to src/data/photoMeta.json (used for aspect ratios, so photos never shift the layout).
 *
 * Run: node scripts/fetch-photos.ts
 */
import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'
import { consoles } from '../src/data/consoles.ts'
import { matte } from './matte.ts'

const WIDTHS = [800, 1600] as const
const USER_AGENT = 'PressStartPortfolio/1.0 (https://github.com/miguel-grz/press-start)'

async function commonsUrl(file: string): Promise<string> {
  const api = new URL('https://commons.wikimedia.org/w/api.php')
  api.search = new URLSearchParams({
    action: 'query',
    titles: `File:${file}`,
    prop: 'imageinfo',
    iiprop: 'url',
    iiurlwidth: '2400',
    format: 'json',
  }).toString()
  const res = await fetch(api, { headers: { 'User-Agent': USER_AGENT } })
  const data = (await res.json()) as { query: { pages: Record<string, { imageinfo?: { thumburl: string }[] }> } }
  const url = Object.values(data.query.pages)[0]?.imageinfo?.[0]?.thumburl
  if (!url) throw new Error(`No Commons image for ${file}`)
  return url
}

const meta: Record<string, { width: number; height: number }> = {}

for (const c of consoles) {
  const res = await fetch(await commonsUrl(c.photo.commonsFile), { headers: { 'User-Agent': USER_AGENT } })
  if (!res.ok) throw new Error(`Download failed for ${c.slug}: ${res.status}`)
  const trimmed = await sharp(Buffer.from(await res.arrayBuffer()))
    .trim({ background: '#ffffff', threshold: 14 })
    .toBuffer({ resolveWithObject: true })
  const cutout = await (await matte(trimmed.data)).png().toBuffer()

  const dir = `public/assets/${c.slug}`
  await mkdir(dir, { recursive: true })
  for (const width of WIDTHS) {
    const resized = sharp(cutout).resize({ width, withoutEnlargement: true })
    await resized.clone().avif({ quality: 58, effort: 6 }).toFile(`${dir}/console-${width}.avif`)
    await resized.clone().webp({ quality: 80 }).toFile(`${dir}/console-${width}.webp`)
  }
  meta[c.slug] = { width: trimmed.info.width, height: trimmed.info.height }
  console.log(`${c.slug}: ${trimmed.info.width}×${trimmed.info.height}`)
}

await writeFile('src/data/photoMeta.json', `${JSON.stringify(meta, null, 2)}\n`)
