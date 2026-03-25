'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const corridors = [
  {
    id: 'nccc',
    title: 'NCCC',
    subtitle: '1,200,000 students',
    description: 'A sovereign-scale AI initiative delivering cutting-edge intelligence to every district in the country.',
    color: '#FFFFFF',
    accent: '#000000',
    isLight: true
  },
  {
    id: 'changemakers',
    title: 'Changemakers',
    subtitle: '7-Day Impact',
    description: 'Transforming local potential into institutional leadership through immersive social architecture.',
    color: '#FFFFFF',
    accent: '#FECC33',
    isLight: true
  },
  {
    id: 'aurora',
    title: 'Aurora',
    subtitle: '50+ Borders',
    description: 'A decentralized arena where global teams build the solutions institutions have failed to address.',
    color: '#FFFFFF',
    accent: '#0044FF',
    isLight: true
  },
  {
    id: 'learn',
    title: 'Project Learn',
    subtitle: 'The First Spark',
    description: 'Bridging the gap in rural literacy through AI-driven, high-fidelity tactile exploration.',
    color: '#FFFFFF',
    accent: '#000000',
    isLight: true
  }
]

export function ProjectChamber() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!horizontalRef.current || !containerRef.current) return

    const totalWidth = horizontalRef.current.scrollWidth
    const windowWidth = window.innerWidth
    
    gsap.to(horizontalRef.current, {
      x: -(totalWidth - windowWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: `+=${totalWidth}`,
        invalidateOnRefresh: true,
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="projects" className="relative overflow-hidden bg-white">
      <div ref={horizontalRef} className="flex h-screen items-center" style={{ width: 'fit-content' }}>
        {corridors.map((c, i) => (
          <div 
            key={c.id} 
            className="relative w-screen h-full flex items-center justify-center overflow-hidden shrink-0"
            style={{ backgroundColor: c.color }}
          >
            <div 
               className={`relative z-10 w-full max-w-7xl px-12 md:px-24 flex flex-col justify-center ${c.isLight ? 'text-black' : 'text-white'}`}
            >
              <div className="flex items-baseline gap-6 mb-8 overflow-hidden">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] opacity-40">MISSION 0{i + 1}</span>
                <div className="h-[2px] w-24 bg-current opacity-20" />
              </div>
              
              <h2 className="cinematic-headline mb-8 leading-[0.85] !text-current transition-all" style={{ color: c.accent }}>{c.title}</h2>
              <h3 className="story-text !text-4xl md:!text-5xl uppercase tracking-tighter mb-10 opacity-90">{c.subtitle}</h3>
              <p className="max-w-xl text-xl md:text-2xl font-light leading-[1.3] opacity-80 tracking-tight">{c.description}</p>
            </div>

            {/* Background Narrative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.03] select-none">
                  {c.title}
               </div>
            </div>

            {/* Specialized Corridor Atmospheric Beats */}
            {c.id === 'aurora' && (
              <div className="absolute inset-0 bg-[#0051FF]/10 mix-blend-overlay animate-pulse" />
            )}
            {c.id === 'learn' && (
              <div className="absolute inset-0 bg-[#FF9D00]/10 blur-[120px] rounded-full scale-150" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
