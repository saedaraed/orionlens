"use client";
import About from "./components/About";
import Button from "./components/Button";
import FAQ from "./components/FAQ";
import CustomSlider from "./components/FeaturedWorks";
import FooterWithContact from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurFeatures from "./components/OurFeaturesSection";
import "./globals.css";

export default function Home() {

  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* العنصر العمودي */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex justify-center items-center z-[9999]">
        <div className="flex flex-col items-center space-y-2 text-[#DFC57B]/10 text-6xl md:text-[400px] font-bold tracking-widest select-none">
          {"ORIONLENS".split("").map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
        </div>
      </div>

      
      <HeroSection/>
      <OurFeatures />
      <About />

      <section className="relative z-10  mt-[100px] bg-[#1A1A1A]">
        <div className="container mx-auto space-y-12 px-4 py-[80px]">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Title / Section Heading */}

            <div className="lg:w-1/3 w-full flex flex-col items-start justify-start text-left mx-auto">
              <span className="text-heading">OUR SERVICES</span>
              <h2 className="text-[48px] font-bold text-white">
                WHAT WE <br /> <span className="text-heading">OFFER </span>?{" "}
              </h2>
              <div className="border border-heading w-[125px] h-[4px] bg-heading"></div>
            </div>

            {/* 2 Cards */}
            <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black p-4  text-white">
                <svg
                  className="block p-0 m-0"
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M71 53.62C71 51.6322 69.0235 49.8025 65.7075 48.349C62.7707 47.062 59.75 49.517 59.75 52.7252V60.7748M71 53.62C71 56.6103 66.5278 59.2427 59.75 60.7748M71 53.62V61.4762M59.75 60.7748C55.8052 61.6665 51.0795 62.1856 46 62.1856C40.9204 62.1856 36.1948 61.6665 32.25 60.7748M21 53.62C21 51.6322 22.9764 49.8025 26.2926 48.349C29.2292 47.062 32.25 49.517 32.25 52.7252V60.7748M21 53.62V85.4345C21 90.1652 32.1929 94 46 94C59.807 94 71 90.1652 71 85.4345V71.4835M21 53.62C21 56.6103 25.4722 59.2427 32.25 60.7748"
                    stroke="#570909"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M65 71.5C65 73.4329 63.2091 75 61 75C58.7909 75 57 73.4329 57 71.5C57 69.5671 58.7909 68 61 68C63.2091 68 65 69.5671 65 71.5Z"
                    stroke="#570909"
                    stroke-width="5"
                  />
                  <path
                    d="M69 89L62.6598 83.6285C60.6152 81.8965 57.5701 81.724 55.3197 83.2128L54.7331 83.6008C53.1691 84.6355 51.0414 84.462 49.6896 83.1895L41.2525 75.2473C39.5683 73.6621 36.867 73.5773 35.0746 75.0536L31.6295 77.8913L22 86.7588"
                    stroke="#570909"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>

                <h3 className="text-white text-[25px] font-semibold mt-4">
                  Google Business View
                </h3>
                <p className="text-white/80 flex-grow text-[20px] mt-4">
                  360°-Tour, die Vertrauen schafft und begeistert.
                </p>
              </div>
              <div className="bg-black p-6 text-white">
                <h3 className="text-white text-[25px] font-semibold mt-6">
                  3D Virtual Tour
                </h3>
                <p className="text-white/80 flex-grow text-[20px] mt-4">
                  Let clients walk through your world — virtually.{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black p-6 text-white">
              <h3 className="text-white text-[25px] font-semibold mt-6">
                IT Dienstleistungen
              </h3>
              <p className="text-white/80 flex-grow text-[20px] mt-4">
                360°-Tour auf Google Maps – vertrauenswürdig und eindrucksvoll.{" "}
              </p>
            </div>
            <div className="bg-black p-6 text-white">
              <h3 className="text-white text-[25px] font-semibold mt-6">
                Drohne Aufnahme
              </h3>
              <p className="text-white/80 flex-grow text-[20px] mt-4">
                Stunning top-down views for any space.
              </p>
            </div>
            <div className="bg-black p-6 text-white">
              <h3 className="text-white text-[25px] font-semibold mt-6">
                Graphik Design{" "}
              </h3>
              <p className="text-white/80 flex-grow text-[20px] mt-4">
                Visuals that speak your brand’s language.
              </p>
            </div>
          </div>
        </div>
      </section>
    
      <CustomSlider/>
      <FAQ />
      <FooterWithContact />
      {/* وهكذا... */}
    </main>
  );
}
