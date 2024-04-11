"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Digital_marketing, Pexels_steve} from "@/app/assets";
import Image from "next/image";
import {GoDotFill} from "react-icons/go";
import {FaArrowRightLong} from "react-icons/fa6";

const Blogdata = [
  {
    image: Digital_marketing,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    writer: "Shadab Khan",
    read: "READ FULL STORY",
  },
  {
    image: Digital_marketing,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    writer: "Uday kumar",
    read: "READ FULL STORY",
  },
  {
    image: Digital_marketing,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    writer: "Shadab Khan",
    read: "READ FULL STORY",
  },
  {
    image: Digital_marketing,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    writer: "Uday Kumar",
    read: "READ FULL STORY",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const ImageSlider = ({isHover}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Ensure page index is within the bounds of the Blogdata array
  const imageIndex = ((page % Blogdata.length) + Blogdata.length) % Blogdata.length;

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="w-full h-full  absolute"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {type: "spring", stiffness: 400, damping: 30},
            opacity: {duration: 0.2},
          }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}>
          <div className="w-full px-5 md:px-6 lg:px-10 py-10  rounded-xl bg-[#407BFF] bg-opacity-40 h-full flex  flex-col md:flex-row">
            <div className="w-full h-full py-auto md:px-5 md:justify-center    lg:py-10  gap-5  flex  flex-col">
              <div className="flex  text-secondary font-public text-sm md:text-sm lg:text-base items-center gap-2 lg:gap-4">
                <h2>By-{Blogdata[imageIndex].writer}</h2>
                <h2 className="flex items-center gap-2">
                  <GoDotFill size={12} />
                  {Blogdata[imageIndex].date}
                </h2>
              </div>
              <p className="text-secondary font-federo font-medium text-xl md:pr-5 lg:pr-10 sm:text-lg md:text-2xl xl:text-5xl xl:leading-[1.15]">
                {Blogdata[imageIndex].description}
              </p>
              <h2 className=" text-secondary font-public font-medium">
                {Blogdata[imageIndex].read}
                <div className="w-36 h-1 bg-primary"></div>
              </h2>
            </div>
            <div className="w-full h-full  md:px-5 flex items-center justify-center md:justify-end  xl:px-0  ">
              <Image
                width={0}
                height={0}
                src={Blogdata[imageIndex].image}
                alt={Blogdata[imageIndex].title}
                draggable="false"
                className="w-full h-full  sm:w-[450px] md:w-full "
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {isHover && (
        <div className="absolute  w-full h-full ">
          <button
            className="absolute z-50 p-3  -translate-y-1/2 rounded-full cursor-pointer md:text-2xl -right-6 top-1/2    bg-background text-secondary shadow-3xl"
            onClick={() => paginate(1)}>
            <FaArrowRightLong />
          </button>
          <button
            className="absolute z-30 p-3  -translate-y-1/2 rounded-full cursor-pointer -left-6 md:text-2xl top-1/2 scale-[-1]  bg-background text-secondary shadow-3xl "
            onClick={() => paginate(-1)}>
            <FaArrowRightLong />
          </button>
        </div>
      )}
    </>
  );
};
