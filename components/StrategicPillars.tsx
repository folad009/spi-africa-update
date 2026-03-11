import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Professional Network",
    text: "A structured pan-African community of sales professionals and commercial leaders committed to advancing ethical standards and fostering collaboration",
  },
  {
    title: "Training & Development",
    text: "Commercial capability and leadership programmes designed to strengthen execution discipline and enhance leadership effectiveness",
  },
  {
    title: "Certification & Accreditation",
    text: "Proven assessment frameworks that validate competence, recognise excellence, and formalise professional sales standards",
  },
  {
    title: "Industry Partnerships & Advisory",
    text: "Support organisations with commercial transformation solutions that improve market coverage, customer engagement, and sustainable business growth",
  },
  {
    title: "Events & Knowledge Forums",
    text: "Industry conferences, research initiatives, and recognition platforms that drive insight, collaboration, and professional visibility",
  },
  {
    title: "Technology & AI Enablement",
    text: "Guide the effective adoption of modern sales technologies and AI-enabled tools to enhance productivity, decision-making, and commercial impact",
  },
];

const StrategicPillars = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#5D9AD2]/20 py-24 px-6">
      <h1 className="text-center pb-4 text-5xl font-bold text-[#30447F]"> Our Strategic Pillars</h1>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card border-2 border-[#30447F] bg-white p-6 shadow-[6px_6px_0_0_rgba(48,68,127,0.3)]"
            >
              <h3 className="text-lg font-semibold text-[#30447F]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;