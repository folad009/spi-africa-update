import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillars } from "../data/pillarsData";
import PillarCard from "./PillarCard";

gsap.registerPlugin(ScrollTrigger);

const PillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".pillar-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <PillarCard {...pillar} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(PillarsSection);