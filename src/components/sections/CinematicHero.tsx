'use client'

import { motion } from 'framer-motion'
import { ParticleTextEffect } from '../ui/particle-text-effect'

export function CinematicHero() {
  const words = ["SOME STUDENTS", "GET EVERYTHING", "MOST GET NOTHING", "GRID COLLECTIVE"]

  return (
    <section className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full z-10"
      >
        <ParticleTextEffect words={words} />
      </motion.div>
    </section>
  )
}
