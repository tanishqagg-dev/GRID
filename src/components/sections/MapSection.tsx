'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'

const pins = [
  { id: 'delhi', name: 'IIT Delhi', x: '45%', y: '15%', delay: 0 },
  { id: 'bombay', name: 'IIT Bombay', x: '35%', y: '35%', delay: 0.5 },
  { id: 'abu-dhabi', name: 'IIT Abu Dhabi', x: '55%', y: '40%', delay: 1 },
  { id: 'london', name: 'London', x: '48%', y: '50%', delay: 1.5 },
  { id: 'ny', name: 'New York', x: '25%', y: '45%', delay: 2 },
  { id: 'singapore', name: 'Singapore', x: '75%', y: '65%', delay: 2.5 },
]

export function MapSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1.2, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-[#0A0A0A] py-20 overflow-hidden">
      <div className="sticky top-0 left-0 h-screen w-full flex flex-col items-center justify-center">
        <motion.div style={{ scale, opacity }} className="relative w-full max-w-5xl aspect-[16/9] px-10">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            {/* World Map SVG placeholder - just a stylized oval */}
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full opacity-20 fill-white"
            >
               <path d="M150,250 Q250,50 500,50 Q750,50 850,250 Q750,450 500,450 Q250,450 150,250" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </div>

          {/* Glowing Pins */}
          {pins.map((pin) => (
            <motion.div
              key={pin.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: pin.delay, duration: 0.8, ease: "backOut" }}
              style={{ left: pin.x, top: pin.y }}
              className="absolute z-20 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-accent/30 w-full h-full" />
                <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_#1A6BFF]" />
              </div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-white/50 uppercase tracking-widest hidden group-hover:block"
              >
                {pin.name}
              </motion.span>
            </motion.div>
          ))}
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
             <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-brutalist text-xl md:text-3xl font-extrabold uppercase tracking-tight text-white/90"
             >
               Started in a classroom. <br /> Now on every continent.
             </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
