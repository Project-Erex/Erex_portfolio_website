import {Star2} from "@/app/assets";
import Image from "next/image";
import React from "react";

export const BlogHeading = ({Heading}) => {
  return (
    <>
      <div className="flex gap-4">
        <Image width={0} height={0} src={Star2} alt="Star" className="w-10 h-full " />
        <h1 className="text-3xl font-semibold font-public text-secondary">{Heading}</h1>
      </div>
    </>
  );
};
export const BlogHeadingSec = ({Heading}) => {
  return (
    <>
      <div className="flex items-center gap-4 ">
        <Image width={0} height={0} src={Star2} alt="Star" className="w-8 h-full" />
        <h2 className="font-semibold font-public text-secondary md:text-base lg:text-xl">
          {Heading}
        </h2>
      </div>
    </>
  );
};

export const PriceHeading = ({Heading}) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image width={0} height={0} src={Star2} alt="Star" className="w-10 h-full " />
        <h1 className="text-2xl font-medium md:text-2xl lg:text-3xl xl:text-4xl font-federo text-secondary">
          {Heading}
        </h1>
      </div>
    </>
  );
};
