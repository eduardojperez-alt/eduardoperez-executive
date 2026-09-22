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

  const navItems = [
    ["Value", "value"],
    ["Approach", "approach"],
    ["Impact", "impact"],
    ["Experience", "experience"],
    ["Insights", "insights"],
  ];

  return (
    <nav
      id="top"
      className="fixed left-0 top-0 z-50 flex min-h-16 w-full items-center justify-between border-b border-[#F5F3EF]/10 bg-[#1C1C1C] px-[5%] text-[#F5F3EF]"
    >
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

      <div className="hidden items-center gap-6 lg:flex">
        {navItems.map(([label, id]) => (
          <button
            key={id}
            onClick={() => goTo(id)}
            className="text-sm text-[#F5F3EF] transition-opacity hover:opacity-70"
          >
            {label}
          </button>
        ))}
      </div>

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

      <button
        type="button"
        onClick={() => goTo("contact")}
        className="border border-[#F5F3EF] bg-[#F5F3EF] px-4 py-3 text-sm font-semibold text-[#1C1C1C] transition-colors hover:bg-transparent hover:text-[#F5F3EF] md:px-5 md:py-3"
      >
        <span className="md:hidden">Let&apos;s talk</span>
        <span className="hidden md:inline">Start a conversation</span>
      </button>

      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col border-b border-[#F5F3EF]/10 bg-[#1C1C1C] px-[5%] py-5 shadow-lg lg:hidden">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="py-3 text-left text-[#F5F3EF]"
            >
              {label}
            </button>
          ))}

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
