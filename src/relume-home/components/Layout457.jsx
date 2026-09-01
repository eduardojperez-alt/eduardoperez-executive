"use client";

import React from "react";

export function Layout457() {
  return (
    <section
      id="impact"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            IMPACT
          </p>

          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            From strategy to measurable value
          </h2>

          <p className="md:text-md">
            Selected examples of turning strategy into measurable business
            outcomes—transforming customer experiences, scaling businesses and
            building new ventures.
          </p>
        </div>

        {/* IMPACT STORIES */}
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">

          {/* CUSTOMER-CENTRIC TRANSFORMATION */}
          <div className="w-full">
            <div className="mb-6 w-full overflow-hidden md:mb-8">
              <img
                src="/images/impact/customer-transformation.jpg"
                alt="Customer-centric transformation"
                className="aspect-[3/2] w-full object-cover object-center"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Customer-centric transformation
            </h3>

            <p>
              Led a $10M transformation from product-centric toward
              customer-centric, spanning organization, data, commercial
              capabilities and customer experience.
            </p>
          </div>

          {/* BUILDING AND SCALING */}
          <div className="w-full md:mt-[25%]">
            <div className="mb-6 w-full overflow-hidden md:mb-8">
              <img
                src="/images/impact/scale-business.jpg"
                alt="Building and scaling"
                className="aspect-[3/2] w-full object-cover object-center"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Building and scaling
            </h3>

            <p>
              Scaled a services business from ~$9M to $32M while maintaining
              target economics.
            </p>
          </div>

          {/* NEW BUSINESS BUILD */}
          <div className="w-full md:mt-[50%]">
            <div className="mb-6 w-full overflow-hidden md:mb-8">
              <img
                src="/images/impact/new-business-build.jpg"
                alt="New business build"
                className="aspect-[3/2] w-full object-cover object-center"
              />
            </div>

            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              New business build
            </h3>

            <p>
              Helped launch a 500-station fuel-retail business, connecting
              strategy, marketing, operations and analytics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}