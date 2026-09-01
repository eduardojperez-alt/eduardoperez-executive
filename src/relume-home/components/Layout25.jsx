"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section
      id="public-perspective"
      className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide md:mb-4">
              PUBLIC PERSPECTIVE
            </p>

            <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-6xl lg:text-7xl">
              A perspective shaped
              <br />
              by building
            </h2>

            <p className="mb-10 max-w-xl md:mb-12 md:text-md">
              Ideas shaped by more than two decades building businesses,
              transforming customer models and working across financial
              services, technology and growth.
            </p>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col">
                <h3 className="mb-4 text-3xl font-bold leading-[1.05] md:text-4xl lg:text-5xl">
                  Forbes México
                </h3>

                <p className="mb-6">
                  An early perspective on how digital customer behavior would
                  reshape engagement.
                </p>

                <a
                  href="https://forbes.com.mx/manana-todas-las-ventas-seran-digitales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
                >
                  Read on Forbes
                  <RxChevronRight />
                </a>
              </div>

              <div className="flex flex-col">
                <h3 className="mb-4 text-3xl font-bold leading-[1.05] md:text-4xl lg:text-5xl">
                  Industry conversations
                </h3>

                <p className="mb-6">
                  Contributor to conversations on financial services, payments,
                  customer experience and digital growth.
                </p>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
                >
                  Start a conversation
                  <RxChevronRight />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <img
              src="/images/perspective/industry-conversation.jpg"
              className="aspect-[4/3] w-full object-cover object-center"
              alt="Industry conversation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}