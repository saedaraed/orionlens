"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";
import Link from "next/link";

const worksData = [
  { id: 1, image: "/work1.jpg", title: "Work One" },
  { id: 2, image: "/work2.jpg", title: "Work Two" },
  { id: 3, image: "/work1.jpg", title: "Work Three" },
  { id: 4, image: "/work2.jpg", title: "Work Four" },
  { id: 5, image: "/work1.jpg", title: "Work Five" },
];

const WorksSection: React.FC<{ id: string }> = ({ id }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardDelay = worksData.length * 0.2; // delay after last card

  return (
    <section id={id} className="container mx-auto w-full  py-20" ref={ref}>
      {/* Animated Heading */}
      <motion.h2
        className="nunito text-[40px] text-[#2076F6] text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: cardDelay + 0.3, duration: 0.6, ease: "easeOut" }}
      >
        Featured Works - <span className="text-white">The Galaxy</span>
      </motion.h2>

      {/* Cards */}
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {worksData.slice(0, 4).map((work, index) => (
          <motion.div
            key={work.id}
            className="w-full h-[300px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: inView ? index * 0.2 : 0,
              ease: "easeOut",
            }}
          >
            <div className="group w-full h-full [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ">
                {/* Front Face */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute flex justify-between bottom-4 left-4 right-4  w-auto bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-lg  ">
                    <Link href={`/works/${work.id}`}>{work.title}</Link>
                    <span className="text-light text-[#2076F6]">service</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button name="Show More" />
      </div>
    </section>
  );
};

export default WorksSection;
