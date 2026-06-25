import AwardsRecognition from "./_components/awardsRecognition";
import BoardOfDirectors from "./_components/bod";
import Hero from "./_components/hero";
import KeyStats from "./_components/stats";
import TeamOverview from "./_components/team";
import OurWhy from "./_components/whyUs";

export default function page() {
  return (
    <>
        <Hero/>
        <OurWhy/>
        <KeyStats/>
        <BoardOfDirectors />
        <AwardsRecognition />
    </>
  );
}