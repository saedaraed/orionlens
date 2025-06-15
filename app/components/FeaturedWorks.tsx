"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function CustomSlider() {
  const slides = [
    { id: 1, title: "Slide 1", imageUrl: "/assets/slide1.jpg" },
    { id: 2, title: "Slide 2", imageUrl: "/assets/slide1.jpg" },
    { id: 3, title: "Slide 3", imageUrl: "/assets/slide1.jpg" },
    { id: 4, title: "Slide 4", imageUrl: "/assets/slide1.jpg" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.2,
});
  return (
    <motion.section className="w-screen min-h-screen  overflow-hidden mt-[100px]" ref={ref}
  initial={{ opacity: 0, x: 100 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className="flex flex-col items-start justify-start text-left w-fit mx-auto px-4">
        <span className="text-heading">FEATUERED WORKS</span>
        <h2 className="md:text-[48px] text-[30px] font-bold text-white md:text-center text-left">
          Immersive <span className="text-heading">Projects </span>That{" "}
          Speak{" "}
        </h2>
        <div className="border border-heading w-[125px] h-[4px] bg-heading"></div>
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
          rotate: 50, 
          stretch: 0, 
          depth: 100,
          modifier: 1,
          slideShadows: false, 
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
                      ? "md:h-[450px] md:w-[95%] h-[250px] w-[100%] filter-none "
                      : "md:h-[700px] h-[400px] w-[100%] filter grayscale brightness-75"
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
                  className={`absolute inset-0 flex items-end p-4 justify-start bg-black bg-opacity-30`}
                >
                  {slide.title} 
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
}
