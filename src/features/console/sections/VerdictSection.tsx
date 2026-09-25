import type { CitedBlock, ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'

const BLOCKS: readonly CitedBlock[] = ['verdict0', 'verdict1', 'verdict2']

/** The editorial take, on a full red block: the page's loudest moment after the hero. */
export function VerdictSection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  const copy = data.copy[lang]
  return (
    <section aria-labelledby="verdict-title" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[80rem] gap-10 rounded-[2.5rem] bg-btn-red px-6 py-14 text-white sm:px-12 sm:py-20 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h2 id="verdict-title" className="font-display text-[clamp(2.25rem,5vw,3.75rem)]">
            {t.console.sectionTitles.verdict}
          </h2>
          <p className="mt-6 text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">{copy.verdict.summary}</p>
        </div>
        <ul className="flex flex-col gap-3 self-end">
          {copy.verdict.points.map((point, i) => (
            <li key={point} className="rounded-2xl bg-black/20 p-5 text-lg leading-snug">
              {point}
              <Cite ids={data.profile.citations[BLOCKS[i] ?? 'verdict0']} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
