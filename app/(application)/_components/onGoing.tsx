"use client";

import { motion } from "motion/react";
import Image from "next/image";

import hero from "@/public/hero.png";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";

const projects = [
  {
    title: "The Waterfront Residences",
    location: "Amsterdam, Netherlands",
    progress: 68,
    status: "In Progress",
    image: hero,
    featured: true,
  },
  {
    title: "Oakhaven Estate",
    location: "Aalsmeer",
    progress: 42,
    status: "Construction",
    image: one,
  },
  {
    title: "The Penthouse Collection",
    location: "Downtown Metro",
    progress: 87,
    status: "Finishing",
    image: two,
  },
];
export default function OngoingProjects() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Ongoing Projects
            </p>

            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Active Developments
            </h2>

            <p className="mt-3 max-w-md text-muted-foreground">
              Explore our current residential and commercial
              developments across prime locations.
            </p>
          </div>

          <button className="hidden text-sm uppercase tracking-[0.2em] text-accent md:block">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-150 overflow-hidden rounded-xl"
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

            <div className="absolute left-8 top-8">
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                {projects[0].progress}% Complete
              </span>
            </div>

            <div className="absolute bottom-8 left-8 text-white">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {projects[0].status}
              </div>

              <h3 className="font-serif text-4xl">
                {projects[0].title}
              </h3>

              <p className="mt-2 text-white/80">
                {projects[0].location}
              </p>
            </div>
          </motion.article>

          {/* Side Projects */}
          <div className="grid gap-4">
            {projects.slice(1).map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative min-h-72.5 overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur-md">
                    {project.progress}% Complete
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 text-white">
                  <div className="mb-2 flex items-center gap-2 text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </div>

                  <h3 className="font-serif text-xl">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white/70">
                    {project.location}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}