'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function StarField({ count = 2200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.008
    const t = state.clock.elapsedTime
    ref.current.position.y = Math.sin(t * 0.15) * 0.05
  })

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ffc8"
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  )
}

function BlueStarField({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y -= delta * 0.012
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00b4ff"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  )
}

export function SiteBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* Aurora ambient glows (CSS) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: 600,
            height: 320,
            top: '10%',
            left: '5%',
            background: 'radial-gradient(ellipse, rgba(0,255,200,0.16), transparent 70%)',
            animation: 'auroraFloat 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-[90px]"
          style={{
            width: 700,
            height: 360,
            top: '20%',
            right: '-8%',
            background: 'radial-gradient(ellipse, rgba(0,180,255,0.12), transparent 70%)',
            animation: 'auroraFloat 22s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full blur-[90px]"
          style={{
            width: 520,
            height: 300,
            bottom: '8%',
            left: '15%',
            background: 'radial-gradient(ellipse, rgba(123,94,167,0.14), transparent 70%)',
            animation: 'auroraFloat 26s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: 600,
            height: 300,
            bottom: '20%',
            right: '10%',
            background: 'radial-gradient(ellipse, rgba(255,107,157,0.09), transparent 70%)',
            animation: 'auroraFloat 20s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* 3D star particle field */}
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 2.4], fov: 60 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
        >
          <StarField />
          <BlueStarField />
        </Canvas>
      )}

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,5,0.65) 100%)',
        }}
      />
    </div>
  )
}
