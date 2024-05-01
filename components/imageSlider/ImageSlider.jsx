"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {FaArrowRightLong} from "react-icons/fa6";

import {GoDotFill} from "react-icons/go";
import moment from "moment";
import Image from "next/image";
import {useEffect} from "react";

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

export const ImageSlider = ({BlogData, isHover}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(BlogData);
    console.log("badkkd", BlogData);
  }, [BlogData]);

  const paginate = (newDirection) => {
    const totalPages = data.length;
    let nextPage = page + newDirection;
    if (nextPage < 0) {
      nextPage = totalPages - 1;
    } else if (nextPage >= totalPages) {
      nextPage = 0;
    }
    setPage([nextPage, newDirection]);
  };

  // Get the current blog post based on the current page index
  const currentBlog = data.length > 0 ? data[page] : null;

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute w-full h-full"
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
          {currentBlog && (
            <div key={currentBlog._id}>
              <div className="w-full px-5 md:px-6 lg:px-10 py-10 rounded-xl bg-[#407BFF] bg-opacity-40 items-center h-full flex flex-col md:flex-row">
                <div className="flex flex-col w-full h-full gap-5 py-auto md:px-5 md:justify-center lg:py-10">
                  <div className="flex items-center gap-2 text-sm text-secondary font-public md:text-sm lg:text-base lg:gap-4">
                    <h2>By-{currentBlog.created_by}</h2>
                    <h2 className="flex items-center gap-2">
                      <GoDotFill size={12} />
                      {moment(currentBlog.created_at).format("MMM DD YYYY h:mm:ss a")}
                    </h2>
                  </div>
                  <p className="text-secondary font-federo font-medium text-xl md:pr-5 lg:pr-10 sm:text-lg md:text-2xl xl:text-5xl xl:leading-[1.15]">
                    {currentBlog.title}
                  </p>
                  <h2 className="font-medium text-secondary font-public">
                    READ FULL STORY
                    <div className="h-1 w-36 bg-primary"></div>
                  </h2>
                </div>
                <div className="flex items-center justify-center w-full h-full md:px-5 md:justify-end xl:px-0 ">
                  <Image
                    width={0}
                    height={0}
                    src={currentBlog.blog_thumbnail}
                    alt={currentBlog.title}
                    draggable="false"
                    className="w-full h-full rounded-xl  sm:w-[450px] md:w-full "
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      {isHover && (
        <div className="absolute w-full h-full ">
          <button
            className="absolute z-50 p-3 -translate-y-1/2 rounded-full cursor-pointer md:text-2xl -right-6 top-1/2 bg-background text-secondary shadow-3xl"
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
