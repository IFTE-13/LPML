import { ReactNode } from "react";
import { ServiceCard } from "./service-card";

interface ConnectSectionProps {
  id: string;
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
  }[];
  reverse?: boolean;
  children: ReactNode;
}

export function ConnectSection({
  id,
  title,
  description,
  services,
  reverse,
  children,
}: ConnectSectionProps) {
  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`grid gap-16 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <h2 className="font-serif text-4xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-muted-foreground">
              {description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                />
              ))}
            </div>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}