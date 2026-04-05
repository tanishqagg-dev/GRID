import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import { blogEntries } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Updates"
        lead="The editorial layer should carry announcements, team notes, and student stories without turning into filler content."
        meta={["Announcements", "Program notes", "Student stories"]}
        title="A light editorial layer for momentum and context."
      />

      <section className="section">
        <div className="site-shell">
          <div className="proof-grid">
            {blogEntries.map((entry) => (
              <article className="proof-card" key={entry.title}>
                <p className="eyebrow">{entry.category}</p>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
