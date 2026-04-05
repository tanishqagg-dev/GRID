import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "N3C",
};

const flow = ["Learn", "Build", "Implement", "Showcase", "Incubate"];

export default function N3CPage() {
  return (
    <>
      <PageHero
        actions={[
          { label: "Start a school inquiry", href: "/contact" },
          { label: "See impact", href: "/impact", secondary: true },
        ]}
        kicker="N3C"
        lead="N3C is the school-scale route in the GRID system: a challenge format built to help students move from exposure to visible action without losing institutional clarity."
        meta={["School-facing", "Challenge pathway", "Implementation-minded"]}
        title="A changemaking challenge built for school-scale ambition."
      />

      <section className="section">
        <div className="site-shell feature-duo">
          <article className="feature-panel feature-panel--dark">
            <p className="eyebrow">What it solves</p>
            <h3>Schools need a format students can enter quickly and teachers can still trust.</h3>
            <p>
              N3C is designed to turn local problem-solving into a repeatable
              student pathway instead of a one-day contest or poster exercise.
            </p>
          </article>
          <article className="feature-panel">
            <p className="eyebrow">What schools get</p>
            <h3>Clarity, participation, and a visible arc from idea to action.</h3>
            <p>
              The format helps schools hold ambition at volume while keeping the
              student experience legible from the first announcement onward.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How the route works</p>
              <h2>A five-step flow schools can actually follow.</h2>
            </div>
          </div>

          <div className="flow-grid">
            {flow.map((item) => (
              <article className="flow-card" key={item}>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
