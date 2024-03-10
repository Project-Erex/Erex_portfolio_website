"use client";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
import {fadeInTopVariant} from "@/app/constants/framer_motion";
export default function Heading({text, text2, img}) {
  return (
    <div className="z-50 flex flex-col items-center justify-center w-full gap-6 md:gap-4 xl:gap-6">
      {/* first-heading */}
      <div className="relative flex items-center justify-center pr-12 w-80">
        <div className="px-5 py-5 border-2 border-primary"></div>
        <div className="absolute flex items-center  w-[8.5rem] right-14 justify-items-center">
          <span className="absolute left-0 whitespace-nowrap bg-background text-primary">
            {text}
          </span>
        </div>
      </div>
      {/* second heading */}
      <div className="relative z-50 flex flex-col justify-center w-full h-full ">
        <span className=" absolute w-full font-federo  text-secondary text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-center font-normal">
          {text2}
        </span>
        <motion.div
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="relative items-center justify-center hidden w-full md:px-10 md:flex -z-10">
          <Image src={img} alt="Image" />
        </motion.div>
      </div>
    </div>
  );
}
