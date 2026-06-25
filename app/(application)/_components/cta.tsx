import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24">

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="mt-8 font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Precision. Stewardship. Legacy.
        </h2>

        <p className="mx-auto mt-6 max-w-md font-serif text-base italic leading-relaxed text-muted-foreground md:text-lg">
          Join the circle of property owners who trust Dimora to protect and
          elevate their architectural investments.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Landowners
            <ArrowUpRight
              className="h-3.5 w-3.5 -translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Clients
            <ArrowUpRight
              className="h-3.5 w-3.5 -translate-y-px transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}