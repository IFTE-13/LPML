import { Metadata } from "next";
import { PageHero } from "@/components/app/page-hero";
import { CallToAction } from "@/components/app/call-to-action";
import ProjectsList from "./_components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <PageHero
        badge="Our Work"
        title="Architectural stewardship for enduring legacies."
        description="Each project is a collaboration between our team, our clients, and the craftspeople who bring vision to reality. Browse our portfolio of restored heritage properties and contemporary residences."
      />

      <section className="pb-24">
        <div className="mx-auto container px-6 lg:px-12">
          <ProjectsList />
        </div>
      </section>

      <CallToAction
        title="Ready to discuss your property?"
        description="Whether you're planning a restoration, a new build, or seeking management services, our team is ready to help."
        buttons={[
          {
            label: "Get in Touch",
            href: "/contact",
          },
        ]}
      />
    </main>
  );
}
