import type { CSSProperties } from 'react'
import type { Colorway } from '../data/types'

/** Exposes a console colorway to CSS as --cw-body / --cw-trim / --cw-accent. */
export function colorwayStyle(colorway: Colorway): CSSProperties {
  return {
    '--cw-body': colorway.body,
    '--cw-trim': colorway.trim,
    '--cw-accent': colorway.accent,
  } as CSSProperties
}

export function viewTransitionStyle(slug: string): CSSProperties {
  return { '--vt-name': `console-${slug}` } as CSSProperties
}
