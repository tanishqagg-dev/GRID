"use client";

import Image from "next/image";
import { useRef } from "react";
import SiteLink from "@/components/SiteLink";
import Magnetic from "@/components/Magnetic";
import { useSectionReveal, useCinematicReveal } from "@/lib/motion";
import { programSummaries } from "@/lib/site-content";

export default function ProgramsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useSectionReveal(sectionRef);
  useSectionReveal(gridRef, ".program-card");
  useCinematicReveal(sectionRef, "h2");

  return (
    <section className="section" ref={sectionRef}>
      <div className="site-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Programs</p>
            <h2>Four distinct routes. One connected system.</h2>
          </div>
          <p className="section-copy">
            Each program answers a different question: where a student starts,
            what kind of room they need next, and who can help move the work
            forward.
          </p>
        </div>

        <div className="program-grid" ref={gridRef}>
          {programSummaries.map((program) => (
            <Magnetic key={program.slug}>
              <SiteLink
                className="program-card"
                external={program.external}
                href={program.href}
              >
                <div className="program-card__media">
                  <Image
                    alt={program.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    src={program.image}
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>

                <div className="program-card__body">
                  <div className="program-card__topline">
                    <span className="tag">{program.status}</span>
                    <span className="program-card__audience">{program.audience}</span>
                  </div>
                  <p className="eyebrow">{program.tagline}</p>
                  <h3>{program.name}</h3>
                  <p>{program.summary}</p>
                  <div className="program-card__footer">
                    <strong>{program.cta}</strong>
                    <span>{program.proof}</span>
                  </div>
                </div>
              </SiteLink>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
