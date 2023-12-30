"use client";
import React, {useState} from "react";
import {styles} from "../../styles";
import {erexLogo, menu, close} from "@/app/assets";
import {navLinks} from "@/app/constants";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavLinkClick = (id) => {
    if (id === "home") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
    setActive(id);
  };

  const handleMobileNavLinkClick = (id) => {
    setToggle(!toggle);
    handleNavLinkClick(id);
  };

  return (
    <nav
      className={` w-screen flex items-center justify-center   border-b-2  bg-background border-watermark    fixed 
          top-0 z-[999] sm:opacity-[0.97] md:py-5 `}>
      <div className={`${styles.xPadding}  w-full flex justify-between  items-center`}>
        <a
          href="/"
          className="flex items-center "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Image
            src={erexLogo}
            alt="logo"
            className="sm:w-[85px]  sm:h-auto w-[54px]  mb-4  h-[54px] object-contain"
          />
        </a>
        <ul className="flex-row hidden gap-6 list-none lg:gap-10 xl:gap-16 md:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-heading" : "text-heading"
              } hover:text-primary text-[16px] lg:text-[18px] font-regular 
        font-federo
                      cursor-pointer nav-links`}
              onClick={() => handleNavLinkClick(nav.id)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <button className="hidden px-6 py-2 font-federo bg-primary hover:bg-blend-darken md:block">
          Contact Us
        </button>

        {/* mobile */}
        <div className="flex items-center justify-end flex-1 w-screen md:hidden">
          {toggle ? (
            <div
              className={`p-6 bg-background opacity-[0.98] absolute 
                    top-0 left-0 w-screen h-screen
                     z-10 menu ${toggle ? "menu-open" : "menu-close"}`}>
              <div className="flex justify-end">
                <Image
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                    items-start justify-center ">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-heading" : "text-heading"
                    } hover:text-primary text-[34px] font-medium font-poppins py-3
                        uppercase cursor-pointer nav-links`}
                    onClick={() => handleMobileNavLinkClick(nav.id)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-green-500">Contact Us</button>
            </div>
          ) : (
            <Image
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
