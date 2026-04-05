"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { featuredMoments } from "@/lib/site-content";

export default function FeaturedMoment() {
  const [active, setActive] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current || !cardRef.current) return;

    gsap.killTweensOf(progressRef.current);
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 5.5,
        ease: "none",
        onComplete: () => setActive((value) => (value + 1) % featuredMoments.length),
      }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0.65, y: 18 },
      { opacity: 1, y: 0, duration: 0.55, ease: "expo.out" }
    );
  }, [active]);

  const moment = featuredMoments[active];

  return (
    <section className="feature-strip">
      <div className="site-shell">
        <div className="feature-card" ref={cardRef}>
          <div className="feature-card__media">
            <Image
              alt={moment.headline}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              src={moment.image}
              style={{ objectFit: "cover" }}
              unoptimized
            />
          </div>

          <div className="feature-card__body">
            <p className="section-kicker font-mono">{moment.label}</p>
            <h2 className="feature-card__title font-clash">{moment.headline}</h2>
            <p className="feature-card__copy">{moment.summary}</p>
            <div className="page-ctaRow">
              <Link className="page-cta" href={moment.href}>
                {moment.cta}
              </Link>
            </div>

            <div className="feature-card__dots">
              {featuredMoments.map((item, index) => (
                <button
                  key={item.label}
                  aria-label={`Show ${item.label}`}
                  className={`feature-card__dot${index === active ? " feature-card__dot--active" : ""}`}
                  onClick={() => setActive(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="feature-card__progress">
            <div ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
