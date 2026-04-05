"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const phrases = [
  "Built for students who are usually overlooked.",
  "Programs first. Opportunity second. Credibility all the way through.",
  "Designed to make AI access feel real, not decorative.",
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Animate in on mount
    gsap.fromTo(
      el,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
    );
  }, [index]);

  useEffect(() => {
    const el = textRef.current;
    const id = window.setInterval(() => {
      // Animate out
      gsap.to(el, {
        y: -10,
        opacity: 0,
        duration: 0.3,
        ease: "expo.in",
        onComplete: () => {
          setIndex((v) => (v + 1) % phrases.length);
        },
      });
    }, 3200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div style={{ overflow: "hidden", minHeight: "2.8em" }}>
      <p
        ref={textRef}
        className="hero-rotator"
        style={{ opacity: 0 }}
      >
        {phrases[index]}
      </p>
    </div>
  );
}
