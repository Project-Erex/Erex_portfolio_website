// import {Outline} from "@/app/assets";
import Image from "next/image";
import React from "react";

export default function ProjectsCard({title, icon, product}) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <div className="absolute z-50 flex items-center justify-center w-full h-full transition bg-black opacity-0 hover:opacity-60">
        <div>
          <Image src={Outline} alt="eyeIcon" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-6 h-4/5">
        <Image src={icon} alt={product} className="z-10 object-contain w-full h-full" />
      </div>
      <div className="w-full px-3 py-3 border-b-2 lg:px-4 lg:py-4 h-1/5 border-x-2 border-watermark">
        <span className="xl:text-base lg:text-[14px] md:text-[13px] text-[16px] font-normal leading-normal text-gray font-poppins ">
          {title}
        </span>
        <p className="xl:text-[24px] lg:text-[18px]  md:text-[15px]  text-[22px] leading-normal  font-normal text-secondary font-federo">
          {product}
        </p>
      </div>
    </div>
  );
}
