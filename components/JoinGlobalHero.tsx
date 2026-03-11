import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapReveal } from "../hooks/useGsapReveal";

const JoinGlobalHero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGsapReveal(ref, {
    selector: ".reveal",
    y: 60,
    stagger: 0.2,
  });

  return (
    <section ref={ref} className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="reveal text-4xl md:text-5xl font-light text-spi-primary mb-6">
            Join Africa's Leading Community of Sales Professionals
          </h2>

          <p className="reveal text-slate-600 mb-8">
            Become part of a structured, pan-African network committed to
            elevating sales practice, strengthening commercial capability, and
            accelerating professional growth across the continent.
          </p>

          <div className="reveal flex gap-4">
            <a
              href="#communityform"
              className="bg-spi-secondary text-white px-6 py-3 rounded font-semibold inline-block"
            >
              Join SPI Africa
            </a>
           
          </div>
        </div>

        <div className="reveal">
          <img
            src="/images/spi-sales-professional.jpg"
            alt="Conference networking"
            className="rounded-xl shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinGlobalHero;
