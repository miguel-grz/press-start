import type { ComponentType, CSSProperties } from 'react'
import type { GameMechanic } from '../../../data/profiles/types'
import './games.css'

/** Order the explorer visits the 4×2 overworld, as reveal delays (s) per room; null rooms stay fogged. */
const ROOM_DELAYS = [0, 1.15, 3.6, null, null, 1.95, 2.75, null] as const

/** Terrain per room, positioned in % of the room. */
const ROOMS: readonly (readonly { kind: 'tree' | 'water' | 'rock' | 'cave' | 'key'; x?: number; y?: number }[])[] = [
  [
    { kind: 'tree', x: 15, y: 20 },
    { kind: 'tree', x: 70, y: 60 },
  ],
  [
    { kind: 'rock', x: 20, y: 65 },
    { kind: 'rock', x: 65, y: 20 },
  ],
  [{ kind: 'cave' }, { kind: 'key', x: 78, y: 18 }],
  [
    { kind: 'tree', x: 30, y: 30 },
    { kind: 'tree', x: 60, y: 55 },
  ],
  [{ kind: 'water' }],
  [{ kind: 'water' }, { kind: 'tree', x: 12, y: 15 }],
  [
    { kind: 'tree', x: 70, y: 20 },
    { kind: 'rock', x: 20, y: 60 },
  ],
  [{ kind: 'rock', x: 45, y: 40 }],
]

function Platformer() {
  return (
    <>
      <span className="plat-hills" />
      <span className="plat-ground right-[55%] left-0" />
      <span className="plat-ground right-0 left-[62%]" />
      <span className="plat-block" />
      <span className="plat-coin" />
      <span className="plat-hero" />
    </>
  )
}

function Adventure() {
  return (
    <>
      <span className="adv-grid">
        {ROOM_DELAYS.map((delay, i) => (
          <span
            key={i}
            style={{ '--delay': delay === null ? '0s' : `${delay}s` } as CSSProperties}
            className={delay === null ? 'adv-fogged' : undefined}
          >
            {ROOMS[i]?.map((item, j) => (
              <i
                key={j}
                className={`adv-${item.kind}`}
                style={item.x === undefined ? undefined : { left: `${item.x}%`, top: `${item.y}%` }}
              />
            ))}
          </span>
        ))}
      </span>
      <span className="adv-hero" />
    </>
  )
}

function Exploration() {
  return (
    <>
      <span className="exp-rock" />
      <span className="exp-tunnel" />
      <span className="exp-orb" />
      <span className="exp-door" />
      <span className="exp-ball" />
    </>
  )
}

function Rpg() {
  return (
    <>
      <span className="rpg-foe" />
      <span className="rpg-hp" />
      <span className="rpg-damage">128</span>
      <span className="rpg-party">
        <span className="bg-btn-red" />
        <span className="bg-btn-yellow" />
        <span className="bg-btn-green" />
      </span>
      <span className="rpg-menu">
        <span className="top-[0.85rem] w-16" />
        <span className="top-[1.5rem] w-12" />
        <span className="top-[2.15rem] w-14" />
        <span className="rpg-cursor" />
      </span>
    </>
  )
}

function Flight() {
  return (
    <>
      <span className="fly-cloud top-6 right-[18%]" />
      <span className="fly-cloud top-14 right-[42%] scale-75" />
      <span className="fly-ground" />
      <span className="fly-meter" />
      <span className="fly-hero" />
    </>
  )
}

const SCENES: Record<GameMechanic, ComponentType> = {
  platformer: Platformer,
  adventure: Adventure,
  exploration: Exploration,
  rpg: Rpg,
  flight: Flight,
}

/** Decorative loop evoking a game's core mechanic. */
export function GameAnimation({ mechanic }: { mechanic: GameMechanic }) {
  const Scene = SCENES[mechanic]
  return (
    <div aria-hidden="true" className="game-stage">
      <Scene />
    </div>
  )
}
