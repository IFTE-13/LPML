import Image from "next/image";
import bg from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* Background sketch + scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Architectural blueprint sketch"
          fill
          priority
          className="object-cover opacity-[0.18] dark:opacity-[0.22] grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Faint blueprint grid — reinforces the drafting-table motif */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full container grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 items-center">
        {/* Framed plate */}
        <div className="lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative z-10 bg-card p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border">
              <div className="relative overflow-hidden border border-border">
                <Image
                  src={bg}
                  alt="Technical sketch detail"
                  width={700}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Corner registration marks */}
            <div className="absolute -right-6 -top-6 h-24 w-24 border-r-2 border-t-2 mx-1 border-accent/40" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-2 border-l-2 mx-1 border-accent/40" />
          </div>
        </div>

        {/* Copy block */}
        <div className="lg:order-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Established Precision
            </p>
          </div>

          <h1 className="mb-6 font-serif text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Architectural stewardship for modern legacies.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Bridging visionary design with enduring operational excellence.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View the portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}