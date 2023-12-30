"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {GrNext} from "react-icons/gr";
// import {GrPrevious} from "react-icons/gr";
import {testiMonial} from "@/app/constants";
// import {BsDashLg} from "react-icons/bs";
import {TfiLineDashed} from "react-icons/tfi";
import Image from "next/image";

export default function Slick({}) {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="relative w-full overflow-hidden">
      {/* <button
        className="absolute z-50 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer md:text-2xl -right-5 top-1/2 md:right-0 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickNext()}>
        <GrNext />
      </button>
      <button
        className="absolute z-30 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer -left-5 md:text-2xl top-1/2 md:left-0 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickPrev()}>
        <GrPrevious />
      </button> */}
      <Slider ref={slider} {...settings}>
        {testiMonial.map((item, index) => {
          return (
            <div key={item.id}>
              <div className="flex flex-col items-center justify-center px-3">
                <div className="px-4 py-4 bg-lightwhite">
                  <p className="italic leading-6 text-secondary text-left text-[14px] lg:text-[12px] xl:text-[14px] font-poppins">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <span className="flex items-center gap-3 lg:gap-2 lg:text-[12px] xl:text-[16px] text-primary">
                      {/* <BsDashLg /> */}
                      {/* <BsDashLg /> */}
                      <TfiLineDashed size={30} />
                      {item.name}
                    </span>
                    <Image className="w-9 lg:w-9 xl:w-11" src={item.icon} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
