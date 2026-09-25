import { useEffect } from 'react'
import { useLoaderData, useParams, type LoaderFunctionArgs } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { getConsole } from '../../data/consoles'
import { loadProfile } from '../../data/profiles/load'
import type { ConsoleProfileModule } from '../../data/profiles/types'
import { MANUFACTURER_NAMES, type ConsoleEntry } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'
import { NotFound } from '../NotFound'
import { CitationProvider } from './citations'
import { FooterNav } from './FooterNav'
import { MiniTimeline } from './MiniTimeline'
import { FunFactSection } from './sections/FunFactSection'
import { GamesSection } from './sections/GamesSection'
import { HardwareSection } from './sections/HardwareSection'
import { HeroSection } from './sections/HeroSection'
import { LaunchSection } from './sections/LaunchSection'
import { LegacySection } from './sections/LegacySection'
import { MediaSection } from './sections/MediaSection'
import { OriginSection } from './sections/OriginSection'
import { SourcesSection } from './sections/SourcesSection'
import { VerdictSection } from './sections/VerdictSection'

/** Loads the console's profile chunk before the page renders, so the shared-element transition lands on real content. */
export function loader({ params }: LoaderFunctionArgs): Promise<ConsoleProfileModule | null> {
  return loadProfile(params.slug ?? '')
}

function Review({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { lang } = useI18n()
  const copy = data.copy[lang]
  return (
    <CitationProvider profile={data.profile}>
      <main id="main">
        <HeroSection entry={entry} data={data} />
        <VerdictSection copy={copy} />
        <OriginSection data={data} />
        <HardwareSection entry={entry} data={data} />
        <MediaSection entry={entry} data={data} />
        <GamesSection data={data} />
        <LaunchSection data={data} />
        <LegacySection data={data} />
        <FunFactSection data={data} />
        <SourcesSection />
        <FooterNav current={entry} />
      </main>
    </CitationProvider>
  )
}

/** Consoles whose research hasn't landed yet: identity, photo and a clear status. */
function Researching({ entry }: { entry: ConsoleEntry }) {
  const { t } = useI18n()
  return (
    <main id="main">
      <section className="bg-tint">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[80rem] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="text-ink-2">
              {MANUFACTURER_NAMES[entry.manufacturer]} · {t.generation[entry.generation]}
            </p>
            <h1 className="font-display mt-3 text-[clamp(3rem,7vw,5.5rem)]">{entry.name}</h1>
            <p className="mt-5 font-mono text-2xl text-ink-2">{entry.releaseYear}</p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface/70 px-4 py-2 text-sm text-ink-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-btn-yellow" />
              {t.console.researching}
            </p>
          </div>
          <ConsolePhoto console={entry} sizes="(min-width: 1024px) 55vw, 90vw" priority transition className="w-full" />
        </div>
      </section>
      <FooterNav current={entry} />
    </main>
  )
}

export function Component() {
  const { slug } = useParams()
  const entry = getConsole(slug)
  const data = useLoaderData<typeof loader>()

  useEffect(() => {
    if (entry) document.title = `${entry.name} · PRESS START`
  }, [entry])

  if (!entry) return <NotFound />

  return (
    <div key={entry.slug} style={colorwayStyle(entry.colorway)}>
      {data ? <Review entry={entry} data={data} /> : <Researching entry={entry} />}
      <MiniTimeline current={entry} />
    </div>
  )
}
