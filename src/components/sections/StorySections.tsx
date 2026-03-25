'use client'

import { useMemo, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import * as Accordion from '@radix-ui/react-accordion'
import * as Tabs from '@radix-ui/react-tabs'
import * as Progress from '@radix-ui/react-progress'
import {
  ArrowRight,
  CaretDown,
  CheckCircle,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  MapPin,
  RocketLaunch,
  Sparkle,
  Student,
  TrendUp,
  UsersThree,
} from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const storySections = [
  { id: 'start', label: 'Start' },
  { id: 'origin', label: 'Origin' },
  { id: 'problem', label: 'Problem' },
  { id: 'app', label: 'Product' },
  { id: 'journey', label: 'Journey' },
  { id: 'aurora', label: 'Aurora' },
  { id: 'n3c', label: 'N3C' },
  { id: 'impact', label: 'Impact' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'join', label: 'Join' },
]

export function StorySections() {
  const rootRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const launchProgress = 74

  const storyIndex = useMemo(() => storySections, [])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions as { reduceMotion: boolean }

          if (progressRef.current) {
            gsap.set(progressRef.current, { transformOrigin: 'left center', scaleX: 0 })
            gsap.to(progressRef.current, {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: rootRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
              },
            })
          }

          const sections = gsap.utils.toArray<HTMLElement>('[data-story-section]')
          sections.forEach((section, index) => {
            const shell = section.querySelector<HTMLElement>('[data-section-shell]') || section
            const revealItems = section.querySelectorAll('[data-reveal]')

            if (!reduceMotion) {
              gsap.set(shell, { transformPerspective: 1200, transformOrigin: '50% 0%', willChange: 'transform, opacity' })

              gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                  trigger: section,
                  start: 'top 88%',
                  end: 'top 18%',
                  scrub: 0.8,
                  refreshPriority: index + 1,
                },
              })
                .fromTo(shell, { yPercent: 12, scale: 0.94, rotateX: 6, autoAlpha: 0.55 }, { yPercent: 0, scale: 1, rotateX: 0, autoAlpha: 1 }, 0)

              gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                  trigger: section,
                  start: 'bottom 72%',
                  end: 'bottom 8%',
                  scrub: 0.8,
                  refreshPriority: index + 1,
                },
              })
                .to(shell, { yPercent: -8, scale: 0.96, autoAlpha: 0.72 }, 0)

              gsap.fromTo(
                revealItems,
                {
                  y: 44,
                  x: (i) => (i % 2 === 0 ? -22 : 22),
                  rotateZ: (i) => (i % 2 === 0 ? -1.2 : 1.2),
                  autoAlpha: 0,
                  filter: 'blur(8px)',
                },
                {
                  y: 0,
                  x: 0,
                  rotateZ: 0,
                  autoAlpha: 1,
                  filter: 'blur(0px)',
                  duration: 1,
                  ease: 'power3.out',
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    end: 'top 28%',
                    scrub: 0.55,
                    refreshPriority: index + 1,
                  },
                },
              )
            } else {
              gsap.set(revealItems, { autoAlpha: 1 })
            }

            const transitionLine = section.querySelector<HTMLElement>('[data-transition-line]')
            if (!reduceMotion && transitionLine) {
              gsap.set(transitionLine, { transformOrigin: 'left center', scaleX: 0 })
              gsap.to(transitionLine, {
                scaleX: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true,
                  refreshPriority: index + 1,
                },
              })
            }

            const panels = section.querySelectorAll('[data-panel]')
            if (!reduceMotion && panels.length > 0) {
              gsap.fromTo(
                panels,
                {
                  y: 36,
                  rotateY: (i) => (i % 2 === 0 ? -6 : 6),
                  rotateX: 4,
                  autoAlpha: 0.2,
                },
                {
                  y: 0,
                  rotateY: 0,
                  rotateX: 0,
                  autoAlpha: 1,
                  ease: 'power2.out',
                  stagger: 0.08,
                  scrollTrigger: {
                    trigger: section,
                    start: 'top 74%',
                    end: 'top 30%',
                    scrub: 0.7,
                    refreshPriority: index + 1,
                  },
                },
              )
            }

            const parallax = section.querySelector('[data-parallax]')
            if (!reduceMotion && parallax) {
              gsap.fromTo(
                parallax,
                { yPercent: -7 },
                {
                  yPercent: 7,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    refreshPriority: index + 1,
                  },
                },
              )
            }
          })

          const strip = document.querySelector<HTMLElement>('[data-journey-strip]')
          if (strip && !reduceMotion) {
            const stripTl = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: '#journey',
                start: 'top top',
                end: '+=1300',
                pin: true,
                scrub: 1,
              },
            })

            stripTl
              .fromTo(strip, { xPercent: 0 }, { xPercent: -42 }, 0)
              .fromTo('#journey h2', { y: 0, autoAlpha: 1 }, { y: -35, autoAlpha: 0.35 }, 0)
          }

          if (statsRef.current && !reduceMotion) {
            const nodes = statsRef.current.querySelectorAll<HTMLElement>('[data-count]')
            nodes.forEach((node) => {
              const target = Number(node.dataset.count || '0')
              const suffix = node.dataset.suffix || ''
              const value = { n: 0 }
              gsap.to(value, {
                n: target,
                duration: 2,
                ease: 'power2.out',
                snap: { n: 1 },
                onUpdate: () => {
                  node.textContent = `${value.n.toLocaleString()}${suffix}`
                },
                scrollTrigger: {
                  trigger: statsRef.current,
                  start: 'top 75%',
                  once: true,
                },
              })
            })
          }

          return undefined
        },
      )

      return () => {
        mm.revert()
      }
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="relative" id="start">
      <div className="pointer-events-none fixed left-0 right-0 top-[88px] z-40 hidden h-[2px] bg-black/10 md:block">
        <div ref={progressRef} className="h-full bg-secondary" />
      </div>

      <section data-story-section className="relative min-h-screen px-5 pb-20 pt-36 md:px-10 md:pt-42">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-neutral-dark/15 to-transparent md:left-10 md:right-10" />
        <div data-parallax className="pointer-events-none absolute inset-0 organic-gradient opacity-[0.4]" />
        <div data-section-shell className="mx-auto grid w-full max-w-[1320px] items-end gap-10 lg:grid-cols-[1.15fr_0.9fr]">
          <div>
            <p data-reveal className="font-sans text-[10px] uppercase tracking-[0.1em] text-neutral-dark opacity-50">Story 01 • Prologue</p>
            <h1 data-reveal className="font-serif italic text-balance font-medium text-neutral-dark tracking-tight leading-[0.85] mt-6 lowercase">
              FLIM is the AI-Powered Magic Board for Visual Research.
            </h1>
            <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-dark/70 font-light tracking-tight">
              The world's most powerful stills search engine. Designed for designers, art directors, and creative minds who need precise inspiration in seconds.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-4">
              <a href="#origin" className="btn-primary font-sans text-[10px] tracking-widest font-bold">Explore Search</a>
              <a href="#app" className="btn-secondary font-sans text-[10px] tracking-widest font-bold">View Magic Boards</a>
            </div>
          </div>

          <div data-reveal data-panel className="surface-card relative overflow-hidden rounded-[32px] p-8 border-neutral-dark/5">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative">
              <Image src="/logo.svg" alt="FLIM logo" width={48} height={48} className="h-12 w-12" />
              <h3 className="mt-6 text-3xl font-extrabold tracking-tighter">FLIM ENGINE</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-dark/65 font-medium">
                Built for the next generation of creative production. Scale your ideas from moodboards to final frames.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 text-xs font-mono">
                <StoryBadge label="AI Search" />
                <StoryBadge label="800k+ Stills" />
                <StoryBadge label="Magic Boards" />
                <StoryBadge label="Exports" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="origin" data-story-section className="relative min-h-[88vh] px-5 py-22 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-neutral-dark/10 md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-2">
          <article data-reveal data-panel className="surface-card rounded-[30px] p-8 md:p-10 border-neutral-dark/5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-dark/40">Story 02 • Search</p>
            <h2 className="text-4xl font-extrabold mt-6 tracking-tight leading-none">Find anything. Instantly.</h2>
            <p className="mt-7 text-lg leading-relaxed text-neutral-dark/70">
              Gone are the days of scrolling through generic stock photos. FLIM indexes the best of cinematic history to give you the exact mood you're looking for.
            </p>
          </article>

          <article data-reveal data-panel className="surface-card rounded-[30px] bg-neutral-dark p-8 text-white md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Core Philosophy</p>
            <blockquote className="mt-6 text-3xl font-extrabold tracking-tight leading-tight">
              Visual language is the most powerful form of human communication.
            </blockquote>
            <div className="mt-9 space-y-4 text-sm font-medium text-white/70">
              <p>Search by mood, color, and composition.</p>
              <p>Organize with infinite-canvas magic boards.</p>
              <p>Export high-res frames for your treatment.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="problem" data-story-section className="relative min-h-[88vh] bg-[#111417] px-5 py-24 text-white md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent md:left-10 md:right-10" />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />
        <div data-section-shell className="relative mx-auto w-full max-w-[1320px]">
          <p data-reveal className="tiny-caps text-white/60">Story 03 • Tension</p>
          <h2 data-reveal className="headline-lg mt-6 max-w-4xl">
            High potential gets trapped in low-access ecosystems.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <ProblemCard icon={<MapPin size={24} />} title="Local Silos" description="Most students only know builders in the same city or campus, limiting project scope and quality." />
            <ProblemCard icon={<Handshake size={24} />} title="Mentor Scarcity" description="Reliable operator feedback is concentrated in a few networks and rarely distributed." />
            <ProblemCard icon={<TrendUp size={24} />} title="Momentum Loss" description="Hackathon outcomes collapse post-event due to no continuous support structure." />
          </div>
        </div>
      </section>

      <section id="app" data-story-section className="relative min-h-screen px-5 py-24 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto w-full max-w-[1320px]">
          <p data-reveal className="tiny-caps text-black/55">Story 04 • Product</p>
          <h2 data-reveal className="headline-lg mt-6 max-w-5xl">The GRID app is the operating layer for discovery, building, shipping, and mentorship.</h2>

          <Tabs.Root defaultValue="discover" data-reveal data-panel className="mt-12">
            <Tabs.List className="surface-card grid grid-cols-3 rounded-2xl p-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <Tabs.Trigger value="discover" className="rounded-xl px-3 py-3 data-[state=active]:bg-neutral-dark data-[state=active]:text-white">Discover</Tabs.Trigger>
              <Tabs.Trigger value="build" className="rounded-xl px-3 py-3 data-[state=active]:bg-neutral-dark data-[state=active]:text-white">Build</Tabs.Trigger>
              <Tabs.Trigger value="ship" className="rounded-xl px-3 py-3 data-[state=active]:bg-neutral-dark data-[state=active]:text-white">Ship</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="discover" className="surface-card mt-5 rounded-[28px] p-8">
              <FeatureGrid
                title="Discover meaningful teammates and problems"
                items={[
                  'Profile graph based on skills and intent',
                  'Opportunity feed for global missions',
                  'Realtime region-aware builder map',
                ]}
              />
            </Tabs.Content>
            <Tabs.Content value="build" className="surface-card mt-5 rounded-[28px] p-8">
              <FeatureGrid
                title="Build in structured execution rooms"
                items={[
                  'Team war rooms with role assignment',
                  'Mentor office-hour slots and notes',
                  'Sprint templates for 48h and 2-week cycles',
                ]}
              />
            </Tabs.Content>
            <Tabs.Content value="ship" className="surface-card mt-5 rounded-[28px] p-8">
              <FeatureGrid
                title="Ship with visibility and accountability"
                items={[
                  'Demo day pipeline and jury routing',
                  'Post-sprint continuation checkpoints',
                  'Portfolio exports for each contributor',
                ]}
              />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </section>

      <section id="journey" data-story-section className="relative min-h-screen overflow-hidden bg-[#0f1114] px-5 py-24 text-white md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto w-full max-w-[1320px]">
          <p data-reveal className="tiny-caps text-white/55">Story 05 • Journey</p>
          <h2 data-reveal className="headline-lg mt-6 max-w-4xl">A builder journey designed as a continuous narrative, not a one-off event.</h2>
        </div>

        <div data-journey-strip className="mt-16 flex w-[180%] gap-5 px-5 md:px-10">
          {['Join', 'Match', 'Sprint', 'Mentor', 'Demo', 'Incubate', 'Launch'].map((step, idx) => (
            <div key={step} data-panel className="min-h-[280px] min-w-[280px] rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="tiny-caps text-white/55">Step {idx + 1}</p>
              <h3 className="mt-4 text-3xl font-semibold">{step}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {step === 'Join' && 'Create your builder identity with strengths, goals, and preferred challenge domains.'}
                {step === 'Match' && 'Get paired with high-complement teams across countries and time zones.'}
                {step === 'Sprint' && 'Enter focused cycles where every hour has a measurable objective.'}
                {step === 'Mentor' && 'Receive tactical reviews from operators, engineers, and designers.'}
                {step === 'Demo' && 'Present to evaluators with context, traction, and technical rigor.'}
                {step === 'Incubate' && 'Transition to longer support loops through N3C infrastructure.'}
                {step === 'Launch' && 'Publish, iterate, and recruit from the GRID ecosystem.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="aurora" data-story-section className="relative min-h-[92vh] px-5 py-24 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto grid w-full max-w-[1320px] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p data-reveal className="tiny-caps text-black/55">Story 06 • Aurora</p>
            <h2 data-reveal className="headline-lg mt-6">Aurora is the ignition sequence.</h2>
            <p data-reveal className="mt-7 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              One intense window. Global teams. Real pressure. Aurora aligns urgency with quality so student projects do not drift into half-finished ideas.
            </p>
            <div data-reveal className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3">
              <StoryStat value="48h" label="Sprint Window" />
              <StoryStat value="50+" label="Countries" />
              <StoryStat value="$10k" label="Prize Pool" />
            </div>
          </div>

          <div data-reveal data-panel className="surface-card rounded-[32px] bg-secondary p-8 text-white">
            <RocketLaunch size={48} weight="duotone" />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">Aurora Playbook</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5" /> Problem framing in first 90 minutes</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5" /> Mandatory mentor touchpoint every 8 hours</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5" /> Demo-ready scope by hour 30</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5" /> Story + product + evidence submission</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="n3c" data-story-section className="relative min-h-[92vh] bg-[#101214] px-5 py-24 text-white md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent md:left-10 md:right-10" />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />
        <div data-section-shell className="relative mx-auto grid w-full max-w-[1320px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal data-panel className="surface-card rounded-[32px] bg-white/10 p-8 text-white">
            <Sparkle size={40} weight="duotone" className="text-primary" />
            <h3 className="mt-5 text-3xl font-semibold">N3C keeps projects alive.</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/72">
              Most events end with excitement decay. N3C solves this by creating recurring systems: local cells, mentor clinics, and monthly deliverables.
            </p>
            <Progress.Root className="mt-8 h-3 w-full overflow-hidden rounded-full bg-white/20">
              <Progress.Indicator className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${launchProgress}%` }} />
            </Progress.Root>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/65">Average continuation rate after Aurora: {launchProgress}%</p>
          </div>

          <div>
            <p data-reveal className="tiny-caps text-white/55">Story 07 • Retention</p>
            <h2 data-reveal className="headline-lg mt-6">A long-term operating system for serious student teams.</h2>
            <div data-reveal className="mt-8 space-y-4">
              <LineItem icon={<GlobeHemisphereWest size={18} />} title="Regional Cells" copy="City-led pods with weekly reviews and local meetups." />
              <LineItem icon={<Student size={18} />} title="Mentor Clinics" copy="Structured office hours with role-based outcomes." />
              <LineItem icon={<Lightning size={18} />} title="Launch Checkpoints" copy="Monthly evidence-based milestones for momentum." />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" data-story-section ref={statsRef} className="relative min-h-[86vh] px-5 py-24 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto w-full max-w-[1320px]">
          <p data-reveal className="tiny-caps text-black/55">Story 08 • Proof</p>
          <h2 data-reveal className="headline-lg mt-6 max-w-4xl">Measured impact across people, projects, and participation.</h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CounterCard label="Student Builders" count={5800} suffix="+" />
            <CounterCard label="Countries Reached" count={52} suffix="" />
            <CounterCard label="Mentor Sessions" count={1200} suffix="+" />
            <CounterCard label="Projects Continued" count={310} suffix="+" />
          </div>
        </div>
      </section>

      <section id="ecosystem" data-story-section className="relative min-h-[90vh] bg-[#e9deca] px-5 py-24 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto w-full max-w-[1320px]">
          <p data-reveal className="tiny-caps text-black/55">Story 09 • Ecosystem</p>
          <h2 data-reveal className="headline-lg mt-6 max-w-4xl">What makes the GRID app feel alive every week.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Smart matching', 'Pairing based on complementary capability and timezone overlap.'],
              ['Mission briefs', 'Structured prompts from startup, civic, and climate partners.'],
              ['Mentor rooms', 'Rapid tactical feedback loops tied to deliverables.'],
              ['Progress visibility', 'Public build logs for accountability and discovery.'],
              ['Talent graph', 'Reputation and contribution history mapped over time.'],
              ['Opportunity rails', 'Fellowships, internships, and founder pathways in one feed.'],
            ].map(([title, copy]) => (
              <article key={title} data-reveal data-panel className="surface-card rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" data-story-section className="relative min-h-[90vh] px-5 py-24 md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent md:left-10 md:right-10" />
        <div data-section-shell className="mx-auto w-full max-w-[920px]">
          <p data-reveal className="tiny-caps text-black/55">Story 10 • Roadmap</p>
          <h2 data-reveal className="headline-lg mt-6">Next chapters for GRID and the app.</h2>

          <Accordion.Root data-reveal type="single" collapsible className="mt-10 space-y-3">
            <RoadmapItem value="item-1" title="Q2: Regional chapter kits" copy="Launch standardized chapter playbooks with onboarding docs, event templates, and local partner decks." />
            <RoadmapItem value="item-2" title="Q3: Mentor quality index" copy="Introduce mentor reliability scoring and session outcome tracking for better student matching." />
            <RoadmapItem value="item-3" title="Q4: Product showcase network" copy="Create a public launch surface where GRID projects can recruit teammates, users, and supporters." />
            <RoadmapItem value="item-4" title="2027: Scholarship and venture rails" copy="Connect top builder teams to financial pathways including grants, scholarships, and early-stage funding." />
          </Accordion.Root>
        </div>
      </section>

      <section id="join" data-story-section className="relative min-h-[85vh] bg-[#0f1114] px-5 py-24 text-white md:px-10">
        <div data-transition-line className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent md:left-10 md:right-10" />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.08]" />
        <div data-section-shell className="relative mx-auto grid w-full max-w-[1320px] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p data-reveal className="tiny-caps text-white/55">Story 11 • Finale</p>
            <h2 data-reveal className="headline-lg mt-6">Your chapter starts when you decide to build in public with people who care about outcomes.</h2>
            <p data-reveal className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Join GRID if you want to do meaningful work with global teammates, strong mentors, and a real launch path.
            </p>
            <div data-reveal className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-dark">Apply to GRID</a>
              <a href="#start" className="rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em]">Back to top</a>
            </div>
          </div>

          <div data-reveal data-panel className="surface-card rounded-[32px] bg-white/10 p-8 text-white">
            <h3 className="text-3xl font-semibold tracking-tight">Why builders choose GRID</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/78">
              <li className="flex items-start gap-3"><UsersThree size={19} className="mt-0.5 text-primary" /> Cross-border teams with tangible momentum</li>
              <li className="flex items-start gap-3"><Handshake size={19} className="mt-0.5 text-primary" /> Mentorship linked to measurable outcomes</li>
              <li className="flex items-start gap-3"><RocketLaunch size={19} className="mt-0.5 text-primary" /> Faster path from concept to launch</li>
            </ul>
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-primary">
              View applicant guide <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <aside className="fixed bottom-4 right-4 z-40 hidden lg:block">
        <div className="surface-card rounded-2xl px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/55">Story Map</p>
          <div className="mt-2 flex flex-wrap gap-1.5 max-w-[220px]">
            {storyIndex.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-full border border-black/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60 transition-colors hover:bg-neutral-dark hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

function StoryBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-black/15 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-black/70">{label}</span>
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <article data-reveal className="surface-card rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5 inline-flex rounded-xl bg-primary/15 p-3 text-accent">{icon}</div>
      <h3 className="text-2xl font-semibold tracking-tight text-neutral-dark">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-neutral-dark/70 font-light">{description}</p>
    </article>
  )
}

function StoryStat({ value, label }: { value: string, label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">{label}</p>
    </div>
  )
}

function LineItem({ icon, title, copy }: { icon: React.ReactNode, title: string, copy: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-neutral-dark/5 bg-white/40 p-5 backdrop-blur-sm shadow-sm transition-all hover:bg-white/60">
      <span className="mt-1 text-accent opacity-70">{icon}</span>
      <div>
        <p className="text-base font-semibold text-neutral-dark opacity-90">{title}</p>
        <p className="mt-1 text-sm text-neutral-dark/65 font-light leading-relaxed">{copy}</p>
      </div>
    </div>
  )
}

function CounterCard({ label, count, suffix }: { label: string, count: number, suffix: string }) {
  return (
    <article data-reveal className="surface-card rounded-[24px] p-8 border-neutral-dark/[0.03]">
      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-dark/40">{label}</p>
      <p className="mt-6 text-6xl font-light tracking-tighter text-neutral-dark" data-count={count} data-suffix={suffix}>0{suffix}</p>
    </article>
  )
}

function FeatureGrid({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black/70">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function RoadmapItem({ value, title, copy }: { value: string, title: string, copy: string }) {
  return (
    <Accordion.Item value={value} className="surface-card overflow-hidden rounded-2xl border border-black/10">
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold tracking-tight">
          {title}
          <CaretDown size={16} className="transition-transform duration-300 data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-5 pb-5 text-sm leading-relaxed text-black/65">
        {copy}
      </Accordion.Content>
    </Accordion.Item>
  )
}
