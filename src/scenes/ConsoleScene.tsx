import { createElement, lazy, type ComponentType, type LazyExoticComponent } from 'react'
import type { SceneProps } from './types'

type SceneComponent = LazyExoticComponent<ComponentType<SceneProps>>

/** Console-specific scenes, each in its own chunk. */
const scenes: Partial<Record<string, SceneComponent>> = {
  nes: lazy(() => import('./nes/Scene')),
}

/** Renders the scene registered for `slug`, if any. Scenes are module-level lazy components, so identity is stable. */
export function ConsoleScene({ slug, ...props }: SceneProps & { slug: string }) {
  const scene = scenes[slug]
  return scene ? createElement(scene, props) : null
}
