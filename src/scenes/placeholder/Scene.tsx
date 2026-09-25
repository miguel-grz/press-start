import { RoundedBox } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'
import type { SceneProps } from '../types'

/** Stand-in hardware block in the console's colorway, turned by scroll. Replaced per console. */
export default function PlaceholderScene({ colorway, progress }: SceneProps) {
  const group = useRef<Group>(null)
  // Sit over the hero's media column on wide screens, centred on narrow ones.
  const x = useThree((state) => (state.viewport.width > 5 ? state.viewport.width * 0.25 : 0))
  const scale = useThree((state) => Math.min(1, state.viewport.width / 5))

  useFrame((_, delta) => {
    const g = group.current
    if (!g) return
    const target = -0.5 + progress.current * Math.PI * 1.5
    g.rotation.y += (target - g.rotation.y) * Math.min(1, delta * 6)
  })

  return (
    <>
      <ambientLight intensity={0.35} />
      {/* The aisle's single overhead fluorescent source. */}
      <directionalLight position={[0, 5, 2]} intensity={1.6} />
      <group ref={group} position={[x, -0.2, 0]} rotation={[0.25, -0.5, 0]} scale={scale}>
        <RoundedBox args={[2.4, 0.6, 1.6]} radius={0.06} smoothness={4}>
          <meshStandardMaterial color={colorway.body} roughness={0.55} />
        </RoundedBox>
        <mesh position={[0, 0.31, 0.2]}>
          <boxGeometry args={[2.2, 0.02, 0.5]} />
          <meshStandardMaterial color={colorway.trim} roughness={0.4} />
        </mesh>
        <mesh position={[0.85, 0.31, -0.45]}>
          <cylinderGeometry args={[0.09, 0.09, 0.04, 24]} />
          <meshStandardMaterial color={colorway.accent} emissive={colorway.accent} emissiveIntensity={0.6} />
        </mesh>
      </group>
    </>
  )
}
