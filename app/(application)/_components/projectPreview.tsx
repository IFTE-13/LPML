"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import img from "@/public/hero.png";

interface Project {
  id: number;
  title: string;
  location: string;
  image: StaticImageData;
  description: string;
  price?: string;
  beds?: number;
  baths?: number;
  area?: string;
  status?: "Available" | "Sold" | "Coming Soon";
  href?: string;
}

const destinations: Project[] = [
  {
    id: 1,
    title: "Los Lances Residence",
    location: "Tarifa, Spain",
    image: img,
    description:
      "A coastal residence with consistent sea views, steps from Los Lances Beach.",
    price: "€890,000",
    beds: 4,
    baths: 3,
    area: "240 m²",
    status: "Available",
    href: "#",
  },
  {
    id: 2,
    title: "Capadocia Valley House",
    location: "Nevşehir, Turkey",
    image: img,
    description:
      "Set against ancient cave-dwelling landscapes, with private balloon-launch views.",
    price: "€420,000",
    beds: 3,
    baths: 2,
    area: "180 m²",
    status: "Available",
    href: "#",
  },
  {
    id: 3,
    title: "Saint Antoine Villa",
    location: "Provence, France",
    image: img,
    description:
      "A mountain-village villa surrounded by hiking trails and vineyard terraces.",
    price: "€1,250,000",
    beds: 5,
    baths: 4,
    area: "310 m²",
    status: "Coming Soon",
    href: "#",
  },
  {
    id: 4,
    title: "Nagano Retreat",
    location: "Nagano, Japan",
    image: img,
    description:
      "Traditional timber architecture restored for modern living, framed by mountains.",
    price: "¥98,000,000",
    beds: 3,
    baths: 2,
    area: "165 m²",
    status: "Sold",
    href: "#",
  },
];

const statusStyles: Record<NonNullable<Project["status"]>, string> = {
  Available: "bg-accent text-accent-foreground",
  "Coming Soon": "bg-secondary text-secondary-foreground",
  Sold: "bg-foreground/80 text-background",
};

export default function ProjectPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = destinations[activeIndex];

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background — full width/height, unconstrained */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center">
        <div className="relative mx-auto h-full w-full container px-6">
          {/* text block, vertically centered within the 7xl container */}
          <div className="flex h-full items-center">
            <div className="max-w-xl text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {active.status && (
                    <span
                      className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[active.status]}`}
                    >
                      {active.status}
                    </span>
                  )}

                  <p className="mb-2 text-sm uppercase tracking-widest text-white/80">
                    {active.location}
                  </p>

                  <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
                    {active.title}
                  </h1>

                  <p className="mb-6 max-w-md text-white/80">{active.description}</p>

                  <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
                    {active.price && (
                      <span className="text-lg font-semibold text-white">
                        {active.price}
                      </span>
                    )}
                    {active.beds !== undefined && <span>{active.beds} Beds</span>}
                    {active.baths !== undefined && <span>{active.baths} Baths</span>}
                    {active.area && <span>{active.area}</span>}
                  </div>

                  {active.href && (
                    <a
                      href={active.href}
                      className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      View project
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-10 right-6 hidden gap-4 lg:right-12 sm:flex">
            {destinations.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : 0.75,
                  }}
                  whileHover={{ opacity: 1, y: -4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`group relative h-56 w-40 shrink-0 overflow-hidden rounded-xl border ${
                    isActive ? "border-accent" : "border-white/20"
                  }`}
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 ring-2 ring-accent"
                      transition={{ duration: 0.35 }}
                    />
                  )}
                  <div className="absolute bottom-4 left-4 text-left text-white">
                    <p className="text-xs opacity-80">{item.location}</p>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="absolute inset-x-6 bottom-6 flex flex-col items-center gap-3 sm:hidden">
            <div className="flex items-center gap-2">
              {destinations.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${item.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}