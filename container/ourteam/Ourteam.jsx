"use client";

import React from "react";
import {styles} from "../../app/styles";
import Heading from "@/components/heading/Heading";
import {ourTeam} from "@/constants";
import OurteamCard from "./OurteamCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {GrNext} from "react-icons/gr";
// import {GrPrevious} from "react-icons/gr";
export default function Ourteam() {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full border-b-2 border-watermark ">
      <div
        className={` ${styles.yPadding} xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-6 px-4 lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-background `}>
        <div className="absolute left-0 flex items-center justify-center w-full px-10 ">
          <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.4vw] lg:text-[9.6vw] xl:text-[10vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
            OUR MEMBER
          </p>
        </div>
        <Heading text={"Our Team"} text2={"Our Experience Team Member"} />
        <div className="relative w-full px-5 pt-5 overflow-hidden xl:pt-14 md:pt-10 ">
          <Slider ref={slider} {...settings}>
            {ourTeam.map((projects, index) => (
              <>
                <div className="px-2" key={projects.id}>
                  <OurteamCard key={projects.title} index={index} {...projects} />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
