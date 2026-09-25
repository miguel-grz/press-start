import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { consoles } from '../../data/consoles'
import { MANUFACTURERS, MANUFACTURER_NAMES, type Manufacturer } from '../../data/types'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'
import { prefersReducedMotion } from '../../motion/useReducedMotion'

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-5 ${flip ? 'rotate-180' : ''}`}>
      <path d="M12.5 4.5 7 10l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/** "Choose your console": a horizontally scrolling row of tinted product tiles, filterable by maker. */
export function Lineup() {
  const { t } = useI18n()
  const [maker, setMaker] = useState<Manufacturer | null>(null)
  const track = useRef<HTMLUListElement>(null)
  const shown = maker ? consoles.filter((c) => c.manufacturer === maker) : consoles

  function scrollByTile(direction: 1 | -1) {
    const el = track.current
    const tile = el?.querySelector('li')
    if (!el || !tile) return
    el.scrollBy({ left: direction * (tile.offsetWidth + 20), behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  const chip =
    'min-h-10 rounded-full px-4 text-sm font-medium transition-colors duration-300 aria-pressed:bg-ink aria-pressed:text-white'

  return (
    <section id="consoles" aria-labelledby="lineup-title" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <h2 id="lineup-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)]">
          {t.home.lineup.title}
        </h2>
        <div className="flex items-center gap-4">
          <div role="group" aria-label={t.home.lineup.filter} className="flex flex-wrap gap-1.5">
            {[null, ...MANUFACTURERS].map((m) => (
              <button
                key={m ?? 'all'}
                type="button"
                aria-pressed={maker === m}
                onClick={() => setMaker(m)}
                className={`${chip} bg-black/[0.05] text-ink-2 hover:bg-black/[0.09]`}
              >
                {m ? MANUFACTURER_NAMES[m] : t.home.lineup.all}
              </button>
            ))}
          </div>
          <div className="hidden gap-2 lg:flex">
            <button
              type="button"
              aria-label={t.home.lineup.previous}
              onClick={() => scrollByTile(-1)}
              className="grid size-10 place-items-center rounded-full bg-black/[0.06] transition-colors hover:bg-black/[0.1]"
            >
              <Arrow />
            </button>
            <button
              type="button"
              aria-label={t.home.lineup.next}
              onClick={() => scrollByTile(1)}
              className="grid size-10 place-items-center rounded-full bg-black/[0.06] transition-colors hover:bg-black/[0.1]"
            >
              <Arrow flip />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] sm:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {shown.map((c) => (
          <li
            key={c.slug}
            className="w-[min(82vw,24rem)] shrink-0 snap-start scroll-ml-5 sm:scroll-ml-8"
            style={colorwayStyle(c.colorway)}
          >
            <Link
              to={`/console/${c.slug}`}
              viewTransition
              className="group bg-tint flex aspect-[4/5] flex-col rounded-tile p-7 text-ink no-underline transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.25)]"
            >
              <span className="text-sm text-ink-2">
                {MANUFACTURER_NAMES[c.manufacturer]} · {c.releaseYear}
              </span>
              <span className="font-display mt-1.5 text-3xl">{c.name}</span>
              <span className="flex flex-1 items-center justify-center py-4">
                <ConsolePhoto
                  console={c}
                  sizes="(min-width: 640px) 24rem, 82vw"
                  transition
                  className="max-h-full w-full object-contain transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
              </span>
              <span className="inline-flex items-center gap-1.5 self-start text-sm font-medium">
                {t.home.lineup.explore}
                <span className="rotate-180 transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
