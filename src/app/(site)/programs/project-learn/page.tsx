import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Project Learn",
};

export default function ProjectLearnPage() {
  return (
    <>
      <PageHero
        actions={[
          { label: "Start a partnership inquiry", href: "/contact" },
          { label: "See impact", href: "/impact", secondary: true },
        ]}
        kicker="Project Learn"
        lead="Project Learn is the access route in the GRID system: a model for bringing AI exposure and student opportunity into schools and communities that are usually far from the first wave of access."
        meta={["School and NGO delivery", "Long-arc access", "Partner-enabled"]}
        title="Where the mission proves it can travel beyond the obvious rooms."
      />

      <section className="section">
        <div className="site-shell feature-duo">
          <article className="feature-panel feature-panel--dark">
            <p className="eyebrow">Focus</p>
            <h3>AI skilling that starts from context instead of assumption.</h3>
            <p>
              Project Learn is built for students and institutions that are often
              absent from the first wave of AI opportunity narratives.
            </p>
          </article>
          <article className="feature-panel">
            <p className="eyebrow">Why it matters</p>
            <h3>This is where the mission stops being abstract.</h3>
            <p>
              The route shows that GRID can work outside flagship formats and
              still stay structured, credible, and ambitious.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell proof-grid">
          <article className="proof-card">
            <p className="eyebrow">School partners</p>
            <p>Provide student access, local coordination, and the base layer for delivery.</p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">NGO partners</p>
            <p>Help translate program design into community-grounded implementation and continuity.</p>
          </article>
          <article className="proof-card">
            <p className="eyebrow">Support partners</p>
            <p>Unlock devices, curriculum support, logistics, or local mentor capacity where it matters most.</p>
          </article>
        </div>
      </section>
    </>
  );
}
