import HeroSlider from "../components/HeroSlider";
import PillarsSection from "../components/PillarsSection";
import FinalCTA from "../components/FinalCTA";
import StrategicPillars from "@/components/StrategicPillars";
import AudienceTabs from "@/components/AudienceTabs";

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSlider />
      <PillarsSection />
      <StrategicPillars />
      <AudienceTabs />
      <FinalCTA />

    </div>
  );
};

export default Home;