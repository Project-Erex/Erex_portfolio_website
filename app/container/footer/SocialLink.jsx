"use client";

import {ourSocialLink} from "@/app/constants";
import Image from "next/image";
import React from "react";

export default function SocialLink() {
  return (
    <>
      {ourSocialLink.map((item, index) => (
        <div key={index}>
          <div className="px-3 py-3 rounded-full bg-background transition-all duration-500 ease-in-out hover:scale-110">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Image src={item.icon} alt={item.title} />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
