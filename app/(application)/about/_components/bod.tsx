"use client";

import { motion, type Variants } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";

interface BoardMember {
  name: string;
  title: string;
  credential: string;
  photo: StaticImageData;
}

const board: BoardMember[] = [
  {
    name: "Eleanor Voss",
    title: "Chairman of the Board",
    credential: "Former director, Dutch Association of Real Estate Brokers",
    photo: one,
  },
  {
    name: "Marcus Heijden",
    title: "Independent Director",
    credential: "20+ years in institutional property finance",
    photo: two,
  },
  {
    name: "Priya Raghavan",
    title: "Non-Executive Director",
    credential: "Urban planning & sustainable development advisor",
    photo: three,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BoardOfDirectors() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Governance
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Board of Directors
          </h2>
          <p className="mt-4 text-muted-foreground">
            Oversight and guidance from leaders across real estate, finance,
            and urban development.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-border"
        >
          {board.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeItem}
              className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent">{member.title}</p>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
                {member.credential}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}