'use client'

import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

interface ShapeData {
  label: string
  color: string
  textColor: string
  type: string
  border?: string
  hasGrid?: boolean
  gridType?: 'dots' | 'mesh'
  w: number
  h: number
  body: Matter.Body
  skew?: string
}

const BRAND_COLORS = [
  { bg: '#000000', text: '#FFFFFF', border: 'none' },
  { bg: '#FECC33', text: '#000000', border: 'none' },
  { bg: '#0044FF', text: '#FFFFFF', border: 'none' },
  { bg: '#FF0000', text: '#FFFFFF', border: 'none' },
  { bg: '#FFFFFF', text: '#000000', border: '2px solid #000000' },
  { bg: '#FFFFFF', text: '#0044FF', border: '2px solid #0044FF' },
  { bg: 'transparent', text: '#000000', border: '3px solid #000000' }
]

const LABELS = [
  'NCCC // 1.2M', '1.5M stills', 'Project Learn', 'Impact', 'GRID', 'Discovery', 
  '5.5K movies', 'Delhi', 'Mumbai', 'The Bridge', 'Collective', 'Mission', 
  'Infrastructure', 'Universal', 'Potential', 'Design', 'Code', 'Physics', 'Chaos',
  'Architecture', 'Growth', 'Scale', 'Students', 'Global', 'Network'
]

const TYPES = ['pill', 'circle', 'square', 'hexagon', 'triangle', 'pentagon', 'star', 'diamond', 'parallelogram', 'asymmetric']

export function PhysicsGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const { Engine, Bodies, Composite, Mouse, MouseConstraint, Runner } = Matter

    const width = containerRef.current.clientWidth || 800
    const height = containerRef.current.clientHeight || 600

    const engine = Engine.create({ gravity: { x: 0, y: 1.1 } })
    engineRef.current = engine

    // Generous boundaries
    const ground = Bodies.rectangle(width / 2, height + 60, width * 2, 120, { isStatic: true })
    const leftWall = Bodies.rectangle(-60, height / 2, 120, height * 2, { isStatic: true })
    const rightWall = Bodies.rectangle(width + 60, height / 2, 120, height * 2, { isStatic: true })
    const ceiling = Bodies.rectangle(width / 2, -5000, width * 2, 120, { isStatic: true })
    Composite.add(engine.world, [ground, leftWall, rightWall, ceiling])

    const generatedItems = LABELS.concat(Array(10).fill('')).map((label, i) => {
      const type = TYPES[Math.floor(Math.random() * TYPES.length)]
      const brand = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]
      const scale = 0.5 + Math.random() * 0.5 // smaller scale
      
      let w = (label.length * 8 + 50) * scale
      let h = 50 * scale
      let body: Matter.Body
      let skew = 'none'

      const x = (width * 0.05) + (Math.random() * (width * 0.9))
      const y = -300 - (i * 120)

      if (type === 'circle') {
        const radius = (35 + Math.random() * 35) * scale
        w = radius * 2; h = radius * 2
        body = Bodies.circle(x, y, radius, { restitution: 0.5, friction: 0.1, slop: 0.5 })
      } else if (type === 'square' || type === 'diamond' || type === 'parallelogram' || type === 'asymmetric') {
        const size = (70 + Math.random() * 50) * scale
        w = size; h = size
        if (type === 'parallelogram') {
            w = (120 + Math.random() * 80) * scale
            h = 50 * scale
            skew = 'skew(-15deg)'
        }
        body = Bodies.rectangle(x, y, w, h, { 
          restitution: 0.4, 
          friction: 0.2,
          angle: type === 'diamond' ? Math.PI / 4 : (Math.random() * 0.2),
          chamfer: type === 'asymmetric' ? { radius: [2, 20, 2, 20] } : undefined 
        })
      } else if (type === 'hexagon' || type === 'pentagon' || type === 'star') {
        const sides = type === 'hexagon' ? 6 : 5
        const radius = (55 + Math.random() * 35) * scale
        w = radius * 2; h = radius * 2
        body = Bodies.polygon(x, y, sides, radius, { restitution: 0.4, friction: 0.2 })
      } else if (type === 'triangle') {
        const radius = (60 + Math.random() * 40) * scale
        w = radius * 2; h = radius * 2
        body = Bodies.polygon(x, y, 3, radius, { restitution: 0.5, friction: 0.1 })
      } else {
        body = Bodies.rectangle(x, y, w, h, { chamfer: { radius: h/2 }, restitution: 0.6, friction: 0.1 })
      }
      
      return { 
        body, 
        label,
        color: brand.bg, 
        textColor: brand.text, 
        border: brand.border,
        type, 
        w, h, skew,
        hasGrid: Math.random() > 0.65,
        gridType: Math.random() > 0.5 ? 'dots' : 'mesh'
      }
    })

    Composite.add(engine.world, generatedItems.map(d => d.body))

    const mouse = Mouse.create(containerRef.current)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.15, render: { visible: false } }
    })
    Composite.add(engine.world, mouseConstraint)

    const runner = Runner.create()
    Runner.run(runner, engine)

    let id: number
    const sync = () => {
      setItems(generatedItems.map(d => ({
        ...d,
        x: d.body.position.x,
        y: d.body.position.y,
        angle: d.body.angle
      })))
      id = requestAnimationFrame(sync)
    }
    sync()

    return () => {
      cancelAnimationFrame(id)
      Engine.clear(engine)
      Runner.stop(runner)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-x-0 h-full w-full pointer-events-auto overflow-hidden bg-transparent" style={{ zIndex: 10 }}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute flex items-center justify-center text-center px-4 font-sans text-[clamp(10px,1.2vw,16px)] font-black uppercase tracking-widest cursor-grab active:cursor-grabbing select-none overflow-hidden
            ${item.type === 'circle' ? 'rounded-full' : item.type === 'pill' ? 'rounded-full' : ''}
          `}
          style={{
            width: item.w,
            height: item.h,
            backgroundColor: item.color,
            color: item.textColor,
            border: item.border || 'none',
            left: 0,
            top: 0,
            transformOrigin: 'center center',
            transform: `translate(${item.x - item.w/2}px, ${item.y - item.h/2}px) rotate(${item.angle}rad) ${item.skew !== 'none' ? item.skew : ''}`.trim(),
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
            zIndex: 10 + i,
            willChange: 'transform',
            clipPath: item.type === 'hexagon' ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : 
                      item.type === 'pentagon' ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' :
                      item.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                      item.type === 'star' ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' :
                      item.type === 'diamond' ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' :
                      item.type === 'asymmetric' ? 'polygon(0% 0%, 100% 15%, 85% 100%, 10% 85%)' : 'none'
          }}
        >
          {item.hasGrid && (
            <div className="absolute inset-0 opacity-15 pointer-events-none" 
              style={{ 
                backgroundImage: item.gridType === 'dots' 
                  ? `radial-gradient(${item.textColor === '#FFFFFF' ? '#FFF' : '#000'} 1.5px, transparent 0)` 
                  : `linear-gradient(${item.textColor === '#FFFFFF' ? '#FFF' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${item.textColor === '#FFFFFF' ? '#FFF' : '#000'} 1px, transparent 1px)`,
                backgroundSize: '14px 14px' 
              }} 
            />
          )}
          <span className="relative z-10 w-full p-2">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
