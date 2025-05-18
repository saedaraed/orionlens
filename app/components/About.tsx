"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionImage = motion(Image);


const About: React.FC<{ id: string }> = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.7, 
    triggerOnce: true, 
  });

  return (
    <section id={id}  ref={ref} className=" flex items-center justify-center py-40">
<div className="container mx-auto flex flex-col md:flex-row gap-10 px-4">
        <motion.div
          className="w-full md:w-[40%]"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <MotionImage
            src="/about.png"
            alt="about"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
            animate={
              inView
                ? {
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }
                : {}
            }
          />
        </motion.div>

        <motion.div
          className="w-full md:w-[60%]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="nunito text-[40px] text-[#2076F6]">
            Our Vision – <span className="text-white"> Behind the Lens</span>
          </h2>
          <p className="mt-10 text-[20px] font-light text-white/[80%]">
            The name &quot;OrienLens&quot; combines &quot;Oriens&quot; – the Latin word for &quot;rising&quot;
            or &quot;east&quot; – with &quot;Lens,&quot; symbolizing our ability to capture and
            focus on what truly matters in the digital landscape.
          </p>
          <p className="mt-8 text-[20px] italic font-light text-white/[80%]">
            We don&apos;t just code — we tell digital stories.
          </p>
          <p className="mt-8 text-[20px] font-light text-white/[80%]">
            Our approach blends technical expertise with artistic vision,
            creating digital experiences that not only function flawlessly but
            also resonate emotionally with users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
