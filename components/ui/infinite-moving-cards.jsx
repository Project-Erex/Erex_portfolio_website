"use client";

import Image from "next/image";
import {cn} from "../../utils/cn";
import React, {useEffect, useRef, useState} from "react";
import {TfiLineDashed} from "react-icons/tfi";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20  max-w-7xl  overflow-hidden ", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0  py-4  w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}>
        {items.map((item, index) => {
          // console.log("item", item);
          return (
            <div key={index}>
              <div className="flex w-[350px] max-w-full relative  rounded-2xl  flex-shrink-0  pt-6 md:w-[460px]  flex-col items-center justify-center px-3">
                <div className="px-8 py-2 bg-lightwhite min-h-[200px] md:min-h-[200px] flex flex-col  justify-center">
                  <p className="italic font-normal leading-5 md:leading-6  text-heading text-left text-[12px] lg:text-[12px] xl:text-[15px] font-poppins">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between w-full mt-3">
                    <span className="flex items-center gap-3 lg:gap-2 lg:text-[12px] xl:text-[16px] text-primary uppercase font-poppins font-semibold">
                      <TfiLineDashed size={30} />
                      {item.name}
                    </span>
                    <Image className="w-9 lg:w-9 xl:w-11" src={item.icon} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
