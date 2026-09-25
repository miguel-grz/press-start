import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useState, type ReactNode } from 'react'
import { getDeviceTier } from '../lib/deviceTier'
import { useReducedMotion } from '../motion/useReducedMotion'

/**
 * The one WebGL canvas of a console route. Fixed behind the page content, decorative for
 * assistive tech (all information lives in the DOM), and scaled by device tier + live FPS.
 */
export function SceneCanvas({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const [maxDpr, setMaxDpr] = useState(() => (getDeviceTier() === 'low' ? 1.25 : 2))

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, maxDpr]}
        frameloop={reduced ? 'demand' : 'always'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.6, 5], fov: 35 }}
      >
        <PerformanceMonitor onDecline={() => setMaxDpr(1)} />
        {children}
      </Canvas>
    </div>
  )
}
