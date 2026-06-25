"use client";

import { motion } from "motion/react";

export function TeamHero() {
  return (
    <section className="bg-background pt-32 pb-12 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 text-center lg:px-12"
      >
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Our Team
          <span className="h-px w-8 bg-accent" />
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
          The people behind every property
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From valuations to tenant relations, every member of our team
          brings a specific kind of care to the work of stewardship.
        </p>
      </motion.div>
    </section>
  );
}