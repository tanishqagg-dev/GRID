import type { Metadata } from "next";
import SiteLink from "@/components/SiteLink";
import PartnersStrip from "@/components/PartnersStrip";
import PageHero from "@/components/site/PageHero";
import { partnerTiers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        actions={[{ label: "Start a partnership inquiry", href: "/contact" }]}
        kicker="Partners"
        lead="The partners page should explain who already trusts the work, what collaboration looks like in practice, and why backing GRID is substantively useful rather than symbolically neat."
        meta={["Institutions", "Industry", "Delivery partners"]}
        title="Partnerships should expand access, not just improve the deck."
      />

      <PartnersStrip />

      <section className="section">
        <div className="site-shell">
          <div className="proof-grid">
            {partnerTiers.map((tier) => (
              <article className="proof-card" key={tier.tier}>
                <p className="eyebrow">{tier.tier}</p>
                <p>{tier.examples}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-shell split-band">
          <div>
            <p className="eyebrow">What partners get</p>
            <h2>A program story strong enough to hold visibility, mentorship, funding, or implementation support.</h2>
          </div>
          <div className="split-band__list">
            <p>Clear student-facing entry points instead of vague innovation language.</p>
            <p>Credible rooms, visible programs, and sponsor roles that can be described without filler.</p>
            <p>A collaboration story that reads as useful, not ornamental.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell final-cta">
          <div>
            <p className="eyebrow">Inquiry route</p>
            <h2>If you want to build with GRID, the next step should be frictionless.</h2>
          </div>
          <div className="final-cta__body">
            <p>
              Sponsors, institutions, and ecosystem collaborators can use the
              contact route to start a focused conversation with the team.
            </p>
            <div className="button-row">
              <SiteLink className="button" href="/contact">
                Start the conversation
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
