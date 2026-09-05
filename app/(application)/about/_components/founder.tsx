"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import founder from "@/assets/me.png";

export default function FounderSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Founder
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            The person behind Livora.
          </h2>

          <p className="mt-3 text-muted-foreground">
            Meet the vision guiding every property we manage.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden border border-border bg-card"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="font-serif text-4xl text-foreground md:text-5xl">
                Hello.
              </h3>

              <p className="mt-4 text-xl text-muted-foreground">
                I&apos;m Mohammed Iftekhar, founder of Livora.
              </p>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Livora was created with a simple belief: exceptional
                  properties deserve exceptional stewardship.
                </p>

                <p>
                  Over the years, I have worked across property operations,
                  valuation, development planning, and client advisory. That
                  experience shaped a management philosophy focused on
                  transparency, accountability, and long-term value creation.
                </p>

                <p>
                  Every property tells a story. Our role is to protect that
                  story, enhance its value, and ensure it continues to serve
                  owners and residents for generations to come.
                </p>

                <p>
                  Today, Livora combines traditional property expertise with
                  modern systems, helping clients make informed decisions while
                  preserving the character and integrity of their investments.
                </p>
              </div>

              {/* Accent Divider */}
              <div className="mt-10 h-px w-32 bg-accent" />

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Let&apos;s Talk

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Direct Contact
                  </p>

                  <p className="mt-1 text-sm text-foreground">
                    founder@livora.nl
                  </p>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="relative flex items-end justify-center">
              {/* Accent Glow */}
              <div className="absolute bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
              {/** Use transparent image for this section */}
              <div className="relative h-3/4 w-full">
                <Image
                  src={founder}
                  alt="Founder"
                  className="object-contain object-bottom"
                  fill
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}