import Image from "next/image";
import React from "react";
import {GoDash} from "react-icons/go";
export default function ProjectsCard({title, icon, product, date, name, description}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-6 overflow-hidden border-2 md:gap-3 md:p-3 lg:p-4 xl:p-6 border-watermark">
      <div className="flex items-center justify-center w-full bg-fuchsia-200 h-1/2 ">
        <Image src={icon} alt={product} className="z-10 object-contain w-full h-full" />
      </div>
      <div className="flex flex-col w-full gap-2 border-b-2 md:gap-1 h-1/2 ">
        <div className="flex items-center w-full gap-2 xl:flex-row md:justify-start xl:items-center xl:gap-2 md:items-start md:gap-0 md:flex-col ">
          <span className="text-base md:text-[12px] xl:text-base font-normal text-primary font-poppins">
            {date}
          </span>
          <GoDash className="md:hidden xl:block" color="blue" />
          <p className="text-base  font-normal md:text-[12px] xl:text-base text-primary font-poppins">
            By {name}
          </p>
        </div>

        <p className="xl:text-[22px] lg:text-[16px]  md:text-[14px]  text-[22px] leading-normal  font-normal text-secondary font-federo">
          {title}
        </p>
        <span className="xl:text-[15px] lg:text-[12px] md:text-[11px] text-[16px] font-normal leading-normal text-gray font-poppins ">
          {description}
        </span>
      </div>
    </div>
  );
}
