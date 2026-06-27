"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants/faq";

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