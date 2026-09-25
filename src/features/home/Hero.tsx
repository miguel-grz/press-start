import { useRef } from 'react'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { PillLink } from '../../components/PillLink'
import { consoles } from '../../data/consoles'
import { useI18n } from '../../i18n/I18nProvider'
import { useScrollAnimation } from '../../motion/useScrollAnimation'

/** Opening statement over the whole lineup, standing in release order on one soft floor. */
export function Hero() {
  const { t } = useI18n()
  const stage = useRef<HTMLDivElement>(null)

  useScrollAnimation(stage, ({ gsap }) => {
    const items = gsap.utils.toArray<HTMLElement>('[data-stage-item]')
    gsap.from(items, { y: 48, opacity: 0, duration: 1.4, ease: 'expo.out', stagger: 0.06, delay: 0.15 })
    items.forEach((item, i) => {
      gsap.to(item, {
        yPercent: -18 - (i % 3) * 14,
        xPercent: (i - (items.length - 1) / 2) * 6,
        ease: 'none',
        scrollTrigger: { trigger: stage.current, start: 'top 70%', end: 'bottom top', scrub: true },
      })
    })
  })

  return (
    <section aria-labelledby="hero-title" className="overflow-hidden pt-12 pb-10 sm:pt-16">
      <div className="mx-auto max-w-[80rem] px-5 text-center sm:px-8">
        <h1 id="hero-title" className="font-display mx-auto max-w-[14ch] text-[clamp(2.9rem,7.5vw,6rem)]">
          {t.home.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-2 sm:text-xl">{t.home.hero.lede}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PillLink to={{ hash: 'consoles' }}>{t.home.hero.explore}</PillLink>
          <PillLink to={{ hash: 'timeline' }} variant="secondary">
            {t.home.hero.timeline}
          </PillLink>
        </div>
      </div>

      <div ref={stage} className="relative isolate mx-auto mt-12 max-w-[96rem] px-4 sm:mt-14 sm:px-8">
        <ul className="relative grid grid-cols-4 items-end gap-x-2 gap-y-6 md:flex md:justify-center md:gap-0">
          {consoles.map((c, i) => (
            <li
              key={c.slug}
              data-stage-item
              className={`md:-mx-[1%] md:w-[14%] ${i % 2 ? 'md:mb-[5%]' : ''}`}
              style={{ zIndex: i % 2 ? 1 : 2 }}
            >
              <ConsolePhoto console={c} sizes="(min-width: 768px) 15vw, 25vw" priority className="w-full" />
            </li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="mx-auto -mt-2 h-10 w-[80%] rounded-[50%] bg-[radial-gradient(closest-side,rgb(0_0_0/0.12),transparent)]"
        />
        {/* Four brand-colour lights washing the stage from behind. */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-24 bottom-0 -z-10 opacity-60 blur-3xl">
          <span className="absolute top-[10%] left-[8%] size-[32%] rounded-full bg-btn-red/25" />
          <span className="absolute top-[30%] left-[30%] size-[28%] rounded-full bg-btn-yellow/35" />
          <span className="absolute top-[5%] left-[52%] size-[30%] rounded-full bg-btn-green/25" />
          <span className="absolute top-[25%] right-[6%] size-[32%] rounded-full bg-btn-blue/25" />
        </div>
      </div>
    </section>
  )
}
