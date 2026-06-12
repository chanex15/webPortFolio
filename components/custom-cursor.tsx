'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }
      raf = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, input, textarea, [role="button"]')
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '52px' : '36px'
        ringRef.current.style.height = interactive ? '52px' : '36px'
        ringRef.current.style.borderColor = interactive
          ? 'rgba(255,107,157,0.6)'
          : 'rgba(0,255,200,0.4)'
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.style.cursor = ''
    }
  }, [])

  if (!enabled) return null

  return (
    <>
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
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200"
        style={{ borderColor: 'rgba(0,255,200,0.4)' }}
      />
    </>
  )
}
