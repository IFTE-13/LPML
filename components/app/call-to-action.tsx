"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

interface CallToActionProps {
  badge?: string;
  title: string;
  description: string;
  buttons: CTAButton[];
}

export function CallToAction({
  badge,
  title,
  description,
  buttons,
}: CallToActionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-foreground py-24"
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--background) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {badge}
            </p>
          )}

          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-background md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            {description}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className={`group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors ${
                  button.variant === "secondary"
                    ? "border border-background/20 text-background hover:bg-background hover:text-foreground"
                    : "bg-accent text-accent-foreground hover:bg-background hover:text-foreground"
                }`}
              >
                {button.label}

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}