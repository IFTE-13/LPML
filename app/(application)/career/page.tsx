import { CallToAction } from "@/components/app/call-to-action";
import { PageHero } from "@/components/app/page-hero";
import { CareersAccordion } from "./_components/careersAccordion";
import { openings } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
}

export default function CareersPage() {
  return (
    <main className="bg-background">
      <PageHero
        badge="Careers"
        title="Build a career around exceptional properties."
        description="Join a team dedicated to stewardship, craftsmanship, and long-term thinking. We believe great properties deserve great people."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <CareersAccordion openings={openings} />
        </div>
      </section>

      <CallToAction
        badge="Open Application"
        title="Don't see the perfect role?"
        description="We are always interested in meeting talented professionals who share our passion for exceptional property management."
        buttons={[
          {
            label: "Send Open Application",
            href: "/contact",
          },
        ]}
      />
    </main>
  );
}