"use client";
import {cn} from "@/utils/cn";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import {useState} from "react";

const HoverEffect = ({items, className}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10", className)}>
      {items.map((item, idx) => (
        <div
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={idx} // Added a key prop to fix React warning
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
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
          <Card>
            <CardIcon src={item.icon} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({className, children}) => {
  return (
    <div
      className={cn(
        " h-full w-full p-4 overflow-hidden bg-lightwhite border border-bordercolor group-hover:border-bordercolor relative z-20",
        className,
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardIcon = ({src, alt, className}) => {
  return (
    <>
      <div className="p-4 bg-white rounded-[100px] bg-opacity-80 w-16 h-16 absolute left-6 top-6 transition-all duration-500 "></div>
      <div className="relative z-50">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          className={cn("mt-4 object-contain w-12 h-12", className)}
        />
      </div>
    </>
  );
};

const CardTitle = ({className, children}) => {
  return (
    <h4
      className={cn(
        "text-secondary font-medium font-federo tracking-wide mt-6 text-3xl",
        className,
      )}>
      {children}
    </h4>
  );
};

const CardDescription = ({className, children}) => {
  return (
    <p
      className={cn(
        "mt-8  text-grey font-poppins font-normal  text-ellipsis leading-normal text-base tracking-wide  ",
        className,
      )}>
      {children}
    </p>
  );
};

export {HoverEffect, Card, CardTitle, CardDescription};
