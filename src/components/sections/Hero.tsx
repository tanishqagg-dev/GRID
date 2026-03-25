'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkle, GlobeHemisphereWest, UsersThree } from '@phosphor-icons/react'
import Link from 'next/link'
import { AnnotatedText } from '../ui/AnnotatedText'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-36 md:px-10 md:pt-40 bg-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.05]" />

      <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[1.25fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="font-mono mb-8 text-neutral-dark/70 text-xs uppercase tracking-[0.2em] font-bold">Visual Research Engine</p>
          <h1 className="relative z-20 text-balance font-black text-neutral-dark tracking-[-0.03em] leading-[1] text-[clamp(2.5rem,6.5vw,5.5rem)]">
            The Magic Board <br />
            <span className="text-secondary underline decoration-primary decoration-8 underline-offset-12">for Creators.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-dark font-medium">
            Flim is a powerful visual search engine and moodboard tool that helps you find the perfect inspiration in seconds.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#impact" className="btn-primary">Create a magic board</a>
            <Link href="#join" className="btn-secondary">
              Sign up now
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative"
        >
          <div className="surface-card relative min-h-[520px] overflow-hidden p-6 md:p-8 border-neutral-dark/15 border-2 shadow-2xl">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative grid gap-4">
              <MetricCard icon={<Sparkle size={18} />} title="Visual Search" value="AI-Powered" />
              <MetricCard icon={<GlobeHemisphereWest size={18} />} title="Inspiration" value="Movies & Ads" />
              <MetricCard icon={<UsersThree size={18} />} title="Workflow" value="Moodboards" />
            </div>

            <div className="mt-6 rounded-[12px] bg-neutral-dark p-6 text-white">
              <p className="font-mono text-white/80 text-[10px] uppercase tracking-widest font-black">Live Updates</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">Access 800k+ high-quality stills for your next project.</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-dark/30"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-dark">Scroll</span>
        <ArrowDown size={14} weight="bold" />
      </motion.div>
    </section>
  )
}

function MetricCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/85 p-4 backdrop-blur-md">
      <div className="mb-4 inline-flex rounded-full bg-neutral-dark p-2 text-white shadow-lg">{icon}</div>
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-black/60">{title}</p>
      <p className="mt-2 text-xl font-black tracking-tight text-neutral-dark">{value}</p>
    </div>
  )
}
