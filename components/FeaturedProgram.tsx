import React from "react";

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
            <a href="/programs" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#30447F] text-white hover:bg-[#5D9AD2] h-10 px-4 py-2">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgram;
