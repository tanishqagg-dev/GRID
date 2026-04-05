"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/site-content";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialBridge() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-bridge__mark",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 0.7,
          duration: 0.6,
          ease: "expo.out",
          scrollTrigger: { trigger: section, start: "top 78%" },
        }
      );
      gsap.fromTo(
        ".testimonial-bridge__quote",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: section, start: "top 78%" },
        }
      );
      gsap.fromTo(
        ".testimonial-bridge__source",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top 78%" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const featured = testimonials[0];

  return (
    <section className="testimonial-bridge" ref={sectionRef}>
      <div className="testimonial-bridge__inner">
        <span className="testimonial-bridge__mark" aria-hidden="true">&ldquo;</span>
        <p className="testimonial-bridge__quote font-clash">{featured.quote}</p>
        <p className="testimonial-bridge__source font-mono">
          <span className="testimonial-bridge__divider">/</span>
          {featured.source}
          <span className="testimonial-bridge__divider">/</span>
        </p>
      </div>
    </section>
  );
}
