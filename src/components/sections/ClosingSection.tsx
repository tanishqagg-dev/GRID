'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkle } from '@phosphor-icons/react'

export function ClosingSection() {
  const [isExploded, setIsExploded] = useState(false)

  const handleJoinClick = () => {
    setIsExploded(true)
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => setIsExploded(false), 1000)
    }, 2000)
  }

  return (
    <section className="relative h-screen bg-white py-32 overflow-hidden flex flex-col items-center justify-center p-10">
      
      {/* Background Dots Grid */}
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none" />

      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         className="relative z-10 flex flex-col items-center text-center gap-12"
      >
          <div className="flex flex-col items-center gap-6">
            <h2 className="cinematic-headline text-neutral-dark !text-[clamp(3.5rem,15vw,16rem)] leading-none -mb-4 lowercase">Join us.</h2>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-dark/40">From One to a Million</p>
          </div>

          <div className="relative mt-8">
            <button
              onClick={handleJoinClick}
              className="btn-primary !px-16 !py-6 !text-[11px] shadow-2xl"
            >
              Enter the Collective
            </button>
          </div>
        </motion.div>

      {/* Explosion Overlay */}
      <AnimatePresence>
        {isExploded && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 50, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="fixed inset-0 z-50 rounded-full bg-accent pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-neutral-dark/10 uppercase font-mono tracking-widest text-[10px]">
         Built by Students for the World
      </div>
    </section>
  )
}
