"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { projects } from "../data";
import type { Project } from "@/lib/types/project";

const statusStyles: Record<string, string> = {
  Available: "bg-accent text-accent-foreground",
  "Coming Soon": "bg-secondary text-secondary-foreground",
  Sold: "bg-foreground/80 text-background",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project: Project) => (
        <motion.article
          key={project.slug}
          variants={fadeItem}
          className="group relative flex flex-col overflow-hidden border border-border bg-card"
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {project.status && (
              <span
                className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            )}
          </div>

          <div className="p-8">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {project.location}
            </div>

            <h3 className="font-serif text-2xl text-foreground">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
              <div>
                <span className="text-muted-foreground">Starting at</span>{" "}
                <span className="font-semibold text-foreground">
                  {project.price}
                </span>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
