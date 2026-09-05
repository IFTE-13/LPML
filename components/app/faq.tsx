"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  title?: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
}

export function Faq({
  items,
  title = "Frequently Asked Questions",
  titleHighlight = "Questions",
  description = "Can't find what you're looking for? Reach out to our team directly and we'll get back to you within one business day.",
  className = "",
}: FaqProps) {
  return (
    <section className={`bg-background py-24 ${className}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
              {title}{" "}
              <span className="text-accent">{titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              {description}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-none py-2"
              >
                <AccordionTrigger className="py-5 text-left text-xl text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-lg leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}