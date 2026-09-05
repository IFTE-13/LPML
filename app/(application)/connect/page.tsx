import { PageHero } from "@/components/app/page-hero";
import { ConnectCard } from "./_components/connect-card";
import { faqItems } from "@/lib/constants/connect";
import { Faq } from "@/components/app/faq";

export default function ConnectPage() {
  return (
    <main>
      <PageHero
        badge="Connect"
        title="Start the right conversation."
        description="Whether you're entrusting us with a property or searching for your next one, choose the path that best matches your needs."
      />

      <ConnectCard />

      <Faq
        items={faqItems}
        title="All the"
        titleHighlight="information you require"
        description="Can't find what you're looking for? Reach out to our team directly and we'll get back to you within one business day."
      />
    </main>
  );
}