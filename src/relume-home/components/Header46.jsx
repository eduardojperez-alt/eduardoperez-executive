"use client";

import React from "react";

export function Header46() {
  return (
    <section
      id="lets-talk"
      className="scroll-mt-20 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="w-full max-w-4xl">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            WHERE I CAN MAKE AN IMPACT
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            Building something
            <br />
            that needs to grow?
          </h2>

          <p className="max-w-3xl md:text-md">
            I am particularly interested in leadership situations where there is a
            meaningful business opportunity to build, transform or scale — from a
            new business, consulting practice or market entry to an enterprise
            transformation, strategic ecosystem or new source of organic or
            inorganic growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#F5F3EF] px-6 py-3 font-semibold text-[#1C1C1C] transition-opacity hover:opacity-80"
            >
              Start a conversation
            </a>

            <a
              href="#insights"
              className="inline-flex items-center justify-center border border-[#F5F3EF]/40 px-6 py-3 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
            >
              Explore my thinking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
