import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  /** Wide sections break out of the reading column for media-heavy layouts. */
  lede?: ReactNode
}

/** Shared frame for console-page sections: one heading scale, one rhythm. */
export function Section({ id, title, lede, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <h2 id={`${id}-title`} className="font-display max-w-[20ch] text-[clamp(2.25rem,5vw,3.75rem)]">
          {title}
        </h2>
        {lede && <div className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink-2">{lede}</div>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
