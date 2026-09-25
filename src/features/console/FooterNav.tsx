import { Link } from 'react-router'
import { getNeighbors } from '../../data/consoles'
import type { ConsoleEntry } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'

function NeighborTag({ entry, label, end }: { entry: ConsoleEntry; label: string; end?: boolean }) {
  return (
    <li className={end ? 'sm:col-start-2' : undefined}>
      <Link
        to={`/console/${entry.slug}`}
        viewTransition
        className={`shelf-tag flex flex-col gap-2 px-5 py-4 no-underline transition-transform duration-300 ease-out-expo hover:-translate-y-1 ${end ? 'items-end text-right' : 'items-start'}`}
      >
        <span className="font-label text-xs text-ink-soft">{label}</span>
        <span className="font-sign text-4xl">{entry.name}</span>
        <span className="text-sm font-semibold text-ink-soft">{entry.releaseYear}</span>
      </Link>
    </li>
  )
}

/** Previous / next console as the neighbouring bays' shelf tags. */
export function FooterNav({ current }: { current: ConsoleEntry }) {
  const { t } = useI18n()
  const { prev, next } = getNeighbors(current.slug)

  return (
    <nav aria-label={`${t.console.previous} / ${t.console.next}`} className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6">
      <ul className="grid gap-6 sm:grid-cols-2">
        {prev && <NeighborTag entry={prev} label={t.console.previous} />}
        {next && <NeighborTag entry={next} label={t.console.next} end />}
      </ul>
    </nav>
  )
}
