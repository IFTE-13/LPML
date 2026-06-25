"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Properties managed" },
  { value: 20, suffix: "", label: "Years of experience" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 12, suffix: "", label: "Regions served" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.8, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function KeyStats() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="font-serif text-5xl tracking-tight text-foreground md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}