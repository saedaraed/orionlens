import React from "react";
import CustomSlider from "@/app/components/FeaturedWorks";
import FAQ from "@/app/components/FAQ";
import FooterWithContact from "@/app/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white font-cairo overflow-hidden">
      {/* Hero */}
      <section className="relative bg-[url('/business-view.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="absolute w-full h-full bg-black/70"></div>
        <div className="absolute z-100 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Virtuelle Rundgänge mit Google Business View
          </h1>
          <p className="text-lg text-gray-300">
            Zeigen Sie Ihr Unternehmen von innen – interaktiv, authentisch und
            direkt auf Google.
          </p>
        </div>
      </section>
      <div className="container mx-auto flex gap-10 text-left ">
        <div className="w-[70%]">
          {/* Info section */}
          <section className="mt-10">
            <p className="text-[20px] text-white/80 mb-10">
              Google Business View ist eine interaktive 360°-Tour durch Ihr
              Geschäft, Ihre Praxis oder Ihren Showroom – direkt in der
              Google-Suche und auf Google Maps sichtbar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center text-[20px] p-4 border border-heading bg-secondaryColor">
                Increased visibility in search results
              </div>
              <div className="text-center text-[20px] p-4 border border-heading bg-secondaryColor">
                Builds trust through transparency
              </div>
              <div className="text-center text-[20px] p-4 border border-heading bg-secondaryColor">
                Helps customers decide faster
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="bg-black text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[25px] font-bold mb-12 text-center">
                Wie funktioniert es?
              </h2>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-heading"></div>

                {/* Step 1 */}
                <div className="flex justify-start mb-14 relative">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="inline-block">
                      <p className="text-heading text-[sm] font-medium">
                        step 1
                      </p>
                      <h3 className="text-[25px] font-semibold mb-1">
                        Beratung & Planung
                      </h3>
                      <p className="text-white/80 text-[20px]">
                        Wir analysieren Ihr Geschäft und planen den besten
                        Ablauf für die Tour.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 flex items-center justify-start">
                    <div className="bg-white text-black/20 w-12 h-12 flex items-center justify-center text-[40px] font-bold  z-10">
                      1
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex justify-end mb-14 relative">
                  <div className="w-1/2 pr-8 flex items-center justify-end">
                    <div className="bg-white text-black/20 w-12 h-12 flex items-center justify-center text-[40px] font-bold  z-10">
                      2
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="inline-block">
                      <p className="text-heading text-sm font-medium">step 2</p>
                      <h3 className="text-[25px] font-semibold mb-1">
                        Professionelle 360°-Aufnahmen
                      </h3>
                      <p className="text-white/80 text-[20px]">
                        Unsere zertifizierten Fotografen erfassen hochwertige
                        Panorama-Bilder Ihrer Räume.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex justify-start mb-14 relative">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="inline-block">
                      <p className="text-heading text-sm font-medium">step 3</p>
                      <h3 className="text-[25px] font-semibold mb-1">
                        Bearbeitung & Integration
                      </h3>
                      <p className="text-white/80 text-[20px]">
                        Wir bearbeiten die Tour und integrieren sie direkt auf
                        Google Maps & Ihre Website.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 flex items-center justify-start">
                    <div className="bg-white text-black/20 w-12 h-12 flex items-center justify-center text-[40px] font-bold  z-10">
                      3
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex justify-end relative">
                  <div className="w-1/2 pr-8 flex items-center justify-end">
                    <div className="bg-white text-black/20 w-12 h-12 flex items-center justify-center text-[40px] font-bold  z-10">
                      4
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="inline-block">
                      <p className="text-heading text-sm font-medium">step 4</p>
                      <h3 className="text-[25px] font-semibold mb-1">
                        Optional: Einbettung in Ihre Webseite
                      </h3>
                      <p className="text-white/80 text-[20px]">
                        Für maximale Reichweite und Nutzerfreundlichkeit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[30%]">
          <div className="bg-secondaryColor w-full mt-10">
            <div className="bg-heading py-4 px-4 text-[20px]">
              <Link href="">Google Business View</Link>
            </div>
            <div className="py-4 px-4 text-[20px] hover:bg-heading">
              <Link href="">3D Virtual Tour</Link>
            </div>
            <div className="py-4 px-4 text-[20px] hover:bg-heading">
              <Link href="">IT Dienstleistungen</Link>
            </div>
            <div className="py-4 px-4 text-[20px] hover:bg-heading">
              <Link href="">Drohne Aufnahme</Link>
            </div>
            <div className="py-4 px-4 text-[20px] hover:bg-heading">
              <Link href="">Graphik Design</Link>
            </div>
          </div>
          <div className="bg-heading w-full mt-10 p-4">
            <p className="text-[20px] mb-2">Jetzt kostenlose Beratung anfragen</p>
            <p className="text-[20px] mb-2">Oder schreiben Sie uns</p>
            <h3 className="flex gap-2 items-center text-[25px] font-bold"><svg width="46" height="48" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1667 33.84V39.84C42.1689 40.397 42.0596 40.9483 41.8457 41.4586C41.6319 41.969 41.3182 42.4271 40.9249 42.8037C40.5315 43.1802 40.0672 43.4669 39.5615 43.6454C39.0558 43.8238 38.52 43.8901 37.9884 43.84C32.0905 43.1712 26.4252 41.0682 21.4476 37.7C16.8166 34.6293 12.8903 30.5323 9.94758 25.7C6.70837 20.4824 4.69254 14.5419 4.06341 8.35995C4.01551 7.80688 4.0785 7.24947 4.24837 6.7232C4.41823 6.19693 4.69125 5.71333 5.05004 5.30319C5.40883 4.89306 5.84553 4.56537 6.33234 4.34099C6.81915 4.11662 7.34539 4.00047 7.87758 3.99995H13.6276C14.5577 3.9904 15.4595 4.33411 16.1648 4.96702C16.8701 5.59992 17.3307 6.47884 17.4609 7.43995C17.7036 9.36008 18.1537 11.2454 18.8026 13.0599C19.0605 13.7758 19.1163 14.5538 18.9634 15.3017C18.8105 16.0496 18.4554 16.7362 17.9401 17.28L15.5059 19.8199C18.2344 24.827 22.2074 28.9728 27.0059 31.82L29.4401 29.28C29.9612 28.7422 30.6191 28.3716 31.3359 28.2121C32.0527 28.0526 32.7982 28.1109 33.4842 28.3799C35.2232 29.0571 37.0299 29.5267 38.8701 29.78C39.8011 29.917 40.6514 30.4064 41.2593 31.1549C41.8671 31.9035 42.1901 32.8591 42.1667 33.84Z" stroke="white" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.1667 33.84V39.84C42.1689 40.397 42.0596 40.9483 41.8457 41.4586C41.6319 41.969 41.3182 42.4271 40.9249 42.8037C40.5315 43.1802 40.0672 43.4669 39.5615 43.6454C39.0558 43.8238 38.52 43.8901 37.9884 43.84C32.0905 43.1712 26.4252 41.0682 21.4476 37.7C16.8166 34.6293 12.8903 30.5323 9.94758 25.7C6.70837 20.4824 4.69254 14.5419 4.06341 8.35995C4.01551 7.80688 4.0785 7.24947 4.24837 6.7232C4.41823 6.19693 4.69125 5.71333 5.05004 5.30319C5.40883 4.89306 5.84553 4.56537 6.33234 4.34099C6.81915 4.11662 7.34539 4.00047 7.87758 3.99995H13.6276C14.5577 3.9904 15.4595 4.33411 16.1648 4.96702C16.8701 5.59992 17.3307 6.47884 17.4609 7.43995C17.7036 9.36008 18.1537 11.2454 18.8026 13.0599C19.0605 13.7758 19.1163 14.5538 18.9634 15.3017C18.8105 16.0496 18.4554 16.7362 17.9401 17.28L15.5059 19.8199C18.2344 24.827 22.2074 28.9728 27.0059 31.82L29.4401 29.28C29.9612 28.7422 30.6191 28.3716 31.3359 28.2121C32.0527 28.0526 32.7982 28.1109 33.4842 28.3799C35.2232 29.0571 37.0299 29.5267 38.8701 29.78C39.8011 29.917 40.6514 30.4064 41.2593 31.1549C41.8671 31.9035 42.1901 32.8591 42.1667 33.84Z" stroke="white" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg> +21 008 0000
</h3>
          </div>
        </div>
      </div>
      <CustomSlider />
      <FAQ />
      <FooterWithContact />
    </main>
  );
}
