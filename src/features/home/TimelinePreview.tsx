import { useRef } from 'react'
import { Link } from 'react-router'
import { ConsolePhoto } from '../../components/ConsolePhoto'
import { consoles } from '../../data/consoles'
import { useI18n } from '../../i18n/I18nProvider'
import { colorwayStyle } from '../../lib/colorway'
import { useScrollAnimation } from '../../motion/useScrollAnimation'

/** Release-order strip: the rail draws itself as you scroll, each stop a console you can open. */
export function TimelinePreview() {
  const { t } = useI18n()
  const section = useRef<HTMLElement>(null)

  useScrollAnimation(section, ({ gsap }) => {
    gsap.from('[data-rail]', {
      scaleX: 0,
      transformOrigin: 'left center',
      ease: 'none',
      scrollTrigger: { trigger: '[data-rail]', start: 'top 85%', end: 'top 35%', scrub: true },
    })
    gsap.from('[data-stop]', {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: '[data-rail]', start: 'top 80%' },
    })
  })

  return (
    <section
      ref={section}
      id="timeline"
      aria-labelledby="timeline-title"
      className="scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <h2 id="timeline-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)]">
          {t.home.timeline.title}
        </h2>
        <p className="mt-4 text-lg text-ink-2">{t.home.timeline.lede}</p>
      </div>

      <div className="mt-14 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol className="relative mx-auto grid min-w-[64rem] max-w-[80rem] grid-cols-8 px-5 sm:px-8">
          <span data-rail aria-hidden="true" className="absolute inset-x-5 top-[7.25rem] h-px bg-ink/20 sm:inset-x-8" />
          {consoles.map((c) => (
            <li key={c.slug} data-stop style={colorwayStyle(c.colorway)}>
              <Link
                to={`/console/${c.slug}`}
                viewTransition
                className="group flex flex-col items-start px-2 text-ink no-underline"
              >
                <span className="flex h-24 w-full items-end">
                  <ConsolePhoto
                    console={c}
                    sizes="8rem"
                    className="max-h-24 w-auto max-w-full transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5"
                  />
                </span>
                <span className="relative mt-3 size-3 rounded-full border-2 border-canvas bg-(--cw-accent) shadow-[0_0_0_1px_rgb(0_0_0/0.15)]" />
                <span className="mt-4 font-mono text-sm text-muted">{c.releaseYear}</span>
                <span className="mt-1 text-sm leading-snug font-semibold group-hover:underline">{c.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
