import React from "react";

const LaunchingSoon = () => {
  return (

      <section className="bg-[#5D9AD2] lg:grid">
      <div className="mx-auto w-screen max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-10">
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold text-white sm:text-4xl">
            Launching Soon:
            {" "}
            <strong className="text-[#30447F]">
              Sales Certification Program
            </strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed">
            Be among the first cohort to participate in SPI Africa’s structured
            sales certification and training pathway. 
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded  px-5 py-3 font-medium text-white shadow-sm transition-colors bg-[#30447F] hover:bg-gray-50 hover:text-[#30447F]"
              href="/contact"
            >
             Register Your Interest
            </a>
          </div>
        </div>
      </div>
    </section>
    
    
  );
};

export default LaunchingSoon;
