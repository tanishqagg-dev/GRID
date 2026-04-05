import type { Metadata } from "next";
import SiteLink from "@/components/SiteLink";
import PageHero from "@/components/site/PageHero";
import { aboutDifferentiators } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        actions={[
          { label: "Meet the team", href: "/team" },
          { label: "See the programs", href: "/programs", secondary: true },
        ]}
        kicker="About GRID"
        lead="GRID started from a simple observation: talent is widely distributed, but access to serious rooms, mentors, and visible next steps is not. The organization exists to change that distribution."
        meta={["Section 8 nonprofit", "Student-centered", "Partner-ready"]}
        title="An operating model for student opportunity, not another awareness brand."
      />

      <section className="section">
        <div className="site-shell split-band">
          <div>
            <p className="eyebrow">Why it exists</p>
            <h2>Students hear the language of the future long before they get a credible way into it.</h2>
          </div>
          <div className="split-band__list">
            <p>
              GRID is built to make those entry points visible. That means
              programs with structure, routes with real stakes, and pages that
              explain what happens next instead of hiding it in abstractions.
            </p>
            <p>
              The organization sits between student ambition and the institutions,
              partners, and formats that can help that ambition move.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell feature-duo">
          <article className="feature-panel">
            <p className="eyebrow">Mission</p>
            <h3>Make high-agency AI opportunity more reachable for students who are usually outside the room.</h3>
          </article>
          <article className="feature-panel feature-panel--dark">
            <p className="eyebrow">Vision</p>
            <h3>Build a generation of students who participate in shaping the future instead of watching it from the edge.</h3>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What makes GRID different</p>
              <h2>Clarity matters as much as ambition.</h2>
            </div>
          </div>

          <div className="proof-grid">
            {aboutDifferentiators.map((item) => (
              <article className="proof-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell final-cta">
          <div>
            <p className="eyebrow">Next route</p>
            <h2>If the model makes sense, the next question is where you fit into it.</h2>
          </div>
          <div className="final-cta__body">
            <p>
              Students can enter through programs. Institutions and ecosystem
              partners can start with the team or partnership routes.
            </p>
            <div className="button-row">
              <SiteLink className="button" href="/team">
                Meet the team
              </SiteLink>
              <SiteLink className="button button--secondary" href="/partners">
                See partnership logic
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
