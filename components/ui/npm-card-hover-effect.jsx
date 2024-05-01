"use client";

import {Arrow2} from "@/app/assets";
import {cn} from "@/utils/cn";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const NpmCardHoverEffect = ({items, className}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 bg-background md:grid-cols-2 lg:grid-cols-3 ",
        className,
      )}>
      {/* First Card */}
      <div
        className="relative block w-full h-full p-2 group"
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <AnimatePresence>
          {hoveredIndex === 0 && (
            <motion.span
              className="absolute inset-0 block w-full h-full bg-secondary "
              layoutId="hoverBackground"
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {duration: 0.15},
              }}
              exit={{
                opacity: 0,
                transition: {duration: 0.15, delay: 0.2},
              }}
            />
          )}
        </AnimatePresence>
        <Card item={items[0]} />
      </div>

      {/* Second Card */}
      <div
        className="relative block w-full h-full p-2 group"
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <AnimatePresence>
          {hoveredIndex === 1 && (
            <motion.span
              className="absolute inset-0 block w-full h-full bg-secondary "
              layoutId="hoverBackground"
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {duration: 0.15},
              }}
              exit={{
                opacity: 0,
                transition: {duration: 0.15, delay: 0.2},
              }}
            />
          )}
        </AnimatePresence>
        <Card item={items[1]} />
      </div>

      {/* Third Card */}
      <div
        className="relative block w-full h-full p-2 group"
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <AnimatePresence>
          {hoveredIndex === 2 && (
            <motion.span
              className="absolute inset-0 block w-full h-full bg-secondary "
              layoutId="hoverBackground"
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {duration: 0.15},
              }}
              exit={{
                opacity: 0,
                transition: {duration: 0.15, delay: 0.2},
              }}
            />
          )}
        </AnimatePresence>
        <CustomCard />
      </div>
    </div>
  );
};

const Card = ({item}) => {
  return (
    <div className="relative z-20 w-full h-full p-4 overflow-hidden border  bg-lightwhite border-bordercolor group-hover:border-bordercolor">
      <div className="relative z-50 bg-lightwhite">
        <div className="p-4">
          <div className={` relative  bg-lightwhite   w-full h-full`}>
            <div className="flex flex-col items-start justify-start w-full h-full ">
              <div className="flex items-center justify-between w-full h-auto pr-4 ">
                <div className="relative flex items-center justify-start w-full">
                  <Image
                    src={item?.logo}
                    alt={item?.title}
                    className="z-10 object-contain w-16 h-16 "
                  />

                  <div className="p-4 bg-white rounded-[100px] bg-opacity-80 w-16 h-16 absolute left-4 transition-all duration-500  "></div>
                </div>
                <Link
                  href={item?.url}
                  to="#"
                  target="_blank"
                  className="px-2 py-2 bg-white">
                  <Image src={item?.icon} alt={item?.title} />
                </Link>
              </div>
              <div className="w-full h-auto ">
                <h1 className="text-heading ` font-federo font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal  ">
                  {item?.title}
                </h1>
              </div>
              <div className="w-full h-auto">
                <h1 className="text-grey font-poppins font-normal  text-ellipsis leading-normal text-[16px] ">
                  {item?.description}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomCard = () => {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full gap-2 p-4 overflow-hidden border  bg-lightwhite border-bordercolor group-hover:border-bordercolor">
      <div className="p-4">
        <div className="relative flex flex-col items-center justify-center w-full">
          <Link
            target="_blank"
            to="#"
            href={"https://www.npmjs.com/~erexstudio"}
            className="w-20 px-4 py-4 transition-all duration-500 bg-white rounded-full ">
            <Image src={Arrow2} alt="Erex" />
          </Link>
          <Link to="#" href={"https://www.npmjs.com/~erexstudio"} target="_blank">
            <button className="text-heading font-federo    font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export {NpmCardHoverEffect, Card};
