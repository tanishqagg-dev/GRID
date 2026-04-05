"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import SiteLink from "@/components/SiteLink";
import Magnetic from "@/components/Magnetic";
import { navItems, programSummaries } from "@/lib/site-content";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setProgramsOpen(false);
  };

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="site-shell site-nav__shell">
        <SiteLink
          aria-label="Project GRID home"
          className="site-nav__brand"
          href="/"
          onClick={closeMenus}
        >
          <Image
            alt="Project GRID"
            height={60}
            priority
            src="/gridlogo.svg"
            width={136}
          />
          <div className="site-nav__brandLockup">
            <span className="site-nav__brandText">Project GRID</span>
            <span className="site-nav__brandSub">Student opportunity system</span>
          </div>
        </SiteLink>

        <div className="site-nav__desktop">
          <div
            className="site-nav__programs"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button
              aria-expanded={programsOpen}
              className={`site-nav__link${
                pathname.startsWith("/programs") ? " site-nav__link--active" : ""
              }`}
              onClick={() => setProgramsOpen((value) => !value)}
              type="button"
            >
              Programs
              <CaretDown
                className={`site-nav__chevron${programsOpen ? " site-nav__chevron--open" : ""}`}
                weight="bold"
              />
            </button>

            <div
              className={`site-nav__dropdown${
                programsOpen ? " site-nav__dropdown--open" : ""
              }`}
            >
              <div className="site-nav__dropdownIntro">
                <p className="eyebrow">Choose a route</p>
                <p>
                  Each program serves a different type of student or partner entry
                  point. Aurora is live on its own site.
                </p>
              </div>

              <div className="site-nav__dropdownGrid">
                {programSummaries.map((program) => (
                  <SiteLink
                    className="site-nav__dropdownLink"
                    external={program.external}
                    href={program.href}
                    key={program.slug}
                    onClick={closeMenus}
                  >
                    <span className="site-nav__dropdownMeta">{program.status}</span>
                    <strong>{program.shortLabel}</strong>
                    <span>{program.tagline}</span>
                    <em>{program.audience}</em>
                  </SiteLink>
                ))}
              </div>
            </div>
          </div>

          {navItems
            .filter((item) => item.label !== "Home" && item.label !== "Programs")
            .map((item) => (
              <Magnetic key={item.href}>
                <SiteLink
                  className={`site-nav__link${
                    isActive(pathname, item.href) ? " site-nav__link--active" : ""
                  }`}
                  href={item.href}
                  onClick={closeMenus}
                >
                  {item.label}
                </SiteLink>
              </Magnetic>
            ))}
        </div>

        <div className="site-nav__actions">
          <Magnetic>
            <SiteLink
              className="button button--secondary site-nav__aurora"
              external
              href="https://aurora.projectgrid.org"
              onClick={closeMenus}
            >
              Aurora live
            </SiteLink>
          </Magnetic>

          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle site menu"
            className="site-nav__toggle"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`site-nav__mobile${mobileOpen ? " site-nav__mobile--open" : ""}`}>
        <div className="site-shell site-nav__mobileShell">
          <SiteLink
            className="site-nav__mobileAurora"
            external
            href="https://aurora.projectgrid.org"
            onClick={closeMenus}
          >
            Aurora live site
          </SiteLink>

          {navItems.map((item) => (
            <SiteLink
              className="site-nav__mobileLink"
              href={item.href}
              key={item.href}
              onClick={closeMenus}
            >
              {item.label}
            </SiteLink>
          ))}

          <div className="site-nav__mobileGroup">
            <span className="site-nav__mobileLabel">Program routes</span>
            {programSummaries.map((program) => (
              <SiteLink
                className="site-nav__mobileSubLink"
                external={program.external}
                href={program.href}
                key={program.slug}
                onClick={closeMenus}
              >
                <strong>{program.shortLabel}</strong>
                <span>{program.tagline}</span>
              </SiteLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
