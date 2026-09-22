"use client";

import React from "react";

const areas = [
  {
    label: "BUILD",
    title: "New businesses & capabilities",
    body: "New ventures, consulting practices, market entry, go-to-market models and differentiated value propositions.",
    image: "/images/focus/growth-strategy.jpg",
    alt: "Strategic business building",
  },
  {
    label: "TRANSFORM",
    title: "Business & operating models",
    body: "Customer experience, commercial models, operating models and AI-enabled transformation that changes how the business performs.",
    image: "/images/focus/customer-data-ai.jpg",
    alt: "Business transformation with data and AI",
  },
  {
    label: "SCALE",
    title: "Growth, ecosystems & expansion",
    body: "Revenue, partnerships, teams, markets and organic and inorganic growth opportunities that create repeatable scale.",
    image: "/images/focus/financial-ecosystem.jpg",
    alt: "Connected ecosystem and growth",
  },
];

export function Layout298() {
  return (
    <section
      id="value"
      className="scroll-mt-20 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            WHERE I CREATE VALUE
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            Build. Transform. Scale.
          </h2>

          <p className="mx-auto max-w-2xl md:text-md">
            I focus on situations where an organization needs to create something
            new, rethink how it operates or turn an opportunity into scalable growth.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {areas.map((area) => (
            <article key={area.label} className="flex h-full flex-col">
              <div className="mb-6 aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-[#F5F3EF]/60">
                {area.label}
              </p>

              <h3 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">
                {area.title}
              </h3>

              <p className="text-base leading-relaxed md:text-lg">
                {area.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
