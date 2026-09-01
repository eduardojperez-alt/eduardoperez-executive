"use client";

import React from "react";

export function Stats13() {
  return (
    <section
      id="results"
      className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
          
          {/* LEFT COLUMN */}
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
              RESULTS
            </p>

            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built through results
            </h2>

            <p className="max-w-lg md:text-md">
  Across Accenture, Mastercard, fintech, financial services and digital
  businesses.
</p>
          </div>

          {/* RESULTS GRID */}
          <div className="grid w-full grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">

            {/* BUSINESS SCALED */}
            <div className="w-full border-l-2 border-[#F5F3EF]/35 pl-6 md:pl-8">
              <p className="mb-3 whitespace-nowrap text-4xl font-bold leading-none md:text-5xl lg:text-6xl">
                $9M→$32M
              </p>

              <h3 className="text-md font-bold leading-[1.3] md:text-xl">
                Business scaled
              </h3>
            </div>

            {/* OPPORTUNITY PIPELINE */}
            <div className="w-full border-l-2 border-[#F5F3EF]/35 pl-6 md:pl-8">
              <p className="mb-3 whitespace-nowrap text-4xl font-bold leading-none md:text-5xl lg:text-6xl">
                ~$100M
              </p>

              <h3 className="text-md font-bold leading-[1.3] md:text-xl">
                Opportunity pipeline identified
              </h3>
            </div>

            {/* TRANSFORMATION */}
            <div className="w-full border-l-2 border-[#F5F3EF]/35 pl-6 md:pl-8">
              <p className="mb-3 text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                $10M
              </p>

              <h3 className="text-md font-bold leading-[1.3] md:text-xl">
                Customer-centric transformation
              </h3>
            </div>

            {/* EXPERIENCE */}
            <div className="w-full border-l-2 border-[#F5F3EF]/35 pl-6 md:pl-8">
              <p className="mb-3 text-5xl font-bold leading-none md:text-6xl lg:text-7xl">
                20+
              </p>

              <h3 className="text-md font-bold leading-[1.3] md:text-xl">
                Years building and transforming
              </h3>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}