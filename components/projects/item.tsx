"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { CustomMarkdown } from "../markdown/custom";
import { ProjectDetail } from "./detail";

type ProjectItemProps = Project & {
  isClickable?: boolean;
};
export const ProjectItem = (props: ProjectItemProps) => {
  const {
    year,
    title,
    slug,
    summary,
    description,
    is_published,
    github_link,
    youtube_link,
    thumbnail,
    project_skills,
    isClickable = true,
  } = props;
  const skills = project_skills.map((ps) => ps.skill);

  const [loading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [destWidth, setDestWidth] = useState(0);
  const [destHeight, setDestHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (ref && ref.current) {
        calcBound();
      }
      window.addEventListener("resize", calcBound);
      return () => {
        window.removeEventListener("resize", calcBound);
      };
    }
  }, [ref, loading]);

  useEffect(() => {
    if (!loading) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [showDetail, loading]);

  const calcBound = () => {
    if (ref && ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;

      const rect = ref.current.getBoundingClientRect();

      setLeft(rect.left);
      setTop(rect.top);
      setWidth(width);
      setHeight(height);
      setDestWidth(window.innerWidth);
      setDestHeight(window.innerHeight);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showDetail) return null;
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleShow = () => {
    if (!isClickable) return;
    if (ref && ref.current) {
      calcBound();

      disableBodyScroll(document.body);
      setShowDetail(true);
    }
  };

  const handleClose = () => {
    if (ref && ref.current) {
      calcBound();

      enableBodyScroll(document.body);
      setShowDetail(false);
    }
  };

  if (loading) return null;
  return (
    <div
      ref={ref}
      className={`relative aspect-card ${showDetail ? "" : "cursor-pointer"}`}
      onClick={handleShow}
    >
      <motion.div
        className={`absolute bg-white grid h-full rounded-xl text-black ${
          showDetail
            ? "grid-rows-[40%__1fr] overflow-scroll z-50"
            : "grid-rows-[70%__1fr] overflow-hidden"
        }`}
        initial={{
          left: 0,
          top: 0,
          zIndex: 10,
          width,
          height,
        }}
        animate={
          showDetail
            ? {
                left: -1 * left,
                top: -1 * top,
                zIndex: 50,
                width: destWidth,
                height: destHeight,
                borderRadius: 0,
                transitionEnd: {
                  zIndex: 50,
                },
              }
            : {
                left: 0,
                top: 0,
                width,
                height,
                transitionEnd: {
                  zIndex: 10,
                },
              }
        }
        transition={{ type: "spring", stiffness: 450, damping: 50 }}
      >
        {showDetail ? (
          <div className="fixed left-0 top-0 z-[60] w-full text-xl">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="px-5 py-3"
            >
              <i className="fa-solid fa-arrow-left text-white" />
            </button>
          </div>
        ) : null}
        <motion.div className="relative flex items-center bg-black">
          {thumbnail ? (
            <motion.div
              className="w-full h-full"
              animate={showDetail ? { opacity: 0.6 } : { opacity: 1 }}
            >
              <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ) : null}
          <div className="absolute bottom-0 right-0 flex gap-x-2 p-3">
            {skills.map((skill) =>
              skill ? (
                <div
                  key={skill.id}
                  className="rounded-xl flex justify-center items-center aspect-square"
                >
                  {skill.icon ? (
                    <Image
                      src={skill.icon}
                      width={24}
                      height={24}
                      alt={skill.name}
                    />
                  ) : null}
                </div>
              ) : null
            )}
          </div>
          <div
            className={`absolute rounded-full px-2 py-1 bg-white bg-opacity-75 left-2 text-xs shadow transition ${
              showDetail ? "top-12" : "top-2"
            }`}
          >
            {year}
          </div>
        </motion.div>
        <div
          className={`flex-none px-3 flex flex-col items-center h-full max-w-[800px] w-full mx-auto ${
            showDetail ? "justify-start py-5" : "justify-center"
          }`}
        >
          <header className={`text-center ${showDetail ? "mb-5" : ""}`}>
            <h3
              className={`${
                showDetail ? "text-3xl mb-3" : ""
              } font-bold line-clamp-1 transition-all`}
            >
              {title}
            </h3>
            <p
              className={`${
                showDetail ? "text-base" : "text-sm"
              } line-clamp-1 transition-all`}
            >
              {summary}
            </p>
          </header>
          {showDetail ? <ProjectDetail {...props} /> : null}
        </div>
      </motion.div>
    </div>
  );
};
