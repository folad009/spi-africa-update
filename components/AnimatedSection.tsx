import React, { PropsWithChildren, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AnimatedSection: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children, className = '' }) => {
  const ref = useRef<HTMLElement>(null);

  useScrollReveal(ref);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
};

export default AnimatedSection;