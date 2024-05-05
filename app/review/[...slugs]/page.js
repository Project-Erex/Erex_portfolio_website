"use client";
import React from "react";
import {styles} from "../../styles";
import {Depth} from "../../assets";
import Image from "next/image";
import {CgProfile} from "react-icons/cg";
import {FaRegClock} from "react-icons/fa6";
import ReviewInput from "@/components/ReviewInput/ReviewInput";

export default function Page({params}) {
  const projectName = params?.slugs[0];
  const clientName = params?.slugs[1];
  const compilationTime = params?.slugs[2];

  return (
    <section className="flex justify-center pt-10 bg-background">
      <div className="w-full">
        <div
          className={`${styles.yPadding} ${styles.xMargin} px-4 md:px-10 bg-background border-watermark relative`}>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <h1 className="font-federo mt-5 text-secondary text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2">
                Review your project
              </h1>
              <p className="text-subheading text-lg md:text-xl">
                {`Help improve Acme Co's project creation process by giving feedback on the
                project you just created. You can also leave feedback on your project's
                code and environment.`}
              </p>
            </div>
            <div className="w-full gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src={Depth}
                  alt="DepthImage"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-secondary font-medium text-lg">
                    Project Name: {projectName}
                  </p>
                  <h6 className="text-subheading">Created 2 minutes ago</h6>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F2F5] rounded-full p-2">
                  <CgProfile size={30} color="#000000" />
                </div>
                <div>
                  <p className="text-secondary font-medium text-lg">
                    Client Name: {clientName}
                  </p>
                  <h6 className="text-subheading">Created 2 minutes ago</h6>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#F0F2F5] rounded-full p-2">
                  <FaRegClock size={30} color="#000000" />
                </div>
                <div>
                  <p className="text-secondary font-medium text-lg">
                    Project Completion Time: {compilationTime}
                  </p>
                  <h6 className="text-subheading">5 minutes</h6>
                </div>
              </div>
            </div>
            <ReviewInput clientName={clientName} />
          </div>
        </div>
      </div>
    </section>
  );
}
