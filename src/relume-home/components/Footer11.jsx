"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export function Footer11() {
  return (
    <footer
      id="footer"
      className="bg-[#1C1C1C] px-[5%] py-12 text-[#F5F3EF] md:py-16 lg:py-20"
    >
      <div className="container">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-12 border-t border-[#6B6B6B] pt-10 md:grid-cols-[1.5fr_0.7fr_0.9fr] md:gap-12 md:pt-12">

          {/* IDENTITY */}
          <div>
            <h2 className="mb-3 text-xl font-bold md:text-2xl">
              EDUARDO PÉREZ BLANDÓN
            </h2>

            <p className="mb-5 max-w-sm text-sm">
              Business Builder. Growth Strategist. Executive.
            </p>

            <a
              href="mailto:eduardo.j.perez@gmail.com"
              className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              eduardo.j.perez@gmail.com
            </a>

            <div className="mt-6">
              <a
                href="https://mx.linkedin.com/in/eduardojperezblandon/es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Eduardo Pérez Blandón on LinkedIn"
                className="inline-block transition-opacity hover:opacity-70"
              >
                <BiLogoLinkedinSquare className="size-6" />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a href="#top" className="transition-opacity hover:opacity-70">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-opacity hover:opacity-70">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition-opacity hover:opacity-70"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="transition-opacity hover:opacity-70"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-opacity hover:opacity-70"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* PERSPECTIVES */}
          <nav aria-label="Publications and perspectives">
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a
                  href="https://www.linkedin.com/newsletters/bizpay-pulse-7287591304077758464/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  BizPay Pulse
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/newsletters/marketing-tech-insights-7435552123867578368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  Marketing & Tech Insights
                </a>
              </li>

              <li>
                <a
                  href="https://forbes.com.mx/manana-todas-las-ventas-seran-digitales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  Forbes México
                </a>
              </li>

              <li>
                <a
                  href="https://mx.linkedin.com/in/eduardojperezblandon/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#6B6B6B] pt-6 text-sm md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Eduardo Pérez Blandón. All rights reserved.
          </p>

          <a
            href="#"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}