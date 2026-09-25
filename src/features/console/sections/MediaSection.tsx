import { lazy, Suspense, useRef, useState } from 'react'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import type { ConsoleEntry } from '../../../data/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { useScrollProgress } from '../../../three/useScrollProgress'
import { Cite } from '../citations'

// three.js only downloads when a console page actually has a 3D stage.
const SceneStage = lazy(() => import('../../../three/SceneStage'))

/** Scroll thresholds at which each ritual step becomes the active caption. */
const STEP_AT = [0, 0.5, 0.82] as const

/** Sticky 3D stage: the console's physical-media ritual, one step per stretch of scroll. */
export function MediaSection({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang]
  const ref = useRef<HTMLElement>(null)
  const [step, setStep] = useState(0)
  const progress = useScrollProgress(ref, (p) => {
    const next = STEP_AT.findLastIndex((at) => p >= at)
    setStep((current) => (current === next ? current : next))
  })

  const intro = (
    <p className="max-w-[44ch] text-lg leading-relaxed text-ink-2">
      {copy.media.intro}
      <Cite ids={data.profile.citations.media} />
    </p>
  )
  const title = 'font-display text-[clamp(2.25rem,5vw,3.75rem)]'

  return (
    <section ref={ref} aria-label={t.console.sectionTitles.media} className="relative bg-soft-blue">
      {/* Phones: title and intro scroll by first, then the stage pins with only the active step. */}
      <div className="flex flex-col gap-5 px-5 pt-20 sm:px-8 lg:hidden">
        <h2 className={title}>{t.console.sectionTitles.media}</h2>
        {intro}
      </div>
      {/* Reduced motion: no scrub, so no extra scroll length; the stage shows its final state. */}
      <div className="h-[260svh] motion-reduce:h-auto">
        <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col overflow-hidden motion-reduce:static lg:grid lg:grid-cols-[2fr_3fr]">
          <div className="relative z-10 order-2 flex flex-col justify-center gap-6 px-5 pb-24 sm:px-8 lg:order-1 lg:py-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <div className="flex flex-col gap-6 max-lg:hidden">
              <h2 className={title}>{t.console.sectionTitles.media}</h2>
              {intro}
            </div>
            <ol className="flex flex-col gap-2">
              {copy.media.steps.map((s, i) => (
                <li
                  key={s.title}
                  aria-current={i === step ? 'step' : undefined}
                  className={`rounded-2xl p-4 transition-[background-color,opacity] duration-500 ease-out-expo ${i === step ? 'bg-surface shadow-[0_8px_24px_-12px_rgb(0_0_0/0.2)]' : 'opacity-55 max-lg:hidden'}`}
                >
                  <p className="font-semibold">
                    <span className="mr-2 font-mono text-sm text-muted">{i + 1}</span>
                    {s.title}
                  </p>
                  <p className="mt-1 text-ink-2">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="max-w-[44ch] text-sm text-muted max-lg:hidden">{copy.media.note}</p>
          </div>
          <div className="relative order-1 min-h-0 flex-1 lg:order-2">
            <Suspense fallback={null}>
              <SceneStage slug={entry.slug} colorway={entry.colorway} progress={progress} />
            </Suspense>
          </div>
        </div>
      </div>
      <p className="px-5 pb-16 text-sm text-muted sm:px-8 lg:hidden">{copy.media.note}</p>
    </section>
  )
}
