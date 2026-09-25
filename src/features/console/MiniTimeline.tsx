import { Link } from 'react-router'
import { consoles } from '../../data/consoles'
import type { ConsoleEntry } from '../../data/types'
import { format, useI18n } from '../../i18n/I18nProvider'

const START = 1970
const END = new Date().getFullYear() + 1
const DECADES = Array.from({ length: Math.floor((END - START) / 10) + 1 }, (_, i) => START + i * 10)

function position(year: number): string {
  return `${((year - START) / (END - START)) * 100}%`
}

/** Shelf-edge strip pinned to the viewport: where this console sits in history, one peg per console. */
export function MiniTimeline({ current }: { current: ConsoleEntry }) {
  const { t } = useI18n()
  return (
    <nav
      aria-label={format(t.console.timelineLabel, { name: current.name })}
      className="bay-lip sticky bottom-0 z-20 h-14 border-t-2 border-fixture-groove"
    >
      <div className="relative mx-auto h-full max-w-[90rem] px-6">
        <div className="relative h-full">
          {DECADES.map((year) => (
            <span
              key={year}
              aria-hidden="true"
              className="font-label absolute bottom-1.5 -translate-x-1/2 text-[0.625rem] text-ink-soft"
              style={{ left: position(year) }}
            >
              {year}
            </span>
          ))}
          <ol className="contents">
            {consoles.map((c) => {
              const isCurrent = c.slug === current.slug
              return (
                <li key={c.slug} className="absolute top-2 -translate-x-1/2" style={{ left: position(c.releaseYear) }}>
                  <Link
                    to={`/console/${c.slug}`}
                    viewTransition
                    aria-current={isCurrent ? 'page' : undefined}
                    className="group flex min-h-7 min-w-5 flex-col items-center no-underline"
                  >
                    <span
                      className={
                        isCurrent
                          ? 'size-3.5 rounded-full bg-dayglo-orange shadow-[0_0_0_2px_var(--color-ticket)]'
                          : 'mt-0.5 h-2.5 w-1 rounded-full bg-ink/60 transition-colors group-hover:bg-ink'
                      }
                    />
                    <span className="font-label pointer-events-none absolute bottom-full mb-2 whitespace-nowrap bg-ink px-2 py-1 text-[0.6875rem] text-ticket opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      {c.name} · {c.releaseYear}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </nav>
  )
}
