import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      {/* blueprint grid, same motif as the Hero */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-2xl px-6 text-center">
        <p className="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Error 404
          <span className="h-px w-8 bg-accent" />
        </p>

        <h1 className="font-serif text-6xl leading-[1.05] tracking-tight text-foreground md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          This address doesn&apos;t exist on our records.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for may have been moved, renamed, or
          never built in the first place. Let&apos;s get you back on solid
          ground.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Home className="h-4 w-4" />
            Return home
          </Link>

          <Link
            href="/woningen"
            className="group inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Search className="h-4 w-4" />
            Browse properties
          </Link>
        </div>

        {/* plate label, same device as the Hero's framed sketch */}
        <div className="mt-16 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          <span>Fig. 404</span>
          <span className="h-px w-6 bg-border" />
          <span>Not Found</span>
        </div>
      </div>
    </section>
  );
}