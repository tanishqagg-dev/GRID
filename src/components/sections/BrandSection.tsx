'use client'

import { motion } from 'framer-motion'
import { RocketLaunch, CurrencyCircleDollar, UsersThree, GlobeHemisphereWest, Monitor, UserFocus } from '@phosphor-icons/react'

export function BrandSection() {
  const trustLogos = ['Accenture', 'Ogilvy', 'Dentsu', 'Havas', 'AKQA', 'Wieden+Kennedy', 'Skydance', 'Partizan']

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />

      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <div className="mb-14 overflow-hidden rounded-full border border-black/10 bg-white/65 py-3">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-max gap-8 px-8"
          >
            {[...trustLogos, ...trustLogos].map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        <div id="aurora" className="mb-28 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="tiny-caps mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-black/65">
              <RocketLaunch size={16} className="text-secondary" />
              Initiative 01
            </div>
            <h2 className="headline-lg text-balance font-semibold">
              Aurora.
              <span className="block text-secondary">A high-intensity global build sprint.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              A focused 48-hour format where student teams from multiple countries ship working prototypes, receive real-time operator feedback, and pitch to mentors.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <StatItem icon={<CurrencyCircleDollar size={24} />} value="$10,000" label="Prize Pool" color="text-secondary" />
              <StatItem icon={<GlobeHemisphereWest size={24} />} value="50+" label="Countries" color="text-secondary" />
              <StatItem icon={<UsersThree size={24} />} value="5,000+" label="Developers" color="text-secondary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card relative aspect-square overflow-hidden rounded-[34px] bg-secondary text-white"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary/35 blur-3xl" />
            <RocketLaunch size={170} weight="duotone" className="relative z-10 mx-auto mt-24" />
            <p className="absolute bottom-7 left-7 tiny-caps text-white/80">Global Sprint Window: 48 Hours</p>
          </motion.div>
        </div>

        <div id="n3c" className="grid items-center gap-12 lg:grid-cols-[0.95fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card order-2 aspect-square overflow-hidden rounded-[34px] bg-neutral-dark text-white lg:order-1"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-secondary/25 blur-3xl" />
            <Monitor size={170} weight="duotone" className="relative z-10 mx-auto mt-24" />
            <p className="absolute bottom-7 left-7 tiny-caps text-white/75">Long-Form Incubation Layer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="tiny-caps mb-8 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-black/65">
              <Monitor size={16} className="text-primary" />
              Initiative 02
            </div>
            <h2 className="headline-lg text-balance font-semibold">
              N3C.
              <span className="block text-primary">The system that keeps momentum alive.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              N3C turns sprint outcomes into sustained projects through local ambassadors, recurring office hours, and shared infrastructure for execution.
            </p>

            <div className="mt-10 space-y-4">
              <FeatureItem icon={<GlobeHemisphereWest size={20} />} title="Localized Leadership" description="Empowering student ambassadors to lead regional N3C chapters." />
              <FeatureItem icon={<UserFocus size={20} />} title="Mentorship Office Hours" description="Direct access to industry-standard feedback in real-time." />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ icon, value, label, color }: { icon: React.ReactNode, value: string, label: string, color: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
      <div className={color}>{icon}</div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">{label}</div>
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white/70 p-5">
      <div className="rounded-xl bg-black/5 p-3">{icon}</div>
      <div>
        <h4 className="font-semibold tracking-tight text-neutral-dark">{title}</h4>
        <p className="mt-1 text-sm text-black/60">{description}</p>
      </div>
    </div>
  )
}
