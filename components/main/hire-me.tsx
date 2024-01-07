"use client";

import {
  animate,
  motion,
  motionValue,
  useTime,
  useTransform,
} from "framer-motion";

export const HireMe = () => {
  //   const x = motionValue(0);
  const time = useTime();
  const x = useTransform(time, [0, 2000], [0, 50], { clamp: false });

  return (
    <motion.p
      className="inline-block text-todo"
      initial={{ translateX: 0 }}
      animate={{ translateX: 32 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 50,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      // &lt;-- TODO: HIRE ME!!!
    </motion.p>
  );
};
