import Image from "next/image";
import React from "react";

export default function OurteamCard({title, icon, name}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden border-2 border-watermark">
      <div className="flex items-center justify-center w-full gap-6 h-4/5">
        <Image src={icon} alt={name} className="z-10 object-contain w-full h-full" />
      </div>
      <div className="w-full px-3 py-3 border-b-2 lg:px-4 lg:py-4 h-1/5">
        <span className="xl:text-[24px] lg:text-[18px]  md:text-[15px]  text-[22px] leading-normal  font-normal text-secondary font-federo">
          {name}
        </span>
        <p className="xl:text-base lg:text-[14px] md:text-[13px] text-[16px] font-normal leading-normal text-grey font-poppins ">
          {title}
        </p>
      </div>
    </div>
  );
}
