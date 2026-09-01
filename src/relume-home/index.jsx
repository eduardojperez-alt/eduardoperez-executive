import React from "react";
import { Navbar3 } from "./components/Navbar3";
import { Header1 } from "./components/Header1";
import { Stats13 } from "./components/Stats13";
import { Layout298 } from "./components/Layout298";
import { Layout139 } from "./components/Layout139";
import { Timeline5 } from "./components/Timeline5";
import { Layout457 } from "./components/Layout457";
import { Blog10 } from "./components/Blog10";
import { Layout25 } from "./components/Layout25";
import { Header46 } from "./components/Header46";
import { Layout253 } from "./components/Layout253";
import { Contact12 } from "./components/Contact12";
import { Footer11 } from "./components/Footer11";

export default function Page() {
  return (
    <div>
      <Navbar3 />

      <Header1 />
      <Stats13 />

      <div id="focus" className="scroll-mt-24" />
      <Layout298 />
      <Layout139 />

      <div id="experience" className="scroll-mt-24" />
      <Timeline5 />
      <Layout457 />

      <div id="insights" className="scroll-mt-24" />
      <Blog10 />
      <Layout25 />
      <Header46 />
      <Layout253 />

      <div id="contact" className="scroll-mt-24" />
      <Contact12 />

      <Footer11 />
    </div>
  );
}