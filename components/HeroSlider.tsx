import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useAutoSlider } from "../hooks/useAutoSlider";
import { slides } from "../data/homeData";

type Props = {
  total: number;
  current: number;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
};

const SliderControls: React.FC<Props> = ({
  total,
  current,
  next,
  prev,
  goTo,
}) => {
  return (
    <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-between max-w-7xl mx-auto px-4">
      <div className="flex space-x-3">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1} of ${total}`}
            aria-current={i === current ? "true" : undefined}
            className={`h-1.5 rounded-full ${
              i === current ? "w-12 bg-spi-gold" : "w-6 bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="hidden md:flex space-x-4">
        <button onClick={prev} className="nav-btn" aria-label="Previous slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={next} className="nav-btn" aria-label="Next slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const HeroSlider: React.FC = () => {
  const { current, next, prev, goTo } = useAutoSlider(slides.length);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const elements = textRef.current.querySelectorAll(
      ".hero-title, .hero-subtitle, .hero-buttons",
    );

    // create timeline so we can kill it in cleanup when `current` changes
    const tl = gsap.timeline();
    tl.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
    );

    return () => {
      tl.kill();
      gsap.killTweensOf(elements);
    };
  }, [current]);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-spi-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${slide.url})`,
              transform: index === current ? "scale(1.1)" : "scale(1)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

          {index === current && (
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div ref={textRef} className="max-w-3xl text-white">
                  <h1 className="hero-title text-5xl font-extrabold mb-6 font-azo">
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle text-xl mb-10 font-light">
                    {slide.subtitle}
                  </p>
                  <div className="hero-buttons space-x-4">
                    <Link to="/about" className="bg-blue-950 p-5 rounded-[20px] font-azo">
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <SliderControls
        total={slides.length}
        current={current}
        next={next}
        prev={prev}
        goTo={goTo}
      />
    </section>
  );
};

export default React.memo(HeroSlider);
