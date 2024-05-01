"use client";

import React, {useState} from "react";
import {ImageSlider} from "../imageSlider/ImageSlider";

export const MainBlogBanner = ({data}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="h-[550px] sm:h-[600px] md:h-[300px] lg:h-[350px] xl:h-[460px] w-full relative">
        <ImageSlider BlogData={data} isHover={isHovering} />
      </div>
    </>
  );
};
