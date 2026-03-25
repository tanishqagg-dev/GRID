'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function IntroZoom({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete()
      }
    })

    tl.set(containerRef.current, { backgroundColor: '#141414', opacity: 1 })
    tl.set(gridRef.current, { scale: 0.7, opacity: 0.02, rotation: 0 })

    tl.to(gridRef.current, {
      opacity: 0.14,
      scale: 1.2,
      rotation: 1,
      duration: 0.9,
      ease: 'power2.out'
    })

    tl.to(gridRef.current, {
      scale: 8,
      opacity: 0,
      duration: 0.85,
      ease: 'power4.in'
    }, '-=0.1')

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.36,
      ease: 'power1.out'
    }, '-=0.08')

  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div 
        ref={gridRef}
        className="absolute inset-[-100%] grid-pattern opacity-0"
        style={{ backgroundSize: '40px 40px' }}
      />
    </div>
  )
}
