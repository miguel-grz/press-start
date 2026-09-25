import { useId, useState } from 'react'
import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import type { ConsoleEntry } from '../../../data/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'
import { Section } from './Section'
import { SpecsGrid } from './SpecsGrid'

/** Photo with hotspots on the parts that mattered, then the specs drawn as what they mean. */
export function HardwareSection({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const { profile } = data
  const copy = data.copy[lang]
  const [active, setActive] = useState(profile.hotspots[0]?.id)
  const detailId = useId()
  const detail = active ? copy.hardware.hotspots[active] : undefined

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
      <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr]">
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
      <SpecsGrid specs={profile.specs} />
    </Section>
  )
}
