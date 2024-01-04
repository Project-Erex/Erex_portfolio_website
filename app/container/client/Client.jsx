"use client";
import React from "react";
import {styles} from "../../styles";

import Slick from "./Slick";
import Heading from "@/app/components/heading/Heading";

const Client = () => {
  return (
    <section id="ourClient" className="w-full border-y-2 border-watermark ">
      <div
        className={` ${styles.yPadding}  xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-2 px-4 lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
        <div className="absolute flex items-center justify-center w-full px-10 ">
          <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
            CLIENTS
          </p>
        </div>
        <Heading text={"Our Client"} text2={"Discover Our Clients"} />
        <div className="z-30 flex items-center justify-center w-full mt-4 overflow-hidden md:mt-8 lg:mt-10 bg-lightwhite ">
          <Slick />
        </div>
      </div>
    </section>
  );
};

export default Client;
