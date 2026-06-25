import Image from "next/image";
import bg from "@/public/hero.png";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-background pt-20">
      {/* background image, quieter than homepage — sits further back */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Architectural detail"
          fill
          priority
          className="object-cover opacity-[0.12] grayscale dark:opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
      </div>

      {/* blueprint grid, same motif as homepage */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-12">
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-8 bg-accent" />
          About Dimora
          <span className="h-px w-8 bg-accent" />
        </p>

        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
          Built on precision. Sustained by stewardship.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Dimora exists to protect the long-term value of every property we
          touch — through careful management, transparent guidance, and a
          standard of care that doesn&apos;t waver once the deal is signed.
        </p>
      </div>
    </section>
  );
}