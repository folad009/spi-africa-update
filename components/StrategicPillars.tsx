import React, { useRef, useEffect } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  // clear on each render so we don't keep stale refs from previous
  // renders. callback ref below will repopulate the array.
  itemsRef.current = [];

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const items = itemsRef.current;

    if (!section || !mask) return;

    const ctx = gsap.context(() => {
      // Timeline controlled by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%", // scroll distance
          scrub: true,
          pin: true,
        },
      });

      // Image mask reveal
      tl.fromTo(
        mask,
        {
          clipPath: "inset(40% 40% 40% 40% round 20px)",
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
        },
        0
      );

      // Stagger text sections as scroll progresses
      // only animate real elements
      items.filter(Boolean).forEach((item, i) => {
        tl.fromTo(
          item as HTMLElement,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          i * 0.4
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 h-full">
        {/* Image Side */}
        <div className="relative flex items-center justify-center">
          <div
            ref={maskRef}
            className="w-[95%] h-[95%] overflow-hidden"
            style={{ clipPath: "inset(40% 40% 40% 40%)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Group of colleagues collaborating around a table"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center px-8 md:px-16 space-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="opacity-0"
            >
              <h3 className="text-xl font-bold text-spi-primary">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-[14px] leading-relaxed">
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