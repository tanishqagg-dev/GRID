import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Bootcamp",
};

const benefits = [
  "Hands-on AI and entrepreneurship sessions",
  "Fast mentor feedback in a live room",
  "Peer learning with ambitious cohorts",
  "Campus exposure that changes how ambition feels",
];

export default function BootcampPage() {
  return (
    <>
      <PageHero
        actions={[
          { label: "Contact the team", href: "/contact" },
          { label: "Back to programs", href: "/programs", secondary: true },
        ]}
        kicker="Young Changemakers Bootcamp"
        lead="Bootcamp is the in-person cohort route: a format built around room quality, mentor proximity, and the confidence shift that happens when serious environments feel reachable."
        meta={["In person", "Campus-led", "Cohort-based"]}
        title="An in-person format that changes what students think is possible."
      />

      <section className="section">
        <div className="site-shell split-band">
          <div>
            <p className="eyebrow">Why it works</p>
            <h2>Context is part of the pedagogy.</h2>
          </div>
          <div className="split-band__list">
            {benefits.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell proof-grid">
          <article className="proof-card">
            <p className="eyebrow">Room quality</p>
            <h3>Closer mentor loops</h3>
            <p>The in-person format allows sharper feedback, faster iteration, and stronger trust than a distant webinar model.</p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">Belief shift</p>
            <h3>Higher ambition ceiling</h3>
            <p>Students build differently once the room itself signals that serious work is expected and supported.</p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">After the event</p>
            <h3>Cohort memory</h3>
            <p>Strong cohorts create a network that lasts beyond the session itself, which is part of the value.</p>
          </article>
        </div>
      </section>
    </>
  );
}
