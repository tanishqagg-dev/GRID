import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import { impactTimeline, siteStats, testimonials } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Impact",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        kicker="Impact"
        lead="The impact page should prove that GRID is not only good at language. It should show reach, delivery, and the ability to build formats that can hold real participation."
        meta={["Visible scale", "Program proof", "Partner-readable"]}
        title="Evidence needs to read quickly and hold up under scrutiny."
      />

      <section className="section section--tight">
        <div className="site-shell">
          <div className="stats-grid">
            {siteStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell split-band">
          <div>
            <p className="eyebrow">What the numbers should mean</p>
            <h2>Reach matters when it is paired with a format strong enough to hold attention and follow-through.</h2>
          </div>
          <div className="split-band__list">
            <p>
              GRID is not tracking vanity surface area. The point is to show that
              students can enter the system through multiple routes and still find
              a clear next step.
            </p>
            <p>
              For partners, the signal is repeatability: the programs are not
              one-season concepts. They are formats that can be run, improved, and
              expanded.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2>The growth arc should be obvious.</h2>
            </div>
          </div>

          <div className="timeline-list">
            {impactTimeline.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Voice from the field</p>
              <h2>Proof is stronger when it sounds human.</h2>
            </div>
          </div>

          <div className="proof-grid">
            {testimonials.map((item) => (
              <article className="quote-card" key={item.quote}>
                <p>{item.quote}</p>
                <strong>{item.source}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
