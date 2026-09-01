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

          {/* LEFT COLUMN */}
          <div className="max-w-xl">
            <p className="mb-7 font-serif text-3xl font-bold leading-[0.95] tracking-tight md:text-4xl lg:text-5xl">
              EDUARDO PÉREZ
              <br />
              BLANDÓN
            </p>

            <h1 className="mb-8 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Turning inflection points
              <br />
              into growth engines
            </h1>

            <p className="mb-3 text-base font-semibold leading-relaxed md:text-lg">
              Business Builder · Growth Strategist · Executive
            </p>

            <p className="max-w-lg text-base leading-relaxed md:text-lg">
              I build and scale businesses by turning shifts in markets,
              customers and technology into new capabilities and measurable
              growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Button
                title="Explore my thinking"
                onClick={() => goTo("insights")}
                className="bg-[#F5F3EF] text-[#1C1C1C]"
              >
                Explore my thinking
              </Button>

              <Button
                title="About Eduardo"
                variant="secondary"
                onClick={() => goTo("focus")}
                className="border border-[#F5F3EF]/40 bg-transparent text-[#F5F3EF]"
              >
                About Eduardo
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
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