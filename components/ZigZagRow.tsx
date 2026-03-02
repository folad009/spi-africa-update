import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ZigZagProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  text1: string;
  text2: string;
  reverse?: boolean;
}

const ZigZagRow: React.FC<ZigZagProps> = ({
  image,
  alt,
  eyebrow,
  title,
  text1,
  text2,
  reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Stagger children
  useScrollReveal(ref, { selector: '.reveal', y: 60, stagger: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-16 items-center mb-32`}
    >
      <div className="w-full md:w-1/2 reveal">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="rounded-[2rem] shadow-2xl w-full object-cover h-[500px]"
        />
      </div>

      <div className="w-full md:w-1/2 reveal">
        <h3 className="text-spi-secondary font-bold uppercase tracking-wider mb-2">
          {eyebrow}
        </h3>
        <h2 className="text-4xl font-bold text-spi-primary mb-6">{title}</h2>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{text1}</p>
        <p className="text-lg text-slate-600 leading-relaxed">{text2}</p>
      </div>
    </div>
  );
};

export default ZigZagRow;