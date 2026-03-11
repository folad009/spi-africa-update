import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PillarsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".pillar-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-slate-50 lg:grid lg:place-content-center">
      <div
        ref={sectionRef}
        className="mx-auto w-screen max-w-7xl  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-20"
      >
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#30447F] sm:text-5xl font-azo">
            Who We Are
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed font-azo">
            SPI Africa exists to elevate the standards and recognition of the
            sales profession across Africa through ethical practice,
            certification, and capability development. We are building a
            credible pan-African community of sales and commercial leaders to
            strengthen organisations and drive sustainable growth. Our ambition
            is to become Africa’s leading body for sales excellence.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              href="/about-us"
              className="inline-block rounded bg-[#30447F] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#5D9AD2] font-azo"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PillarsSection);
