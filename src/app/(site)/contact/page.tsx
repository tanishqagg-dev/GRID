import type { Metadata } from "next";
import PageHero from "@/components/site/PageHero";
import ContactForm from "@/components/site/ContactForm";
import { contactRoutes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        lead="The contact page should route people cleanly. Students, schools, sponsors, and media should know what conversation they are starting before they type a word."
        meta={["hello@projectgrid.org", "New Delhi", "Partner inquiries welcome"]}
        title="Use the route that matches the ask."
      />

      <section className="section">
        <div className="site-shell">
          <div className="proof-grid">
            {contactRoutes.map((route) => (
              <article className="proof-card" key={route.label}>
                <p className="eyebrow">{route.label}</p>
                <p>{route.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-shell feature-duo">
          <article className="feature-panel feature-panel--dark">
            <p className="eyebrow">Inquiry form</p>
            <h3>Structured enough to route the message quickly.</h3>
            <ContactForm />
          </article>

          <article className="feature-panel">
            <p className="eyebrow">Direct details</p>
            <h3>Use email when you already know what conversation you need.</h3>
            <p>General: hello@projectgrid.org</p>
            <p>Partnerships: contact through the form or the partner route</p>
            <p>Location: New Delhi, India</p>
          </article>
        </div>
      </section>
    </>
  );
}
