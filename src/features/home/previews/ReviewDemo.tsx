import { ConsolePhoto } from '../../../components/ConsolePhoto'
import { profile } from '../../../data/profiles/nes/profile'
import type { ConsoleEntry } from '../../../data/types'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatNumber, formatPrice } from '../../../lib/format'

/** A console page's review header in miniature, with the NES's real, sourced figures. */
export function ReviewDemo({ console: c }: { console: ConsoleEntry }) {
  const { t, lang } = useI18n()
  const price = profile.launchPrices[0]?.value
  const rows = [
    { label: t.home.inside.reviewRows.released, value: String(c.releaseYear) },
    { label: t.home.inside.reviewRows.price, value: price ? formatPrice(price.amount, price.currency, lang) : '' },
    {
      label: t.home.inside.reviewRows.units,
      value: format(t.console.facts.millions, { value: formatNumber(profile.unitsSold.value.total, lang, 2) }),
    },
  ]
  return (
    <div>
      <div className="flex items-center gap-4">
        <ConsolePhoto console={c} sizes="8rem" className="w-28" />
        <p className="font-display text-lg leading-tight">{c.name}</p>
      </div>
      <dl className="mt-5 divide-y divide-black/[0.08] border-t border-black/[0.08]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2.5 text-sm">
            <dt className="text-ink-2">{row.label}</dt>
            <dd className="font-mono font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
