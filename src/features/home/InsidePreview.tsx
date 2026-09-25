import type { ReactNode } from 'react'
import { requireConsole } from '../../data/consoles'
import { useI18n } from '../../i18n/I18nProvider'
import { GamesDemo } from './previews/GamesDemo'
import { HardwareDemo } from './previews/HardwareDemo'
import { MediaDemo } from './previews/MediaDemo'
import { ReviewDemo } from './previews/ReviewDemo'
import { SpecsDemo } from './previews/SpecsDemo'
import './previews/previews.css'

const nes = requireConsole('nes')
const n64 = requireConsole('nintendo-64')
/** Hotspots over the N64 photo, in % of the image: cartridge slot and controller ports. */
const N64_SPOTS = [
  [71, 18],
  [66, 76],
] as const

function Tile({
  title,
  body,
  children,
  className = '',
}: {
  title: string
  body: string
  children: ReactNode
  className?: string
}) {
  return (
    <li className={`flex flex-col gap-8 rounded-tile bg-surface p-7 sm:p-9 ${className}`}>
      <div>
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-2 max-w-[42ch] text-ink-2">{body}</p>
      </div>
      <div className="mt-auto">{children}</div>
    </li>
  )
}

/** What a console page holds, shown as small working previews rather than described. */
export function InsidePreview() {
  const { t } = useI18n()
  const tiles = t.home.inside

  return (
    <section aria-labelledby="inside-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <h2 id="inside-title" className="font-display max-w-[16ch] text-[clamp(2.25rem,5vw,3.75rem)]">
          {tiles.title}
        </h2>
        <p className="mt-4 max-w-[48ch] text-lg text-ink-2">{tiles.lede}</p>

        <ul className="mt-12 grid gap-5 md:grid-cols-6">
          <Tile title={tiles.review.title} body={tiles.review.body} className="md:col-span-3">
            <ReviewDemo console={nes} />
          </Tile>
          <Tile title={tiles.media.title} body={tiles.media.body} className="md:col-span-3">
            <MediaDemo />
          </Tile>
          <Tile title={tiles.games.title} body={tiles.games.body} className="md:col-span-2">
            <GamesDemo />
          </Tile>
          <Tile title={tiles.specs.title} body={tiles.specs.body} className="md:col-span-2">
            <SpecsDemo />
          </Tile>
          <Tile title={tiles.hardware.title} body={tiles.hardware.body} className="md:col-span-2">
            <HardwareDemo console={n64} spots={N64_SPOTS} />
          </Tile>
        </ul>
      </div>
    </section>
  )
}
