import photoMeta from '../data/photoMeta.json'
import type { ConsoleEntry } from '../data/types'
import { format, useI18n } from '../i18n/I18nProvider'
import { viewTransitionStyle } from '../lib/colorway'

interface ConsolePhotoProps {
  console: ConsoleEntry
  /** `sizes` attribute for responsive selection between the 800w and 1600w renditions. */
  sizes: string
  className?: string
  /** Above-the-fold photos load eagerly with high priority. */
  priority?: boolean
  /** Marks this photo as the shared element that travels between home and the console page. */
  transition?: boolean
}

const meta: Record<string, { width: number; height: number }> = photoMeta

/** Public-domain studio photo of a console, cut out onto transparency by scripts/fetch-photos.ts. */
export function ConsolePhoto({ console: c, sizes, className = '', priority, transition }: ConsolePhotoProps) {
  const { t } = useI18n()
  const base = `${import.meta.env.BASE_URL}assets/${c.slug}/console`
  const srcSet = (ext: string) => `${base}-800.${ext} 800w, ${base}-1600.${ext} 1600w`
  const size = meta[c.slug]

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <img
        src={`${base}-800.webp`}
        srcSet={srcSet('webp')}
        sizes={sizes}
        width={size?.width}
        height={size?.height}
        alt={format(t.console.photoAlt, { name: c.name })}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        draggable={false}
        className={`h-auto select-none ${transition ? 'vt-console' : ''} ${className}`}
        style={transition ? viewTransitionStyle(c.slug) : undefined}
      />
    </picture>
  )
}
