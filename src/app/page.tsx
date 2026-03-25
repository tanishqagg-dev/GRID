'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { OpeningSequence } from '@/components/animation/OpeningSequence'
import { Header } from '@/components/layout/Header'
import { CinematicHero } from '@/components/sections/CinematicHero'
import { ScrollStory } from '@/components/sections/ScrollStory'
import { ProjectChamber } from '@/components/sections/ProjectChamber'
import { FacesSection } from '@/components/sections/FacesSection'
import { NumbersSection } from '@/components/sections/NumbersSection'
import { ClosingSection } from '@/components/sections/ClosingSection'
export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    if (!loading) {
      setShowHeader(true)
    }
  }, [loading])

  return (
    <main className="min-h-screen bg-white">
      
      <AnimatePresence>
        {loading ? (
          <OpeningSequence key="opening" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Sophisticated entrance
            className="relative z-10"
          >
            {showHeader && <Header />}
            
            <CinematicHero />
            <ScrollStory />
            <ProjectChamber />
            <FacesSection />
            <NumbersSection />
            <ClosingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
