import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContributionCard({logo, icon, description, title, url}) {
  return (
    <>
      <div
        className={`group relative border-2 border-watermark bg-lightwhite   w-full h-full hover:bg-bghover delay-75 transition-all duration-500 ease-in-out hover:border-bghover
      `}>
        <div className="flex flex-col items-start justify-start w-full h-full gap-4 px-5 py-7 md:gap-5 md:py-6 md:px-4 lg:gap-5 xl:gap-6 lg:px-4 xl:px-6 lg:py-6 xl:py-8">
          <div className="flex items-center justify-between w-full h-auto pr-4 ">
            <div className="relative flex items-center justify-start w-full">
              <Image src={logo} alt={title} className="z-10 object-contain w-16 h-16 " />

              <div className="p-4 bg-white rounded-[100px] bg-opacity-80 w-16 h-16 absolute left-4 transition-all duration-500 group-hover:bg-opacity-10 "></div>
            </div>
            <Link
              href={url}
              to="#"
              target="_blank"
              className="px-2 py-2 transition-all duration-500 bg-white group-hover:bg-opacity-10">
              <Image src={icon} alt={title} />
            </Link>
          </div>
          <div className="w-full h-auto ">
            <h1 className="text-heading ` font-federo font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal transition-all duration-500 group-hover:text-white">
              {title}
            </h1>
          </div>
          <div className="w-full h-auto">
            <h1 className="text-grey font-poppins font-normal  text-ellipsis leading-normal text-[16px] transition-all duration-500 group-hover:text-watermark">
              {description}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
