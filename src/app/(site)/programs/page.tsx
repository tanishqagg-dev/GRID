import type { Metadata } from "next";
import ProgramsGrid from "@/components/ProgramsGrid";
import PageHero from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        actions={[
          { label: "Visit Aurora", href: "https://aurora.projectgrid.org", external: true },
          { label: "Contact the team", href: "/contact", secondary: true },
        ]}
        kicker="Programs"
        lead="Each GRID program is designed for a different moment in the student journey: first exposure, visible building, school-scale implementation, or deeper cohort experience."
        meta={[
          "Distinct audiences",
          "Clear partner roles",
          "Direct next steps",
        ]}
        title="Programs should read like routes, not like repeated cards."
      />

      <ProgramsGrid />
    </>
  );
}
