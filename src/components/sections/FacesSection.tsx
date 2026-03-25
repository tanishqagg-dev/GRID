'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const studentQuotes = [
  "GRID gave me my first team.",
  "I learned more in 7 days than 4 years.",
  "From Delhi to Dubai, we build together.",
  "The future is distributed.",
]

export function FacesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const blur = useTransform(scrollYProgress, [0, 0.4], [12, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0])
  const gridScale = useTransform(scrollYProgress, [0.6, 0.95], [1, 0.65])
  const rotateX = useTransform(scrollYProgress, [0.6, 1], [0, 45])
  const yTranslate = useTransform(scrollYProgress, [0.6, 1], ["0%", "-10%"])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white py-32 overflow-hidden perspective-[1200px]">
      <div className="sticky top-0 left-0 h-screen w-full flex flex-col items-center justify-center p-10">
        
        <motion.div style={{ opacity }} className="mb-20 text-center max-w-2xl px-5">
           <h3 className="headline-md font-extrabold uppercase tracking-tight text-neutral-dark mb-6">Faces of GRID</h3>
           <p className="font-sans text-[10px] uppercase font-bold tracking-[0.1em] text-neutral-dark/40">From One to a Million</p>
        </motion.div>

        <motion.div 
            style={{ 
              filter: `blur(${blur}px)`,
              scale: gridScale,
              rotateX,
              y: yTranslate,
              transformStyle: 'preserve-3d'
            }}
            className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-2 w-full max-w-[1200px]"
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-neutral-dark/10 overflow-hidden rounded-md border border-neutral-dark/5 relative"
            >
              <Image 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 123}`}
                alt="student"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              />
              
              {/* Highlight randomly on scroll */}
              <motion.div 
                  className="absolute inset-0 bg-accent/20 border-2 border-accent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 0] }}
                  viewport={{ root: containerRef }}
                  transition={{ delay: Math.random() * 2, duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Quotes */}
        <div className="absolute inset-0 pointer-events-none z-30">
           {studentQuotes.map((quote, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
               whileInView={{ opacity: [0, 1, 0], x: i % 2 === 0 ? 0 : 0 }}
               viewport={{ margin: "0px 0px -20% 0px" }}
               transition={{ duration: 2, delay: i * 0.5 }}
               className="absolute text-5xl font-light italic font-serif tracking-tighter text-neutral-dark/10 px-10"
               style={{ 
                  top: `${20 + i * 20}%`, 
                  left: i % 2 === 0 ? '5%' : 'auto',
                  right: i % 2 === 0 ? 'auto' : '5%'
               }}
             >
               {quote}
             </motion.div>
           ))}
        </div>

        {/* Final Logo formation metaphor */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]) }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none p-20"
        >
          <Image 
            src="/logo.svg" 
            alt="GRID" 
            width={800} 
            height={400} 
            className="w-full max-w-4xl h-auto opacity-10 mix-blend-multiply" 
          />
        </motion.div>
      </div>
    </section>
  )
}
