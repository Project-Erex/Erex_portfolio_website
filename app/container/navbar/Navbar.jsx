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
      className={` w-full flex items-center justify-center border-b-2 2xl:border-b-4  bg-background border-watermark fixed py-2
          top-0 z-[999] md:py-4 `}>
      <div
        className={`${styles.xPadding}  w-full flex justify-between  max-w-screen-2xl items-center`}>
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
            className="sm:w-[110px]  sm:h-auto w-[80px]  h-[54px] object-contain"
          />
        </a>
        <ul className="flex-row hidden gap-6 list-none lg:gap-8 xl:gap-16 md:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-heading" : "text-heading"
              } hover:text-primary text-[16px] lg:text-[18px] font-regular 
        font-federo cursor-pointer nav-links pt-2`}
              onClick={() => handleNavLinkClick(nav.id)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/* <button className="hidden px-6 py-2 font-federo bg-primary hover:bg-blend-darken md:block">
            Contact Us
          </button> */}
          <a className="leading-loose" href="#contact">
            <button class="relative flex h-[44px] w-32 items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
              <span class="relative z-10 font-federo text-[16px]">Contact Us</span>
            </button>
          </a>
        </ul>

        {/* mobile */}
        <div className="flex items-center justify-end flex-1 w-screen md:hidden ">
          {toggle ? (
            <div
              className={` py-2 bg-background  absolute 
                    top-0 left-0 w-screen h-screen
                     z-10 menu ${toggle ? "menu-open" : "menu-close"}`}>
              <div className="flex items-center justify-between w-full px-6 pb-2 border-b-2 border-watermark">
                <Image
                  src={erexLogo}
                  alt="logo"
                  className="sm:w-[85px]  sm:h-auto w-[80px]  h-[54px] object-contain"
                />
                <Image
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col px-6 -gap-[1rem] 
                    items-start justify-center w-full  ">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-heading" : "text-heading"
                    } hover:text-primary text-[16px] mt-5 font-medium font-poppins 
                        uppercase cursor-pointer nav-links w-full flex`}
                    onClick={() => handleMobileNavLinkClick(nav.id)}>
                    <a
                      href={`#${nav.id}`}
                      className="w-full py-2 border-b-[1px] border-watermark">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <button className="px-6 py-2 bg-green-500">Contact Us</button> */}
              <a href="#contact">
                <button
                  onClick={() => handleMobileNavLinkClick(contact)}
                  class="relative my-5 mx-5 flex h-[44px] w-32 items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                  <span class="relative z-10 font-federo text-[16px]">Contact Us</span>
                </button>
              </a>
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
