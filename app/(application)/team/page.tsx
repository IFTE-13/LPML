
import { Metadata } from "next";
import { LeadershipSpotlight } from "./_components/leadership";
import { DepartmentSection } from "./_components/team";
import { leadership, departments } from "./data";
import { PageHero } from "@/components/app/page-hero";
import { CallToAction } from "@/components/app/call-to-action";


export const metadata: Metadata = {
  title: "Team",
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="Our Team"
        title="The people behind every property"
        description="From valuations to tenant relations, every member of our team brings a specific kind of care to the work of stewardship."
      />
      <LeadershipSpotlight leadership={leadership} />

      <section className="bg-background py-16">
        <div className="mx-auto container px-6 lg:px-12">
          <div className="mb-4">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Our departments
            </h2>
            <p className="mt-2 text-muted-foreground">
              Specialized teams dedicated to excellence in every area.
            </p>
          </div>

          <div>
            {departments.map((dept, index) => (
              <DepartmentSection
                key={dept.title}
                department={dept}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Join our team"
        description="We're always looking for passionate individuals who share our commitment to excellence in property stewardship."
        buttons={[
          {
            label: "View open positions",
            href: "/career",
          },
        ]}
      />
    </>
  );
}