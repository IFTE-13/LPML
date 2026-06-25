"use client";

import { motion, type Variants } from "motion/react";
import { Award } from "lucide-react";

interface Recognition {
  year: string;
  title: string;
  issuer: string;
}

const recognitions: Recognition[] = [
  {
    year: "2025",
    title: "Excellence in Property Stewardship",
    issuer: "National Real Estate Council",
  },
  {
    year: "2023",
    title: "Top Property Management Firm",
    issuer: "Property Management Awards",
  },
  {
    year: "2021",
    title: "Outstanding Client Service",
    issuer: "Dutch Association of Real Estate Brokers",
  },
  {
    year: "2018",
    title: "Rising Firm of the Year",
    issuer: "Regional Business Excellence Awards",
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

export default function AwardsRecognition() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Recognition
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Awards & recognitions
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-border"
        >
          {recognitions.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeItem}
              className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-accent/30">
                <Award className="h-4 w-4 text-accent" strokeWidth={1.5} />
              </div>

              <p className="w-16 shrink-0 font-mono text-sm tracking-tight text-muted-foreground">
                {item.year}
              </p>

              <h3 className="flex-1 text-base font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground sm:text-right">
                {item.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}