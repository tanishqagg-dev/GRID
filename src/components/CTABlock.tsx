import Link from "next/link";

const ctas = [
  {
    label: "For Students",
    title: "Join a program",
    text:
      "Start with the program that matches your stage, not the one with the loudest language.",
    href: "/programs",
  },
  {
    label: "For Partners",
    title: "Partner with us",
    text:
      "Support a program, open a network, or help us expand access where it matters most.",
    href: "/partners",
  },
  {
    label: "For the Team",
    title: "Apply to team",
    text:
      "We are building a team that can operate with ambition, clarity, and follow-through.",
    href: "/team",
  },
];

export default function CTABlock() {
  return (
    <section className="cta-section">
      <div className="site-shell">
        <div className="section-header section-header--center">
          <div>
            <p className="section-kicker font-mono">Next move</p>
            <h2 className="section-title font-clash">
              Pick the door that fits your role.
            </h2>
          </div>
        </div>

        <div className="card-grid card-grid--3">
          {ctas.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`detail-card${index === 0 ? " detail-card--primary" : ""}`}
            >
              <span className="detail-card__eyebrow font-mono">{item.label}</span>
              <h3 className="detail-card__title font-clash">{item.title}</h3>
              <p className="detail-card__text">{item.text}</p>
              <span className="detail-card__link">Open route</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
