'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  targetX: number
  targetY: number
  size: number
  alpha: number
}

export function OpeningSequence({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<'dot' | 'text' | 'explosion' | 'grid' | 'complete'>('dot')
  const [typedText, setTypedText] = useState('')
  const fullText = "What if one student could change everything?"
  
  const particles = useRef<Particle[]>([])
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    // Phase 1: Dot pulse
    const timer = setTimeout(() => {
      setPhase('text')
    }, 1200) // Sped up
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (phase === 'text') {
      let i = 0
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i))
        i++
        if (i > fullText.length) {
          clearInterval(interval)
          setTimeout(() => setPhase('explosion'), 1000) // Sped up
        }
      }, 50) // Sped up
      return () => clearInterval(interval)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'explosion') {
      initParticles()
      animateParticlesToExplosion()
      setTimeout(() => setPhase('grid'), 1200) // Sped up
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'grid') {
      animateParticlesToGrid()
      setTimeout(() => {
        setPhase('complete')
        setTimeout(onComplete, 400)
      }, 2500)
    }
  }, [phase])

  const initParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    // Performance optimized count - highly visible but fluid
    const count = 3500 
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
        newParticles.push({
            x: centerX,
            y: centerY,
            originX: centerX,
            originY: centerY,
            targetX: centerX,
            targetY: centerY,
            size: Math.random() * 3.5 + 1.5, // Larger, more prominent
            alpha: Math.random() * 0.4 + 0.6 
        })
    }
    particles.current = newParticles
  }

  const animateParticlesToExplosion = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    particles.current.forEach(p => {
        gsap.to(p, {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            duration: 1,
            ease: "expo.out",
            delay: Math.random() * 0.1
        })
    })
  }

  const animateParticlesToGrid = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const tCanvas = document.createElement('canvas')
    const tCtx = tCanvas.getContext('2d')
    if (!tCtx) return
    tCanvas.width = canvas.width
    tCanvas.height = canvas.height

    const img = new (window as any).Image()
    img.src = '/logo.svg' // Assuming logo is black
    img.onload = () => {
        const aspect = 768 / 392
        const padding = 150 
        
        let w = Math.min(canvas.width - padding * 2, 1000)
        let h = w / aspect
        
        if (h > canvas.height - padding * 2) {
          h = canvas.height - padding * 2
          w = h * aspect
        }

        const offsetX = (canvas.width - w) / 2
        const offsetY = (canvas.height - h) / 2

        tCtx.clearRect(0, 0, tCanvas.width, tCanvas.height)
        tCtx.drawImage(img, offsetX, offsetY, w, h)

        const imageData = tCtx.getImageData(0, 0, canvas.width, canvas.height).data
        const targets: {x: number, y: number}[] = []
        const step = 3 // Faster sampling, less lag
        
        for (let y = 0; y < canvas.height; y += step) {
            for (let x = 0; x < canvas.width; x += step) {
                const index = (y * canvas.width + x) * 4
                if (imageData[index + 3] > 100) { 
                    targets.push({ x, y })
                }
            }
        }

        if (targets.length === 0) return

        const particleCount = particles.current.length;
        particles.current.forEach((p, i) => {
            // Predictable distribution for cleaner formation
            const target = targets[Math.floor((i / particleCount) * targets.length)]
            
            if (target) {
                gsap.to(p, {
                    x: target.x,
                    y: target.y,
                    duration: 1.8,
                    alpha: 1,
                    ease: "power2.inOut",
                    delay: Math.random() * 0.4
                })
            } else {
                gsap.to(p, {
                    alpha: 0,
                    duration: 0.5
                })
            }
        })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.current.forEach(p => {
        if (p.alpha <= 0) return
        ctx.fillStyle = `rgba(0, 0, 0, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
    })
    
    animationFrame.current = requestAnimationFrame(render)
}

const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

window.addEventListener('resize', resize)
resize()
render()

return () => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(animationFrame.current)
}
}, [])

return (
<motion.div 
  initial={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: '-100%' }} // Dynamic Slide Up Reveal
  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} // Quintic Ease for premium feel
  className="fixed inset-0 z-[100] flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
>
  <canvas ref={canvasRef} className="absolute inset-0" />
  
  <AnimatePresence>
    {phase === 'dot' && (
      <motion.div
        key="dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-2 w-2 rounded-full bg-black shadow-[0_0_20px_rgba(0,0,0,0.3)]"
      />
    )}
    
    {phase === 'text' && (
      <motion.div
        key="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="z-10 text-center font-serif italic text-[clamp(1.5rem,3.5vw,3rem)] font-light tracking-[0.1em] text-neutral-dark leading-tight px-10"
      >
        {typedText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="ml-2 inline-block h-[1em] w-[1px] bg-neutral-dark/30 align-middle"
        />
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
)
}
