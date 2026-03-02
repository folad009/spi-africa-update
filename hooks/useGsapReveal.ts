import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (
  ref: RefObject<HTMLElement>,
  options?: {
    selector?: string;
    y?: number;
    duration?: number;
    stagger?: number;
    scale?: number;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;

    const {
      selector,
      y = 40,
      duration = 0.8,
      stagger = 0.15,
      scale = 1,
    } = options || {};

    const ctx = gsap.context(() => {
      const targets = selector
        ? ref.current!.querySelectorAll(selector)
        : ref.current;

      gsap.fromTo(
        targets,
        { opacity: 0, y, scale: scale === 1 ? 1 : 0.95 },
        {
          opacity: 1,
          y: 0,
          scale,
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