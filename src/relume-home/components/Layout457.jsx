"use client";

import React from "react";

const stories = [
  {
    company: "Mastercard",
    label: "BUILD & SCALE",
    title: "$9M → $32M services business",
    body: "Scaled a commercial services business across Mexico and Central America while maintaining target economics, expanding capabilities and building sustainable client growth.",
    image: "/images/impact/scale-business.jpg",
    alt: "Building and scaling a services business",
  },
  {
    company: "Accenture",
    label: "BUILD A CAPABILITY",
    title: "$10M customer-centric transformation",
    body: "Built and led transformation agendas connecting customer experience, data, organization, technology and commercial capabilities.",
    image: "/images/impact/customer-transformation.jpg",
    alt: "Customer-centric transformation",
  },
  {
    company: "New business build",
    label: "BUILD THE BUSINESS",
    title: "500-station fuel-retail launch",
    body: "Helped launch a large-scale fuel-retail business by connecting strategy, marketing, operations and analytics around a new growth platform.",
    image: "/images/impact/new-business-build.jpg",
    alt: "New business build",
  },
];

export function Layout457() {
  return (
    <section
      id="impact"
      className="scroll-mt-20 overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">

        <div className="mb-12 max-w-3xl md:mb-16 lg:mb-20">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            SELECTED BUSINESS-BUILDING OUTCOMES
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            What that looks like in practice
          </h2>

          <p className="max-w-2xl md:text-md">
            Selected examples of turning strategic opportunity into measurable
            business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {stories.map((story) => (
            <article key={story.title} className="w-full">
              <div className="mb-6 w-full overflow-hidden md:mb-8">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="aspect-[3/2] w-full object-cover object-center"
                />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#F5F3EF]/60">
                {story.company} · {story.label}
              </p>

              <h3 className="mb-3 text-2xl font-bold leading-tight md:text-3xl">
                {story.title}
              </h3>

              <p>{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
