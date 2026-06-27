"use client";

import { motion } from "motion/react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-background pt-20">
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          {badge}
          <span className="h-px w-8 bg-accent" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}