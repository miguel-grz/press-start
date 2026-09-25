import { ContactShadows, Environment, Lightformer, RoundedBox } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { CanvasTexture, SRGBColorSpace, type Group } from 'three'
import { useReducedMotion } from '../../motion/useReducedMotion'
import type { SceneProps } from '../types'

/** 0–1 progress through [start, end] of the overall scroll, eased in and out. */
function segment(p: number, start: number, end: number): number {
  const x = Math.min(1, Math.max(0, (p - start) / (end - start)))
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2
}

/** Text-only label drawn at runtime: type and a colour band, no artwork. */
function useLabel(lines: readonly [string, string], band: string, width = 512, height = 420) {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f4f4f1'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = band
      ctx.fillRect(0, 0, width, height * 0.3)
      ctx.fillStyle = '#ffffff'
      ctx.font = `700 ${Math.round(height * 0.13)}px 'Geist Variable', system-ui, sans-serif`
      ctx.fillText(lines[0], width * 0.07, height * 0.21)
      ctx.fillStyle = '#1d1d1f'
      ctx.font = `600 ${Math.round(height * 0.1)}px 'Geist Variable', system-ui, sans-serif`
      ctx.fillText(lines[1], width * 0.07, height * 0.55)
      ctx.fillStyle = '#86868b'
      for (let i = 0; i < 3; i++)
        ctx.fillRect(width * 0.07, height * (0.68 + i * 0.08), width * (0.7 - i * 0.18), height * 0.025)
    }
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    texture.anisotropy = 8
    return texture
  }, [lines, band, width, height])
}

interface CartridgeProps {
  size: readonly [number, number, number]
  body: string
  pinsPerSide: number
  label: ReturnType<typeof useLabel>
}

/** A cartridge standing upright: label on the front, grip ridges below, edge connector along the bottom. */
function Cartridge({ size: [w, h, d], body, pinsPerSide, label }: CartridgeProps) {
  const pinPitch = (w * 0.78) / pinsPerSide
  return (
    <group>
      <RoundedBox args={[w, h, d]} radius={0.025} smoothness={4}>
        <meshPhysicalMaterial color={body} roughness={0.55} clearcoat={0.15} />
      </RoundedBox>
      <mesh position={[0, h * 0.12, d / 2 + 0.002]}>
        <planeGeometry args={[w * 0.8, h * 0.56]} />
        <meshStandardMaterial map={label} roughness={0.85} />
      </mesh>
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[0, -h * 0.25 - i * h * 0.035, d / 2 + 0.004]}>
          <boxGeometry args={[w * 0.7, h * 0.012, 0.008]} />
          <meshPhysicalMaterial color={body} roughness={0.4} clearcoat={0.3} />
        </mesh>
      ))}
      {/* Edge connector: green board with gold fingers on both faces. */}
      <mesh position={[0, -h / 2 + 0.01, 0]}>
        <boxGeometry args={[w * 0.82, 0.03, d * 0.28]} />
        <meshStandardMaterial color="#1f5f3a" roughness={0.6} />
      </mesh>
      {[1, -1].map((side) =>
        Array.from({ length: pinsPerSide }, (_, i) => (
          <mesh
            key={`${side}-${i}`}
            position={[-w * 0.39 + pinPitch * (i + 0.5), -h / 2 + 0.005, (side * d * 0.14) / 1.02]}
          >
            <boxGeometry args={[pinPitch * 0.6, 0.025, 0.004]} />
            <meshStandardMaterial color="#d8b25a" metalness={0.9} roughness={0.25} />
          </mesh>
        )),
      )}
    </group>
  )
}

/**
 * NES physical media as a product showcase, scrubbed by scroll:
 * the Game Pak's label, then its 72-pin edge connector, then the smaller 60-pin Famicom
 * cartridge sliding in beside it. Proportions follow the real formats; labels are text only.
 */
export default function NesScene({ colorway, progress }: SceneProps) {
  const reduced = useReducedMotion()
  const nes = useRef<Group>(null)
  const famicom = useRef<Group>(null)
  const nesLabel = useLabel(['GAME PAK', 'NES · 72 pins'], colorway.accent)
  const famicomLabel = useLabel(['CASSETTE', 'Famicom · 60 pins'], '#1f4fd6', 512, 300)
  // Scale so both cartridges side by side (≈3 units wide, ≈1.6 tall) fill the stage with a margin.
  const fit = useThree((state) => Math.min(1.1, state.viewport.width / 3.8, state.viewport.height / 2))
  const camera = useThree((state) => state.camera)

  // Aim at the pair's centre so they sit mid-stage at every aspect ratio.
  useEffect(() => {
    camera.lookAt(0, 0, 0)
  }, [camera])

  useFrame(({ clock }, delta) => {
    const p = reduced ? 1 : progress.current
    const k = Math.min(1, delta * 7)
    const tilt = segment(p, 0.3, 0.5) - segment(p, 0.62, 0.74)
    const compare = segment(p, 0.66, 0.9)
    const idle = reduced ? 0 : Math.sin(clock.elapsedTime * 0.8) * 0.06

    if (nes.current) {
      const g = nes.current
      g.rotation.y += (-0.35 + p * 0.35 + idle - g.rotation.y) * k
      // Tip the cartridge towards the camera to show the edge connector.
      g.rotation.x += (tilt * -1.2 - g.rotation.x) * k
      g.position.x += (-compare * 0.72 - g.position.x) * k
      g.position.y += (tilt * 0.35 - g.position.y) * k
    }
    if (famicom.current) {
      const g = famicom.current
      g.position.x += (2.8 - compare * 1.95 - g.position.x) * k
      g.rotation.y += (-0.2 + compare * 0.2 - idle - g.rotation.y) * k
    }
  })

  return (
    <>
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 2]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[-4, 1, 3]} scale={[2, 4, 1]} />
        <Lightformer form="rect" intensity={1} position={[4, 0, -2]} scale={[2, 4, 1]} />
      </Environment>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 4, 5]} intensity={1.1} />

      <group scale={fit}>
        <group ref={nes}>
          <Cartridge size={[1.2, 1.33, 0.2]} body="#8f9095" pinsPerSide={36} label={nesLabel} />
        </group>
        <group ref={famicom} position={[2.8, -0.33, 0]}>
          <Cartridge size={[1.05, 0.68, 0.17]} body="#d7b43c" pinsPerSide={30} label={famicomLabel} />
        </group>
        <ContactShadows position={[0, -0.75, 0]} opacity={0.3} blur={2.6} scale={7} far={1.6} />
      </group>
    </>
  )
}
