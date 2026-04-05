"use client";

import Image from "next/image";
import { useRef } from "react";
import { useSectionReveal } from "@/lib/motion";

const partners = [
  {
    name: "Microsoft",
    note: "Technology and ecosystem support",
    logoSrc: "/partners/microsoft.png",
    logoAlt: "Microsoft wordmark",
    width: 216,
    height: 46,
  },
  {
    name: "NASSCOM",
    note: "Industry network",
    logoSrc: "/partners/nasscom.svg",
    logoAlt: "NASSCOM logo",
    width: 1000,
    height: 168,
  },
  {
    name: "HCLTech",
    note: "Industry collaboration",
    logoSrc: "/partners/hcltech.svg",
    logoAlt: "HCLTech logo",
    width: 921,
    height: 103,
  },
  {
    name: "Atal Innovation Mission",
    note: "Public innovation support",
    logoSrc: "/partners/aim.png",
    logoAlt: "Atal Innovation Mission logo",
    width: 784,
    height: 216,
  },
  {
    name: "IIT Delhi",
    note: "Campus and academic credibility",
    logoSrc: "/partners/iit-delhi.png",
    logoAlt: "IIT Delhi logo",
    width: 200,
    height: 200,
  },
  {
    name: "IIIT Delhi",
    note: "Academic collaboration",
    logoSrc: "/partners/iiit-delhi.png",
    logoAlt: "IIIT Delhi logo",
    width: 1000,
    height: 200,
  },
];

export default function PartnersStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section className="section section--alt" ref={sectionRef}>
      <div className="site-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Partners</p>
            <h2>Trusted by institutions that make the work more real.</h2>
          </div>
          <p className="section-copy">
            The job of a partner is not decorative association. The job is to
            expand room quality, execution capacity, and student belief that the
            opportunity is genuinely within reach.
          </p>
        </div>

        <div className="partner-board">
          {partners.map((partner) => (
            <article className="partner-card" data-reveal key={partner.name}>
              <div className="partner-card__logo">
                <Image
                  alt={partner.logoAlt}
                  height={partner.height}
                  src={partner.logoSrc}
                  unoptimized={partner.logoSrc.endsWith(".svg")}
                  width={partner.width}
                />
              </div>
              <div>
                <h3>{partner.name}</h3>
                <p>{partner.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="ticker" data-reveal>
          <div className="ticker__track">
            {[...partners, ...partners].map((partner, index) => (
              <span className="ticker__item" key={`${partner.name}-${index}`}>
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
