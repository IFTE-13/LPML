import Image from "next/image";
import backgroundImage from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Architectural blueprint sketch"
          fill
          priority
          className="object-cover opacity-[0.18] dark:opacity-[0.32] grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#F9F8F6] via-[#F9F8F6]/85 to-[#F9F8F6]/40 dark:from-[#0F1115] dark:via-[#0F1115]/90 dark:to-[#0F1115]/50" />
      </div>
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full container grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 items-center">
        <div className="lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative z-10 bg-white dark:bg-[#181A20] p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5 dark:ring-white/5">
              <div className="relative overflow-hidden border border-black/10 dark:border-white/10">
                <Image
                  src={backgroundImage}
                  alt="Technical sketch detail"
                  width={700}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="absolute -right-6 -top-6 h-24 w-24 border-r-2 border-t-2 mx-1 border-[#C5A059]/40 dark:border-[#D4AF37]/40" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-2 border-l-2 mx-1 border-[#C5A059]/40 dark:border-[#D4AF37]/40" />
          </div>
        </div>

        <div className="lg:order-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C5A059] dark:bg-[#D4AF37]" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C5A059] dark:text-[#D4AF37]">
              Established Precision
            </p>
          </div>

          <h1 className="mb-6 font-serif text-4xl leading-[1.08] tracking-tight text-black dark:text-white md:text-6xl lg:text-7xl">
            Architectural stewardship for modern legacies.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70 md:text-lg">
            Bridging visionary design with enduring operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}