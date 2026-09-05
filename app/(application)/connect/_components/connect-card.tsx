import Link from "next/link";
import { ArrowUpRight, Building2, Users } from "lucide-react";

const connectPaths = [
  {
    href: "/connect/landowners",
    icon: Building2,
    label: "Landowners",
    title: "Property Management & Advisory",
    description: "Property management, tenant placement, valuations, and long-term portfolio guidance.",
  },
  {
    href: "/connect/clients",
    icon: Users,
    label: "Clients",
    title: "Property Search & Support",
    description: "Property enquiries, viewings, rentals, purchases, and general support.",
  },
] as const;

export function ConnectCard() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {connectPaths.map(({ href, icon: Icon, label, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group border border-border bg-card p-8 transition-all hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-accent/30 text-accent">
                <Icon className="h-6 w-6" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {label}
              </p>

              <h2 className="mt-4 font-serif text-3xl text-foreground">
                {title}
              </h2>

              <p className="mt-4 text-muted-foreground">
                {description}
              </p>

              <div className="mt-8 flex items-center gap-2">
                <span className="text-sm font-medium">Connect</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}