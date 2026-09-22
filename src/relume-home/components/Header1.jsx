"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header1() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="scroll-mt-20 bg-[#1C1C1C] px-[5%] pb-16 pt-28 text-[#F5F3EF] md:pb-24 md:pt-32 lg:min-h-[calc(100vh-64px)] lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div className="max-w-xl">
            <p className="mb-7 font-serif text-3xl font-bold leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
              EDUARDO PÉREZ
              <br />
              BLANDÓN
            </p>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#F5F3EF]/70 md:text-base">
              Business Builder · Growth & Transformation Executive
            </p>

            <h1 className="mb-8 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Turning inflection points
              <br />
              into growth engines
            </h1>

            <p className="max-w-lg text-base leading-relaxed md:text-lg">
              I build and scale businesses by connecting strategy, customer needs,
              data, AI and technology with commercial execution — turning
              opportunities into measurable growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Button
                title="Explore my impact"
                onClick={() => goTo("impact")}
                className="bg-[#F5F3EF] text-[#1C1C1C]"
              >
                Explore my impact
              </Button>

              <Button
                title="How I build"
                variant="secondary"
                onClick={() => goTo("approach")}
                className="border border-[#F5F3EF]/40 bg-transparent text-[#F5F3EF]"
              >
                How I build
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src="/images/hero/eduardo-portrait.jpg"
              className="aspect-[4/3] w-full object-cover object-center lg:aspect-[1.15/1]"
              alt="Eduardo Pérez Blandón"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
