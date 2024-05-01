"use client";
import Heading from "@/components/heading/Heading";
import {styles} from "@/app/styles";
import React from "react";
import Slick from "./TestimonialSlider";
import {TESTIMONIAL} from "@/app/assets";
import {InfiniteMovingCards} from "../../components/ui/infinite-moving-cards";
import {testiMonial} from "@/constants";
export default function Testimonial() {
  return (
    <section
      // id="ourClient"
      className="flex justify-center w-full border-b-2 2xl:border-b-0 border-watermark ">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding}  ${styles.xMargin} px-1  2xl:border-b-4  lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-background `}>
          <Heading
            text={"Testimonials"}
            text2={"What Our Client Say"}
            img={TESTIMONIAL}
          />
          <div className="z-30 flex items-center justify-center w-full overflow-hidden ">
            {/* <Slick /> */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased  bg-background">
              <InfiniteMovingCards items={testiMonial} direction="right" speed="slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
