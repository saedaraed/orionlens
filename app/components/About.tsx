"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

type SectionProps = {
  id: string;
};
const About: React.FC<SectionProps> = ({ id }) => {
      const [ref, isInView] = useInView();
  
  return (
    <section
      id={id} ref={ref}
      className=" container w-[90%] mx-auto px-4 relative z-10  flex flex-col md:flex-row items-center justify-between mt-[100px]"
    >
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2,  ease: "easeInOut" }}
        className="origin-left w-full md:w-1/2">
        <Image
          src="/assets/about.png"
          alt="about-image"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView?{ x: 0, opacity: 1 }:{}}
        transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }} className="w-full md:w-1/2 p-6 text-left font-cairo ">
        <div>
          <span className="text-heading">ABOUT US</span>
          <h2 className="md:text-[48px] text-[30px] font-bold text-white">
            WHO ARE <span className="text-heading">WE </span>?{" "}
          </h2>
          <div className="border border-heading w-[125px] h-[4px] bg-heading"></div>
        </div>
        <p className="text-white/80 text-[20px] mt-[40px]">
          The name &quot;OrienLens&quot; combines &quot;Oriens&quot; – the Latin word for &quot;rising&quot;
          or &quot;east&quot; – with &quot;Lens,&quot; symbolizing our ability to capture and focus
          on what truly matters in the digital landscape.
        </p>
        <br />{" "}
        <p className="text-white/80 text-[20px] italic">
          We don&apos;t just code — we tell digital stories.
        </p>{" "}
        <br />
        <p className="text-white/80 text-[20px]">
          Our approach blends technical expertise with artistic vision, creating
          digital experiences that not only function flawlessly but also
          resonate emotionally with users.
        </p>
      </motion.div>
    </section>
  );
};
export default About;
