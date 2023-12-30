import React from "react";
import {Arrow} from "@/app/assets";

import Image from "next/image";

export default function ServiceCard({title, icon, description}) {
  return (
    <div
      className={`group relative border-2 border-watermark bg-lightwhite  hover:bg-bghover duration-500  w-full h-full 
      `}>
      <div className="flex flex-col items-start justify-start w-full h-full gap-4 px-5 py-7 md:gap-5 md:py-6 md:px-4 lg:gap-5 xl:gap-6 lg:px-4 xl:px-6 lg:py-6 xl:py-8">
        <div className="relative flex items-center justify-start w-full h-[25%] ">
          <Image
            src={icon}
            alt={title}
            className="z-10 object-contain w-12 h-12 hover:stroke-cyan-100"
          />
          <div className="p-4 bg-white rounded-[100px] bg-opacity-75 w-16 h-16 absolute left-4"></div>
        </div>
        <div className="w-full h-[25%] ">
          <h1 className="text-heading font-federo font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal ">
            {title}
          </h1>
        </div>
        <div className="w-full h-[35%] ">
          <h1 className="text-subheading font-poppins font-light  text-ellipsis leading-normal text-[16px] ">
            {description}
          </h1>
        </div>
        <div className="w-full h-[25%] flex justify-start items-end ">
          <button className="w-10 h-10 md:w-12 md:h-12 bg-lightGray">
            <Image src={Arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
