
import { CallToAction } from "@/components/app/call-to-action";
import BlogPreview from "./_components/blogPreview";
import Gallery from "./_components/gallery";
import Hero from "./_components/hero";
import OngoingProjects from "./_components/onGoing";
import ProjectPreview from "./_components/projectPreview";
import SearchBar from "./_components/searchBar";
import TestimonialSection from "./_components/testimonialSection";
import TrustedPartners from "./_components/trustedPartners";
import { Faq } from "@/components/app/faq";
import { faqs } from "@/lib/constants/faq";

export default function page() {
  return (
    <>
      <Hero />
      <SearchBar />
      <TrustedPartners />
      <ProjectPreview />
      <Gallery />
      <TestimonialSection />
      <OngoingProjects />
      <BlogPreview />
      <Faq
        items={faqs}
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Can't find what you're looking for? Reach out to our team directly and we'll get back to you within one business day."
      />
      <CallToAction
        title="Precision. Stewardship. Legacy."
        description="Join the circle of property owners who trust Livora to protect and elevate their architectural investments through thoughtful management and long-term stewardship."
        buttons={[
          {
            label: "Landowners",
            href: "/contact",
          },
          {
            label: "Clients",
            href: "/contact",
            variant: "secondary",
          },
        ]}
      />
    </>
  );
}