"use client";

import React, { useState } from "react";

export function Navbar3() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <nav
      id="top"
      className="fixed left-0 top-0 z-50 flex min-h-16 w-full items-center justify-between border-b border-[#F5F3EF]/10 bg-[#1C1C1C] px-[5%] text-[#F5F3EF]"
    >
      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1.5 lg:hidden"
        aria-label="Open navigation"
      >
        <span className="h-0.5 w-6 bg-[#F5F3EF]" />
        <span className="h-0.5 w-6 bg-[#F5F3EF]" />
        <span className="h-0.5 w-6 bg-[#F5F3EF]" />
      </button>

      {/* DESKTOP NAV */}
      <div className="hidden items-center gap-6 lg:flex">
        <button
          onClick={() => goTo("about")}
          className="text-sm text-[#F5F3EF] transition-opacity hover:opacity-70"
        >
          About
        </button>

        <button
          onClick={() => goTo("experience")}
          className="text-sm text-[#F5F3EF] transition-opacity hover:opacity-70"
        >
          Experience
        </button>

        <button
          onClick={() => goTo("insights")}
          className="text-sm text-[#F5F3EF] transition-opacity hover:opacity-70"
        >
          Insights
        </button>

        <button
          onClick={() => goTo("contact")}
          className="text-sm text-[#F5F3EF] transition-opacity hover:opacity-70"
        >
          Contact
        </button>
      </div>

      {/* LOGO / MONOGRAM */}
<button
  type="button"
  onClick={() => goTo("home")}
  className="flex items-center justify-center"
  aria-label="Eduardo Pérez Blandón - Home"
>
  <img
  src="/images/brand/epb-monogram.png"
  alt="EPB"
  className="h-9 w-auto object-contain"
/>
</button>

      {/* CTA */}
      <button
        type="button"
        onClick={() => goTo("contact")}
        className="border border-[#F5F3EF] bg-[#F5F3EF] px-4 py-2 text-sm font-semibold text-[#1C1C1C] transition-colors hover:bg-transparent hover:text-[#F5F3EF]"
      >
        Start a conversation
      </button>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col border-b border-[#F5F3EF]/10 bg-[#1C1C1C] px-[5%] py-5 shadow-lg lg:hidden">
          <button
            type="button"
            onClick={() => goTo("about")}
            className="py-3 text-left text-[#F5F3EF]"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goTo("experience")}
            className="py-3 text-left text-[#F5F3EF]"
          >
            Experience
          </button>

          <button
            type="button"
            onClick={() => goTo("insights")}
            className="py-3 text-left text-[#F5F3EF]"
          >
            Insights
          </button>

          <button
            type="button"
            onClick={() => goTo("contact")}
            className="py-3 text-left text-[#F5F3EF]"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}