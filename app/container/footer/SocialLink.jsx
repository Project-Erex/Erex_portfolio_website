"use client";

import {ourSocialLink} from "@/app/constants";
import Image from "next/image";
import React from "react";

export default function SocialLink() {
  return (
    <>
      {ourSocialLink.map((item, index) => (
        <div key={index}>
          <div className="px-3 py-3 transition-all duration-500 ease-in-out rounded-full bg-background hover:scale-110">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Image src={item.icon} alt={item.title} />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
