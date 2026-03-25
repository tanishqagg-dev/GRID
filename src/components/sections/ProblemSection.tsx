'use client'

import { motion } from 'framer-motion'
import { Warning, GlobeSimple, Handshake } from '@phosphor-icons/react'

export function ProblemSection() {
  return (
    <section id="impact" className="relative overflow-hidden bg-neutral-dark py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="tiny-caps inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/90">
            <Warning size={14} className="text-tertiary" />
            Why This Matters
          </span>
          <h2 className="headline-lg mt-8 text-balance font-semibold">
            Great student talent is still trapped by geography and access.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
            The opportunity gap is no longer about ideas, it is about proximity to mentors, peers, and execution systems. GRID closes that gap with network density.
          </p>
        </motion.div>

        <div className="grid gap-5">
          <ProblemItem
            icon={<GlobeSimple size={24} />}
            title="Geographic Fragmentation"
            description="Top builders in emerging regions rarely share the same room, mentors, or launch pathways as global peers."
          />
          <ProblemItem
            icon={<Handshake size={24} />}
            title="Siloed Collaboration"
            description="Strong student projects die in isolated school circles before they can attract contributors and users."
          />
          <ProblemItem
            icon={<Warning size={24} />}
            title="Mentorship Asymmetry"
            description="Guidance quality varies dramatically by region, making outcomes dependent on location instead of potential."
          />
        </div>
      </div>
    </section>
  )
}

function ProblemItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition-colors duration-300 hover:bg-white/15"
    >
      <div className="mb-5 inline-flex rounded-xl bg-white/12 p-3 text-tertiary">{icon}</div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
    </motion.div>
  )
}
