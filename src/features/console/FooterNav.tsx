import { Link } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { getNeighbors } from '../../data/consoles'
import type { ConsoleEntry } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'

function Arrow({ back }: { back?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-6 ${back ? '' : 'rotate-180'}`}>
      <path d="M12.5 4.5 7 10l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Neighbor({ entry, label, next }: { entry: ConsoleEntry; label: string; next?: boolean }) {
  return (
    <li className={next ? 'md:col-start-2' : undefined} style={colorwayStyle(entry.colorway)}>
      <Link
        to={`/console/${entry.slug}`}
        viewTransition
        aria-label={`${label}: ${entry.name}, ${entry.releaseYear}`}
        className={`group bg-tint-bold flex items-center gap-5 rounded-tile p-6 text-ink no-underline transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8 ${next ? 'flex-row-reverse text-right' : ''}`}
      >
        <span
          className={`transition-transform duration-300 ${next ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
        >
          <Arrow back={!next} />
        </span>
        <span className="flex flex-1 flex-col gap-1">
          <span className="font-display text-2xl sm:text-3xl">{entry.name}</span>
          <span className="font-mono text-sm text-ink">{entry.releaseYear}</span>
        </span>
        <ConsolePhoto console={entry} sizes="10rem" className="w-24 shrink-0 sm:w-36" />
      </Link>
    </li>
  )
}

/** Previous / next console, as the neighbouring machines on their own colour. */
export function FooterNav({ current }: { current: ConsoleEntry }) {
  const { t } = useI18n()
  const { prev, next } = getNeighbors(current.slug)

  return (
    <nav
      aria-label={`${t.console.previous} / ${t.console.next}`}
      className="mx-auto max-w-[80rem] px-5 pt-8 pb-28 sm:px-8"
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {prev && <Neighbor entry={prev} label={t.console.previous} />}
        {next && <Neighbor entry={next} label={t.console.next} next />}
      </ul>
    </nav>
  )
}
