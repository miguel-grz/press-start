/** Miniature of the console pages' spec drawings: a clock figure, a colour matrix and a sprite grid. */
export function SpecsDemo() {
  return (
    <div aria-hidden="true" className="flex h-40 items-center justify-center gap-5">
      <div className="grid size-24 place-items-center rounded-2xl bg-btn-blue font-mono text-white">
        <span className="text-center text-xl leading-tight font-medium">
          1.79
          <span className="block text-xs">MHz</span>
        </span>
      </div>
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className={`size-2.5 rounded-full ${i < 14 ? 'bg-ink' : 'bg-black/12'}`} />
        ))}
      </div>
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className={`size-2.5 rounded-[2px] ${i < 6 ? 'bg-btn-red' : 'bg-black/12'}`} />
        ))}
      </div>
    </div>
  )
}
