import { Metadata } from "next";
import AwardsRecognition from "./_components/awardsRecognition";
import FounderSection from "./_components/founder";
import KeyStats from "./_components/stats";
import OurWhy from "./_components/whyUs";
import { PageHero } from "@/components/app/page-hero";

export const metadata: Metadata = {
  title: "About Us",
}

export default function page() {
  return (
    <>
        <PageHero
          badge="About Dimora"
          title="Built on precision. Sustained by stewardship."
          description="Dimora exists to protect the long-term value of every property we touch — through careful management, transparent guidance, and a standard of care that doesn't waver once the deal is signed."
        />
        <OurWhy/>
        <KeyStats/>
        <FounderSection />
        <AwardsRecognition />
    </>
  );
}