"use client";

import React from "react";

import {styles} from "@/app/styles";
import {ComputerApp, MobileApp} from "../../app/assets";
import Image from "next/image";
import Influencers from "../../components/Influencer/Influencers";
import Link from "next/link";
import DigitalMarketingbanner from "@/components/firebase/DigitalMarketingbanner";
import OurPackegs from "@/components/card/OurPackegs";

export default function PricingPage() {
  return (
    <>
      <section className="flex justify-center w-full pt-20 bg-background">
        <div className="w-full max-w-screen-2xl">
          <div
            className={`${styles.yPadding}  ${styles.xMargin} ${styles.xdivPadding} md:border-x-2 bg-background border-watermark   h-full  relative  bg-backgroundGray  `}>
            <DigitalMarketingbanner />
            <div className="flex flex-col w-full gap-5 pt-10 md:gap-10 md:pt-16 lg:pt-20">
              <div className="flex items-center justify-center w-full gap-2">
                <span className="text-xl font-medium capitalize md:text-3xl font-poppins text-secondary">
                  EXPLORE
                </span>
                <p className="text-xl font-medium capitalize md:text-3xl font-poppins text-secondary">
                  {" "}
                  OUR PACKAGES
                </p>
              </div>
              {/* *************************************************************/}
              <OurPackegs />
              {/* !********************************************************** */}

              <div className="w-full h-full py-10">
                <div className="flex items-center justify-center pb-5 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl text-secondary font-federo">
                    Website & App for your Business
                  </h1>
                </div>
                <div className="w-full flex justify-center items-center">
                  <p className="text-subheading text-lg text-center md:text-2xl xl:text-3xl ">
                    Empower Your Business with a Seamless Website and App Experience
                  </p>
                </div>

                <div className="flex w-full gap-10 flex-col  xl:flex-row  pt-16 justify-center ">
                  <div className=" w-full   shadow-3xl rounded-[15px] bg-background bg-opacity-30">
                    <div className="w-full flex justify-between flex-col  md:flex-row">
                      <div className=" w-full items-center   pb-3 md:pb-0   gap-4 flex flex-col justify-center">
                        <div className="flex justify-start pt-4 md:pt-8 pl-8   w-full">
                          <h2 className="font-public font-semibold text-[#A259FF] text-4xl">
                            Website Development
                          </h2>
                        </div>
                        <div className="flex  flex-col  md:flex-row md:gap-0">
                          <div className="flex flex-col gap-4 md:pt-6 pl-8  pr-4 md:pr-0 w-full  md:w-2/4">
                            <p className="font-public font-normal tracking-tight text-start break-word text-secondary text-base md:text-lg xl:text-base leading-6">
                              Expert website development: sleek design, seamless
                              navigation, optimized performance, and tailored solutions
                              for your online presence. Get started now!
                            </p>
                            <Link
                              href={"/pricing/business"}
                              to="/pricing/business"
                              className="relative flex h-[44px] w-32 rounded-full items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-[#A259FF]  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                              <span className="relative z-10 font-federo text-[16px]">
                                Get a quote
                              </span>
                            </Link>
                          </div>
                          <div className="md:w-2/4 w-full pt-4 pb-2 px-8 flex justify-end md:pr-2 md:pb-2">
                            <Image
                              src={ComputerApp}
                              width={0}
                              alt="Logo"
                              height={0}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full   shadow-3xl rounded-[15px] bg-background bg-opacity-30">
                    <div className="w-full flex justify-between flex-col  md:flex-row">
                      <div className=" w-full items-center   pb-3 md:pb-0   gap-4 flex flex-col justify-center">
                        <div className="flex justify-start pt-4 md:pt-8 pl-8   w-full">
                          <h2 className="font-public font-semibold text-[#4169E1] text-4xl">
                            Application Development
                          </h2>
                        </div>
                        <div className="flex  flex-col  md:flex-row md:gap-0">
                          <div className="flex flex-col gap-4 md:pt-6 pl-8 pr-4 md:pr-0  w-full  md:w-2/4">
                            <p className="font-public font-normal tracking-tight text-start break-word text-secondary text-base md:text-lg xl:text-base leading-6">
                              Transform ideas into feature-rich mobile apps with sleek
                              design, seamless performance, scalable architecture, and
                              user-centric functionalities for diverse audiences.
                            </p>
                            <Link
                              href={"/pricing/business"}
                              to="/pricing/business"
                              className="relative flex h-[44px] w-32 rounded-full items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-[#4169E1]  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                              <span className="relative z-10 font-federo text-[16px]">
                                Get a quote
                              </span>
                            </Link>
                          </div>
                          <div className="md:w-2/4 w-full pt-4 pb-2 px-8 flex justify-end md:pr-2 md:pb-2">
                            <Image
                              src={MobileApp}
                              width={0}
                              alt="Logo"
                              height={0}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* *********************************************** */}
              <div className="w-full">
                <Influencers />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
