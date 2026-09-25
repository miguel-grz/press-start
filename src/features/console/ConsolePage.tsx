import { Suspense, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { HardwareStandIn } from '../../components/HardwareStandIn'
import { getConsole } from '../../data/consoles'
import { MANUFACTURER_NAMES } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle, viewTransitionStyle } from '../../lib/colorway'
import { ConsoleScene } from '../../scenes/ConsoleScene'
import { SceneCanvas } from '../../three/SceneCanvas'
import { useScrollProgress } from '../../three/useScrollProgress'
import { NotFound } from '../NotFound'
import { FooterNav } from './FooterNav'
import { MiniTimeline } from './MiniTimeline'

const SECTION_KEYS = ['origin', 'specs', 'launch', 'games', 'legacy', 'funFact'] as const

export function Component() {
  const { slug } = useParams()
  const entry = getConsole(slug)
  const { t } = useI18n()
  const pageRef = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(pageRef)

  useEffect(() => {
    if (entry) document.title = `${entry.name} · PRESS START`
  }, [entry])

  if (!entry) return <NotFound />

  return (
    <div ref={pageRef} style={colorwayStyle(entry.colorway)}>
      <SceneCanvas>
        <Suspense fallback={null}>
          <ConsoleScene slug={entry.slug} colorway={entry.colorway} progress={progress} />
        </Suspense>
      </SceneCanvas>

      <main id="main">
        <section className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[90rem] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="font-label text-sm text-fixture-ink/80">
              {MANUFACTURER_NAMES[entry.manufacturer]} · {t.generation[entry.generation]}
            </p>
            <h1 className="font-sign mt-4 text-[clamp(3.5rem,9vw,7.5rem)] text-white">{entry.name}</h1>
            <p className="font-sign mt-6 text-5xl text-dayglo-yellow">{entry.releaseYear}</p>
          </div>
          {/* Shared-element target of the catalog bay; the 3D scene takes over behind it. */}
          <div
            className="vt-console flex aspect-[5/4] items-center justify-center motion-safe:animate-[standin-out_0.6s_0.9s_both]"
            style={viewTransitionStyle(entry.slug)}
          >
            <HardwareStandIn />
          </div>
        </section>

        {SECTION_KEYS.map((key) => (
          <section
            key={key}
            aria-labelledby={`section-${key}`}
            className="mx-auto min-h-[70svh] max-w-[90rem] px-4 py-24 sm:px-6"
          >
            <h2 id={`section-${key}`} className="font-sign text-6xl text-white sm:text-7xl">
              {t.console.sections[key]}
            </h2>
            <p className="mt-6 max-w-[60ch] text-lg text-fixture-ink/85">{t.console.researching}</p>
          </section>
        ))}

        <FooterNav current={entry} />
      </main>
      <MiniTimeline current={entry} />
    </div>
  )
}
