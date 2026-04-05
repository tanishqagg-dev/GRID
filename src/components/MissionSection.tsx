"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const missions = [
  {
    eyebrow: "01",
    title: "Open the room.",
    // Students presenting / speaking — specific, not posed
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",
  },
  {
    eyebrow: "02",
    title: "Make the program legible.",
    // Person explaining something with a diagram/board
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80",
  },
  {
    eyebrow: "03",
    title: "Help students move further than their starting network.",
    // Students walking on a campus path together
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80",
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll(".mission-card");
      gsap.fromTo(
        cards,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section.querySelector(".mission-grid"),
            start: "top 82%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      <div className="site-shell">
        <div className="section-header">
          <div>
            <p className="section-kicker font-mono">What we do</p>
            <h2 className="section-title font-clash">One scroll. One clear pitch.</h2>
          </div>
          <p className="section-copy">
            We build student programs around AI, entrepreneurship, and changemaking —
            and connect them to institutions and mentors that make the opportunity real.
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((m) => (
            <div key={m.eyebrow} className="mission-card">
              <div className="mission-card__image">
                <Image
                  alt={m.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  src={m.image}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="mission-card__overlay" aria-hidden="true" />
              <div className="mission-card__body">
                <span className="mission-card__eyebrow font-mono">{m.eyebrow}</span>
                <h3 className="mission-card__title font-clash">{m.title}</h3>
                <span className="mission-card__accent" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
