import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleEntry } from '../../../data/types'

/** Pulsing hotspots over a real photo, as on the console pages' hardware section. */
export function HardwareDemo({
  console: c,
  spots,
}: {
  console: ConsoleEntry
  spots: readonly (readonly [number, number])[]
}) {
  return (
    <div className="relative mx-auto flex h-40 items-center justify-center">
      <div className="relative">
        <ConsolePhoto console={c} sizes="18rem" className="max-h-40 w-auto" />
        {spots.map(([x, y]) => (
          <span
            key={`${x}-${y}`}
            aria-hidden="true"
            className="demo-ping absolute size-4 -translate-1/2 rounded-full border-2 border-white bg-btn-blue text-btn-blue shadow-[0_2px_6px_rgb(0_0_0/0.3)]"
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        ))}
      </div>
    </div>
  )
}
