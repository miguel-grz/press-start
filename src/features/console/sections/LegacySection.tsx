import type { CitedBlock, ConsoleProfileModule } from '../../../data/profiles/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { Cite } from '../citations'
import { Section } from './Section'

const TILES = ['bg-soft-red', 'bg-soft-yellow', 'bg-soft-green'] as const
const BLOCKS: readonly CitedBlock[] = ['legacy0', 'legacy1', 'legacy2']

export function LegacySection({ data }: { data: ConsoleProfileModule }) {
  const { t, lang } = useI18n()
  return (
    <Section id="legacy" title={t.console.sectionTitles.legacy}>
      <ul className="grid gap-5 md:grid-cols-3">
        {data.copy[lang].legacy.map((item, i) => (
          <li key={item.title} className={`rounded-tile p-7 sm:p-9 ${TILES[i]}`}>
            <h3 className="font-display text-2xl">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-2">
              {item.body}
              <Cite ids={data.profile.citations[BLOCKS[i] ?? 'legacy0']} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
