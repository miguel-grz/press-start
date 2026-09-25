import { ConsolePhoto } from '../../../components/ConsolePhoto'
import type { ConsoleEntry } from '../../../data/types'
import { useI18n } from '../../../i18n/I18nProvider'
import { colorwayStyle } from '../../../lib/colorway'

/** Structure of a console's review header: identity, then the sourced key facts. */
export function ReviewDemo({ console: c }: { console: ConsoleEntry }) {
  const { t } = useI18n()
  return (
    <div aria-hidden="true" className="bg-tint rounded-2xl p-5" style={colorwayStyle(c.colorway)}>
      <div className="flex items-center gap-4">
        <ConsolePhoto console={c} sizes="8rem" className="w-28" />
        <div>
          <p className="font-display text-lg">{c.name}</p>
          <p className="text-sm text-ink-2">
            {c.releaseYear} · {t.generation[c.generation]}
          </p>
        </div>
      </div>
      <ul className="mt-5 divide-y divide-black/[0.07] border-t border-black/[0.07]">
        {Object.values(t.home.inside.reviewRows).map((row, i) => (
          <li key={row} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-ink-2">{row}</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-16 rounded-full bg-black/[0.08]" />
              <sup className="font-mono text-[0.65rem] text-muted">[{i + 1}]</sup>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
