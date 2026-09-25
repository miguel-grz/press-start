import { Link } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { getNeighbors } from '../../data/consoles'
import type { ConsoleEntry } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'

function Neighbor({ entry, label, end }: { entry: ConsoleEntry; label: string; end?: boolean }) {
  return (
    <li className={end ? 'md:col-start-2' : undefined} style={colorwayStyle(entry.colorway)}>
      <Link
        to={`/console/${entry.slug}`}
        viewTransition
        className={`group bg-tint flex items-center gap-6 rounded-tile p-6 text-ink no-underline transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8 ${end ? 'flex-row-reverse text-right' : ''}`}
      >
        <ConsolePhoto console={entry} sizes="10rem" className="w-28 shrink-0 sm:w-36" />
        <span className="flex flex-col gap-1">
          <span className="text-sm text-ink-2">{label}</span>
          <span className="font-display text-2xl sm:text-3xl">{entry.name}</span>
          <span className="font-mono text-sm text-muted">{entry.releaseYear}</span>
        </span>
      </Link>
    </li>
  )
}

/** Previous / next console, as tinted tiles. */
export function FooterNav({ current }: { current: ConsoleEntry }) {
  const { t } = useI18n()
  const { prev, next } = getNeighbors(current.slug)

  return (
    <nav
      aria-label={`${t.console.previous} / ${t.console.next}`}
      className="mx-auto max-w-[80rem] px-5 pt-8 pb-20 sm:px-8"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {prev && <Neighbor entry={prev} label={t.console.previous} />}
        {next && <Neighbor entry={next} label={t.console.next} end />}
      </ul>
    </nav>
  )
}
