export const metadata = {
  title: "OrionLens",
description: "Welcome to OrionLens website. Explore professional 360° Google Street View photography, custom web design, drone footage, and creative graphic services tailored for businesses in Germany and Austria — all-in-one.",
  openGraph: {
    title: "OrionLens",
    description:
      "Professional 360° Google Street View photography, custom web design, drone footage, and creative graphic services for businesses in Germany and Austria — all-in-one, reliable, and tailored to elevate your brand and online presence.",
    url: "https://your-portfolio-domain.com", // ← غيّريها للدومين تبعك
    type: "website",
    images: [
      {
        url: "/OrionLens.png",
        width: 1200,
        height: 630,
        alt: "OrionLens Portfolio Preview",
      },
    ],
  },

};

import About from "../components/About";
import FAQ from "../components/FAQ";
import CustomSlider from "../components/FeaturedWorks";
import HeroSection from "../components/HeroSection";
import OurFeatures from "../components/OurFeaturesSection";
import Services from "../components/ServicesSection";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex justify-center items-center z-[9999]">
        <div className="flex flex-col items-center space-y-2 text-[#DFC57B]/10 text-[400px] md:text-[400px] font-bold tracking-widest select-none">
          {"ORIONLENS".split("").map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
        </div>
      </div>

      <HeroSection />
      <OurFeatures id="trust" />
      <About id="about"/>
      <Services id="services"/>
      <CustomSlider />
      <FAQ id="faq"/>
    </main>
  );
}
