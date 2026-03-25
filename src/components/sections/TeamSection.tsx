'use client'

import { motion } from 'framer-motion'
import { LinkedinLogo, TwitterLogo, UsersFour } from '@phosphor-icons/react'

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-neutral-dark py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-lg font-semibold"
          >
            Built by <span className="text-primary">young operators.</span>
          </motion.h2>
          <p className="mx-auto mt-7 max-w-2xl text-base text-white/65 md:text-lg">
            Founded by innovators who believe that geography should never scale down ambition.
          </p>
        </div>

        <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <FounderCard
            name="Tanishq A."
            role="Co-Founder & CEO"
            color="border-primary"
          />
          <FounderCard
            name="Moksh S."
            role="Co-Founder & CTO"
            color="border-secondary"
          />
        </div>

        <div id="join" className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/10 py-16">
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <UsersFour size={56} weight="duotone" className="mb-7 text-primary" />
            <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">Join a distributed team that actually ships.</h3>
            <p className="mx-auto mb-10 mt-5 max-w-2xl text-white/70">
              Over 100+ ambassadors, mentors, and developers spanning 50 countries, working day and night to bridge the gap.
            </p>

            <a href="#" className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-dark">Apply to GRID</a>

            <div className="mt-10 flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-neutral-dark bg-white/10 text-[10px] font-semibold">
                  {i === 6 ? '+94' : <div className="h-full w-full rounded-full bg-neutral-700" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderCard({ name, role, color }: { name: string, role: string, color: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[30px] border ${color}/35 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500`}
    >
      <div className="relative z-10">
        <div className="mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-white/10">
          <div className="h-full w-full bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        <h3 className="text-3xl font-semibold tracking-tight">{name}</h3>
        <p className="mb-7 mt-2 text-xs font-semibold uppercase tracking-[0.17em] text-white/55">{role}</p>
        <div className="flex gap-3">
          <a href="#" className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:text-white"><LinkedinLogo size={18} weight="fill" /></a>
          <a href="#" className="rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:text-white"><TwitterLogo size={18} weight="fill" /></a>
        </div>
      </div>
      <div className={`absolute -bottom-8 -right-8 h-40 w-40 rounded-full ${color.replace('border-', 'bg-')}/20 blur-3xl transition-transform duration-1000 group-hover:scale-150`} />
    </motion.div>
  )
}
