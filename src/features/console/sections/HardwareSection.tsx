import { useId, useRef, useState } from 'react'
import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import type { ConsoleEntry } from '../../../data/types'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatNumber } from '../../../lib/format'
import { useScrollAnimation } from '../../../motion/useScrollAnimation'
import { Cite } from '../citations'
import { Section } from './Section'

/** Photo with hotspots on the parts that mattered, then the specs as counting numbers. */
export function HardwareSection({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const { profile } = data
  const copy = data.copy[lang]
  const [active, setActive] = useState(profile.hotspots[0]?.id)
  const detailId = useId()
  const specsRef = useRef<HTMLDListElement>(null)
  const { specs } = profile
  const detail = active ? copy.hardware.hotspots[active] : undefined

  useScrollAnimation(specsRef, ({ gsap }) => {
    gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
      const target = Number(el.dataset.count)
      const digits = Number(el.dataset.digits ?? 0)
      const counter = { value: 0 }
      gsap.to(counter, {
        value: target,
        duration: 1.6,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => {
          el.textContent = formatNumber(counter.value, lang, digits)
        },
      })
    })
  })

  const specRows = [
    {
      label: t.console.specs.cpu,
      value: specs.cpu.value.mhz,
      digits: 2,
      unit: 'MHz',
      detail: specs.cpu.value.name,
      sources: specs.cpu.sources,
    },
    { label: t.console.specs.ram, value: specs.ram.value.kb, unit: 'KB', sources: specs.ram.sources },
    { label: t.console.specs.vram, value: specs.vram.value.kb, unit: 'KB', sources: specs.vram.sources },
    {
      label: t.console.specs.resolution,
      value: specs.resolution.value.width,
      unit: `× ${specs.resolution.value.height}`,
      sources: specs.resolution.sources,
    },
    {
      label: t.console.specs.colors,
      value: specs.colors.value.onScreen,
      detail: format(t.console.specs.colorsDetail, specs.colors.value),
      sources: specs.colors.sources,
    },
    {
      label: t.console.specs.sprites,
      value: specs.sprites.value.total,
      detail: format(t.console.specs.spritesDetail, specs.sprites.value),
      sources: specs.sprites.sources,
    },
  ]

  return (
    <Section
      id="hardware"
      title={t.console.sectionTitles.hardware}
      className="bg-surface"
      lede={
        <>
          {copy.hardware.intro}
          <Cite ids={profile.citations.hardware} />
        </>
      }
    >
      <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="relative">
          <ConsolePhoto console={entry} sizes="(min-width: 1024px) 50vw, 90vw" className="w-full" />
          {profile.hotspots.map((spot) => {
            const selected = spot.id === active
            return (
              <button
                key={spot.id}
                type="button"
                aria-pressed={selected}
                aria-controls={detailId}
                aria-label={copy.hardware.hotspots[spot.id]?.title}
                onClick={() => setActive(spot.id)}
                className={`absolute grid size-11 -translate-1/2 place-items-center rounded-full transition-transform duration-300 ease-out-expo hover:scale-110 ${selected ? 'scale-110' : ''}`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <span
                  className={`demo-ping relative size-5 rounded-full border-[3px] border-white shadow-[0_2px_8px_rgb(0_0_0/0.35)] ${selected ? 'bg-btn-red text-btn-red' : 'bg-btn-blue text-btn-blue'}`}
                />
              </button>
            )
          })}
        </div>
        <div id={detailId} aria-live="polite" className="bg-tint rounded-tile p-7 sm:p-9">
          {detail && (
            <>
              <h3 className="font-display text-2xl">{detail.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-2">{detail.body}</p>
            </>
          )}
          <p className="mt-6 text-sm text-muted">{t.console.hotspotHint}</p>
        </div>
      </div>

      <h3 className="font-display mt-24 text-3xl">{t.console.sectionTitles.specs}</h3>
      <dl ref={specsRef} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specRows.map((row) => (
          <div key={row.label} className="rounded-2xl bg-canvas p-6">
            <dt className="text-sm text-ink-2">{row.label}</dt>
            <dd className="mt-2">
              <span className="font-mono text-4xl font-medium tracking-tight">
                <span data-count={row.value} data-digits={row.digits ?? 0}>
                  {formatNumber(row.value, lang, row.digits ?? 0)}
                </span>
                {row.unit && <span className="ml-1.5 text-xl text-ink-2">{row.unit}</span>}
              </span>
              <Cite ids={row.sources} />
              {row.detail && <span className="mt-2 block text-sm text-muted">{row.detail}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
