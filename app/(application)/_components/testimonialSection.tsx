"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import me from "@/assets/me.png";

const testimonials = [
  {
    name: "Emily John",
    role: "Homeowner, Tarifa",
    avatar: me,
    image: one,
    quote:
      "We couldn't have asked for a better experience. From the moment we reached out, the team went above and beyond.",
  },
  {
    name: "Michael Foster",
    role: "Property Investor",
    avatar: me,
    image: two,
    quote:
      "Professional, responsive, and incredibly knowledgeable. The entire process felt seamless.",
  },
  {
    name: "Sophia Bennett",
    role: "Commercial Tenant",
    avatar: me,
    image: three,
    quote:
      "Exceptional attention to detail and outstanding communication from start to finish.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);

  const previous = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[active];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Client Voices
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Hear from our
              <br />
              happy customers
            </h2>
          </div>

          <p className="max-w-xs text-muted-foreground md:ml-auto md:self-end text-end hidden md:block">
            See how we&apos;ve helped others find their perfect property and
            create lasting value.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT */}
          <div className="relative min-h-70">
            <Quote className="mb-6 h-8 w-8 text-accent/40" strokeWidth={1.5} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <blockquote className="max-w-md text-lg leading-relaxed text-foreground/90 h-20">
                  {item.quote}
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={52}
                    height={52}
                    className="h-13 w-13 rounded-full border border-border object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex gap-3">
                <button
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-accent" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative aspect-16/10 overflow-hidden border border-border bg-card p-2">
              <div className="relative h-full w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.image.src ?? active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Signature corner marks, matching the Hero's plate motif */}
            {/* Signature corner marks — mirrored from the Hero's plate motif */}
<div className="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-accent/40" />
<div className="absolute -bottom-4 -right-4 h-16 w-16 border-b-2 border-r-2 border-accent/40" />
          </div>
        </div>
      </div>
    </section>
  );
}