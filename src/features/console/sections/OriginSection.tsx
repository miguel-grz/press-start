import { useRef } from 'react'
import type { ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { formatDate } from '../../../lib/format'
import { useScrollAnimation } from '../../../motion/useScrollAnimation'
import { Cite } from '../citations'
import { Section } from './Section'

/** The road to launch and beyond, as a timeline whose rail fills as you read. */
export function OriginSection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang]
  const list = useRef<HTMLOListElement>(null)

  useScrollAnimation(list, ({ gsap }) => {
    gsap.from('[data-rail-fill]', {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'none',
      scrollTrigger: { trigger: list.current, start: 'top 70%', end: 'bottom 60%', scrub: true },
    })
    gsap.utils.toArray<HTMLElement>('[data-milestone]').forEach((item) => {
      gsap.from(item, {
        x: -16,
        opacity: 0.25,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: { trigger: item, start: 'top 75%', toggleActions: 'play none none reverse' },
      })
    })
  })

  return (
    <Section
      id="origin"
      title={t.console.sectionTitles.origin}
      lede={
        <>
          {copy.origin.intro}
          <Cite ids={data.profile.citations.origin} />
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <h3 className="text-sm font-semibold text-ink-2">{t.console.people}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {copy.origin.people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-surface p-5">
                <p className="font-display text-lg">{person.name}</p>
                <p className="mt-1 text-sm text-ink-2">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <ol ref={list} className="relative flex flex-col gap-8 pl-10">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[0.6875rem] w-0.5 rounded-full bg-black/[0.08]"
          >
            <span data-rail-fill className="block h-full w-full rounded-full bg-(--cw-accent)" />
          </span>
          {data.profile.timeline.map(({ value, sources }) => (
            <li key={value.id} data-milestone className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-10 size-6 rounded-full border-4 border-canvas bg-(--cw-accent)"
              />
              <p className="font-mono text-sm text-muted">{formatDate(value.date, lang)}</p>
              <p className="mt-1 text-lg text-ink">
                {copy.origin.timeline[value.id]}
                <Cite ids={sources} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
