import { PageHero } from "@/components/app/page-hero";
import { ClientForm } from "../_components/client-form";
import { clientServices } from "@/lib/constants/connect";
import { Faq } from "@/components/app/faq";

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        badge="Clients"
        title="Find the right property."
        description="Whether you're renting, buying, or exploring opportunities, we're here to help."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ClientForm />
        </div>

        <Faq
          items={clientServices}
          title="All the"
          titleHighlight="information you require"
          description="Can't find what you're looking for? Reach out to our team directly and we'll get back to you within one business day."
        />
      </section>
    </main>
  );
}