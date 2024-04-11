"use client";
import React from "react";
import {styles} from "../styles";
import Image from "next/image";
import {
  Layer,
  Layer1,
  Layer2,
  Layer3,
  Layer4,
  MediumBusiness,
  Office,
  OurGoal,
  OurMembar7,
  Teamwork,
  Vector5,
  Vector8,
} from "../assets";
import {motion} from "framer-motion";
import {IoIosArrowRoundForward} from "react-icons/io";
// export const metadata = {
//   title: "Erex Studio About | Transforming Ideas into Digital Triumphs,",
//   openGraph: {
//     title: "Erex Studio About | Transforming Ideas into Digital Triumphs,",
//   },
// };

export default function page() {
  const data = [
    {
      icon: Layer1,
      title: "Transparency",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.",
    },
    {
      icon: Layer2,
      title: "Integrity",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.",
    },
    {
      icon: Layer3,
      title: "Simplicity",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.",
    },
    {
      icon: Layer4,
      title: "Performance",
      description:
        "No smoke and mirrors here. We believe in being genuine in dealing with all our clients. We’ll say what we’ll do, and then do what we say.",
    },
  ];
  return (
    <section className="flex justify-center w-full bg-background border-watermark ">
      <div className="w-full h-full max-w-screen-2xl ">
        <div
          style={{
            background: "rgb(64, 123, 255)",
            background:
              "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
          }}
          className={` ${styles.yPadding}   ${styles.xPadding}  
             mt-20 h-full  relative  bg-backgroundGray `}>
          <div className="w-full h-auto gap-6  flex flex-col md:flex-row relative">
            <div className="w-full flex flex-col  justify-center  gap-3 md:gap-5 h-full">
              <h3 className=" text-secondary font-public text-base font-medium">
                ABOUT US
              </h3>
              <p className="font-federo font-medium text-4xl  xl:text-6xl  lg:text-5xl text-justify leading-tight text-secondary">
                Digital marketing <br />
                solutions
                <br /> designed to
                <br /> generate revenue
                <br /> for your business
              </p>
            </div>
            <div className="w-full flex justify-end  h-full">
              <Image
                src={Teamwork}
                alt="TeamWork"
                width={0}
                height={0}
                className="w-full md:w-[570px] h-full"
              />
            </div>
          </div>
        </div>
        {/* ********************************************************* */}

        <div>
          <Image
            src={Vector5}
            alt="Vector5"
            width={0}
            height={0}
            className="w-full  h-full"
          />
        </div>
        <div
          className={`$ ${styles.xPadding}  
              h-full  relative  bg-background `}>
          <div className="w-full h-full flex  justify-center items-center">
            <p className="text-secondary font-public w-full text-base py-5 md:pt-8  md:text-xl   xl:text-2xl   lg:w-[65%] xl:w-[45%] font-medium text-clip">
              Numerique was established 1 years ago with the belief that advertising could
              drive significant business leverage for our clients. Initially, our focus
              was on the entertainment industry, including live events and record labels.
              Over time, we have expanded our services and successfully partnered with
              both major and niche brands. Our client base spans globally, with a growing
              roster of local clients.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative">
          <div className=" w-full h-24 md:h-40 g:h-52 xl:h-72"></div>
          <div className="bg-litesky w-full  h-24 md:h-40 lg:h-52 xl:h-72"></div>
          <div className={` ${styles.xPadding} w-full h-full absolute z-[100]  top-0 `}>
            <Image
              src={OurMembar7}
              alt="OurMembar7"
              width={0}
              height={0}
              className="w-full  h-full"
            />
          </div>
        </div>
        {/* ********************************************************* */}

        <div
          style={{
            background: "rgb(64, 123, 255)",
            background:
              "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
          }}
          className={`  ${styles.yPadding}  ${styles.xPadding}  
              h-full  relative  bg-backgroundGray `}>
          <div className="w-full h-full flex flex-col gap-8 md:gap-10">
            <h1 className="font-federo font-medium text-secondary text-4xl text-center">
              Our Values
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{y: 100, opacity: 0}}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.65, 0, 0.35, 1],
                      delay: 0.1 * index,
                    },
                  }}
                  viewport={{once: true}}>
                  <div className=" bg-white shadow-3xl px-5 py-6 gap-3 rounded-2xl w-full h-full flex  flex-col">
                    <div className={` bg-lightwhite rounded-full w-12 h-12`}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={0}
                        height={0}
                        className="w-full h-full px-3 py-3 "
                      />
                    </div>

                    <h2 className="text-secondary font-public font-medium text-2xl">
                      {item.title}
                    </h2>
                    <h5 className="text-secondary font-public font-medium text-base  ">
                      {item.description}
                    </h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* ********************************************************* */}
        </div>

        <div
          className={`$ ${styles.xPadding} lg:pt-10  md:pt-5 py-2
              h-full w-full  relative  bg-background `}>
          <div className="w-full h-full flex flex-col gap-4">
            <div>
              <h2 className="font-public font-medium text-secondary text-base">
                MARKETING SOLUTIONS PROVIDER
              </h2>
            </div>
            <div className="w-full flex h-full flex-col md:flex-row gap-4 justify-between items-center">
              <div className="w-full h-full">
                <p className="font-federo font-medium text-secondary text-4xl">
                  {`We’re a`} leader in digital
                  <br />
                  marketing solutions
                </p>
              </div>
              <div className="w-full h-full">
                <p className="font-public font-medium text-secondary text-[15px] md:text-[12px] lg:text-base">
                  {`
                 After years of experience, we have learned that each marketing channel
                 has its own unique advantages, but they work best when strategically
                 combined with other channels. Therefore, we provide our clients with
                 full-service strategies that utilize a comprehensive mix of digital
                 channels to enhance visibility, boost conversions, and drive revenue.
                 `}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ********************************************************* */}
        <div
          className={` ${styles.xPadding}  ${styles.yPadding} 
              h-full w-full  relative  bg-background `}>
          <div className={`bg-litesky rounded-t-2xl`}>
            <div className="w-full flex flex-col md:flex-row px-6 pt-6 pb-6 md:pb-10 gap-4 lg:pt-16 md:px-10 lg:px-16 md:pt-10 justify-between items-center">
              <div className="w-full">
                <h2 className="font-federo font-medium  text-secondary text-2xl md:text-3xl lg:text-4xl ">
                  See how we can help <br /> your business grow with <br /> digital
                  marketing
                </h2>
              </div>
              <div className="w-full flex flex-col text-secondary font-public gap-3 md:justify-end md:items-end">
                <h4 className="md:text-end">
                  Ready to speak with a marketing
                  <br />
                  expert? Give us a ring
                </h4>
                <span>+91 8167861850</span>
                <button className="bg-primary px-6 py-2 text-white rounded-xl">
                  GET A FREE AUDIT
                </button>
              </div>
            </div>

            {/*  */}
            <div>
              <Image
                src={Vector8}
                alt="Vector8"
                width={0}
                height={0}
                className="w-full  h-full"
              />
            </div>
          </div>

          <div
            className="bg-litesky font-public rounded-b-2xl px-6 py-6 md:px-10 lg:px-16 md:py-10 lg:py-16 text-secondary  flex flex-col gap-3
          ">
            <div>
              <h2 className="font-medium">SOLUTIONS</h2>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              <h3>Software Development</h3>
              <h3>Creative Designs</h3>
              <h3>Digital Marketing</h3>
              <h3>ASO Expertise</h3>
              <h3>UI/UX Design</h3>
              <h3>AI/ML</h3>
              <h3>Logo Designing</h3>
              <h3>Social Media Handling</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
