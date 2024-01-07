"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";

type RoadmapItemProps = {
  title: string;
  startDate: Date;
  endDate?: Date | null;
};
export const RoadmapItem = ({
  title,
  startDate,
  endDate,
}: RoadmapItemProps) => {
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
        <span className="font-bold mr-2">{title}</span>
        <span className="font-coding text-comment">
          // {format(new Date(startDate), "yyyy.MM.dd.")} ~{" "}
          {endDate ? `${format(new Date(endDate), "yyyy.MM.dd.")}` : null}
        </span>
      </div>
    </motion.div>
  );
};
