import React from "react";
import { Link } from "react-router-dom";

export interface ComingSoonPageProps {
  eyebrow: string;
  headline: string;
  highlight: string;
  description: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  eyebrow,
  headline,
  highlight,
  description,
}) => {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#5D9AD2] via-spi-secondary/85 to-spi-primary px-4 py-16 text-center sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {headline}{" "}
            <span className="text-[#30447F]">
              {highlight}
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/95 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-[#30447F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-white hover:text-[#30447F]"
            >
              Register your interest
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;
