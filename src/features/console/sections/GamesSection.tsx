import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'
import { GameAnimation } from '../games/GameAnimation'
import { Section } from './Section'

const TILES = ['bg-soft-red', 'bg-soft-blue', 'bg-soft-yellow', 'bg-soft-green', 'bg-soft-red'] as const

/** Five games that defined the machine, each with an original animation of its core idea. */
export function GamesSection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang]
  return (
    <Section id="games" title={t.console.sectionTitles.games}>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {data.profile.games.map((game, i) => (
          <li
            key={game.id}
            className={`flex flex-col gap-6 rounded-tile p-6 sm:p-7 ${TILES[i % TILES.length]} ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
          >
            <GameAnimation mechanic={game.mechanic} />
            <div>
              <p className="font-mono text-sm text-muted">{game.year}</p>
              <h3 className="font-display mt-1 text-2xl">{game.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">
                {copy.games[game.id]}
                <Cite ids={game.sources} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
