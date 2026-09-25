import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { consoles } from '../../data/consoles'
import { GENERATIONS, MANUFACTURERS, type Generation, type Manufacturer } from '../../data/types'

function parseMaker(value: string | null): Manufacturer | null {
  return MANUFACTURERS.find((m) => m === value) ?? null
}

function parseGeneration(value: string | null): Generation | null {
  return GENERATIONS.find((g) => String(g) === value) ?? null
}

/** Catalog filters live in the URL so a filtered aisle can be shared and survives reloads. */
export function useCatalogFilters() {
  const [params, setParams] = useSearchParams()
  const maker = parseMaker(params.get('maker'))
  const generation = parseGeneration(params.get('gen'))
  const query = params.get('q') ?? ''

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return consoles.filter(
      (c) =>
        (!maker || c.manufacturer === maker) &&
        (!generation || c.generation === generation) &&
        (!needle || c.name.toLowerCase().includes(needle) || c.slug.includes(needle)),
    )
  }, [maker, generation, query])

  function update(key: 'maker' | 'gen' | 'q', value: string | null) {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true, preventScrollReset: true },
    )
  }

  return {
    maker,
    generation,
    query,
    results,
    setMaker: (m: Manufacturer | null) => update('maker', m),
    setGeneration: (g: Generation | null) => update('gen', g ? String(g) : null),
    setQuery: (q: string) => update('q', q || null),
    clear: () => setParams({}, { replace: true, preventScrollReset: true }),
  }
}
