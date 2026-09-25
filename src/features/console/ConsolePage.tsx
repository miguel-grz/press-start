import { Suspense, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { getConsole } from '../../data/consoles'
import { MANUFACTURER_NAMES } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'
import { ConsoleScene } from '../../scenes/ConsoleScene'
import { SceneCanvas } from '../../three/SceneCanvas'
import { useScrollProgress } from '../../three/useScrollProgress'
import { NotFound } from '../NotFound'
import { FooterNav } from './FooterNav'
import { MiniTimeline } from './MiniTimeline'

const TEXT_SECTIONS = ['origin', 'specs', 'launch', 'games', 'legacy', 'funFact'] as const

export function Component() {
  const { slug } = useParams()
  const entry = getConsole(slug)
  const { t } = useI18n()
  const mediaRef = useRef<HTMLElement>(null)
  const mediaProgress = useScrollProgress(mediaRef)

  useEffect(() => {
    if (entry) document.title = `${entry.name} · PRESS START`
  }, [entry])

  if (!entry) return <NotFound />

  const sectionTitle = 'font-display text-[clamp(2.25rem,5vw,3.75rem)]'
  const [before, after] = [TEXT_SECTIONS.slice(0, 2), TEXT_SECTIONS.slice(2)]
  const textSection = (key: (typeof TEXT_SECTIONS)[number]) => (
    <section key={key} aria-labelledby={`section-${key}`} className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 sm:py-28">
      <h2 id={`section-${key}`} className={sectionTitle}>
        {t.console.sections[key]}
      </h2>
      <p className="mt-5 max-w-[60ch] text-lg text-ink-2">{t.console.researching}</p>
    </section>
  )

  return (
    <div style={colorwayStyle(entry.colorway)}>
      <main id="main">
        <section className="bg-tint">
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[80rem] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[5fr_7fr]">
            <div>
              <p className="text-ink-2">
                {MANUFACTURER_NAMES[entry.manufacturer]} · {t.generation[entry.generation]}
              </p>
              <h1 className="font-display mt-3 text-[clamp(3rem,7vw,5.5rem)]">{entry.name}</h1>
              <p className="mt-5 font-mono text-2xl text-ink-2">{entry.releaseYear}</p>
              {entry.factStatus === 'draft' && (
                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface/70 px-4 py-2 text-sm text-ink-2">
                  <span aria-hidden="true" className="size-2 rounded-full bg-btn-yellow" />
                  {t.console.draft}
                </p>
              )}
            </div>
            <ConsolePhoto
              console={entry}
              sizes="(min-width: 1024px) 55vw, 90vw"
              priority
              transition
              className="w-full"
            />
          </div>
        </section>

        {before.map(textSection)}

        {/* Physical media: a sticky 3D stage scrubbed by scroll through a tall section. */}
        <section ref={mediaRef} aria-labelledby="section-media" className="relative h-[220svh] bg-surface">
          <div className="sticky top-16 grid h-[calc(100svh-4rem)] overflow-hidden lg:grid-cols-2">
            <div className="relative z-10 mx-auto flex max-w-[80rem] flex-col justify-center px-5 sm:px-8">
              <h2 id="section-media" className={sectionTitle}>
                {t.console.sections.media}
              </h2>
              <p className="mt-5 max-w-[46ch] text-lg text-ink-2">{t.console.researching}</p>
            </div>
            <div className="relative min-h-[50svh]">
              <SceneCanvas>
                <Suspense fallback={null}>
                  <ConsoleScene slug={entry.slug} colorway={entry.colorway} progress={mediaProgress} />
                </Suspense>
              </SceneCanvas>
            </div>
          </div>
        </section>

        {after.map(textSection)}

        <FooterNav current={entry} />
      </main>
      <MiniTimeline current={entry} />
    </div>
  )
}
