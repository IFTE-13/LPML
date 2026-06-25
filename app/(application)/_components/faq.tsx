"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you manage properties outside Utrecht?",
    answer:
      "Yes — while our office is based in Utrecht, we manage and list residential and commercial properties across the wider region. Reach out with your address and we'll confirm coverage right away.",
  },
  {
    question: "How does the viewing process work?",
    answer:
      "Once you find a property you're interested in, you can request a viewing directly from the listing page or by contacting our team. We typically arrange viewings within 2–3 business days.",
  },
  {
    question: "We already work with an agent. Why would we need Dimora?",
    answer:
      "Dimora isn't just brokerage — we offer end-to-end stewardship, including ongoing management, maintenance coordination, and valuation services that most single-transaction agents don't provide.",
  },
  {
    question: "Do you handle property valuations (taxaties)?",
    answer:
      "Yes, certified valuations are one of our core services, used for sales, refinancing, insurance, and estate planning. Reports are typically delivered within 5 business days of inspection.",
  },
  {
    question: "How long does the buying or rental process take?",
    answer:
      "It varies by property and financing, but most clients move from first viewing to signed agreement within 4–6 weeks. We'll give you a realistic timeline specific to your situation early on.",
  },
];

export default function Faq() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto container px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
              All the <span className="text-accent">information</span> you
              require
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Reach out to our
              team directly and we&apos;ll get back to you within one
              business day.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="py-2 border-none"
              >
                <AccordionTrigger className="py-5 text-left text-xl text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}