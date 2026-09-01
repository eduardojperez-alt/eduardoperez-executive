"use client";

import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { RxChevronRight } from "react-icons/rx";

export function Contact12() {
  return (
    <section
      id="contact"
      className="bg-[#1C1C1C] px-[5%] py-16 text-[#F5F3EF] md:py-24 lg:py-28"
    >
      <div className="container">

        {/* HEADER */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-3 font-semibold uppercase md:mb-4">
            Get in touch
          </p>

          <h2 className="mb-5 text-5xl font-bold leading-[1.05] md:mb-6 md:text-7xl lg:text-8xl">
            Let&apos;s talk.
          </h2>

          <p className="max-w-2xl md:text-md">
            If something you have seen here connects with a challenge,
            opportunity or idea you are exploring, I would be glad to hear
            from you.
          </p>
        </div>

        {/* CONTACT OPTIONS */}
        <div className="grid max-w-3xl grid-cols-1 gap-12 border-t border-[#6B6B6B] pt-10 md:grid-cols-2 md:gap-16 md:pt-12">

          {/* LINKEDIN */}
          <div className="flex flex-col">
            <FaLinkedinIn className="mb-5 size-7" />

            <h3 className="mb-3 text-2xl font-bold md:text-3xl">
              LinkedIn
            </h3>

            <p className="mb-6 max-w-sm">
              For professional connections and ongoing perspectives.
            </p>

            <a
              href="https://mx.linkedin.com/in/eduardojperezblandon/es"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
            >
              Connect on LinkedIn
              <RxChevronRight />
            </a>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <BiEnvelope className="mb-5 size-8" />

            <h3 className="mb-3 text-2xl font-bold md:text-3xl">
              Email
            </h3>

            <p className="mb-6 max-w-sm">
              For direct professional conversations.
            </p>

            <a
              href="mailto:eduardo.j.perez@gmail.com"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-[#F5F3EF] transition-opacity hover:opacity-70"
            >
              eduardo.j.perez@gmail.com
              <RxChevronRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}