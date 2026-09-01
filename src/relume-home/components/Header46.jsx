"use client";

import React from "react";

export function Header46() {
  return (
    <section
      id="lets-talk"
      className="scroll-mt-20 px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="w-full max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
            LET&apos;S TALK
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            What&apos;s the next
            <br />
            inflection point?
          </h2>

          <p className="max-w-2xl md:text-md">
            I&apos;m always interested in conversations with leaders building,
            transforming or rethinking businesses—particularly where growth,
            customers, financial ecosystems and technology intersect.
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