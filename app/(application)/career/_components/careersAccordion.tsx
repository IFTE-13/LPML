"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { JobOpening } from "../types";

export function CareersAccordion({
  openings,
}: {
  openings: JobOpening[];
}) {
  const [active, setActive] = useState<string | null>(openings[0]?.id ?? null);

  return (
    <div className="border-t border-border">
      {openings.map((job) => {
        const isOpen = active === job.id;

        return (
          <div
            key={job.id}
            className="border-b border-border"
          >
            <button
              onClick={() =>
                setActive(isOpen ? null : job.id)
              }
              className="flex w-full items-center justify-between py-8 text-left"
            >
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Applications Open
                </p>

                <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                  {job.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {job.location} · {job.type}
                </p>
              </div>

              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-10">
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                      {job.description}
                    </p>

                    <div className="mt-10 grid gap-10 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-semibold text-foreground">
                          Responsibilities
                        </h4>

                        <ul className="space-y-3 text-muted-foreground">
                          {job.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-4 font-semibold text-foreground">
                          Requirements
                        </h4>

                        <ul className="space-y-3 text-muted-foreground">
                          {job.requirements.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-accent">
                          Department
                        </p>

                        <p className="mt-2 text-foreground">
                          {job.department}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-accent">
                          Location
                        </p>

                        <p className="mt-2 text-foreground">
                          {job.location}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-accent">
                          Deadline
                        </p>

                        <p className="mt-2 text-foreground">
                          {job.deadline}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <a
                        href="#"
                        className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        Apply Now

                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}