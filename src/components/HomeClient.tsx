"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ProgramsGrid from "@/components/ProgramsGrid";
import PartnersStrip from "@/components/PartnersStrip";
import SiteLink from "@/components/SiteLink";
import {
  ScrollTrigger,
  gsap,
  prefersReducedMotion,
  useSectionReveal,
  useCinematicReveal,
} from "@/lib/motion";
import {
  homeOperatingSystem,
  homepageHero,
  homePartnerPitch,
  homeProofPoints,
  siteStats,
} from "@/lib/site-content";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=85",
    alt: "Students working together with laptops",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=85",
    alt: "Students collaborating in a workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=85",
    alt: "Students on a campus",
  },
];

export default function HomeClient() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useSectionReveal(pageRef);
  useSectionReveal(statsRef, ".stat-card");
  useCinematicReveal(pageRef, "h1, h2");

  useEffect(() => {
    const page = pageRef.current;
    const scene = sceneRef.current;
    const hero = heroRef.current;
    if (!page || !scene || !hero) return;

    if (prefersReducedMotion()) {
      gsap.set("[data-hero-reveal]", { opacity: 1, y: 0 });
      gsap.set(".system-scene__card", { opacity: 1, yPercent: 0 });
      return;
    }

    const ctx = gsap.context((self) => {
      gsap.set(".home-hero__visual", { transformPerspective: 1000 });
      gsap.fromTo(
        "[data-hero-reveal]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.05,
        },
      );

      gsap.fromTo(
        ".hero-card",
        { opacity: 0, y: 48, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        },
      );

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      heroTl
        .to(".home-hero__copy", { yPercent: -8, opacity: 0.62, ease: "none" }, 0)
        .to(".home-hero__visual", { yPercent: 10, scale: 1.04, ease: "none" }, 0)
        .to(".hero-card--center", { scale: 1.06, yPercent: 4, ease: "none" }, 0)
        .to(".hero-card--left", { yPercent: -8, rotate: -8, ease: "none" }, 0)
        .to(".hero-card--right", { yPercent: 10, rotate: 8, ease: "none" }, 0)
        .to(".home-hero__spotlight", { scale: 1.08, opacity: 0.58, ease: "none" }, 0)
        .to(".home-hero__gridGlow", { opacity: 0.38, ease: "none" }, 0);

      const cards = gsap.utils.toArray<HTMLElement>(".system-scene__card");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 861px)", () => {
        gsap.set(cards, { opacity: 0.22, yPercent: 18 });
        gsap.set(cards[0], { opacity: 1, yPercent: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top top",
            end: () => `+=${cards.length * window.innerHeight * 0.62}`,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          timeline.to(
            cards,
            {
              opacity: 0.22,
              yPercent: 18,
              duration: 0.22,
              ease: "none",
            },
            index,
          );
          timeline.to(
            card,
            {
              opacity: 1,
              yPercent: 0,
              duration: 0.22,
              ease: "none",
            },
            index,
          );
        });
      });

      self.add(() => mm.revert());

      const statsElements = gsap.utils.toArray<HTMLElement>(".stat-card strong");
      statsElements.forEach((el) => {
        const rawValue = el.innerText.trim();
        const finalValue = parseInt(rawValue.replace(/[^0-9]/g, ""), 10);
        const prefix = rawValue.match(/^[^0-9]+/)?.[0] ?? "";
        const suffix = rawValue.match(/[^0-9]+$/)?.[0] ?? "";
        if (isNaN(finalValue)) return;

        const counter = { value: 0 };
        gsap.to(counter, {
          value: finalValue,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 94%",
            once: true,
          },
          onUpdate: () => {
            el.innerText = `${prefix}${Math.round(counter.value).toLocaleString()}${suffix}`;
          },
        });
      });

      ScrollTrigger.refresh();
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="home-hero" ref={heroRef}>
        <div className="home-hero__wash" />
        <div className="home-hero__gridGlow" />
        <div className="home-hero__spotlight" />

        <div className="site-shell home-hero__shell">
          <div className="home-hero__copy">
            <p className="eyebrow" data-hero-reveal>
              {homepageHero.kicker}
            </p>
            <h1>{homepageHero.title}</h1>
            <p className="home-hero__lead" data-hero-reveal>
              {homepageHero.lead}
            </p>

            <div className="button-row" data-hero-reveal>
              {homepageHero.actions.map((action) => (
                <SiteLink
                  className={`button${action.secondary ? " button--secondary" : ""}`}
                  external={action.external}
                  href={action.href}
                  key={`${action.label}-${action.href}`}
                >
                  {action.label}
                </SiteLink>
              ))}
            </div>

            <div className="home-hero__meta" data-hero-reveal>
              <div className="editorial-note" data-micro="lift">
                <span>What the organization is doing</span>
                <strong>
                  Turning student ambition into visible routes, credible rooms,
                  and repeatable access.
                </strong>
              </div>

              <div className="tag-row">
                {homepageHero.chips.map((chip) => (
                  <span className="tag" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="home-hero__visual">
            <article className="hero-card hero-card--left" data-micro="lift">
              <div className="hero-card__image">
                <Image
                  alt={heroImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1040px) 80vw, 28vw"
                  src={heroImages[0].src}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="hero-card__caption">
                <span>Builder rooms</span>
                <strong>Students need environments that feel serious fast.</strong>
              </div>
            </article>

            <article className="hero-card hero-card--center" data-micro="lift">
              <div className="hero-card__image">
                <Image
                  alt={heroImages[1].alt}
                  fill
                  priority
                  sizes="(max-width: 1040px) 90vw, 36vw"
                  src={heroImages[1].src}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="hero-card__caption">
                <span>Program system</span>
                <strong>Aurora, N3C, Bootcamp, and Project Learn form one pathway stack.</strong>
              </div>
            </article>

            <article className="hero-card hero-card--right" data-micro="lift">
              <div className="hero-card__image">
                <Image
                  alt={heroImages[2].alt}
                  fill
                  priority
                  sizes="(max-width: 1040px) 78vw, 24vw"
                  src={heroImages[2].src}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className="hero-card__caption">
                <span>Campus proximity</span>
                <strong>Confidence changes when opportunity stops feeling remote.</strong>
              </div>
            </article>
          </div>
        </div>


      </section>

      <section className="section section--tight" ref={statsRef}>
        <div className="site-shell">
          <div className="stats-grid">
            {siteStats.map((stat) => (
              <article className="stat-card" data-micro="lift" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Why the site exists</p>
              <h2>A clear explanation beats a generic nonprofit homepage.</h2>
            </div>
          </div>

          <div className="proof-grid">
            {homeProofPoints.map((item, index) => (
              <article className={`proof-card proof-card--image-${index + 1}`} data-micro="lift" data-reveal key={item.title}>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="system-scene" ref={sceneRef}>
        <div className="site-shell system-scene__shell">
          <div className="system-scene__intro">
            <p className="eyebrow">Operating system</p>
            <h2>The work becomes legible when the sequence is clear.</h2>
            <p>
              This is the core story the site needs to tell: how GRID turns a
              mission into a set of routes that students, schools, and sponsors
              can actually act on.
            </p>
          </div>

          <div className="system-scene__stack">
            {homeOperatingSystem.map((item) => (
              <article className="system-scene__card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProgramsGrid />

      <section className="section section--dark">
        <div className="site-shell split-band" data-reveal>
          <div>
            <p className="eyebrow">Partner logic</p>
            <h2>Institutions matter when they expand access instead of just decorating credibility.</h2>
          </div>
          <div className="split-band__list">
            {homePartnerPitch.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip />

      <section className="section">
        <div className="site-shell final-cta" data-reveal>
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Pick the route that matches what you want to build.</h2>
          </div>
          <div className="final-cta__body">
            <p>
              Students can start with the program that fits their current stage.
              Schools, NGOs, and sponsors can move straight into a structured
              conversation with the team.
            </p>
            <div className="button-row">
              <SiteLink className="button" href="/contact">
                Contact the team
              </SiteLink>
              <SiteLink
                className="button button--secondary"
                external
                href="https://aurora.projectgrid.org"
              >
                Aurora live site
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
