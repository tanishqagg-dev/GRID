'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

const dataPoints = [
  { value: '1,000,000', label: 'Expected registrations. NCCC.', color: '#FECC33' },
  { value: '50+', label: 'Countries. Aurora Hackathon.', color: '#0044FF' },
  { value: '₹20,00,000', label: 'Prize pool. Built by students.', color: '#FFFFFF' },
  { value: '3', label: 'IIT campuses. Delhi, Bombay, Abu Dhabi.', color: '#FECC33' },
  { value: '1', label: 'Nonprofit. Section 8. Delhi.', color: '#0044FF' },
]

export function NumbersSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white py-32 overflow-hidden">
      <div className="sticky top-0 left-0 h-screen w-full flex flex-col items-center justify-center p-10">
        
        {dataPoints.map((dp, i) => (
           <SlamNumber 
             key={dp.value} 
             {...dp} 
             index={i} 
             total={dataPoints.length}
             progress={scrollYProgress}
           />
        ))}

        {/* Final Reversal Beat */}
        <motion.div
           style={{
              opacity: useTransform(scrollYProgress, [0.92, 0.98], [0, 1]),
              scale: useTransform(scrollYProgress, [0.92, 0.98], [0.8, 1])
           }}
           className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 z-50 bg-white"
        >
           <h2 className="headline-lg mb-8 text-neutral-dark">It started with <br/> one idea.</h2>
           <p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-dark/40">The grid is just beginning.</p>
        </motion.div>
      </div>
    </section>
  )
}

function SlamNumber({ value, label, index, total, progress, color }: any) {
    const rangePerPoint = 0.85 / total
    const startRange = index * rangePerPoint
    const endRange = (index + 1) * rangePerPoint

    const y = useTransform(progress, [startRange, startRange + 0.05], [-500, 0])
    const opacity = useTransform(progress, [startRange, startRange + 0.02, endRange - 0.02, endRange], [0, 1, 1, 0])
    const scale = useTransform(progress, [startRange, startRange + 0.05], [2, 1])
    const rotate = useTransform(progress, [startRange, startRange + 0.05], [10, 0])

    // Physics spring effect on impact
    const smoothY = useSpring(y, { stiffness: 100, damping: 15, mass: 1 })

    return (
        <motion.div 
            style={{ y: smoothY, opacity, scale, rotate, zIndex: index }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-white"
        >
          <div className="flex flex-col items-center gap-10">
             <h2 className="text-[12vw] font-black tracking-tighter leading-none" style={{ color: color === '#FFFFFF' ? '#000000' : color }}>
                {value}
             </h2>
             <div className="h-px w-20 bg-neutral-dark/20" />
             <p className="max-w-md text-2xl font-bold uppercase tracking-tight text-neutral-dark/60">
                {label}
             </p>
          </div>
        </motion.div>
    )
}
