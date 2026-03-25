'use client'

import { motion } from 'framer-motion'
import { LinkedinLogo, TwitterLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#f0f0eb] py-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-3xl font-semibold tracking-tight">
              GRID <span className="text-secondary">FOUNDATION</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-black/65 md:text-lg">
              Empowering the next generation of global innovators to scale beyond their borders.
            </p>

            <div className="mt-8 flex gap-3">
              <SocialLink icon={<LinkedinLogo size={20} />} href="#" />
              <SocialLink icon={<TwitterLogo size={20} />} href="#" />
              <SocialLink icon={<GithubLogo size={20} />} href="#" />
              <SocialLink icon={<InstagramLogo size={20} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="tiny-caps mb-5 text-black/50">Foundation</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#aurora">Aurora</FooterLink></li>
              <li><FooterLink href="#n3c">N3C Incubator</FooterLink></li>
              <li><FooterLink href="/projects">Global Projects</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="tiny-caps mb-5 text-black/50">Support</h4>
            <ul className="space-y-3">
              <li><FooterLink href="/mentorship">Mentorship</FooterLink></li>
              <li><FooterLink href="/funding">Funding</FooterLink></li>
              <li><FooterLink href="/legal">Legal & Privacy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 text-sm text-black/45 md:flex-row md:items-center">
          <p>© 2026 GRID Foundation. All rights reserved.</p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-medium">
            Founded by Tanishq A. and Moksh S.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/75 text-black/70 transition-colors duration-300 hover:bg-neutral-dark hover:text-white"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-black/65 transition-colors hover:text-black">
      {children}
    </Link>
  )
}
