import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { MANUFACTURER_NAMES, type ConsoleEntry } from '../../../data/types'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatNumber, formatPrice } from '../../../lib/format'
import { Cite } from '../citations'

export function HeroSection({ entry, data }: { entry: ConsoleEntry; data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const { profile } = data
  const copy = data.copy[lang]
  const first = profile.releases[0]
  const price = profile.launchPrices[0]

  const facts = [
    first && {
      label: t.console.facts.released,
      value: first.value.date.slice(0, 4),
      detail: t.console.regions[first.value.region],
      sources: first.sources,
    },
    price && {
      label: t.console.facts.launchPrice,
      value: formatPrice(price.value.amount, price.value.currency, lang),
      detail: t.console.regions[price.value.region],
      sources: price.sources,
    },
    {
      label: t.console.facts.unitsSold,
      value: format(t.console.facts.millions, { value: formatNumber(profile.unitsSold.value.total, lang, 2) }),
      sources: profile.unitsSold.sources,
    },
    { label: t.console.facts.generation, value: t.generation[entry.generation] },
  ].filter((f) => !!f)

  return (
    <section className="bg-tint">
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 px-5 pt-14 pb-10 sm:px-8 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[5fr_7fr]">
        <div>
          <p className="text-ink-2">{MANUFACTURER_NAMES[entry.manufacturer]}</p>
          <h1 className="font-display mt-3 text-[clamp(3rem,7vw,5.5rem)]">{entry.name}</h1>
          <p className="mt-6 max-w-[34ch] text-xl leading-snug text-ink sm:text-2xl">{copy.hook}</p>
          {copy.alsoKnownAs && <p className="mt-4 text-ink-2">{copy.alsoKnownAs}</p>}
        </div>
        <ConsolePhoto console={entry} sizes="(min-width: 1024px) 55vw, 90vw" priority transition className="w-full" />
      </div>
      <div className="mx-auto max-w-[80rem] px-5 pb-14 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-surface/70 p-5">
              <dt className="text-sm text-ink-2">{f.label}</dt>
              <dd className="mt-1.5">
                <span className="font-display text-2xl sm:text-3xl">{f.value}</span>
                {'sources' in f && <Cite ids={f.sources} />}
                {'detail' in f && f.detail && <span className="mt-0.5 block text-sm text-muted">{f.detail}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
