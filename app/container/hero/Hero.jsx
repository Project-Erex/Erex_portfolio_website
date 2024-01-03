"use client";
import React from "react";
import {styles} from "../../styles";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import Spline from "@splinetool/react-spline";
import {Rocket} from "@/app/assets";
import Image from "next/image";
import {useState, useEffect} from "react";

const Hero = () => {
  const textArray = [
    "Shaping the Future of Digital Possibilities.",
    "Building Tomorrow's Digital Landscape Today.",
    "Code to Creativity: Your Goals, Our Expertise.",
    "Transforming Ideas into Digital Triumphs.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textArray.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [textArray.length]);
  return (
    <>
      <section className="pt-[92px] bg-background">
        <div className="w-full border-b-2 border-watermark ">
          <div
            className={`${styles.xMargin}xl:mx-36 relative lg:mx-32 md:mx-22 sm:mx-16 mx-6 flex-col md:flex-row md:border-r-2 md:border-l-2 flex  border-watermark h-full md:h-screen bg-background  bg-cover `}>
            <div className="absolute flex items-center justify-center w-full px-10 ">
              <p className="font-semibold text-watermark font-poppins opacity-60 select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw]  whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
                EREX STUDIO
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-10 px-4 py-10 lg:px-6 xl:px-10 md:items-start md:w-1/2 ">
              <div className="md:h-[120px] h-[135px] flex justify-center md:items-start items-center">
                <span className="transition-all ease-in-out text-heading select-none font-federo font-semibold text-[32px] md:text-left text-center leading-[48px] md:leading-[48px] md:text-[34px]  lg:leading-[52px] lg:text-[40px]  xl:leading-[62px] xl:text-[42px] drop-shadow-xl">
                  {textArray[currentTextIndex]}
                </span>
              </div>
              <h2 className="text-gray font-poppins select-none text-[16px] font-normal md:text-left text-center">
                Erex Studio pioneers digital transformation, delivering cutting-edge
                software, captivating designs, and strategic digital marketing. Elevate
                your brand with our innovative solutions and expert guidance.
              </h2>
              <button class="relative h-14 w-40 overflow-hidden border border-primary text-primary shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-primary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                <span class="relative z-10 font-federo font-semibold uppercase text-[14px]">
                  Hire Us
                </span>
              </button>
            </div>
            <div className="w-full h-[400px]   md:h-full z-30 md:w-1/2">
              <Spline
                className="hidden md:block"
                scene="https://prod.spline.design/TyU436Rnyd9tQBCe/scene.splinecode"
              />
              <div className="flex items-center justify-center w-full md:hidden ">
                <Image
                  className=" w-[371px]"
                  height={0}
                  width={0}
                  src={Rocket}
                  alt="rocket"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
