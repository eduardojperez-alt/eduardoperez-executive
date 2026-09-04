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
<div className="grid w-full grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:gap-x-10 lg:gap-y-20">

  {/* 01 — Growth */}
  <div className="w-full">
    <div className="mb-6 aspect-[3/2] overflow-hidden">
      <img
        src="/images/focus/growth-strategy.jpg"
        alt="Strategic decision making represented through chess"
        className="h-full w-full object-cover"
      />
    </div>

    <h3 className="mb-3 text-2xl font-bold uppercase md:text-3xl">
      GROWTH & COMMERCIAL STRATEGY
    </h3>

    <p className="max-w-xl text-base leading-relaxed md:text-lg">
      New businesses, go-to-market, commercial models and new sources
      of growth.
    </p>
  </div>

  {/* 02 — Financial Services */}
  <div className="w-full">
    <div className="mb-6 aspect-[3/2] overflow-hidden">
      <img
        src="/images/focus/financial-ecosystem.jpg"
        alt="Connected financial ecosystem across the Americas"
        className="h-full w-full object-cover"
      />
    </div>

    <h3 className="mb-3 text-2xl font-bold uppercase md:text-3xl">
      FINANCIAL SERVICES, PAYMENTS & FINTECH
    </h3>

    <p className="max-w-xl text-base leading-relaxed md:text-lg">
      The evolving ecosystems, infrastructure and business models
      reshaping financial services.
    </p>
  </div>

  {/* 03 — Customer, Data & AI */}
  <div className="w-full">
    <div className="mb-6 aspect-[3/2] overflow-hidden">
      <img
        src="/images/focus/customer-data-ai.jpg"
        alt="Data, AI and connected capabilities represented through modular elements"
        className="h-full w-full object-cover"
      />
    </div>

    <h3 className="mb-3 text-2xl font-bold uppercase md:text-3xl">
      CUSTOMER EXPERIENCE, DATA & AI
    </h3>

    <p className="max-w-xl text-base leading-relaxed md:text-lg">
      Connecting customer needs, experience design, data and AI to
      transform how businesses engage, operate and grow.
    </p>
  </div>

  {/* 04 — Execution */}
  <div className="w-full">
    <div className="mb-6 aspect-[3/2] overflow-hidden">
      <img
        src="/images/focus/execution-precision.jpg"
        alt="Precision and execution represented through a focused billiards shot"
        className="h-full w-full object-cover"
      />
    </div>

    <h3 className="mb-3 text-2xl font-bold uppercase md:text-3xl">
      OPERATING MODELS, ECOSYSTEMS & EXECUTION
    </h3>

    <p className="max-w-xl text-base leading-relaxed md:text-lg">
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