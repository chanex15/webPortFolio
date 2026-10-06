'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', onMove)
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.body.style.cursor = ''
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ filter: 'drop-shadow(0 0 6px #00ffc8)' }}
    >
      <svg viewBox="0 0 28 28" width="22" height="22">
        <polygon
          points="14,2 16,12 26,14 16,16 14,26 12,16 2,14 12,12"
          fill="#00ffc8"
          opacity="0.95"
        />
        <circle cx="14" cy="14" r="3" fill="white" opacity="0.9" />
      </svg>
    </div>
  )
}
