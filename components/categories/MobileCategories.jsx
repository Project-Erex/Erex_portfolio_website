"use client";

import {Star2} from "@/app/assets";
import React, {useState, useEffect} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa6";
import Categories from "./Categories";
import Image from "next/image";

export const MobileCategories = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 670;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const transition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
  };
  return (
    <>
      {isVisible && (
        <div className="sticky w-full h-full pt-5 md:hidden bg-background top-16 md:pt-0 md:top-28 ">
          <div className={`w-full flex py-4 justify-between md:py-0 items-center`}>
            <div className="flex items-center gap-4 ">
              <Image width={0} height={0} src={Star2} alt="Star" className="w-8 h-full" />
              <h2 className="font-semibold font-public text-secondary md:text-base lg:text-xl">
                Explore Categories
              </h2>
            </div>

            <button
              className="px-2 py-2 text-white rounded-lg md:hidden bg-primary shadow-3xl "
              onClick={() => setIsExpanded((prevState) => !prevState)}>
              {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          <div className={`container ${isExpanded ? "" : "expanded"}`}>
            <Categories />
          </div>
        </div>
      )}
    </>
  );
};
