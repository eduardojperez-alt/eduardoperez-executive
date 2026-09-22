import React from "react";
import { Navbar3 } from "./components/Navbar3";
import { Header1 } from "./components/Header1";
import { Stats13 } from "./components/Stats13";
import { Layout298 } from "./components/Layout298";
import { Approach } from "./components/Approach";
import { Layout457 } from "./components/Layout457";
import { Timeline5 } from "./components/Timeline5";
import { Layout139 } from "./components/Layout139";
import { Blog10 } from "./components/Blog10";
import { Layout25 } from "./components/Layout25";
import { Header46 } from "./components/Header46";
import { Contact12 } from "./components/Contact12";
import { Footer11 } from "./components/Footer11";

export default function Page() {
  return (
    <div>
      <Navbar3 />

      <Header1 />

      {/* CLAIM → PROOF */}
      <Stats13 />

      {/* WHAT I DO */}
      <Layout298 />

      {/* HOW I DO IT */}
      <Approach />

      {/* WHAT IT LOOKS LIKE IN PRACTICE */}
      <Layout457 />

      {/* CAREER EVIDENCE */}
      <Timeline5 />
      <Layout139 />

      {/* THOUGHT LEADERSHIP */}
      <Blog10 />
      <Layout25 />

      {/* OPPORTUNITY / CTA */}
      <Header46 />
      <Contact12 />
      <Footer11 />
    </div>
  );
}
