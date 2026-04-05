import type { Metadata } from "next";
import SiteLink from "@/components/SiteLink";
import PageHero from "@/components/site/PageHero";
import { coreTeam, leadershipTeam } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        actions={[{ label: "Contact the team", href: "/contact" }]}
        kicker="Team"
        lead="The team page should make the organization feel active, accountable, and close enough to the work that the programs still feel human."
        meta={["Founding team", "Program ownership", "Operating roles"]}
        title="A lean team with visible responsibility."
      />

      <section className="section">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Founding team</p>
              <h2>The people holding the direction.</h2>
            </div>
          </div>

          <div className="feature-duo">
            {leadershipTeam.map((member, index) => (
              <article
                className={`feature-panel${index === 1 ? " feature-panel--dark" : ""}`}
                key={member.name}
              >
                <p className="eyebrow">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell">
          <div className="proof-grid">
            {coreTeam.map((member) => (
              <article className="proof-card" key={member.name}>
                <p className="eyebrow">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell final-cta">
          <div>
            <p className="eyebrow">Open door</p>
            <h2>If you want to build with the team, start the conversation cleanly.</h2>
          </div>
          <div className="final-cta__body">
            <p>
              GRID needs operators, storytellers, program builders, and partner
              connectors. The right next step is a focused conversation, not a
              vague expression of interest.
            </p>
            <div className="button-row">
              <SiteLink className="button" href="/contact">
                Reach out
              </SiteLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
