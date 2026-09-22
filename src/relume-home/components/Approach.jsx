"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Identify",
    body: "Find unmet customer needs, market shifts, friction and underdeveloped sources of value.",
  },
  {
    number: "02",
    title: "Reframe",
    body: "Rethink the value proposition, economics and business model rather than simply optimizing what already exists.",
  },
  {
    number: "03",
    title: "Build",
    body: "Create the go-to-market, operating model, capabilities and technology required to execute.",
  },
  {
    number: "04",
    title: "Connect",
    body: "Bring together customers, partners, talent and ecosystems around a shared opportunity.",
  },
  {
    number: "05",
    title: "Scale",
    body: "Turn the model into repeatable growth through revenue, adoption, market expansion and inorganic opportunities.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-20 bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 max-w-4xl md:mb-16">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            FROM OPPORTUNITY TO BUSINESS VALUE
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            Strategy matters.
            <br />
            Execution compounds it.
          </h2>

          <p className="max-w-3xl md:text-md">
            I work at the intersection of strategy and execution — identifying where
            value can be created, designing what needs to change, and building the
            capabilities and relationships required to make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-[#6B6B6B] md:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-[#6B6B6B] py-6 md:border-b-0 md:border-r md:px-6 md:py-10 last:md:border-r-0"
            >
              <p className="mb-5 text-sm font-semibold text-[#F5F3EF]/55 md:mb-8">
                {step.number}
              </p>
              <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#F5F3EF]/75 md:text-base">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
