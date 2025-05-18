"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <motion.button
      className="relative overflow-hidden text-[22px] border border-white hover:border-none rounded-2xl py-[10px] px-[30px] font-light text-white bg-transparent"
      whileHover="hover"
      initial="initial"
    >
      {/* الخلفية المتحركة */}
      <motion.span
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#2076F6] origin-left scale-x-0"
        style={{ zIndex: 0 }}
      />

      {/* النص فوق الخلفية */}
      <span className="relative z-10">{name}</span>
    </motion.button>
  );
};

export default Button;
