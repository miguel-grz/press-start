import { consoles } from '../../data/consoles'
import { GENERATIONS, MANUFACTURERS, MANUFACTURER_NAMES } from '../../data/types'
import { format, useI18n } from '../../i18n/I18nProvider'
import { AisleMarkers } from './AisleMarkers'
import { Bay } from './Bay'
import { useCatalogFilters } from './useCatalogFilters'
import './aisle.css'

const makerOptions = MANUFACTURERS.map((m) => ({ value: m, label: MANUFACTURER_NAMES[m] }))
const generationOptions = GENERATIONS.map((g) => ({ value: g, label: String(g) }))

export function Component() {
  const { t } = useI18n()
  const filters = useCatalogFilters()

  return (
    <main id="main" className="slatwall">
      <section aria-labelledby="catalog-heading" className="border-b-[6px] border-fixture-groove bg-fixture">
        <div className="mx-auto max-w-[90rem] px-4 pt-10 pb-8 sm:px-6 sm:pt-16">
          <h1 id="catalog-heading" className="font-sign text-[clamp(4.5rem,16vw,12rem)] text-white">
            {t.catalog.heading}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-snug text-fixture-ink sm:text-xl">{t.catalog.lede}</p>

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-5">
              <AisleMarkers
                label={t.catalog.makers}
                allLabel={t.catalog.all}
                options={makerOptions}
                selected={filters.maker}
                onSelect={filters.setMaker}
              />
              <AisleMarkers
                label={t.catalog.generations}
                allLabel={t.catalog.all}
                options={generationOptions}
                selected={filters.generation}
                onSelect={filters.setGeneration}
              />
            </div>
            <label className="flex w-full max-w-sm flex-col gap-1.5">
              <span className="font-label text-xs text-fixture-ink/75">{t.catalog.search}</span>
              <input
                type="search"
                value={filters.query}
                onChange={(e) => filters.setQuery(e.target.value)}
                placeholder={t.catalog.searchPlaceholder}
                className="min-h-12 border-2 border-dayglo-orange bg-ticket px-3 text-lg font-semibold text-ink placeholder:text-ink-soft focus-visible:outline-offset-2"
              />
            </label>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[90rem] px-4 pt-8 pb-24 sm:px-6">
        <p aria-live="polite" className="font-label mb-8 text-sm text-fixture-ink/80">
          {format(t.catalog.results, { count: filters.results.length, total: consoles.length })}
        </p>

        {filters.results.length > 0 ? (
          <ul className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-4">
            {filters.results.map((c) => (
              <Bay key={c.slug} console={c} bayNumber={consoles.indexOf(c) + 1} />
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-start gap-5 py-16">
            <p className="font-sign text-5xl text-white">
              {filters.query ? format(t.catalog.empty, { query: filters.query }) : t.catalog.emptyFiltered}
            </p>
            <button
              type="button"
              onClick={filters.clear}
              className="font-label min-h-11 bg-dayglo-yellow px-4 text-ink transition-transform hover:-translate-y-0.5"
            >
              {t.catalog.clearFilters}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
