import React from "react";
import { Link } from "react-router-dom";

const FeaturedProgram = () => {
  return (
    <section>
      <div className="container">
        <div className="flex w-full flex-col overflow-hidden bg-white md:rounded-xl lg:flex-row lg:items-center">
          <div className="w-full shrink-0 self-stretch lg:w-1/2">
            <img
              src="/images/state-of-survey-img.jpg"
              alt="State of Sales Survey Nigeria"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-4 text-[#30447F]">
              Featured Program
            </h3>
            <p className="mb-8 text-zinc-600 lg:text-lg">
                Take the survey and add your voice in shaping the future of sales in Nigeria
            </p>
            <Link
              to="/programs"
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-[#30447F] px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-[#5D9AD2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgram;
