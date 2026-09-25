import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { PillLink } from '../../components/PillLink'
import { consoles } from '../../data/consoles'
import { useI18n } from '../../i18n/I18nProvider'
import { prefersReducedMotion } from '../../motion/useReducedMotion'
import { Hero } from './Hero'
import { InsidePreview } from './InsidePreview'
import { Lineup } from './Lineup'
import { TimelinePreview } from './TimelinePreview'

export function Component() {
  const { t } = useI18n()
  const { hash } = useLocation()
  const first = consoles[0]

  useEffect(() => {
    document.title = t.meta.title
  }, [t])

  // In-page links (#consoles, #timeline) from the header and hero CTAs.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [hash])

  return (
    <main id="main">
      <Hero />
      <Lineup />
      <InsidePreview />
      <TimelinePreview />
      <section aria-labelledby="closing-title" className="px-4 pt-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-[80rem] rounded-[2.5rem] bg-btn-blue px-6 py-20 text-center text-white sm:py-28">
          <div aria-hidden="true" className="mx-auto mb-8 grid w-fit grid-cols-2 gap-2.5">
            {['bg-btn-red', 'bg-btn-yellow', 'bg-btn-green', 'bg-white'].map((c) => (
              <span key={c} className={`size-5 rounded-full ${c}`} />
            ))}
          </div>
          <h2 id="closing-title" className="font-display text-[clamp(2.5rem,6vw,4.5rem)]">
            {t.home.closing.title}
          </h2>
          <div className="mt-8">
            <PillLink to={`/console/${first.slug}`} variant="inverse">
              {t.home.closing.cta}
            </PillLink>
          </div>
        </div>
      </section>
    </main>
  )
}
