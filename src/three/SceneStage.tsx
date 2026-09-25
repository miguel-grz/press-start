import { Suspense } from 'react'
import { ConsoleScene } from '../scenes/ConsoleScene'
import type { SceneProps } from '../scenes/types'
import { SceneCanvas } from './SceneCanvas'

/** Canvas plus the console's scene. Default export so the whole three.js stack can be lazy-loaded. */
export default function SceneStage(props: SceneProps & { slug: string }) {
  return (
    <SceneCanvas>
      <Suspense fallback={null}>
        <ConsoleScene {...props} />
      </Suspense>
    </SceneCanvas>
  )
}
