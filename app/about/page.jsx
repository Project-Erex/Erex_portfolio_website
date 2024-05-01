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
    <section className="flex w-full bg-background border-watermark ">
      <div className="w-full h-full max-w-screen-2xl ">
        <div
          style={{
            background: "rgb(64, 123, 255)",
            background:
              "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
          }}
          className={` ${styles.yPadding}   ${styles.xPadding}  
             mt-20 h-full justify-center flex  relative  bg-background `}>
          <div className="relative flex flex-col w-full h-auto gap-6 md:flex-row">
            <div className="flex flex-col justify-center w-full h-full gap-3 md:gap-5">
              <h3 className="text-base font-medium text-secondary font-public">
                ABOUT US
              </h3>
              <p className="text-4xl font-medium leading-tight text-justify font-federo xl:text-6xl lg:text-5xl text-secondary">
                Digital marketing <br />
                solutions
                <br /> designed to
                <br /> generate revenue
                <br /> for your business
              </p>
            </div>
            <div className="flex justify-end w-full h-full">
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
            className="w-full h-full"
          />
        </div>
        <div
          className={`$ ${styles.xPadding}  
              h-full  relative  bg-background `}>
          <div className="flex items-center justify-center w-full h-full">
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
        <div className="relative w-full h-full">
          <div className="w-full h-24 md:h-40 g:h-52 xl:h-72"></div>
          <div className="w-full h-24 bg-litesky md:h-40 lg:h-52 xl:h-72"></div>
          <div className={` ${styles.xPadding} w-full h-full absolute z-[100]  top-0 `}>
            <Image
              src={OurMembar7}
              alt="OurMembar7"
              width={0}
              height={0}
              className="w-full h-full"
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
              h-full  relative  bg-background `}>
          <div className="flex flex-col w-full h-full gap-8 md:gap-10">
            <h1 className="text-4xl font-medium text-center font-federo text-secondary">
              Our Values
            </h1>

            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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
                  <div className="flex flex-col w-full h-full gap-3 px-5 py-6 bg-white shadow-3xl rounded-2xl">
                    <div className={` bg-lightwhite rounded-full w-12 h-12`}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={0}
                        height={0}
                        className="w-full h-full px-3 py-3 "
                      />
                    </div>

                    <h2 className="text-2xl font-medium text-secondary font-public">
                      {item.title}
                    </h2>
                    <h5 className="text-base font-medium text-secondary font-public ">
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
          <div className="flex flex-col w-full h-full gap-4">
            <div>
              <h2 className="text-base font-medium font-public text-secondary">
                MARKETING SOLUTIONS PROVIDER
              </h2>
            </div>
            <div className="flex flex-col items-center justify-between w-full h-full gap-4 md:flex-row">
              <div className="w-full h-full">
                <p className="text-4xl font-medium font-federo text-secondary">
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
            <div className="flex flex-col items-center justify-between w-full gap-4 px-6 pt-6 pb-6 md:flex-row md:pb-10 lg:pt-16 md:px-10 lg:px-16 md:pt-10">
              <div className="w-full">
                <h2 className="text-2xl font-medium font-federo text-secondary md:text-3xl lg:text-4xl ">
                  See how we can help <br /> your business grow with <br /> digital
                  marketing
                </h2>
              </div>
              <div className="flex flex-col w-full gap-3 text-secondary font-public md:justify-end md:items-end">
                <h4 className="md:text-end">
                  Ready to speak with a marketing
                  <br />
                  expert? Give us a ring
                </h4>
                <span>+91 8167861850</span>
                <button className="px-6 py-2 text-white bg-primary rounded-xl">
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
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 px-6 py-6 bg-litesky font-public rounded-b-2xl md:px-10 lg:px-16 md:py-10 lg:py-16 text-secondary ">
            <div>
              <h2 className="font-medium">SOLUTIONS</h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
