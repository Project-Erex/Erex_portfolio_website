"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {GrNext} from "react-icons/gr";
import {GrPrevious} from "react-icons/gr";
import {GoDotFill} from "react-icons/go";
import Image from "next/image";
import moment from "moment";

export default function BlogBanner({data}) {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full ">
      <button
        className="absolute z-50 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer md:text-2xl -right-10 top-1/2 md:-right-12 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickNext()}>
        <GrNext />
      </button>
      <button
        className="absolute z-30 p-2 text-white -translate-y-1/2 rounded-full cursor-pointer -left-5 md:text-2xl top-1/2 md:-left-12 bg-primary ring-sky-200 ring-4"
        onClick={() => slider?.current?.slickPrev()}>
        <GrPrevious />
      </button>
      <Slider ref={slider} {...settings}>
        {data.map((Blog, index) => {
          return (
            <div key={index}>
              <div className="w-full px-5 md:px-6 lg:px-10 py-10 rounded-xl bg-[#407BFF]  bg-opacity-40 items-center  h-full flex flex-col md:flex-row">
                <div className="flex flex-col w-full h-full gap-5 py-auto md:px-5 md:justify-center lg:py-10">
                  <div className="flex items-center gap-2 text-sm text-secondary font-public md:text-sm lg:text-base lg:gap-4">
                    <h2>By-{Blog.created_by}</h2>

                    <h2 className="flex items-center gap-2">
                      <GoDotFill size={12} />
                      {moment(Blog.created_at).format("MMM DD YYYY h:mm:ss a")}
                    </h2>
                  </div>
                  <p className="text-secondary font-federo font-medium text-xl md:pr-5 lg:pr-10 sm:text-lg md:text-2xl xl:text-5xl xl:leading-[1.15]">
                    {Blog.title}
                  </p>
                  <h2 className="font-medium text-secondary font-public">
                    READ FULL STORY
                    <div className="h-1 w-36 bg-primary"></div>
                  </h2>
                </div>
                <div className="flex items-center justify-center w-full h-full md:px-5 md:justify-end xl:px-0 ">
                  <Image
                    width={0}
                    height={0}
                    src={Blog.blog_thumbnail}
                    alt={Blog.title}
                    draggable="false"
                    className="w-full h-full rounded-xl  sm:w-[450px] sm:h-[350px] "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
