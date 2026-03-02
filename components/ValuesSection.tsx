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
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h3 className="text-4xl md:text-5xl font-bold mb-10">Core Values</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            title="Integrity First"
            text="Trust is the currency of sales."
          />
          <ValueCard
            title="Collective Impact"
            text="We raise standards across Africa."
          />
          <ValueCard
            title="Relentless Excellence"
            text="World-class training built for Africa."
          />
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;