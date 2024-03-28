"use client";
import {useEffect, useState} from "react";

import {DigitalMarketing, mediumBusiness, smallBusiness} from "@/constants";
import {FaCheck} from "react-icons/fa6";

import {LuIndianRupee} from "react-icons/lu";

import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import {FaRegEye} from "react-icons/fa";
import RevealPriceModal from "../../components/revealPrice/RevealPriceModal";
import Image from "next/image";
export default function OurPackegs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const count = useMotionValue(0);
  const counts = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const price = useTransform(counts, (latests) => Math.round(latests));
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const animated = {
    layout: "position",
    animate: {opacity: 1},
    transition: {delay: 0.3},
    initial: {opacity: 0},
  };

  useEffect(() => {
    handlePrice();
  }, []);

  const handlePrice = async () => {
    const price = await localStorage.getItem("isPrice");
    if (price) {
      setIsPrice(true);
      priceAnimation();
    } else {
      setIsPrice(false);
    }
  };

  const handlePriceClick = () => {
    setShowModal(true); // Show login form when "Price" button is clicked
  };

  const priceAnimation = () => {
    const controls = animate(count, 8990, {duration: 5});
    const control = animate(counts, 4990, {duration: 4});

    return controls.stop, control.stop;
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
        <div className=" w-full shadow-lg  rounded-b-[15px] ">
          <div className="relative w-full">
            <Image
              style={{width: "100%", height: 240}}
              src={DigitalMarketing[0].wave}
              alt="alt"
              className="rounded-t-[15px] "
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10 ">
              <Image
                src={DigitalMarketing[0].icon}
                className="w-16 h-16 "
                width={0}
                height={0}
                alt="icon"
              />
              <p className="text-2xl font-medium text-white">
                {DigitalMarketing[0].title}
              </p>
              <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
              <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
            </div>
            <div className="flex flex-col gap-2 px-5 pb-7">
              <div className="flex items-center gap-2 pl-2">
                <div className="px-[10px] py-1 text-center rounded-full flex items-center justify-center bg-opacity-20  bg-[#4169E1]">
                  <span className="text-[#4169E1]  font-medium">SAVE 59%</span>
                </div>
              </div>
              <div>
                <text className="flex items-center gap-1 text-secondary">
                  <LuIndianRupee size={29} />
                  <div className="flex gap-1">
                    {showModal && (
                      <RevealPriceModal
                        setShowModal={setShowModal}
                        showModal={showModal}
                        setIsPrice={setIsPrice}
                        priceAnimation={priceAnimation}
                      />
                    )}

                    {!isPrice && (
                      <>
                        <button
                          onClick={handlePriceClick}
                          className=" text-background flex items-center gap-2 text-center bg-primary font-bold py-[6px] px-4 rounded-lg">
                          Show price
                          <span className="pt-1">
                            <FaRegEye size={20} />
                          </span>
                        </button>
                      </>
                    )}
                    {isPrice && (
                      <>
                        <motion.div className="text-4xl text-secondary font-bold ">
                          {price}
                        </motion.div>
                        <p className="text-[#4169E1] pt-[6px] ">
                          <span className="text-2xl">/</span>Month
                        </p>
                      </>
                    )}
                  </div>
                </text>
              </div>
            </div>
            {/* ******************************** */}
            <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
              <div className="flex flex-col items-start gap-3 ">
                {smallBusiness.map((item, index) => (
                  <div key={index} className="flex w-full gap-3 ">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-secondary font-poppins">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ******************************** */}
          </div>
        </div>
        {/* 2ND Card */}
        <div className="  w-full rounded-b-[15px] shadow-lg">
          <div className="relative w-full">
            <Image
              style={{width: "100%", height: 240}}
              src={DigitalMarketing[1].wave}
              alt="alt"
              className="rounded-t-[15px]"
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10">
              <Image
                src={DigitalMarketing[1].icon}
                className="w-16 h-16"
                width={0}
                height={0}
                alt="icon"
              />
              <p className="text-2xl font-medium text-white">
                {DigitalMarketing[1].title}
              </p>
              <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
              <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
            </div>
            <div className="flex flex-col gap-2 px-5 pb-7">
              <div className="flex items-center gap-2 pl-2">
                <div className="px-[10px] py-1 text-center rounded-full flex items-center justify-center bg-opacity-20  bg-[#A259FF]">
                  <span className="text-[#A259FF]  font-medium">SAVE 60%</span>
                </div>
              </div>
              <text className="flex items-center gap-1 text-secondary">
                <LuIndianRupee size={29} />
                <div className="flex gap-1">
                  {!isPrice && (
                    <>
                      <button
                        onClick={handlePriceClick}
                        className=" text-background flex items-center gap-2 text-center bg-[#A259FF] font-bold py-[6px] px-4 rounded-lg">
                        Show price
                        <span className="pt-1">
                          <FaRegEye size={20} />
                        </span>
                      </button>
                    </>
                  )}
                  {isPrice && (
                    <>
                      <motion.div className="text-4xl text-secondary font-bold ">
                        {rounded}
                      </motion.div>
                      <p className="text-[#A259FF] pt-[6px] ">
                        <span className="text-2xl">/</span>Month
                      </p>
                    </>
                  )}
                </div>
              </text>
            </div>
            {/* ******************************** */}
            <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
              <div className="flex flex-col items-start gap-3 ">
                {mediumBusiness.map((item, index) => (
                  <div key={index} className="flex w-full gap-3 ">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-secondary font-poppins">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* ******************************** */}
          </div>
        </div>
        {/*  */}
        {/* 3RD Card */}
        <div className=" w-full rounded-b-[15px] shadow-lg">
          <div className="relative w-full">
            <Image
              style={{width: "100%", height: 240}}
              src={DigitalMarketing[2].wave}
              alt="alt"
              className="rounded-t-[15px]"
            />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10">
              <Image
                src={DigitalMarketing[2].icon}
                className="w-16 h-16"
                width={0}
                height={0}
                alt="icon"
              />
              <p className="text-2xl font-medium text-white">
                {DigitalMarketing[2].title}
              </p>
              <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
              <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
            </div>
            <div className="flex px-5 pb-7">
              <text className="flex items-center text-secondary">
                <p className="text-[#F24E1E] text-4xl font-medium">
                  {DigitalMarketing[2].price}
                </p>
              </text>
            </div>
            {/* ******************************** */}
            <div className="flex flex-col gap-3 rounded-b-[15px] px-5  pb-7">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Social Media Handle Facebook & Instagram.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Create 8 banners and post on <br />
                  social media each month.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Short video & reels post (max 2 per month)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Logo and Store banner design support.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Static Website for the business.
                  <br /> (Domain & server price excluded).
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <FaCheck color="#F24E1E" />
                </div>
                <p className="text-secondary font-poppins">
                  Basic market analysis report monthly.
                </p>
              </div>
              <div className="flex items-center justify-end w-full">
                <div>
                  <div className={`container  ${isExpanded ? "expanded" : ""}`}>
                    <div className="flex flex-col items-start gap-3 ">
                      <div className="flex items-start gap-3 ">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Marketing strategy analysis and report.(Analysis your business
                          and recommend strategies to grow)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Unique marketing campaigns.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Logo & Branding support.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Social Media Marketing Along with Google & Facebook ads.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end w-full pt-4">
                    <button className="text-[#F24E1E]" onClick={toggleExpand}>
                      {isExpanded ? "Show less" : "Show all"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ******************************** */}
          </div>
        </div>
      </div>
    </div>
  );
}
