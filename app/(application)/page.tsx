
import BlogPreview from "./_components/blogPreview";
import CTA from "./_components/cta";
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
      <CTA />
    </>
  );
}