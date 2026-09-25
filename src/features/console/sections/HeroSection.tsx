import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { MANUFACTURER_NAMES, type ConsoleEntry } from '../../../data/types'
import { useI18n } from '../../../i18n/I18nProvider'

/** The machine at product scale on its own colour; the figures live further down, once each. */
export function HeroSection({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang]

  return (
    <section className="bg-tint-bold overflow-hidden">
      <div className="mx-auto grid max-w-[80rem] items-center gap-8 px-5 pt-14 pb-16 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[5fr_7fr] lg:py-16">
        <div>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)]">{entry.name}</h1>
          <p className="mt-4 text-ink">
            {MANUFACTURER_NAMES[entry.manufacturer]} · {entry.releaseYear} · {t.generation[entry.generation]}
          </p>
          <p className="mt-8 max-w-[30ch] text-2xl leading-snug text-ink sm:text-3xl sm:leading-snug">{copy.hook}</p>
          {copy.alsoKnownAs && <p className="mt-4 max-w-[40ch] text-ink">{copy.alsoKnownAs}</p>}
        </div>
        <ConsolePhoto
          console={entry}
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority
          transition
          className="w-full drop-shadow-[0_40px_40px_rgb(0_0_0/0.25)] lg:scale-110"
        />
      </div>
    </section>
  )
}
