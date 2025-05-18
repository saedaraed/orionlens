"use client";
import "./globals.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WorksSection from "./components/WorksSection";
import Contact from "./components/Contact";
import TrustUs from "./components/TrustUs";


export default function Home() {

  return (
    <div className="relative">
  <HeroSection />
      <About  id="about" />
      <Services id="services"/> 
      <TrustUs id="trust"/>
      <WorksSection id="works"/>
      <Contact/>
     
    </div>
  );
}
