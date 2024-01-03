import React from "react";
import {Arrow} from "@/app/assets";

import Image from "next/image";

export default function ServiceCard({title, icon, description, whiteIcon}) {
  return (
    <div
      className={`group relative border-2 border-watermark bg-lightwhite  w-full h-full hover:bg-bghover delay-75 transition-all duration-500 ease-in-out hover:border-bghover
      `}>
      <div className="flex flex-col items-start justify-start w-full h-full gap-4 px-5 py-7 md:gap-5 md:py-6 md:px-4 lg:gap-5 xl:gap-6 lg:px-4 xl:px-6 lg:py-6 xl:py-8">
        <div className="relative flex items-center justify-start w-full h-[25%] ">
          <Image
            src={icon}
            alt={title}
            className="z-10 object-contain w-12 h-12 transition-all duration-500 group-hover:hidden"
          />
          <Image
            src={whiteIcon}
            alt={title}
            className="z-10 object-contain w-12 h-12 hidden transition-all duration-500 group-hover:flex"
          />

          <div className="p-4 bg-white rounded-[100px] bg-opacity-80 w-16 h-16 absolute left-4 transition-all duration-500 group-hover:bg-opacity-10 "></div>
        </div>
        <div className="w-full h-[25%] ">
          <h1 className="text-heading font-federo font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal transition-all duration-500 group-hover:text-white">
            {title}
          </h1>
        </div>
        <div className="w-full h-[35%] ">
          <h1 className="text-gray font-poppins font-light  text-ellipsis leading-normal text-[16px] transition-all duration-500 group-hover:text-watermark">
            {description}
          </h1>
        </div>
        <div className="w-full h-[25%] flex justify-start items-end ">
          <button className="w-10 h-10 md:w-12 md:h-12 bg-lightGray transition-all duration-500 group-hover:bg-opacity-10">
            <Image
              src={Arrow}
              alt="Arrow"
              className="rotate-[-90deg] transition-all duration-500 group-hover:rotate-[-45deg]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
