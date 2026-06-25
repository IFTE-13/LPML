const values = [
  {
    title: "Transparency",
    description:
      "Every report, every fee, every decision — explained clearly, before you have to ask.",
  },
  {
    title: "Stewardship",
    description:
      "We treat every property as if its long-term value were our own to protect.",
  },
  {
    title: "Precision",
    description:
      "Details aren't optional in property — they're the difference between managed and merely maintained.",
  },
  {
    title: "Precisio",
    description:
      "Details aren't optional in property — they're the difference between managed and merely maintained.",
  },
  {
    title: "Continuity",
    description:
      "Relationships that outlast a single transaction, built on consistent, responsive care.",
  },
];

export default function OurWhy() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Origin story - takes 2 columns */}
          <div className="lg:col-span-2">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Our Why
            </p>

            <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl">
              We started Dimora because property deserved better stewards.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dimora was founded in 2004, after years of watching property
                owners hand over their most valuable assets to agents who
                treated each transaction as the finish line — not the
                beginning of a relationship.
              </p>
              <p>
                We built Dimora around a different premise: that good
                stewardship doesn&apos;t end at the signing table. It
                continues through every season of ownership — maintenance,
                tenancy, valuation, and the quiet, ongoing work of protecting
                what a property is actually worth.
              </p>
              <p>
                Two decades later, that premise hasn&apos;t changed. What has
                changed is the number of owners who trust us to carry it out.
              </p>
            </div>

            {/* Optional: Founding year badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-2">
              <span className="text-2xl font-serif font-light text-accent">20</span>
              <span className="text-sm text-muted-foreground">Years of Excellence</span>
            </div>
          </div>

          {/* Core values grid - takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className="group relative rounded-lg border border-border/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  {/* Decorative number */}
                  <div className="absolute -top-3 right-4 text-5xl font-serif font-bold text-foreground/5 transition-all group-hover:text-accent/10">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <h3 className="relative font-serif text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}