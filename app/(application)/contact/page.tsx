"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { PageHero } from "@/components/app/page-hero";
import { CallToAction } from "@/components/app/call-to-action";

const officeAddress = "Herenstraat 14, 3512 KB Utrecht, Netherlands";

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  officeAddress
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "030 123 45 67",
    href: "tel:+31301234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dimora.nl",
    href: "mailto:info@dimora.nl",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Herenstraat 14, 3512 KB Utrecht",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background">
      <PageHero
        badge="Contact"
        title="Let's talk about your property"
        description="Whether you're buying, selling, investing, or seeking professional guidance, our team is ready to help."
      />

      {/* Form + Contact Details */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Form */}
            <div
              id="contact-form"
              className="border border-border bg-card p-8 lg:p-10"
            >
              <h2 className="font-serif text-3xl text-foreground">
                Send us a message
              </h2>

              <p className="mt-3 text-muted-foreground">
                Tell us about your property needs and a member of our team
                will respond shortly.
              </p>

              {submitted ? (
                <div className="mt-8 border border-accent/30 bg-accent/5 p-6">
                  <p className="font-medium text-foreground">
                    Thank you — your message has been received.
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    A member of our team will be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Full Name
                      </label>

                      <Input
                        required
                        placeholder="Jane van der Berg"
                        className="mt-2 rounded-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Email
                      </label>

                      <Input
                        required
                        type="email"
                        placeholder="jane@email.com"
                        className="mt-2 rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Phone
                    </label>

                    <Input
                      type="tel"
                      placeholder="+31 6 12 34 56 78"
                      className="mt-2 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Message
                    </label>

                    <Textarea
                      required
                      rows={6}
                      placeholder="Tell us a little about your project..."
                      className="mt-2 rounded-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Send Message

                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Cards */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Get in Touch
              </p>

              <div className="mt-6 space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  const card = (
                    <div className="border border-border bg-card p-5 transition-colors hover:border-accent/40">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center border border-accent/30 text-accent">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {item.label}
                          </p>

                          <p className="mt-2 text-sm text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block"
                    >
                      {card}
                    </a>
                  ) : (
                    <div key={item.label}>{card}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="overflow-hidden border border-border bg-card">
            <div className="grid lg:grid-cols-[1.5fr_0.8fr]">
              <iframe
                src={mapEmbedSrc}
                className="h-[450px] w-full"
                loading="lazy"
                title="Office location"
              />

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Visit Us
                </p>

                <h2 className="mt-4 font-serif text-4xl text-foreground">
                  Utrecht Office
                </h2>

                <p className="mt-6 text-muted-foreground">
                  {officeAddress}
                </p>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    officeAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex w-fit items-center gap-2 bg-foreground px-6 py-4 text-sm text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Get Directions

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        badge="Start a Conversation"
        title="Ready to discuss your property?"
        description="Our team is available to provide guidance, valuations, and long-term property expertise."
        buttons={[
          {
            label: "Send Message",
            href: "#contact-form",
          },
        ]}
      />
    </main>
  );
}