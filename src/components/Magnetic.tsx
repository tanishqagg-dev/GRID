"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || prefersReducedMotion()) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.28,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 0.28,
      ease: "power3.out",
    });

    const onMove = (event: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);

      xTo(offsetX * 0.12);
      yTo(offsetY * 0.12);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
      gsap.set(element, { clearProps: "transform" });
    };
  }, []);

  return (
    <div className="magnetic" ref={ref}>
      {children}
    </div>
  );
}
