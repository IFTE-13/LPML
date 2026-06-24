import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Woningen", href: "/woningen" },
  { label: "Taxaties", href: "/taxaties" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

const hours = [
  { day: "Zondag & maandag", time: "Gesloten" },
  { day: "Dinsdag t/m donderdag", time: "09:30 – 17:30" },
  { day: "Vrijdag", time: "09:30 – 21:00" },
  { day: "Zaterdag", time: "09:00 – 16:30" },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <Separator className="bg-border" />

      <div className="mx-auto container px-6 py-16 md:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* wordmark + nav + social */}
          <div className="md:col-span-7">
            <Link
              href="/"
              className="font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Dimora
            </Link>

            <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8 md:mt-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Navigatie
                </p>
                <ul className="mt-5 space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Social
                </p>
                <ul className="mt-5 space-y-2.5">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* contact + address */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="grid grid-cols-2 gap-8 md:flex md:justify-end md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Contact
                </p>
                <p className="mt-5 font-mono text-sm tracking-tight text-muted-foreground">
                  <Link href="tel:+31301234567" className="transition-colors hover:text-foreground">
                    030 123 45 67
                  </Link>
                </p>
                <p className="font-mono text-sm tracking-tight text-muted-foreground">
                  <Link href="mailto:info@dimora.nl" className="transition-colors hover:text-foreground">
                    info@dimora.nl
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent md:text-right">
                  Adres
                </p>
                <p className="mt-5 font-mono text-sm leading-relaxed tracking-tight text-muted-foreground md:text-right">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Herenstraat 14
                    <br />
                    3512 KB, Utrecht
                  </Link>
                </p>
              </div>
            </div>

            {/* opening hours */}
            <div className="mt-10 md:mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent md:text-right">
                Openingstijden
              </p>
              <dl className="mt-5 space-y-1.5">
                {hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between gap-6 font-mono text-sm tracking-tight text-muted-foreground"
                  >
                    <dt>{row.day}</dt>
                    <dd className="text-foreground">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dimora. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <Link href="/privacybeleid" className="transition-colors hover:text-foreground">
              Privacybeleid
            </Link>
            <Link href="/algemene-voorwaarden" className="transition-colors hover:text-foreground">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}