"use client";

import React from "react";
import {Link, ScrollLink} from "react-scroll";

export default function Nav() {
  const Navlink = [
    {
      id: "home",
      title: "Home",
    },

    {
      id: "service",
      title: "Services",
    },
    {
      id: "ourClient",
      title: "Our Client",
    },
  ];

  return (
    <nav className="fixed flex justify-between w-full z-[999] px-10 py-8 bg-red-500 ">
      <div>LOGO</div>
      <div className="flex gap-8">
        {Navlink.map((item) => {
          return (
            <Link
              key={item.id}
              className={`text-white hover:text-primary text-base lg:text-lg font-regular font-federo cursor-pointer  pt-2`}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
