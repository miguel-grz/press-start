import { Link } from 'react-router'
import { HardwareStandIn } from '../../components/HardwareStandIn'
import { MANUFACTURER_NAMES, type ConsoleEntry } from '../../data/types'
import { format, useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle, viewTransitionStyle } from '../../lib/colorway'

interface BayProps {
  console: ConsoleEntry
  bayNumber: number
}

/** One display bay: glass case, shelf tag on the lip, and the pull-ticket pad that opens the console. */
export function Bay({ console: c, bayNumber }: BayProps) {
  const { t } = useI18n()
  const bay = String(bayNumber).padStart(2, '0')

  return (
    <li className="bay relative flex flex-col" style={colorwayStyle(c.colorway)}>
      <div
        className="bay-case vt-console flex aspect-[5/4] items-center justify-center overflow-hidden"
        style={viewTransitionStyle(c.slug)}
      >
        <HardwareStandIn />
      </div>
      {c.factStatus === 'draft' && (
        <span className="sticker font-label absolute top-3 left-3 z-10 max-w-[9rem] rotate-[-4deg] px-3 py-1.5 text-[0.6875rem] leading-tight">
          {t.catalog.draft}
        </span>
      )}

      <div className="bay-lip flex items-stretch gap-3 px-2 pt-2 pb-3">
        <div className="shelf-tag min-w-0 flex-1 px-3 py-2">
          <h2 className="font-sign truncate text-2xl">{c.name}</h2>
          <dl className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 text-xs text-ink-soft">
            <dt className="font-label">{MANUFACTURER_NAMES[c.manufacturer]}</dt>
            <dd className="text-right">
              {t.catalog.generation} {c.generation}
            </dd>
            <dt className="font-label">{t.catalog.released}</dt>
            <dd className="text-right font-semibold text-ink">{c.releaseYear}</dd>
          </dl>
        </div>

        {/* Not positioned on purpose: the link's ::after stretches over the whole bay. */}
        <div className="ticket-pad grid w-[4.5rem] shrink-0">
          <span
            aria-hidden="true"
            className="-mt-4 h-4 w-1 self-start justify-self-center rounded-full bg-lip-shade [grid-area:1/1]"
          />
          <span aria-hidden="true" className="ticket [grid-area:1/1]" />
          <span aria-hidden="true" className="ticket [grid-area:1/1]" />
          <Link
            to={`/console/${c.slug}`}
            viewTransition
            aria-label={format(t.catalog.pullTicket, { name: c.name })}
            className="grid no-underline [grid-area:1/1] after:absolute after:inset-0 after:content-['']"
          >
            <span className="ticket ticket-top flex flex-col justify-between px-1.5 pt-2.5 pb-1.5">
              <span className="font-label text-[0.625rem] leading-tight">{t.catalog.ticketCta}</span>
              <span className="font-sign text-lg">{bay}</span>
            </span>
          </Link>
        </div>
      </div>
    </li>
  )
}
