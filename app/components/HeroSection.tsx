"use client";
import Button from "./Button";
import Navbar from "./Navbar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MotionButton = motion(Button);

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.section
      ref={heroRef}
      style={{ y: translateY, opacity }}
      className="relative z-10 h-[100vh]"
    >
      <Navbar />
      <div className="flex items-end">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 4.0 }}
          src="assets/photo-hero.png"
          alt="Hero"
          className="absolute bottom-0 w-full h-full object-cover max-h-[100vh] "
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 right-0  "
      >
        <svg
          width="695"
          height="732"
          viewBox="0 0 695 732"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M695 -63L0 731.5H695V-63Z" fill="#1A1A1A" />
        </svg>
        <motion.div className="absolute bottom-10 md:left-[60%] left-[60%] transform -translate-x-1/2 text-white font-cairo text-xl z-50 w-[50%] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 7.0 }}
            className=" text-[25px] text-left font-bold"
          >
            Beyond visuals - an experience.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 8.0 }}
            className=" text-[20px] text-left mt-2 mb-4"
          >
            Immersive visuals that tell your brand’s story — from sky to screen.
          </motion.p>
         <MotionButton
 initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0 }}
  name="Contact Us" 
/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute md:bottom-[40px] bottom-[20px]  text-[14px] md:text-[16px] right-[20px]  pointer-events-none  z-[1000]"
        >
          <div className="flex flex-col items-center space-y-2 text-white md:text-[10px] font-bold tracking-widest select-none">
            {"ORIONLENS".split("").map((char, idx) => (
              <span key={idx}>{char}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
        className="absolute top-0 right-0"
      >
        <svg
          width="1440"
          height="486"
          viewBox="0 0 1440 486"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_78)">
            <path d="M1438.5 446L11.5 -62.5H1438.5V446Z" fill="#1A1A1A" />
          </g>
          <defs>
            <filter
              id="filter0_d_30_78"
              x="-8.5"
              y="-62.5"
              width="1467"
              height="548.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_30_78"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_78"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 5.8 }}
          className="absolute  md:top-40 top-[50%] md:left-[69%] left-[70%] transform -translate-x-1/2 text-white font-cairo text-xl z-50 w-[50%] text-center"
        >
          <h1 className="md:text-[40px] text-[30px] text-left font-bold leading-[1.2]">
            CAPTURE REALITY <br /> WITH PRECISION
          </h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute top-16 md:top-0  left-0 z-20"
      >
        <svg
          width="761"
          height="462"
          viewBox="0 0 761 462"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_79)">
            <path d="M-4 431.5L750.5 -61H-4V431.5Z" fill="#1A1A1A" />
          </g>
          <defs>
            <filter
              id="filter0_d_30_79"
              x="-14"
              y="-61"
              width="774.5"
              height="522.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_30_79"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_79"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.8 }}
        className="absolute top-0 left-0 z-30"
      >
        <svg
          width="771"
          height="289"
          viewBox="0 0 771 289"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_30_80)">
            <path d="M-4 243.5L750.5 -61H-4V243.5Z" fill="#1A1A1A" />
          </g>
          <defs>
            <filter
              id="filter0_d_30_80"
              x="-24"
              y="-61"
              width="794.5"
              height="349.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="25" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_30_80"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_30_80"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
