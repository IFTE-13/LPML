"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Calendar, Building } from "lucide-react";
import { PageHero } from "@/components/app/page-hero";
import { CallToAction } from "@/components/app/call-to-action";
import type { Project } from "@/lib/types/project";

const statusStyles: Record<string, string> = {
  Available: "bg-accent text-accent-foreground",
  "Coming Soon": "bg-secondary text-secondary-foreground",
  Sold: "bg-foreground/80 text-background",
};

export default function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <main className="bg-background">
      <PageHero
        badge={project.status}
        title={project.title}
        description={project.location}
      />

      <section className="pb-24">
        <div className="mx-auto container px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-3/2 overflow-hidden border border-border bg-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>

              <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
                {project.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{project.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4 text-accent" />
                  <span>{project.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-accent" />
                  <span>{project.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-4 w-4 text-accent" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Completed: {project.completionDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-accent" />
                  <span>{project.architect}</span>
                </div>
              </div>

              <p className="font-semibold text-3xl text-foreground">
                {project.price}
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Overview
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Key Features
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-16">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-accent">
              Project Gallery
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative aspect-4/3 overflow-hidden border border-border bg-card"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Interested in this property?"
        description="Contact our team for pricing details, availability, or to schedule a private viewing."
        buttons={[
          {
            label: "Back to Projects",
            href: "/projects",
            variant: "secondary",
          },
          {
            label: "Contact Us",
            href: "/contact",
          },
        ]}
      />
    </main>
  );
}
