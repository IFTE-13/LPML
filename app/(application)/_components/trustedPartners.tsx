import Image, { type StaticImageData } from "next/image";

interface Partner {
  name: string;
  logo?: StaticImageData | string;
}

const partners: Partner[] = [
  { name: "Meridian Capital" },
  { name: "Northbridge Group" },
  { name: "Solace Properties" },
  { name: "Aurelius Estates" },
  { name: "Harbor & Vine" },
  { name: "Castellan Partners" },
  { name: "Verity Developments" },
  { name: "Linden & Co." },
];

export default function TrustedPartners() {
  return (
    <section className="border-border bg-background py-24">
      <div className="mx-auto w-full px-6 lg:px-12">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by the names that matter
        </p>

        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent sm:w-24" />

          <div className="flex w-max animate-marquee gap-16 group-hover:paused">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-10 shrink-0 items-center"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    height={32}
                    width={140}
                    className="h-8 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 hover:text-foreground">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}