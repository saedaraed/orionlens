"use client"
import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/effect-coverflow";
export default function CustomSlider() {
  const slides = [
    { id: 1, title: "Slide 1", imageUrl: "/assets/slide1.jpg" },
    { id: 2, title: "Slide 2", imageUrl: "/assets/slide1.jpg" },
    { id: 3, title: "Slide 3", imageUrl: "/assets/slide1.jpg" },
    { id: 4, title: "Slide 4", imageUrl: "/assets/slide1.jpg" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
  <section className="w-screen min-h-screen  overflow-visible mt-[100px]">
<div className="flex flex-col items-start justify-start text-left w-fit mx-auto">
          <span className="text-heading">FEATUERED WORKS</span>
          <h2 className="text-[48px] font-bold text-white text-center">
            Immersive <span className="text-heading">Projects </span>That <br /> Speak{" "}
          </h2>
          {/* <div className="border border-heading w-[125px] h-[4px] bg-heading"></div> */}
        </div>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          style={{ height: "100%", width: "100%" }}
          coverflowEffect={{
            rotate: 50, // زاوية الدوران
            stretch: 0, // المسافة بين الشرائح
            depth: 100, // عمق 3D
            modifier: 1,
            slideShadows: false, // لو حابب تضيف شادو
          }}
          modules={[EffectCoverflow]}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={slide.id} className="h-full my-auto">
                <div
                  className={`
                  relative
                  mx-auto
                  flex items-center justify-center
                  text-white text-2xl font-bold
                  transition-all duration-500 ease-in-out
                  rounded-lg
                  overflow-hidden
                  cursor-pointer
                  bg-white
                  ${
                    isActive
                      ? "h-[450px] w-[95%] filter-none "
                      : "h-[700px] w-[100%] filter grayscale brightness-75"
                  }
                `}
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transformOrigin: "center",
                  }}
                >
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30`}
                  >
                    {slide.title}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
  );
}
