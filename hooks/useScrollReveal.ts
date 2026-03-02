import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (
  ref: RefObject<HTMLElement>,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    selector?: string;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;

    const { y = 50, duration = 0.8, stagger = 0.15, selector } = options || {};

    const ctx = gsap.context(() => {
      const targets = selector
        ? ref.current!.querySelectorAll(selector)
        : ref.current;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
};