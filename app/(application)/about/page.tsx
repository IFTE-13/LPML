import { Metadata } from "next";
import AwardsRecognition from "./_components/awardsRecognition";
import FounderSection from "./_components/founder";
import Hero from "./_components/hero";
import KeyStats from "./_components/stats";
import OurWhy from "./_components/whyUs";

export const metadata: Metadata = {
  title: "About Us",
}

export default function page() {
  return (
    <>
        <Hero/>
        <OurWhy/>
        <KeyStats/>
        <FounderSection />
        <AwardsRecognition />
    </>
  );
}