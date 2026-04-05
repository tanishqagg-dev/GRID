import SiteLink from "@/components/SiteLink";
import { navItems, programSummaries } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__shell">
        <div className="site-footer__hero">
          <p className="eyebrow">Project GRID</p>
          <h2>Designed so students can find a real way in.</h2>
          <p>
            GRID is the lead organization behind a set of student-facing programs
            built to make AI, entrepreneurship, and high-agency opportunity more
            visible, credible, and reachable.
          </p>
        </div>

        <div className="site-footer__grid">
          <div>
            <p className="eyebrow">Programs</p>
            <div className="site-footer__links">
              {programSummaries.map((program) => (
                <SiteLink
                  external={program.external}
                  href={program.href}
                  key={program.slug}
                >
                  {program.shortLabel}
                </SiteLink>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <div className="site-footer__links">
              {navItems.map((item) => (
                <SiteLink href={item.href} key={item.href}>
                  {item.label}
                </SiteLink>
              ))}
              <SiteLink href="/about">About</SiteLink>
            </div>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <div className="site-footer__links">
              <a href="mailto:hello@projectgrid.org">hello@projectgrid.org</a>
              <SiteLink href="/contact">General inquiries</SiteLink>
              <SiteLink href="/partners">Partnerships</SiteLink>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>Section 8 nonprofit. Built for students who should not need perfect proximity to get started.</p>
          <p>Copyright 2026 Project GRID</p>
        </div>
      </div>
    </footer>
  );
}
