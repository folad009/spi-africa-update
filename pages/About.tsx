import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "@/components/TeamSection";
import StrategicPillars from "@/components/StrategicPillars";
import AudienceTabs from "@/components/AudienceTabs";

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <AnimatedSection className="relative py-32 bg-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-spi-secondary mb-8">
            Advancing the <br />
            <span className="text-[#1E2F6E]">Profession of Sales</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are the leading body for sales professionals in Africa.
          </p>
        </div>
      </AnimatedSection>
      <ValuesSection />
      <TeamSection />
      <StrategicPillars />
      <AudienceTabs />
    </div>
  );
};

export default About;
