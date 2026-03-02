import React, { useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';

const MembershipCTA: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGsapReveal(ref, {
    y: 20,
    scale: 1,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-800 to-blue-600 py-10 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-semibold">
          Join today and be part of the movement shaping the future of sales in Africa.
        </h3>

        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
            Join as Professional
          </button>
          <button className="border border-white px-6 py-3 rounded font-semibold">
            Join as Student
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;