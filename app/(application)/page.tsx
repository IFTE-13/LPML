
import { CallToAction } from "@/components/app/call-to-action";
import BlogPreview from "./_components/blogPreview";
import Faq from "./_components/faq";
import Gallery from "./_components/gallery";
import Hero from "./_components/hero";
import OngoingProjects from "./_components/onGoing";
import ProjectPreview from "./_components/projectPreview";
import SearchBar from "./_components/searchBar";
import TestimonialSection from "./_components/testimonialSection";
import TrustedPartners from "./_components/trustedPartners";

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
      <Faq />
      <CallToAction
        title="Precision. Stewardship. Legacy."
        description="Join the circle of property owners who trust Dimora to protect and elevate their architectural investments through thoughtful management and long-term stewardship."
        buttons={[
          {
            label: "Landowners",
            href: "#contact",
          },
          {
            label: "Clients",
            href: "#contact",
            variant: "secondary",
          },
        ]}
      />
    </>
  );
}