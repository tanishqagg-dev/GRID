"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const acts = [
  {
    num: "01",
    label: "The problem",
    heading: "Access is the gap.",
    body: "75,000 students across 50 countries have engaged with GRID programs. Most had never seen a hackathon, a mentor network, or a prize pool. The gap is not ability. It is who the room was built for.",
    stat: "75,000+",
    statLabel: "students reached",
    accent: "#00c49a",
    // Students in a lecture hall / event setting
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85",
  },
  {
    num: "02",
    label: "The answer",
    heading: "Programs — not inspiration.",
    body: "Aurora, N3C, Bootcamp, and Project Learn are structured, repeatable pathways. Not one-day workshops. Not content. Real rooms, real stakes, something to show at the end.",
    stat: "4",
    statLabel: "active programs",
    accent: "#6097ff",
    // Students collaborating / working on laptops
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=85",
  },
  {
    num: "03",
    label: "The proof",
    heading: "Credibility is built, not claimed.",
    body: "GRID runs on IIT Delhi campus with Microsoft, NASSCOM, HCLTech, and AIM as partners. INR 20L in prize money distributed. The site is the proof. The programs are the proof.",
    stat: "INR 20L",
    statLabel: "prize pool",
    accent: "#00c49a",
    // Award ceremony / people celebrating
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
  },
];

export default function ScrollNarrative() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = section.querySelectorAll<HTMLElement>(".sn-panel");

    const ctx = gsap.context(() => {
      panels.forEach((panel) => {
        const text = panel.querySelector(".sn-panel__text");
        const visual = panel.querySelector(".sn-panel__visual");

        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, x: -32 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: "expo.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        if (visual) {
          gsap.fromTo(
            visual,
            { opacity: 0, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.0,
              ease: "expo.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="sn-section" ref={sectionRef} aria-label="GRID in three acts">
      {acts.map((act, i) => (
        <div key={act.num} className={`sn-panel${i % 2 === 1 ? " sn-panel--flip" : ""}`}>
          {/* Text side */}
          <div className="sn-panel__text">
            <span className="sn-num font-mono" style={{ color: act.accent }}>
              {act.num}
            </span>
            <p className="sn-label font-mono">{act.label}</p>
            <h2 className="sn-heading font-clash">{act.heading}</h2>
            <p className="sn-body">{act.body}</p>
          </div>

          {/* Visual side — full-bleed photo + stat overlay */}
          <div className="sn-panel__visual">
            <Image
              src={act.image}
              alt={act.heading}
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
              }}
              unoptimized
            />
            <div className="sn-panel__visual-overlay" aria-hidden="true">
              <span className="sn-stat font-mono" style={{ color: act.accent }}>
                {act.stat}
              </span>
              <span className="sn-stat-label font-mono">{act.statLabel}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
