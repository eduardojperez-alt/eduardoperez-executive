"use client";

import React from "react";

export function Layout298() {
  return (
    <section
      id="focus"
      className="scroll-mt-20 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-col items-start">
          
          {/* SECTION HEADER */}
          <div className="mx-auto mb-12 max-w-lg md:mb-18 lg:mb-20">
            <div>
              <p className="mb-3 text-center font-semibold uppercase tracking-wide md:mb-4">
                FOCUS
              </p>

              <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Where I focus
              </h2>

              <p className="text-center md:text-md">
                I work at the intersection of growth, customers, financial
                ecosystems and business transformation—where structural change
                creates new opportunities to build.
              </p>
            </div>
          </div>

          {/* FOCUS AREAS */}
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            
            <div className="w-full">
              <h3 className="mb-3 text-center text-xl font-bold uppercase md:mb-4 md:text-2xl">
                GROWTH & COMMERCIAL STRATEGY
              </h3>

              <p className="text-center">
                New businesses, go-to-market, commercial models and new sources
                of growth.
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-3 text-center text-xl font-bold uppercase md:mb-4 md:text-2xl">
                FINANCIAL SERVICES, PAYMENTS & FINTECH
              </h3>

              <p className="text-center">
                The evolving ecosystems, infrastructure and business models
                reshaping financial services.
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-3 text-center text-xl font-bold uppercase md:mb-4 md:text-2xl">
                CUSTOMER EXPERIENCE, DATA & AI
              </h3>

              <p className="text-center">
                Connecting customer needs, experience design, data and AI to transform how businesses engage, operate and grow.
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-3 text-center text-xl font-bold uppercase md:mb-4 md:text-2xl">
                OPERATING MODELS, ECOSYSTEMS & EXECUTION
              </h3>

              <p className="text-center">
                Turning strategy into capabilities, partnerships, operating
                models and measurable execution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}