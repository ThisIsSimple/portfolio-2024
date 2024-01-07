"use client";

import { motion } from "framer-motion";

export const ShiningText = ({ text }: { text: string }) => {
  const variants = {
    inactive: {
      y: 0,
      scale: 1,
    },
    active: {
      y: -8,
      scale: 1.1,
    },
  };
  return (
    <motion.span
      className="inline-block font-bold border-b border-pink-600 text-pink-600"
      initial="active"
      animate="inactive"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          variants={variants}
          key={index}
          className="inline-block relative"
          transition={{
            delay: index / 20 + 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        >
          {letter === " " ? <span className="inline-block w-2" /> : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
