"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CiInstagram, CiLinkedin, CiFacebook } from "react-icons/ci";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import DimoraIcon from "@/components/logo";

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "#/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Career", href: "/career" },
  { label: "Connect", href: "/connect" },
  { label: "Contact", href: "/contact" },
];

const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: <CiFacebook className="h-5 w-5" /> },
  { label: "Instagram", href: "#", icon: <CiInstagram className="h-5 w-5" /> },
  { label: "LinkedIn", href: "#", icon: <CiLinkedin className="h-5 w-5" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto flex container items-center justify-between rounded-md px-6 py-3 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md dark:shadow-xl"
            : "bg-background/0 backdrop-blur-0"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <DimoraIcon className="h-9 w-auto sm:h-10" />
          <div className="flex flex-col justify-center leading-none">
            <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              DIMORA
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.25em]">
              Property Management<span className="hidden sm:inline"> Limited</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 sm:w-87.5 bg-background/95 backdrop-blur-md flex flex-col [&>button:first-of-type]:hidden"
            >
              <SheetHeader className="flex-row items-center justify-between text-left">
                <SheetTitle className="text-base font-semibold text-foreground">
                  Menu
                </SheetTitle>

                <SheetClose asChild>
                  <button
                    type="button"
                    className="group flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    Close
                    <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                  </button>
                </SheetClose>
              </SheetHeader>

              <div className="mt-4 flex flex-1 flex-col space-y-8">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-md px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-2">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto border-t border-border pt-6">
                  <p className="mb-4 text-sm font-medium text-muted-foreground">
                    Connect with us
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center rounded-full bg-secondary p-2.5 text-muted-foreground transition-all duration-200",
                          "hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:-translate-y-0.5",
                          "active:scale-95"
                        )}
                        aria-label={social.label}
                        onClick={() => setIsOpen(false)}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}