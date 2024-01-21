"use client";
import React from "react";
import {styles} from "../../styles";

import Slick from "./Slick";
import Heading from "@/app/components/heading/Heading";
import {CLIENTS} from "@/app/assets";

const Client = () => {
  return (
    <section
      id="ourClient"
      className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          className={` ${styles.yPadding}   ${styles.xMargin} ${styles.xdivPadding} bg-background 2xl:border-y-4  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
          <Heading text={"Our Client"} text2={"Discover Our Clients"} img={CLIENTS} />
          <div className="z-30 flex items-center justify-center w-full mt-8 overflow-hidden md:mt-8 lg:mt-10 bg-lightwhite ">
            <Slick />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
