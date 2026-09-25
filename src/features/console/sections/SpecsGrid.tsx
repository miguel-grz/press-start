import { useRef, type ReactNode } from 'react'
import type { ConsoleProfile } from '../../../data/profiles/types'
import type { SourceId } from '../../../data/sources'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatNumber } from '../../../lib/format'
import { useScrollAnimation } from '../../../motion/useScrollAnimation'
import { Cite } from '../citations'

/** A number that counts up once when it scrolls into view; the final value is in the DOM from the start. */
function Count({ value, digits = 0 }: { value: number; digits?: number }) {
  const { lang } = useI18n()
  return (
    <span data-count={value} data-digits={digits}>
      {formatNumber(value, lang, digits)}
    </span>
  )
}

function Tile({
  label,
  sources,
  className,
  children,
  visual,
}: {
  label: string
  sources: readonly SourceId[]
  className: string
  children: ReactNode
  visual?: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-5 rounded-tile p-7 ${className}`}>
      <dt className="text-sm font-medium">
        {label}
        <Cite ids={sources} />
      </dt>
      <dd className="flex flex-1 flex-col gap-5">
        <p className="font-mono text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-medium tracking-tight">
          {children}
        </p>
        {visual && (
          <div aria-hidden="true" className="mt-auto max-w-[15rem]">
            {visual}
          </div>
        )}
      </dd>
    </div>
  )
}

/** Specs you can see: each figure paired with a small drawing of what it means. */
export function SpecsGrid({ specs }: { specs: ConsoleProfile['specs'] }) {
  const { t, lang } = useI18n()
  const ref = useRef<HTMLDListElement>(null)
  const { cpu, ram, vram, resolution, colors, sprites } = specs

  useScrollAnimation(ref, ({ gsap }) => {
    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const counter = { value: 0 }
      const digits = Number(el.dataset.digits ?? 0)
      gsap.to(counter, {
        value: Number(el.dataset.count),
        duration: 1.6,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => {
          el.textContent = formatNumber(counter.value, lang, digits)
        },
      })
    })
    gsap.from('[data-lit]', {
      scale: 0,
      duration: 0.5,
      ease: 'back.out(2)',
      stagger: 0.015,
      scrollTrigger: { trigger: ref.current, start: 'top 60%' },
    })
  })

  const { width, height } = resolution.value
  const unit = 'ml-1.5 font-sans text-[0.45em] text-current/85'

  return (
    <dl ref={ref} className="mt-8 grid gap-5 lg:grid-cols-6">
      <Tile label={t.console.specs.cpu} sources={cpu.sources} className="bg-btn-blue text-white lg:col-span-3">
        <Count value={cpu.value.mhz} digits={2} />
        <span className={unit}>MHz</span>
        <span className="mt-3 block font-sans text-base font-normal tracking-normal">{cpu.value.name}</span>
      </Tile>
      <Tile
        label={`${t.console.specs.ram} · ${t.console.specs.vram}`}
        sources={[...new Set([...ram.sources, ...vram.sources])]}
        className="bg-surface lg:col-span-3"
      >
        <Count value={ram.value.kb} />
        <span className={unit}>KB</span>
        <span className="mx-3 text-muted">+</span>
        <Count value={vram.value.kb} />
        <span className={unit}>KB</span>
      </Tile>
      <Tile
        label={t.console.specs.resolution}
        sources={resolution.sources}
        className="bg-surface lg:col-span-2"
        visual={
          <div
            className="w-full rounded-md border border-black/10 bg-[linear-gradient(to_right,rgb(0_0_0/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.07)_1px,transparent_1px)] bg-[size:calc(100%/32)_calc(100%/30)]"
            style={{ aspectRatio: `${width} / ${height}` }}
          />
        }
      >
        <Count value={width} />
        <span className={unit}>× {formatNumber(height, lang)}</span>
      </Tile>
      <Tile
        label={t.console.specs.colors}
        sources={colors.sources}
        className="bg-soft-yellow lg:col-span-2"
        visual={
          <div className="grid grid-cols-9 gap-1.5">
            {Array.from({ length: colors.value.palette }, (_, i) => (
              <span
                key={i}
                {...(i < colors.value.onScreen ? { 'data-lit': true } : {})}
                className={`aspect-square rounded-full ${i < colors.value.onScreen ? 'bg-ink' : 'bg-black/10'}`}
              />
            ))}
          </div>
        }
      >
        <Count value={colors.value.onScreen} />
        <span className="mt-3 block font-sans text-base font-normal tracking-normal text-ink-2">
          {format(t.console.specs.colorsDetail, colors.value)}
        </span>
      </Tile>
      <Tile
        label={t.console.specs.sprites}
        sources={sprites.sources}
        className="bg-soft-green lg:col-span-2"
        visual={
          <div className="grid grid-cols-8 gap-1.5">
            {Array.from({ length: sprites.value.total }, (_, i) => (
              <span
                key={i}
                {...(i < sprites.value.perLine ? { 'data-lit': true } : {})}
                className={`aspect-square rounded-[3px] ${i < sprites.value.perLine ? 'bg-(--cw-accent)' : 'bg-black/12'}`}
              />
            ))}
          </div>
        }
      >
        <Count value={sprites.value.total} />
        <span className="mt-3 block font-sans text-base font-normal tracking-normal text-ink-2">
          {format(t.console.specs.spritesDetail, sprites.value)}
        </span>
      </Tile>
    </dl>
  )
}
