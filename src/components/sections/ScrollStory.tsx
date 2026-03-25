'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnnotatedText } from '../ui/AnnotatedText'
import DotGrid from '../animation/DotGrid'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function ScrollStory() {
  const rootRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sub-refs for chapter elements
  const chapter1Ref = useRef<HTMLDivElement>(null)
  const chapter2Ref = useRef<HTMLDivElement>(null)
  const chapter3Ref = useRef<HTMLDivElement>(null)
  const chapter4Ref = useRef<HTMLDivElement>(null)
  const chapter5Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: containerRef.current,
      }
    })

    // Helper for direct, fade-in/fade-out transitions
    const animateChapter = (ref: React.RefObject<HTMLDivElement | null>, sideElementsSelector?: string) => {
      const lines = ref.current?.querySelectorAll('.story-line')
      if (!lines) return
      
      tl.to(ref.current, { visibility: 'visible', opacity: 1, duration: 0.1 }, `+=0.5`)
      
      lines.forEach((line, i) => {
        tl.fromTo(line,
          { opacity: 0, y: 50, filter: 'blur(20px)', skewY: 5 },
          { opacity: 1, y: 0, filter: 'blur(0px)', skewY: 0, duration: 2, ease: 'expo.out' },
          `>-${i === 0 ? 0 : 1.2}`
        )
      })

      // Unique Side Animations with high bounce
      if (sideElementsSelector) {
        const sideElements = ref.current?.querySelectorAll(sideElementsSelector)
        if (sideElements) {
          tl.fromTo(sideElements,
            { opacity: 0, scale: 0, rotate: -45, y: 100 },
            { opacity: 0.8, scale: 1, rotate: 0, y: 0, duration: 2, stagger: 0.2, ease: 'back.out(2)' },
            '<'
          )
        }
      }

      // Hold
      tl.to({}, { duration: 3 })

      // Exit
      tl.to(ref.current, { opacity: 0, y: -40, filter: 'blur(15px)', duration: 1, ease: 'power4.in' })
    }

    // CHAPTER 1: What we saw
    animateChapter(chapter1Ref, '.side-path')

    // CHAPTER 2: The real problem
    animateChapter(chapter2Ref, '.side-stat')

    // CHAPTER 3: The decision
    animateChapter(chapter3Ref, '.side-blueprint')

    // CHAPTER 4: The movement
    animateChapter(chapter4Ref, '.side-node')

    // CHAPTER 5: The proof (Special transition)
    tl.to(containerRef.current, { backgroundColor: '#0A0A0A', duration: 1 }, 'final')
    tl.to(chapter5Ref.current, { visibility: 'visible', opacity: 1, duration: 0.1 }, 'final')
    
    const pLines = chapter5Ref.current?.querySelectorAll('.proof-line')
    const pAccents = chapter5Ref.current?.querySelectorAll('.side-proof')
    if (pLines) {
      tl.fromTo(pLines,
        { opacity: 0, scale: 0.8, letterSpacing: '0.2em' },
        { opacity: 1, scale: 1, letterSpacing: 'normal', duration: 3, ease: 'power4.out', stagger: 0.8 },
        'final+=0.5'
      )
    }
    if (pAccents) {
      tl.fromTo(pAccents,
        { opacity: 0, height: '0%' },
        { opacity: 0.5, height: '100%', duration: 2.5, ease: 'expo.inOut' },
        'final+=1'
      )
    }

    tl.to({}, { duration: 4 }) // Final hold

  }, { scope: rootRef })

  return (
    <div ref={rootRef} className="relative z-20 h-[1000vh] bg-white text-black">
      <div 
        ref={containerRef} 
        className="sticky top-0 left-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden transition-colors duration-1000 bg-white"
      >
        {/* CHAPTER 1 - Path Marginalia */}
        <div ref={chapter1Ref} className="invisible absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <svg className="side-path absolute left-10 top-1/4 w-32 h-32 text-[#FF0000]/30" viewBox="0 0 100 100">
             <path d="M10,10 Q50,90 90,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
          </svg>
          <svg className="side-path absolute right-16 top-1/3 w-48 h-48 text-[#1ACF7F]/30" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
          </svg>
          <p className="story-line font-serif italic text-4xl md:text-7xl text-neutral-dark mb-4 drop-shadow-sm">"We didn't read about the problem."</p>
          <p className="story-line font-serif italic text-4xl md:text-7xl text-neutral-dark">
            "We <AnnotatedText type="squiggle" color="#FF0000" scrub>walked into it.</AnnotatedText>"
          </p>
        </div>

        {/* CHAPTER 2 - Census Marginalia */}
        <div ref={chapter2Ref} className="invisible absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <DotGrid className="side-stat absolute inset-0 opacity-20 pointer-events-none" dotSize={4} gap={28} activeColor="#1A6BFF" />
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="side-stat absolute w-2 h-2 rounded-full bg-[#1A6BFF]/50"
              style={{ 
                left: `${15 + Math.random() * 70}%`, 
                top: `${15 + Math.random() * 70}%` 
              }}
            />
          ))}
          <p className="story-line font-serif italic text-4xl md:text-7xl text-[#1A6BFF] mb-4">"265 million students."</p>
          <p className="story-line font-serif italic text-4xl md:text-7xl text-neutral-dark/40">
            "Most will <AnnotatedText type="underline" color="#1A6BFF" scrub>never know</AnnotatedText> what they could've built."
          </p>
        </div>

        {/* CHAPTER 3 - Blueprint Marginalia */}
        <div ref={chapter3Ref} className="invisible absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <div className="side-blueprint absolute left-[5%] top-[50%] w-64 h-[1px] bg-[#1ACF7F]/40 scale-x-150 origin-left" />
          <div className="side-blueprint absolute right-[5%] top-[50%] w-64 h-[1px] bg-[#1ACF7F]/40 scale-x-150 origin-right" />
          <p className="story-line font-serif italic text-4xl md:text-7xl text-neutral-dark leading-tight">
            "So we built the <br /> 
            <AnnotatedText type="circle" color="#1ACF7F" thickness={5} className="mt-8" scrub>bridge ourselves.</AnnotatedText>"
          </p>
        </div>

        {/* CHAPTER 4 - Orbit Marginalia */}
        <div ref={chapter4Ref} className="invisible absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <div className="side-node absolute left-20 top-20 border border-[#1A6BFF]/40 rounded-full p-8 animate-pulse">
             <div className="w-4 h-4 bg-[#1A6BFF] rounded-full" />
          </div>
          <div className="side-node absolute right-20 bottom-20 border border-[#FF0000]/40 rounded-full p-8 animate-pulse">
             <div className="w-4 h-4 bg-[#FF0000] rounded-full" />
          </div>
          
          <p className="story-line font-serif italic text-4xl md:text-6xl text-neutral-dark mb-10">"One connection became a movement."</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-10">
             <span className="story-line font-sans text-sm font-black uppercase tracking-[0.4em] text-[#1A6BFF]">Delhi</span>
             <span className="story-line font-sans text-sm font-black uppercase tracking-[0.4em] text-[#FF0000]">Mumbai</span>
             <span className="story-line font-sans text-sm font-black uppercase tracking-[0.4em] text-[#1ACF7F]">Abu Dhabi</span>
          </div>
          <p className="story-line font-serif italic text-3xl md:text-5xl text-neutral-dark">
            "And then we <AnnotatedText type="squiggle" color="#8B5CF6" scrub>stopped counting</AnnotatedText> borders."
          </p>
        </div>

        {/* CHAPTER 5 - Proof Marginalia */}
        <div ref={chapter5Ref} className="invisible absolute inset-0 flex flex-col items-center justify-center text-center px-10 bg-white">
          <div className="side-proof absolute left-0 bottom-0 w-[4px] bg-[#FECC33]" />
          <div className="side-proof absolute right-0 bottom-0 w-[4px] bg-[#FECC33]" />
          <p className="proof-line font-serif italic text-6xl md:text-9xl text-neutral-dark tracking-tighter">
            "Here's the <AnnotatedText type="box" color="#FECC33" thickness={8} scrub>proof.</AnnotatedText>"
          </p>
        </div>
      </div>
    </div>
  )
}
