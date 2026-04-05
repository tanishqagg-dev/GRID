import { MutableRefObject, RefObject, useEffect } from "react";
import type Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

let pluginsRegistered = false;
let lenisInstance: Lenis | null = null;
let tickerAttached = false;

function registerMotionPlugins() {
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export async function initLenis() {
  if (typeof window === "undefined") return null;

  registerMotionPlugins();

  if (lenisInstance) return lenisInstance;

  const { default: Lenis } = await import("lenis");

  lenisInstance = new Lenis({
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    duration: prefersReducedMotion() ? 0.75 : 0.92,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 1.2,
  });

  lenisInstance.on("scroll", ScrollTrigger.update);

  if (!tickerAttached) {
    gsap.ticker.add((time: number) => {
      lenisInstance?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    tickerAttached = true;
  }

  return lenisInstance;
}

export function refreshScroll() {
  registerMotionPlugins();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export function useSectionReveal<T extends HTMLElement>(
  scopeRef: RefObject<T | null> | MutableRefObject<T | null>,
  selector = "[data-reveal]",
) {
  useEffect(() => {
    registerMotionPlugins();

    const scope = scopeRef.current;
    if (!scope) return;

    if (prefersReducedMotion()) {
      gsap.set(scope.querySelectorAll(selector), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector);
      gsap.set(items, { opacity: 0, y: 32 });

      ScrollTrigger.batch(items, {
        start: "top 86%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.08,
            ease: "power3.out",
          });
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, selector]);
}

export function useCinematicReveal<T extends HTMLElement>(
  scopeRef: RefObject<T | null> | MutableRefObject<T | null>,
  selector = "h1, h2, .split-reveal",
) {
  useEffect(() => {
    registerMotionPlugins();
    if (prefersReducedMotion()) return;

    const scope = scopeRef.current;
    if (!scope) return;

    let cancelled = false;
    let ctx: gsap.Context | undefined;
    const splits: SplitType[] = [];

    document.fonts.ready.then(() => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(selector);
        items.forEach((item) => {
          const split = new SplitType(item, { types: "lines" });
          splits.push(split);

          const lines = split.lines;
          if (!lines) return;

          lines.forEach((line) => {
            const wrap = document.createElement("div");
            wrap.style.overflow = "hidden";
            line.parentNode?.insertBefore(wrap, line);
            wrap.appendChild(line);
          });

          gsap.fromTo(
            lines,
            { yPercent: 105, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.92,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                once: true,
              },
            },
          );
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      }, scope);
    });

    return () => {
      cancelled = true;
      splits.forEach((split) => split.revert());
      ctx?.revert();
    };
  }, [scopeRef, selector]);
}

export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.35;
      const y = (clientY - (top + height / 2)) * 0.35;

      gsap.to(el, { x, y, duration: 1, ease: "elastic.out(1.1, 0.4)" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

export { ScrollTrigger, gsap };
