import Heading from "@/app/components/heading/Heading";
import {styles} from "@/app/styles";
import React from "react";
import Slick from "./TestimonialSlider";

export default function Testimonial() {
  return (
    <section id="ourClient" className="w-full border-b-2 border-watermark ">
      <div
        className={` ${styles.yPadding} xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-2 px-2 lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
        <div className="absolute left-0 flex items-center justify-center w-full px-10 ">
          <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.4vw] lg:text-[9.6vw] xl:text-[10vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
            TESTIMONIAL
          </p>
        </div>
        <Heading text={"Testimonials"} text2={"What Our Client Say"} />
        <div className="z-30 flex items-center justify-center w-full mt-4 overflow-hidden md:mt-8 lg:mt-10 ">
          <Slick />
        </div>
      </div>
    </section>
  );
}
