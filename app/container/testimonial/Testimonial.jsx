"use client";
import Heading from "@/app/components/heading/Heading";
import {styles} from "@/app/styles";
import React from "react";
import Slick from "./TestimonialSlider";
import {TESTIMONIAL} from "@/app/assets";
export default function Testimonial() {
  return (
    <section
      // id="ourClient"
      className="flex justify-center w-full border-b-2 2xl:border-b-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding}  ${styles.xMargin} px-1  2xl:border-b-4 bg-background lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
          <Heading
            text={"Testimonials"}
            text2={"What Our Client Say"}
            img={TESTIMONIAL}
          />
          <div className="z-30 flex items-center justify-center w-full mt-8 overflow-hidden md:mt-8 lg:mt-10 ">
            <Slick />
          </div>
        </div>
      </div>
    </section>
  );
}
