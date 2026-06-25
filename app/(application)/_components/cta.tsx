"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-foreground py-24"
    >
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--background) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Optional Glow */}
      <div className="absolute left-1/2 top-1/2 h-100px w-100px -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* Heading */}
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-background md:text-5xl lg:text-6xl">
            Precision. Stewardship. Legacy.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            Join the circle of property owners who trust Dimora to protect and
            elevate their architectural investments through thoughtful
            management and long-term stewardship.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              Landowners

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-background/20 px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Clients

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}