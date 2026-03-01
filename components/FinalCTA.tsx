import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

const FinalCTA: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-spi-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32" />

          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
            Ready to be part of the movement shaping the future of sales in Africa?
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of professionals across Africa setting new standards.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-spi-teal px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all shadow-lg active:scale-95 relative z-10"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FinalCTA);