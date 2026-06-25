"use client";

import { motion, type Variants } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import img from "@/public/hero.png";

interface GalleryItem {
  src: StaticImageData;
  title: string;
  location: string;
  span: "wide" | "tall" | "default";
}

const gallery: GalleryItem[] = [
  { src: img, title: "Los Lances Residence", location: "Tarifa, Spain", span: "tall" },
  { src: one, title: "Capadocia Valley House", location: "Nevşehir, Turkey", span: "wide" },
  { src: two, title: "Saint Antoine Villa", location: "Provence, France", span: "default" },
  { src: three, title: "Nagano Retreat", location: "Nagano, Japan", span: "tall" },
  { src: img, title: "Herenstraat Townhouse", location: "Utrecht, Netherlands", span: "wide" },
  { src: one, title: "Castellan Estate", location: "Tuscany, Italy", span: "tall" },
  { src: two, title: "Linden Court", location: "Amsterdam, Netherlands", span: "wide" },
  { src: three, title: "Aurelius Loft", location: "Lisbon, Portugal", span: "default" },
  { src: three, title: "Aurelius Loft", location: "Lisbon, Portugal", span: "default" },
];

const spanClasses: Record<GalleryItem["span"], string> = {
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:col-span-1 sm:row-span-2",
  default: "sm:col-span-1 sm:row-span-1",
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Gallery
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            A closer look at our work
          </h2>
        </div>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 auto-rows-[160px] gap-3 sm:grid-cols-3 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[240px] lg:gap-5"
        >
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeItem}
              className={`group relative overflow-hidden bg-card ${spanClasses[item.span]}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-foreground/0 p-5 transition-colors duration-300 group-hover:bg-foreground/50">
                <div className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-base font-semibold text-background">
                    {item.title}
                  </h3>
                  <p className="text-sm text-background/80">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}