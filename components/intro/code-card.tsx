"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HireMe } from "./hire-me";

export const CodeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "spring",
      }}
      className="max-w-[650px] w-full mx-auto rounded-3xl overflow-hidden shadow-lg"
    >
      <div className="px-5 py-3 flex gap-3 bg-zinc-800">
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="bg-red-500 w-4 h-4 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.25 }}
          className="bg-gray-500 w-4 h-4 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
          className="bg-green-500 w-4 h-4 rounded-full"
        />
      </div>
      <div className="font-coding p-5 md:p-10 bg-zinc-900 text-xl leading-8">
        <motion.div
          initial={{ opacity: 0, scaleY: 0.1 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <p className="text-comment">// Who am I?</p>
          <article className="">
            <span className="text-let">const</span>{" "}
            <span className="text-var-name">name</span> ={" "}
            <span className="text-json">"전윤민"</span>;{" "}
            <br className="block md:hidden" />
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 1.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 2 }}
            >
              <HireMe />
            </motion.div>
          </article>
          <br />
          <article>
            <span className="text-let">const</span>{" "}
            <span className="text-var-name">info</span>
            <span> = </span>
            <span>{"{"}</span>
            <p className="pl-5 text-json">
              "💌": "cordelia273@kakao.com",
              <br />
              "🏠":{" "}
              <Link
                href="https://blog.cordelia273.space"
                className="text-blue-500 hover:text-blue-800 transition"
              >
                "blog.cordelia273.space",
              </Link>
              <br />
              "📞": "010-2966-9682",
              <br />
            </p>
            <span>{"}"}</span>
          </article>
          <p>
            <br />
            <span className="text-comment">// I won't</span>
            <br />
            <span className="text-let">let </span>
            <span className="text-var-name">you</span>
            <span> = </span>
            <span className="text-string">"DOWN"</span>
            <span>;</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
