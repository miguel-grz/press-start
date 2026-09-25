import { createElement, lazy, type ComponentType, type LazyExoticComponent } from 'react'
import type { SceneProps } from './types'

type SceneComponent = LazyExoticComponent<ComponentType<SceneProps>>

const placeholder: SceneComponent = lazy(() => import('./placeholder/Scene'))

/** Console-specific scenes, each in its own chunk. Consoles without one use the placeholder. */
const scenes: Partial<Record<string, SceneComponent>> = {}

/** Renders the scene registered for `slug`. Scenes are module-level lazy components, so identity is stable. */
export function ConsoleScene({ slug, ...props }: SceneProps & { slug: string }) {
  return createElement(scenes[slug] ?? placeholder, props)
}
