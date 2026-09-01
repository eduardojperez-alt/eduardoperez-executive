"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute -ml-8 flex h-full w-8 items-start justify-center">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_#1C1C1C] md:mt-8"
      />
    </div>
  );
};

export function Timeline5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">EXPERIENCE</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built through experience
            </h2>
            <p className="md:text-md">
              More than two decades building, scaling and transforming
              businesses across consulting, payments, fintech and customer
              transformation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore my experience" variant="secondary">
                Explore my experience
              </Button>
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-lg auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-8 flex-col items-center md:left-auto">
  <div className="absolute top-0 z-10 h-16 w-1 bg-gradient-to-b from-[#1C1C1C] to-transparent" />

  <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />

  <div className="h-full w-[3px] bg-neutral-lighter" />

  <div className="absolute bottom-0 z-10 h-16 w-1 bg-gradient-to-b from-transparent to-[#1C1C1C]" />

  <div className="absolute top-[-50vh] h-[50vh] w-full bg-[#1C1C1C]" />
</div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-20">
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Accenture
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Build and transform
                </h4>
                <p>
                  Built the foundation across strategy, customer transformation
                  and large-scale execution. The discipline of making things
                  real.
                </p>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  Mastercard
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Build and scale
                </h4>
                <p>
                  Moved inside the engine of payments and scaled a commercial
                  services business across Mexico and Central America. Growth
                  with economics that work.
                </p>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  KoreFusion
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Operate and scale
                </h4>
                <p>
                  Strengthened the commercial and operating model of a global
                  fintech and payments advisory business. Discipline turns
                  potential into performance.
                </p>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="ml-4 mt-4 flex flex-col md:ml-12">
                <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  VML
                </h3>
                <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Connect and build
                </h4>
                <p>
                  Connected customer experience, commerce, data, AI and
                  technology around new-business opportunities. The whole is
                  worth more than the parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
