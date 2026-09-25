const DOTS = ['bg-btn-red', 'bg-btn-yellow', 'bg-btn-green', 'bg-btn-blue'] as const

/** PRESS START wordmark: the name plus the four face-button dots that sign the brand. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
        {DOTS.map((dot) => (
          <span key={dot} className={`size-[7px] rounded-full ${dot}`} />
        ))}
      </span>
      <span className="text-[0.95rem] font-bold tracking-[0.14em]">PRESS START</span>
    </span>
  )
}
