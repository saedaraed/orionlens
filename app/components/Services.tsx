"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const Services: React.FC<{ id: string }> = ({ id }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const Card: React.FC<{
    delay: number;
    width: string;
    height: string;
    title: string;
    overview: string;
    direction: "top" | "left" | "right" | "bottom";
  }> = ({ delay, width, height, title, overview, direction }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const animations = {
      top: {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: inView ? 1 : 0, y: inView ? 0 : -50 },
      },
      left: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
      },
      right: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: inView ? 1 : 0, x: inView ? 0 : 50 },
      },
      bottom: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 50 },
      },
    };

    const animation = animations[direction];
    return (
      <motion.div
        ref={ref}
        initial={animation.initial}
        animate={animation.animate}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={`relative group border border-[#2076F6] bg-black rounded-2xl shadow-md p-4 hover:bg-[#2076F6] ${width} ${height}`}
      >
        {/* الأيقونة */}
        <div className="relative w-[60px] h-[60px] mx-auto my-2 rounded-full bg-[#2076F6] group-hover:bg-white shadow-[0_0_10px_#2076F6] group-hover:shadow-[0_0_10px_#ffffff] flex justify-center items-center">
          <svg
            className="w-6 h-6 text-white group-hover:text-[#2076F6]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
          </svg>
        </div>

        {/* العنوان */}
        <h2 className="text-center text-white text-[25px] opacity-[90%]">
          {title}
        </h2>

        {/* الفقرة */}
        <p className="text-center px-5 mt-2 opacity-[80%] font-light group-hover:hidden transition duration-300">
          {overview}
        </p>

        {/* الزر */}
        <div className="absolute inset-0 flex items-end pb-6 justify-center ">
          <div className="opacity-0 group-hover:opacity-100 transition duration-300">
            <Button name="Details" />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      ref={ref}
      id={id}
      className="h-screen w-full mx-auto py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/trust-background (2).jpg')",
        backgroundAttachment: inView ? "fixed" : "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <motion.h2
        className="relative nunito text-[40px] text-[#2076F6]  text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        Our Services – <span className="text-white"> Arms of Light</span>
      </motion.h2>
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 h-full mt-10">
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          <Card
            delay={0.1}
            width="w-full"
            height="h-[290px]"
            title="Google Business View"
            overview="Erwecken Sie Ihr Geschäft auf Google Maps zum Leben – mit einer interaktiven 360°-Tour, die Vertrauen schafft und Kunden begeistert."
            direction="top"
          />
          <Card
            delay={0.2}
            width="w-full"
            height="h-[210px]"
            title="3D Virtual Tour"
            overview="Let clients walk through your world — virtually."
            direction="left"
          />
        </div>

        <div className="w-full lg:w-[65%] flex flex-col gap-4">
          <Card
            delay={0.3}
            width="w-full"
            height="h-[260px]"
            title="IT Dienstleistungen"
            overview="We provide tailored IT services that power your digital growth — from infrastructure setup to full system support."
            direction="right"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Card
              delay={0.4}
              width="w-full"
              height="h-[240px]"
              title="Drohne Aufnahme"
              overview="Stunning top-down views for any space."
              direction="bottom"
            />
            <Card
              delay={0.5}
              width="w-full"
              height="h-[240px]"
              title="Graphik Design"
              overview="Visuals that speak your brand’s language."
              direction="top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
