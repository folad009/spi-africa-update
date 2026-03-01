import React, { useEffect } from "react";
import gsap from "gsap";

export const useReveal = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    return () => {
      anim.kill();
      gsap.killTweensOf(ref.current as Element);
    };
  }, [ref]);
};