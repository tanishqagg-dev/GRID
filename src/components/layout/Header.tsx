'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 z-[100] w-full pt-10 px-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Adaptive Chameleon Logo */}
        <Link href="/" className="group block py-2 transition-transform hover:scale-105 active:scale-95">
           <Image 
              src="/logo.svg" 
              alt="GRID" 
              width={80} 
              height={32} 
              className="h-8 w-auto" 
           />
        </Link>

        {/* Central Command Island */}
        <div className="hidden md:flex items-center gap-3 rounded-full border border-neutral-dark/[0.12] bg-white/70 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
          <nav className="flex items-center">
            {[
              { label: 'Collective', href: '#impact' },
              { label: 'Missions', href: '#projects' },
              { label: 'Impact', href: '#numbers' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative rounded-full px-6 py-2.5 font-sans text-[12px] font-black uppercase tracking-[0.15em] text-neutral-dark/60 transition-all hover:bg-neutral-dark/5 hover:text-neutral-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="h-8 w-[1px] bg-neutral-dark/10 mx-2" />

          <Link
            href="#join"
            className="btn-primary !px-8 !py-3 !text-[12px] !shadow-none"
          >
            Apply
          </Link>
        </div>

        {/* Action / Secondary Nav */}
        <div className="flex items-center gap-6">
             <button className="hidden lg:block font-sans text-[12px] font-black uppercase tracking-[0.2em] text-neutral-dark/80 hover:text-neutral-dark transition-colors">
                 Member Area
             </button>
             <button className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-dark shadow-lg md:hidden">
                 <div className="flex flex-col gap-1">
                     <div className="h-0.5 w-4 bg-white" />
                     <div className="h-0.5 w-4 bg-white" />
                 </div>
             </button>
        </div>
      </div>
    </motion.header>
  )
}
