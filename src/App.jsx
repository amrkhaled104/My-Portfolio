import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Initialize AOS (animations on scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <>
        <Navbar />
        <HeroSection />
        <Skills />
        <Contact />
      </>
    </>
  );
}

export default App;
