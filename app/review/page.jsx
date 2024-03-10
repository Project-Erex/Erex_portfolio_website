"use client";
import React from "react";
import {styles} from "../styles";
import {Clock, Depth, Vector} from "../assets";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import {FaRegClock} from "react-icons/fa6";
import Rating from "../components/Rating";
import {ThreeDots} from "react-loader-spinner";

export default function page() {
  return (
    <section className="flex justify-center w-full pt-20 bg-background">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} px-40 md:border-x-2 bg-background border-watermark   h-full  relative  bg-backgroundGray  `}>
          <div className="w-full flex  gap-10 flex-col justify-center items-center  ">
            <div className=" w-full flex flex-col gap-2 items-center justify-center">
              <text className=" font-federo  text-secondary text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-center font-normal">
                Review your project
              </text>
              <p className="text-subheading text-2xl px-5 text-center">
                Help improve Acme Co's project creation process by giving feedback on the
                project you just created. You can also leave feedback on your project's
                code and environment.
              </p>
            </div>
            <div className=" w-full flex-col flex   py-5  gap-10  ">
              <div className=" flex items-center gap-4">
                <Image
                  src={Depth}
                  alt="DepthImage"
                  width={0}
                  height={0}
                  className="w-20"
                />
                <div>
                  <p className="text-secondary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Name: Python ML Image Classifier{" "}
                  </p>
                  <h6 className="text-subheading  text-lg ">Created 2 minutes ago</h6>
                </div>
              </div>
              <div className=" flex w-full items-center gap-4">
                <div className="  flex items-start justify-start">
                  <div className="bg-[#F0F2F5]  px-4 py-4 rounded-[10px] ">
                    <CgProfile size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-secondary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Name: Python ML Image Classifier{" "}
                  </p>
                  <h6 className="text-subheading  text-lg ">Created 2 minutes ago</h6>
                </div>
              </div>
              <div className=" flex w-full items-center gap-4">
                <div className="  flex items-start justify-start">
                  <div className="bg-[#F0F2F5] px-4 py-4 rounded-[10px] ">
                    <FaRegClock size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-secondary  font-medium text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Completion Time: 5 minutes
                  </p>
                  <h6 className="text-subheading  text-lg ">5 minutes</h6>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-5  w-full">
              <h1 className="font-medium text-secondary text-center  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
                How likely are you to recommend this project creation <br />
                process to a friend or colleague?
              </h1>
              <Rating />
              <form className="w-full">
                <textarea
                  className="w-full p-3 mt-2 text-sm font-normal border-2 rounded-[10px] focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Write other feedback"
                  rows="6"
                  id="BusinessAddress"
                  name="BusinessAddress"></textarea>

                <div className="flex w-full gap-4 py-4 justify-end">
                  <button
                    type="Cancel"
                    class="relative flex h-[44px] w-32 items-center justify-center overflow-hidden text-secondary transition-all rounded-[10px] bg-[#F0F2F5]  ">
                    <span className="relative z-10 font-federo  font-medium text-[16px]">
                      Cancel
                    </span>
                  </button>
                  <button
                    type="submit"
                    value="Send"
                    // disabled={isloading}
                    class="relative flex h-[44px] w-32 items-center justify-center overflow-hidden bg-gray-800 rounded-[10px] text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                    <span className="relative z-10 font-federo text-[16px]">
                      {" "}
                      {/* {isloading ? (
                        <ThreeDots width="50" color="#FFFFFF" />
                      ) : (
                        "Submit Now"
                      )} */}
                      Submit Now
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
