
import { Metadata } from "next";
import { JoinTeamCta } from "./_components/cta";
import { TeamHero } from "./_components/hero";
import { LeadershipSpotlight } from "./_components/leadership";
import { DepartmentSection } from "./_components/team";
import { leadership, departments } from "./data";


export const metadata: Metadata = {
  title: "Team",
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
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

      <JoinTeamCta />
    </>
  );
}