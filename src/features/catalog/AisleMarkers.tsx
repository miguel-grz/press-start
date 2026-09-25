interface Option<T> {
  value: T
  label: string
}

interface AisleMarkersProps<T> {
  label: string
  allLabel: string
  options: readonly Option<T>[]
  selected: T | null
  onSelect: (value: T | null) => void
}

/** Hanging aisle markers: a toggle group where one marker (or "All") is lit at a time. */
export function AisleMarkers<T extends string | number>({
  label,
  allLabel,
  options,
  selected,
  onSelect,
}: AisleMarkersProps<T>) {
  const items: Option<T | null>[] = [{ value: null, label: allLabel }, ...options]
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-end gap-x-1.5 gap-y-3">
      <span className="font-label mr-2 w-full text-xs text-fixture-ink/75 sm:w-auto">{label}</span>
      {items.map((item) => (
        <button
          key={String(item.value)}
          type="button"
          aria-pressed={selected === item.value}
          onClick={() => onSelect(item.value)}
          className="font-label relative min-h-11 border-2 border-white/25 bg-fixture-deep px-3 text-sm text-white transition-[background-color,color,transform] duration-300 ease-out-expo before:absolute before:-top-3 before:left-1/2 before:h-3 before:w-px before:bg-white/30 hover:-translate-y-0.5 hover:border-white/60 aria-pressed:border-dayglo-yellow aria-pressed:bg-dayglo-yellow aria-pressed:text-ink"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
