import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ZigZagRow from '../components/ZigZagRow';
import ValuesSection from '../components/ValuesSection';

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">

      <AnimatedSection className="relative py-32 bg-slate-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-spi-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            About Us
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-spi-secondary mb-8">
            Advancing the <br />
            <span className="text-[#1E2F6E]">Profession of Sales</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are the premier body for sales professionals in Africa.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <ZigZagRow
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team meeting"
            eyebrow="The Challenge"
            title="Bridging the Gap"
            text1="Sales lacks clear standards."
            text2="We are building a unified framework."
          />

          <ZigZagRow
            reverse
            image="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Sales professional"
            eyebrow="The Future"
            title="Unlocking Africa's Potential"
            text1="Sales is now data-driven."
            text2="We equip talent for growth."
          />
        </div>
      </AnimatedSection>

      <ValuesSection />

      <AnimatedSection className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-spi-primary mb-6">
            Be Part of the Solution
          </h2>

          <Link
            to="/contact"
            className="inline-block bg-spi-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-spi-primary transition-all"
          >
            Join SPI Africa Today
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;