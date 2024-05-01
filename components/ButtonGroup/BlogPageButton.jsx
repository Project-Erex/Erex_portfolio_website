import {Icon10, Icon11, Icon12} from "@/app/assets";
import Image from "next/image";
import React from "react";

export const BlogPageButton = () => {
  return (
    <>
      <div className="flex gap-3">
        <Image alt="Icon" src={Icon10} width={0} height={0} className="w-8 h-auto" />
        <Image alt="Icon" src={Icon11} width={0} height={0} className="w-8 h-auto" />
        <Image alt="Icon" src={Icon12} width={0} height={0} className="w-8 h-auto" />
      </div>
    </>
  );
};
