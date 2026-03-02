import JoinCommunity from "@/components/JoinCommunityForm";
import JoinGlobalHero from "@/components/JoinGlobalHero"
import BenefitsSection from "@/components/BenefitsSection"
import MembershipCTA from "@/components/MembershipCTA"


const OurCommunity = () => {
  return (
    <div className="bg-white">
        <JoinGlobalHero />
        <BenefitsSection />
        <MembershipCTA />
        <JoinCommunity />
    </div>
  );
};

export default OurCommunity;