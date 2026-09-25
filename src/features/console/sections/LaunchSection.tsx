import { useRef } from 'react'
import type { ConsoleProfileModule, SalesRegion } from '../../../data/profiles/types'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatDate, formatNumber, formatPrice } from '../../../lib/format'
import { useScrollAnimation } from '../../../motion/useScrollAnimation'
import { Cite, Uncertain } from '../citations'
import { Section } from './Section'

const REGION_ORDER: readonly SalesRegion[] = ['americas', 'japan', 'other']

export function LaunchSection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const { profile } = data
  const copy = data.copy[lang]
  const chart = useRef<HTMLDivElement>(null)
  const { total, byRegion } = profile.unitsSold.value
  const max = Math.max(...Object.values(byRegion))

  useScrollAnimation(chart, ({ gsap }) => {
    gsap.from('[data-bar]', {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: chart.current, start: 'top 80%' },
    })
  })

  return (
    <Section id="launch" title={t.console.sectionTitles.launch} lede={copy.launch.intro}>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-tile bg-surface p-7 sm:p-9">
          <ul className="divide-y divide-line">
            {profile.releases.map(({ value, sources }) => {
              const price = profile.launchPrices.find((p) => p.value.region === value.region)
              return (
                <li key={value.region} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4 first:pt-0 last:pb-0">
                  <p className="font-semibold">{t.console.regions[value.region]}</p>
                  <p className="text-right font-mono">
                    {price ? formatPrice(price.value.amount, price.value.currency, lang) : '—'}
                    {price && <Cite ids={price.sources} />}
                  </p>
                  <p className="text-sm text-ink-2">
                    {value.name} · {formatDate(value.date, lang)}
                    <Cite ids={sources} />
                  </p>
                  <p className="text-right">{price?.uncertain && <Uncertain label={t.console.facts.disputed} />}</p>
                </li>
              )
            })}
          </ul>
          {copy.launch.priceNote && <p className="mt-6 text-sm text-muted">{copy.launch.priceNote}</p>}
        </div>

        <div ref={chart} className="rounded-tile bg-surface p-7 sm:p-9">
          <p className="text-sm text-ink-2">{t.console.facts.unitsSold}</p>
          <p className="font-display mt-1 text-5xl">
            {format(t.console.facts.millions, { value: formatNumber(total, lang, 2) })}
            <Cite ids={profile.unitsSold.sources} />
          </p>
          <figure className="mt-8">
            <figcaption className="text-sm text-muted">{t.console.salesByRegion}</figcaption>
            <ul className="mt-4 flex flex-col gap-3">
              {REGION_ORDER.map((region) => (
                <li
                  key={region}
                  className="grid grid-cols-[7.5rem_1fr] items-center gap-3 text-sm sm:grid-cols-[9rem_1fr]"
                >
                  <span className="text-ink-2">{t.console.regions[region]}</span>
                  <span className="flex items-center gap-3">
                    <span
                      data-bar
                      title={`${t.console.regions[region]}: ${formatNumber(byRegion[region], lang, 2)}`}
                      className="h-7 rounded-r-[4px] bg-(--cw-accent)"
                      style={{ width: `${(byRegion[region] / max) * 78}%` }}
                    />
                    <span className="font-mono font-medium text-ink">{formatNumber(byRegion[region], lang, 2)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </figure>
          <p className="mt-8 border-t border-line pt-5 text-ink-2">
            {t.console.facts.gamesSold}:{' '}
            <span className="font-mono font-medium text-ink">
              {format(t.console.facts.millions, { value: formatNumber(profile.softwareSold.value, lang, 2) })}
            </span>
            <Cite ids={profile.softwareSold.sources} />
          </p>
        </div>
      </div>
    </Section>
  )
}
