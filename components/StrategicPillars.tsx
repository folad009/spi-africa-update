import React, { useState } from "react";

const features = [
  {
    title: "Professional Network",
    text: "A structured pan-African community of sales professionals and commercial leaders committed to advancing ethical standards and fostering collaboration",
    image: "/images/professional-network.png",
  },
  {
    title: "Training & Development",
    text: "Commercial capability and leadership programmes designed to strengthen execution discipline and enhance leadership effectiveness",
    image: "/images/training-development.png",
  },
  {
    title: "Certification & Accreditation",
    text: "Proven assessment frameworks that validate competence, recognise excellence, and formalise professional sales standards",
    image: "/images/certified-spi.png",
  },
  {
    title: "Industry Partnerships & Advisory",
    text: "Support organisations with commercial transformation solutions that improve market coverage, customer engagement, and sustainable business growth",
    image: "/images/spi-partership-advisory.png",
  },
  {
    title: "Events & Knowledge Forums",
    text: "Industry conferences, research initiatives, and recognition platforms that drive insight, collaboration, and professional visibility",
    image: "/images/events-knowledge-forum.png",
  },
  {
    title: "Technology & AI Enablement",
    text: "Guide the effective adoption of modern sales technologies and AI-enabled tools to enhance productivity, decision-making, and commercial impact",
    image: "/images/technology-ai-enablement.png",
  },
];

const StrategicPillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#5D9AD2]/20 py-14 px-6 sm:py-16">
      <h1 className="pb-6 text-center text-4xl font-bold text-[#30447F] sm:text-5xl">
        Our Strategic Pillars
      </h1>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-stretch">
          {/* Vertical tabs */}
          <div
            className="flex shrink-0 flex-col gap-1 lg:w-[min(100%,380px)]"
            role="tablist"
            aria-label="Strategic pillars"
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.title}
                  type="button"
                  role="tab"
                  id={`pillar-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`pillar-panel-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-xl px-3 py-2.5 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-spi-primary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-white/80 shadow-sm"
                      : "hover:bg-white/40"
                  }`}
                >
                  <span
                    className={`block text-base font-bold sm:text-lg ${
                      isActive ? "text-spi-primary" : "text-slate-500"
                    }`}
                  >
                    {feature.title}
                  </span>
                  <span
                    className={`mt-1 block text-sm leading-relaxed ${
                      isActive ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {feature.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Image panel */}
          <div
            className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl bg-slate-200 shadow-inner sm:min-h-[240px] lg:min-h-[300px]"
            role="tabpanel"
            id={`pillar-panel-${activeIndex}`}
            aria-labelledby={`pillar-tab-${activeIndex}`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.image + index}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30447F]/30 to-transparent" />
              </div>
            ))}

            <div
              className="pointer-events-none absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white/95 text-base font-bold text-spi-primary shadow-md"
              aria-hidden
            >
              {activeIndex + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
