import React, { useRef } from 'react';
import ValueCard from './ValueCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ValuesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useScrollReveal(ref, {
    selector: '.value-card',
    y: 40,
    stagger: 0.2,
  });

  return (
    <div ref={ref} className="bg-spi-primary text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            title="Vision"
            text="To become Africa's leading body for sales excellence, shaping globally competitive sales professionals and organisations."
          />
          <ValueCard
            title="Mission"
            text="To standardise sales practice by promoting ethical conduct and professionalism, through structured certification, capability development, research and knowledge exchange, while building a credible pan-African network of practitioners and leaders."
          />
          <ValueCard
            title="Purpose"
            text="We exist to elevate the standards, structure, and recognition of the sales profession in Africa by developing capable professionals, strengthening commercial systems, and enabling organisations to achieve sustainable revenue growth."
          />
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;