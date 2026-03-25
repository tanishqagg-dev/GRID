'use client'

import React, { useId, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface AnnotatedTextProps {
  children: React.ReactNode
  type?: 'underline' | 'squiggle' | 'circle' | 'box' | 'highlight'
  color?: string
  delay?: number
  className?: string
  thickness?: number
  scrub?: boolean
}

export function AnnotatedText({ 
  children, 
  type = 'underline', 
  color = 'currentColor', 
  delay = 0,
  className = '',
  thickness = 2.5,
  scrub = false
}: AnnotatedTextProps) {
  
  const filterId = useId()
  const ref = useRef<HTMLSpanElement>(null)
  
  // Create scroll-linked animation if scrub is enabled
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.7"]
  })
  
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Hand-drawn variation paths
  const annotationPaths = {
    underline: "M5,25 Q50,22 100,24 Q150,26 195,23",
    squiggle: "M5,20 C20,10 40,30 60,20 C80,10 100,30 120,20 C140,10 160,30 180,20 C190,15 200,25 195,22",
    circle: "M190,15c0,8-35,18-90,18S5,23,5,15,40-2,95-2s95,9,95,17",
    box: "M5,5 L195,3 L192,27 L8,24 Z",
    highlight: "M5,15 L195,15"
  }

  const path = annotationPaths[type as keyof typeof annotationPaths] || annotationPaths.underline

  return (
    <span ref={ref} className={`relative inline-block z-10 ${className}`}>
      {children}
      <svg
        className="absolute left-[-2%] top-[-10%] w-[104%] h-[120%] pointer-events-none overflow-visible"
        viewBox="0 0 200 30"
        preserveAspectRatio="none"
      >
        <motion.path
          d={path}
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={!scrub ? { pathLength: 0, opacity: 0 } : { pathLength: 0, opacity: 1 }}
          style={{
            pathLength: scrub ? springProgress : undefined,
            filter: `url(#${filterId})`,
          }}
          {...(!scrub ? {
            whileInView: { pathLength: 1, opacity: 1 },
            viewport: { once: true, amount: 0.5 },
            transition: {
              duration: 1.2,
              delay: delay,
              ease: [0.65, 0, 0.35, 1] // Custom pen-like ease
            }
          } : {})}
        />
        <defs>
          <filter id={filterId}>
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </span>
  )
}
