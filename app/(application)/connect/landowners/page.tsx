import { PageHero } from "@/components/app/page-hero";
import { LandownerForm } from "../_components/landowner-form";
import { Faq } from "@/components/app/faq";
import { landownerServices } from "@/lib/constants/connect";

export default function LandownersPage() {
  return (
    <main>
      <PageHero
        badge="Landowners"
        title="Professional property stewardship."
        description="Management, valuation, tenant placement, and strategic guidance for property owners."
      />

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <LandownerForm />
        </div>

        <Faq
          items={landownerServices}
          title="All the"
          titleHighlight="information you require"
          description="Can't find what you're looking for? Reach out to our team directly and we'll get back to you within one business day."
        />
      </section>
    </main>
  );
}