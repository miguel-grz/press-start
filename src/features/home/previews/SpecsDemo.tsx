const BARS = [
  { label: 'CPU', width: '72%', color: 'bg-btn-blue' },
  { label: 'RAM', width: '48%', color: 'bg-btn-green' },
  { label: 'RES', width: '86%', color: 'bg-btn-red' },
] as const

/** Illustrative comparison bars (no real figures): the console pages carry the sourced numbers. */
export function SpecsDemo() {
  return (
    <div aria-hidden="true" className="flex h-40 flex-col justify-center gap-4">
      {BARS.map((bar) => (
        <div key={bar.label} className="flex items-center gap-3">
          <span className="w-9 font-mono text-xs text-muted">{bar.label}</span>
          <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
            <span className={`demo-bar block h-full rounded-full ${bar.color}`} style={{ width: bar.width }} />
          </span>
        </div>
      ))}
    </div>
  )
}
