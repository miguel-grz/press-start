import type { ProfileCopy } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'

const DOTS = ['bg-btn-red', 'bg-btn-yellow', 'bg-btn-green'] as const

export function VerdictSection({ copy }: { copy: ProfileCopy }) {
  const { t } = useI18n()
  return (
    <section aria-labelledby="verdict-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[80rem] gap-10 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h2 id="verdict-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)]">
            {t.console.sectionTitles.verdict}
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">{copy.verdict.summary}</p>
        </div>
        <ul className="flex flex-col gap-4 self-end">
          {copy.verdict.points.map((point, i) => (
            <li key={point} className="bg-tint flex gap-4 rounded-2xl p-5 text-ink">
              <span aria-hidden="true" className={`mt-1.5 size-3 shrink-0 rounded-full ${DOTS[i % DOTS.length]}`} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
