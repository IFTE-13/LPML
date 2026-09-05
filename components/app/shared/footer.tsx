import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground">

      <div className="mx-auto container px-6 pb-12 pt-24 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* wordmark + nav + social */}
          <div className="md:col-span-7">
            <Link
              href="/"
              className="font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Livora
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
                <p className="mt-5 text-sm tracking-tight text-muted-foreground">
                  <Link href="tel:+31301234567" className="transition-colors hover:text-foreground">
                    (+880) 1842 117 912
                  </Link>
                </p>
                <p className="text-sm tracking-tight text-muted-foreground">
                  <Link href="mailto:livora.pml@gmail.com" className="transition-colors hover:text-foreground">
                    livora.pml@gmail.com
                  </Link>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent md:text-right">
                  Address
                </p>
                <p className="mt-5 text-sm leading-relaxed tracking-tight text-muted-foreground md:text-right">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    13/A SS Khaled Road (B1-L4)
                    <br />
                    Kazir Dewri
                    <br />
                    Chattogram-4000
                  </Link>
                </p>
              </div>
            </div>

            {/* opening hours */}
            <div className="mt-10 md:mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent md:text-right">
                Why LIVORA?
              </p>
              <dl className="mt-5 md:ml-auto space-y-1.5 w-3/4 text-justify">
                Two decades of stewardship across residential and commercial portfolios — built on transparency, responsive management, and a long-term view of every property we touch.
              </dl>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Made by Mohammed Iftekhar</p>
          <p>© {new Date().getFullYear()} Livora. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="/privacybeleid" className="transition-colors hover:text-foreground">
              Privacy Policies
            </Link>
            <Link href="/algemene-voorwaarden" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}