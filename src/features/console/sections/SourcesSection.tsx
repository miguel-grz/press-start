import { sources } from '../../../data/sources'
import { format, useI18n } from '../../../i18n/I18nProvider'
import { formatDate } from '../../../lib/format'
import { useSourceList } from '../citations'

export function SourcesSection() {
  const { t, lang } = useI18n()
  const list = useSourceList()
  return (
    <section aria-labelledby="sources-title" className="mx-auto max-w-[80rem] px-5 pt-8 pb-16 sm:px-8">
      <h2 id="sources-title" className="font-display text-3xl">
        {t.console.sectionTitles.sources}
      </h2>
      <p className="mt-2 text-ink-2">{t.console.sourcesLede}</p>
      <ol className="mt-8 grid gap-x-10 gap-y-3 text-sm md:grid-cols-2">
        {list.map((id, i) => {
          const source = sources[id]
          return (
            <li key={id} id={`source-${i + 1}`} className="flex scroll-mt-24 gap-3">
              <span className="w-7 shrink-0 font-mono text-muted">[{i + 1}]</span>
              <span>
                <a href={source.url} className="font-medium text-link" rel="noreferrer" target="_blank">
                  {source.title}
                </a>
                <span className="text-ink-2">
                  {' '}
                  · {source.publisher} · {format(t.console.accessed, { date: formatDate(source.accessed, lang) })}
                </span>
              </span>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
