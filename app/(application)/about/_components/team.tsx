"use client";

import { motion, type Variants } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import me from "@/assets/me.png";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  photo: StaticImageData;
}

const team: TeamMember[] = [
  {
    name: "Sophia Bennett",
    role: "Head of Property Management",
    specialty: "Tenant relations & maintenance operations",
    photo: me,
  },
  {
    name: "Daniel Voss",
    role: "Senior Valuation Specialist",
    specialty: "Certified taxaties & market analysis",
    photo: one,
  },
  {
    name: "Mireille Dubois",
    role: "Lead Sales Agent",
    specialty: "Residential acquisitions & negotiations",
    photo: two,
  },
  {
    name: "Tomás Alves",
    role: "Operations Coordinator",
    specialty: "Client onboarding & compliance",
    photo: three,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TeamOverview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Our Team
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            The people behind the stewardship
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeItem}>
              <div className="relative aspect-3/4 overflow-hidden bg-card">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-accent">{member.role}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {member.specialty}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}