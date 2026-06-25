"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Users, ArrowUpRight } from "lucide-react";

export function JoinTeamCta() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-foreground py-24"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--background) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center border border-accent/40 text-accent">
              <Users className="h-6 w-6" />
            </div>
          </div>

          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-background md:text-5xl">
            Join our team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70">
            We&apos;re always looking for passionate individuals who share our
            commitment to excellence in property stewardship.
          </p>

          <Link
            href="/careers"
            className="group mt-10 inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            View open positions
            <ArrowUpRight className="h-3.5 w-3.5 -translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}