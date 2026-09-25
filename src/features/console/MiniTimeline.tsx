import { Link } from 'react-router'
import { consoles } from '../../data/consoles'
import type { ConsoleEntry } from '../../data/types'
import { format, useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'

/** Floating pill pinned to the viewport: one stop per console in release order, this one lit. */
export function MiniTimeline({ current }: { current: ConsoleEntry }) {
  const { t } = useI18n()
  return (
    <nav
      aria-label={format(t.console.timelineLabel, { name: current.name })}
      className="pointer-events-none sticky bottom-5 z-30 flex justify-center px-4"
    >
      <ol className="pointer-events-auto flex items-center gap-1 rounded-full border border-black/[0.06] bg-surface/80 p-1.5 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.25)] backdrop-blur-xl">
        {consoles.map((c) => {
          const isCurrent = c.slug === current.slug
          return (
            <li key={c.slug} style={colorwayStyle(c.colorway)}>
              <Link
                to={`/console/${c.slug}`}
                viewTransition
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`${c.name}, ${c.releaseYear}`}
                className={`group flex h-9 items-center justify-center rounded-full font-mono text-xs no-underline transition-[background-color,padding,color] duration-500 ease-out-expo ${
                  isCurrent ? 'bg-ink px-3.5 text-white' : 'px-2.5 text-muted hover:bg-black/[0.05] hover:text-ink'
                }`}
              >
                <span className="mr-1.5 size-2 rounded-full bg-(--cw-accent)" aria-hidden="true" />
                <span className={isCurrent ? '' : 'hidden md:inline'}>{c.releaseYear}</span>
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
