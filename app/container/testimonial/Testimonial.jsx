import Heading from "@/app/components/heading/Heading";
import {styles} from "@/app/styles";
import React from "react";
import Slick from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <section
      id="ourClient"
      className="flex justify-center w-full border-b-2 2xl:border-b-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding}  ${styles.xMargin} px-1  2xl:border-b-4 bg-background lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
          <div className="absolute left-0 flex items-center justify-center w-full px-10 2xl:hidden ">
            <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.4vw] lg:text-[9.6vw] xl:text-[10vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
              TESTIMONIAL
            </p>
          </div>
          <Heading text={"Testimonials"} text2={"What Our Client Say"} />
          <div className="z-30 flex items-center justify-center w-full mt-4 overflow-hidden md:mt-8 lg:mt-10 ">
            <Slick />
          </div>
        </div>
      </div>
    </section>
  );
}
