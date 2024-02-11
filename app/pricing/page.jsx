import {DigitalMarketing} from "@/app/constants";
import {styles} from "@/app/styles";
import React from "react";
import {
  Enterprise,
  Layer,
  MediumBusiness,
  SmalBusiness,
  Wave1,
  Wave2,
  Wave3,
} from "../assets";
import Image from "next/image";
import {FaCheck} from "react-icons/fa6";

import {LuIndianRupee} from "react-icons/lu";
import {GoDotFill} from "react-icons/go";

export default function Pricing() {
  return (
    <section className="flex justify-center w-full pt-20 bg-background">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} ${styles.xdivPadding} md:border-x-2 bg-background border-watermark   h-full  relative  bg-backgroundGray  `}>
          <div className="flex flex-col items-center justify-center w-full gap-6 text-center ">
            <text className="text-4xl md:text-5xl lg:text-6xl text-secondary font-federo">
              Digital & Social Media Marketing
            </text>
            <p className="text-xl md:text-3xl lg:text-4xl text-subheading">
              Grow your business with our modern marketing stratagies
            </p>
          </div>
          <div className="flex flex-col w-full gap-6 pt-10 md:pt-16 lg:pt-24">
            <text className="text-3xl font-medium font-poppins text-gray">
              Explore Our <span className="text-primary">Packages</span>
            </text>

            <div className="flex items-center justify-center w-full h-full ">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
                <div className="relative w-full shadow-lg  rounded-b-[15px] ">
                  <div className="w-full ">
                    <Image
                      style={{width: "100%", height: 240}}
                      src={DigitalMarketing[0].wave}
                      alt="alt"
                      className="rounded-t-[15px]"
                    />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10 ">
                      <Image
                        src={DigitalMarketing[0].icon}
                        className="w-16 h-16"
                        width={0}
                        height={0}
                        alt="icon"
                      />
                      <p className="text-2xl font-medium text-white">
                        {DigitalMarketing[0].title}
                      </p>
                      <div className="absolute px-12 py-12 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute px-12 py-12 bg-white rounded-full -right-10 -bottom-0 opacity-30"></div>
                    </div>
                    <div className="flex px-5 pb-7 ">
                      <text className="flex items-center gap-1 text-secondary">
                        <LuIndianRupee size={32} />
                        <p className="text-4xl font-medium font-rubik">
                          {DigitalMarketing[0].price}
                        </p>
                        <span className="text-[#4169E1] pt-3">Month</span>
                      </text>
                    </div>
                    {/* ******************************** */}
                    <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
                      <div className="flex items-start gap-3">
                        <FaCheck color="#4169E1" />
                        <p className="text-secondary font-poppins">
                          Social Media Handle Facebook & Instagram.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#4169E1" />
                        <p className="text-secondary font-poppins">
                          Create & post promotional banners 4 in a month.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#4169E1" />
                        <p className="text-secondary font-poppins">
                          Create hoarding design for stores (Max 3 in a month) .
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#4169E1" />
                        <p className="text-secondary font-p4ppins">
                          Basic Logo design support.
                        </p>
                      </div>
                    </div>
                    {/* ******************************** */}
                  </div>
                </div>
                {/* 2ND Card */}
                <div className=" relative w-full rounded-b-[15px] shadow-lg">
                  <div className="w-full ">
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
                      <div className="absolute px-12 py-12 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute px-12 py-12 bg-white rounded-full -right-10 -bottom-0 opacity-30"></div>
                    </div>
                    <div className="flex px-5 pb-7">
                      <text className="flex items-center gap-1 text-secondary">
                        <LuIndianRupee size={32} />
                        <p className="text-4xl font-medium font-rubik">
                          {DigitalMarketing[1].price}
                        </p>
                        <span className="text-[#A259FF] pt-3">Month</span>
                      </text>
                    </div>
                    {/* ******************************** */}
                    <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7">
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Social Media Handle Facebook & Instagram.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Create 8 banners and post on social media each month.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Short video & reels post (max 2 per month)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Logo and Store banner design support.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Static Website for the business. <br />
                          (Domain & server price excluded).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#A259FF" />
                        <p className="text-secondary font-poppins">
                          Basic market analysis report monthly.
                        </p>
                      </div>
                    </div>
                    {/* ******************************** */}
                  </div>
                </div>
                {/* 3RD Card */}
                <div className="relative w-full rounded-b-[15px] shadow-lg">
                  <div className="w-full">
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
                      <div className="absolute px-12 py-12 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute px-12 py-12 bg-white rounded-full -right-10 -bottom-0 opacity-30"></div>
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
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Social Media Handle Facebook & Instagram.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Create 8 banners and post on social media each month.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Short video & reels post (max 2 per month)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Logo and Store banner design support.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Static Website for the business.
                          <br /> (Domain & server price excluded).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaCheck color="#F24E1E" />
                        <p className="text-secondary font-poppins">
                          Basic market analysis report monthly.
                        </p>
                      </div>
                      <div className="flex items-center justify-end w-full">
                        <button className="text-[#F24E1E]">Show all ...</button>
                      </div>
                    </div>
                    {/* ******************************** */}
                  </div>
                </div>
              </div>
            </div>
            {/* !********************************************************** */}

            <div className="w-full h-full py-10">
              <div className="flex items-center justify-center pb-10 text-center">
                <text className="text-4xl md:text-5xl lg:text-6xl text-secondary font-federo">
                  Website & App for your Business
                </text>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-4 ">
                  <GoDotFill color="#4169E1" size={40} />
                  <p className="text-xl md:text-2xl text-secondary font-poppins ">
                    Create a website for your business and stand unique and trusted brand
                    in the market.
                  </p>
                </div>
                <div className="flex items-center gap-4 ">
                  <GoDotFill color="#A259FF" size={40} />
                  <p className="text-xl md:text-2xl text-secondary font-poppins ">
                    Create mobile application for selling your business hassle free and
                    provide quick service.
                  </p>
                </div>
                <div className="flex items-center gap-4 ">
                  <GoDotFill color="#F24E1E" size={40} />
                  <p className="text-xl md:text-2xl text-secondary font-poppins ">
                    Cost for Website & App development depends on your requirments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
