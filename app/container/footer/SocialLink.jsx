"use client";

import {ourSocialLink} from "@/constants";
import Image from "next/image";
import React from "react";

export default function SocialLink() {
  return (
    <>
      {ourSocialLink.map((item, index) => (
        <div key={index} className=" rainbow">
          <div className="absolute z-50 px-3 py-3 transition-all duration-500 ease-in-out rounded-full bg-background ">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Image src={item.icon} alt={item.title} />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
