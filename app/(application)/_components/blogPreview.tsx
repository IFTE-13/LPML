"use client";

import { motion, type Variants } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: StaticImageData;
}

const posts: Post[] = [
  {
    slug: "buying-your-first-home-in-utrecht",
    title: "Buying your first home in Utrecht",
    excerpt:
      "What first-time buyers should know about financing, viewings, and the local market before making an offer.",
    category: "Buying Guide",
    date: "12 June 2026",
    image: one,
  },
  {
    slug: "what-a-taxatie-actually-covers",
    title: "What a property valuation actually covers",
    excerpt:
      "A breakdown of what's inspected, how long it takes, and when you'll need a certified report.",
    category: "Valuations",
    date: "28 May 2026",
    image: two,
  },
  {
    slug: "managing-property-from-a-distance",
    title: "Managing property from a distance",
    excerpt:
      "How remote owners stay informed on maintenance, tenants, and upkeep without being on-site.",
    category: "Property Management",
    date: "9 May 2026",
    image: three,
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Insights
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
              From the Livora journal
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all articles
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {posts.map((post) => (
            <motion.article key={post.slug} variants={fadeItem}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-4/3 overflow-hidden bg-card">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {post.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <p className="mt-4 text-xs text-muted-foreground/70">
                  {post.date}
                </p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}