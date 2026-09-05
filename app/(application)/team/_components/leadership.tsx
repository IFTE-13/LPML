"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { LeadershipMember } from "../../../../lib/types/team";
import { RiLinkedinLine } from "react-icons/ri";

export function LeadershipSpotlight({
  leadership,
}: {
  leadership: LeadershipMember[];
}) {
  const [selected, setSelected] = useState<LeadershipMember>(leadership[0]);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto container px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Leadership
          </p>

          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            Guiding Livora forward
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our leadership team combines decades of expertise in property
            management, investment strategy, operations, and client service.
          </p>
        </motion.div>

        {/* Featured Leader */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            className="grid items-center gap-12 border-b border-border pb-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
          >
            {/* Image */}
            <div className="relative">
              <div className="relative h-100 lg:h-125 overflow-hidden bg-card">
                <Image
                  src={selected.photo}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-accent/40" />
              <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-accent/40" />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {selected.role}
              </p>

              <h3 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
                {selected.name}
              </h3>

              <p className="mt-8 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground">
                &ldquo;{selected.bio}&rdquo;
              </p>

              <div className="mt-10 flex items-center gap-4">
                {selected.email && (
                  <a
                    href={`mailto:${selected.email}`}
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    aria-label={`Email ${selected.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}

                {selected.linkedin && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                    aria-label={`${selected.name} on LinkedIn`}
                  >
                    <RiLinkedinLine className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Leadership Selector */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {leadership.map((person) => {
            const active = selected.name === person.name;

            return (
              <motion.button
                key={person.name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(person)}
                className={`
                  group
                  overflow-hidden
                  border
                  text-left
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-accent bg-card"
                      : "border-border hover:border-accent/40"
                  }
                `}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      active
                        ? "bg-black/10"
                        : "bg-black/30 group-hover:bg-black/15"
                    }`}
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    {person.role}
                  </p>

                  <h4 className="mt-2 text-xl font-medium text-foreground">
                    {person.name}
                  </h4>

                  <div
                    className={`mt-4 h-px transition-all duration-300 ${
                      active
                        ? "w-16 bg-accent"
                        : "w-8 bg-border group-hover:w-12"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}