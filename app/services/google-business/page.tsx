"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Button from "@/app/components/Button";

const worksData = [
    { id: 1, image: "/work1.jpg", title: "Work One" },
  { id: 2, image: "/work2.jpg", title: "Work Two" },
  { id: 3, image: "/work1.jpg", title: "Work Three" },
  { id: 4, image: "/work2.jpg", title: "Work Four" },
  { id: 5, image: "/work1.jpg", title: "Work Five" },
  { id: 6, image: "/work2.jpg", title: "Work Six" },
  { id: 7, image: "/work1.jpg", title: "Work Seven" },
  { id: 8, image: "/work2.jpg", title: "Work Eight" },
  { id: 9, image: "/work1.jpg", title: "Work Nine" },
];

const GoogleBusiness: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="text-white">
      {/* Header Section */}
      <div
        className="h-[75vh] w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/40.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Web Design</h1>
        </div> */}
      </div>

      {/* Service Title */}
      <div className="text-center my-12">
        <h2 className="relative nunito text-[40px] text-[#2076F6] text-center">
          Google Business View
        </h2>
      </div>

      {/* Service Description */}
      <div className="max-w-3xl mx-auto text-center text-white/80 text-lg mb-20 px-4">
        <p>
          We create beautiful, functional websites that bring your brand to life. <br />
          Our process combines design, UX, and performance for the best results. <br />
          Whether it’s an eCommerce or portfolio, we craft it with intention.
        </p>
      </div>

      {/* Replacing "Our Work" with Featured Works */}
      <section className="container mx-auto w-full py-20" ref={ref}>
        <motion.h2
          className="nunito text-[40px] text-[#2076F6] text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: worksData.length * 0.2 + 0.3, duration: 0.6, ease: "easeOut" }}
        >
        Portfolio 
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {worksData.slice(0, 9).map((work, index) => (
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
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                  {/* Front Face */}
                  <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute flex justify-between bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-lg">
                      <p>{work.title}</p>
                      <span className="text-light text-[#2076F6]">service</span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute w-full h-full [transform:rotateX(180deg)] [backface-visibility:hidden] bg-[#2076F6] text-white flex items-center justify-center">
                    <Link href={`/works/${work.id}`}>
                      <Button name="Details" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      <div className="h-20"></div> {/* Spacer at bottom */}
    </div>
  );
};

export default GoogleBusiness;
