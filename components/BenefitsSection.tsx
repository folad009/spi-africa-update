import React, { useRef } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";

const benefits = [
  {
    title: "Access Structured Learning & Certification",
    text: "Gain access to professional sales training, certification pathways, and development programs designed to strengthen capability and elevate standards across Africa.",
  },
  {
    title: "Build a Powerful Professional Network",
    text: "Connect with sales practitioners, commercial leaders, and industry experts across the continent to share insights, exchange ideas, and unlock new opportunities.",
  },
  {
    title: "Gain Industry Recognition & Credibility",
    text: "Strengthen your professional profile through recognized certification, structured development pathways, and association with a credible continental body dedicated to sales excellence.",
  },
];

const BenefitsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGsapReveal(ref, {
    selector: ".benefit-card",
    y: 50,
    duration: 0.9,
    stagger: 0.25,
    scale: 1,
  });

  return (
    <section ref={ref} className="py-20 text-center bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-spi-primary mb-4">
          Ready to Elevate Your Sales Career?
        </h3>

        <p className="text-slate-600 mb-12">
          From emerging sales professionals to experienced commercial leaders,
          SPI Africa provides the structure, network, and tools to help you grow
          with confidence and credibility.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="benefit-card p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h4 className="font-semibold mb-2 text-spi-primary">{item.title}</h4>
              <p className="text-slate-500 text-[14px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
