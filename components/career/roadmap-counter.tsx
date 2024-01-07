"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const RoadmapCounter = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setStartDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    inactive: {
      opacity: 0,
      bottom: -100,
    },
    active: {
      opacity: 1,
      bottom: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="inactive"
      whileInView="active"
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
      }}
      className="relative flex items-center gap-4"
    >
      <div className="w-8 h-8 rounded-full bg-black p-1.5 border-4 border-white">
        <div className="w-full h-full rounded-full bg-white" />
      </div>
      <div>
        <input
          className="border-b-2 border-comment hover:border-white focus:border-white transition bg-transparent text-center font-bold placeholder:text-comment px-2 py-0.5 focus:outline-none mr-3"
          placeholder="What's Next?"
        />
        <span className="font-coding font-bold text-sky-500">
          // {format(startDate, "yyyy.MM.dd. HH:mm:ss")} ~
        </span>
      </div>
    </motion.div>
  );
};
