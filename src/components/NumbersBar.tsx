"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 75000, suffix: "+", label: "students and teams reached", prefix: "" },
  { value: 50, suffix: "+", label: "countries", prefix: "" },
  { value: 20, suffix: "L", label: "prize pool", prefix: "INR " },
  { value: 4, suffix: "", label: "programs running", prefix: "" },
];

export default function NumbersBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.fromTo(
      bar,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "expo.out",
        scrollTrigger: { trigger: bar, start: "top 88%" },
      }
    );

    gsap.fromTo(
      scanRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "expo.out",
        transformOrigin: "left",
        scrollTrigger: { trigger: bar, start: "top 85%" },
      }
    );

    stats.forEach((stat, index) => {
      const element = numRefs.current[index];
      if (!element) return;

      const tweenState = { value: 0 };
      gsap.to(tweenState, {
        value: stat.value,
        duration: 1.6,
        ease: "expo.out",
        delay: index * 0.08,
        onUpdate: () => {
          const rounded = Math.round(tweenState.value);
          element.textContent = `${stat.prefix}${
            rounded >= 1000 ? rounded.toLocaleString("en-IN") : rounded
          }${stat.suffix}`;
        },
        scrollTrigger: { trigger: bar, start: "top 85%" },
      });
    });

    gsap.fromTo(
      ".stat-label",
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
        scrollTrigger: { trigger: bar, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section
      ref={barRef}
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-dim)",
        borderBottom: "1px solid var(--border-dim)",
        padding: "clamp(32px, 5vw, 56px) clamp(20px, 5vw, 80px)",
        position: "relative",
        overflow: "hidden",
        opacity: 0,
      }}
    >
      <div
        ref={scanRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "var(--teal-primary)",
          opacity: 0.5,
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "clamp(24px, 4vw, 48px)",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            onMouseEnter={(event) => {
              gsap.to(event.currentTarget.querySelector(".stat-num"), {
                scale: 1.06,
                duration: 0.3,
                ease: "expo.out",
              });
            }}
            onMouseLeave={(event) => {
              gsap.to(event.currentTarget.querySelector(".stat-num"), {
                scale: 1,
                duration: 0.3,
                ease: "expo.out",
              });
            }}
            style={{ textAlign: "center" }}
          >
            <div className="stat-num" style={{ display: "inline-block" }}>
              <span
                ref={(element) => {
                  numRefs.current[index] = element;
                }}
                className="font-mono"
                style={{
                  fontSize: "var(--type-mono-lg)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {stat.prefix}0{stat.suffix}
              </span>
            </div>
            <p
              className="stat-label"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "var(--type-small)",
                color: "var(--text-muted)",
                marginTop: 8,
                opacity: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
