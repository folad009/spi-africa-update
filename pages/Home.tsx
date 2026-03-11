import HeroSlider from "../components/HeroSlider";
import PillarsSection from "../components/PillarsSection";
import FinalCTA from "../components/FinalCTA";
import StrategicPillars from "@/components/StrategicPillars";
import AudienceTabs from "@/components/AudienceTabs";
import FeaturedProgram from "@/components/FeaturedProgram";
import LaunchingSoon from "@/components/LaunchingSoon";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSlider />
      <PillarsSection />
      <StrategicPillars />
      <AudienceTabs />
      <FeaturedProgram />
      <LaunchingSoon />
      <FinalCTA />

    </div>
  );
};

export default Home;