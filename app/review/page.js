"use client";
import React, {useState} from "react";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import {FaRegClock} from "react-icons/fa6";
import ReviewInput from "@/components/ReviewInput/ReviewInput";
import {FaRegFileAlt} from "react-icons/fa";
import {styles} from "../styles";

// import {ThreeDots} from "react-loader-spinner";
export default function page({searchParams}) {
  const projectName = searchParams?.projectName;
  const clientName = searchParams?.clientName;
  const completionTime = searchParams?.completionTime;

  return (
    <section className="flex justify-center w-full pt-20 bg-background">
      <div className="w-full ">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} lg:px-40 md:px-30 px-10 md:border-x-2 bg-background border-watermark   h-full  relative`}>
          <div className="flex flex-col items-center justify-center w-full gap-10 ">
            <div className="flex flex-col items-center justify-center w-full gap-2 ">
              <text className=" font-federo  text-secondary text-[28px] md:text-[44px] lg:text-[55px] xl:text-[70px] text-center font-normal">
                Tell us more about your experience
              </text>
              <p className="px-5  lg:text-2xl md:text-xl text-lg text-center text-subheading">
                {`Thank you for sharing your experience! Your review is essential for making our service exceptional. At Erex Studio, we're committed to excellence, and your feedback reaffirms our dedication. We look forward to serving you again soon. Thank you for choosing us.`}
              </p>
            </div>
            <div className="flex flex-col w-full gap-10 py-5 ">
              <div className="flex items-center w-full gap-4 ">
                <div className="flex items-start justify-start ">
                  <div className="bg-[#F0F2F5]  px-4 py-4 rounded-[10px] ">
                    <FaRegFileAlt size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-primary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Name :{" "}
                    <span className="text-secondary font-medium  text-[10px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                      {projectName}
                    </span>
                  </p>
                  {/* <h6 className="text-lg text-subheading ">Created 2 minutes ago</h6> */}
                </div>
              </div>
              <div className="flex items-center w-full gap-4 ">
                <div className="flex items-start justify-start ">
                  <div className="bg-[#F0F2F5]  px-4 py-4 rounded-[10px] ">
                    <CgProfile size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-primary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Client Name :{" "}
                    <span className="text-secondary font-medium  text-[10px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                      {clientName}
                    </span>
                  </p>
                  {/* <h6 className="text-lg text-subheading ">Created 2 minutes ago</h6> */}
                </div>
              </div>
              <div className="flex items-center w-full gap-4 ">
                <div className="flex items-start justify-start ">
                  <div className="bg-[#F0F2F5] px-4 py-4 rounded-[10px] ">
                    <FaRegClock size={50} color="#000000" />
                  </div>
                </div>
                <div>
                  <p className="text-primary font-medium  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                    Project Completion Time :{" "}
                    <span className="text-secondary font-medium  text-[10px] md:text-[20px] lg:text-[25px] xl:text-[20px]">
                      {completionTime}
                    </span>
                  </p>
                  {/* <h6 className="text-lg text-subheading ">5 minutes</h6> */}
                </div>
              </div>
            </div>
            <ReviewInput clientName={clientName} project={projectName} />
          </div>
        </div>
      </div>
    </section>
  );
}
