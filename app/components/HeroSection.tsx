"use client";

import { motion } from "framer-motion";
import Button from "./Button";
const HeroSection: React.FC = ({
}) => {
    
  return (
    <motion.section className="relative h-screen w-full overflow-hidden bg-black text-white"
     
      transition={{ duration: 1, ease: "easeInOut" }}>
      <div className="absolute inset-0 z-0">
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/galaxy-bg.mp4" type="video/mp4" />
        </motion.video>
      </div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>

  <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <p className="text-[25px] text-white/[80%]">
          Immersive visuals for standout businesses
        </p>
        <h1 className="text-[50px] font-medium nunito">
          Capture reality with precision, <br /> light, and vision.
        </h1>
        <br />
        <br />
        <Button name="Contact Us" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
