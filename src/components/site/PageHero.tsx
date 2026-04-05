import SiteLink from "@/components/SiteLink";
import { SiteAction } from "@/lib/site-content";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead: string;
  meta?: string[];
  actions?: SiteAction[];
  aside?: React.ReactNode;
};

export default function PageHero({
  kicker,
  title,
  lead,
  meta = [],
  actions = [],
  aside,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-shell page-hero__shell">
        <div className="page-hero__headline">
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
        </div>

        <div className="page-hero__body">
          <p className="page-hero__lead">{lead}</p>

          {meta.length > 0 && (
            <div className="tag-row">
              {meta.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          )}

          {actions.length > 0 && (
            <div className="button-row">
              {actions.map((action) => (
                <SiteLink
                  className={`button${action.secondary ? " button--secondary" : ""}`}
                  external={action.external}
                  href={action.href}
                  key={`${action.label}-${action.href}`}
                >
                  {action.label}
                </SiteLink>
              ))}
            </div>
          )}

          {aside}
        </div>
      </div>
    </section>
  );
}
