"use client";
import React from "react";
import {styles} from "../../styles";
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
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray.length]);
  return (
    <>
      <section className="pt-[82px] bg-background">
        <div className="w-full border-b-2 border-watermark ">
          <div
            className={`${styles.xMargin} xl:mx-36 relative lg:mx-32 md:mx-22 sm:mx-16 mx-6 flex-col-reverse md:flex-row md:border-r-2 md:border-l-2 flex  border-watermark h-full md:h-screen bg-background  bg-cover `}>
            <div className="absolute flex items-center justify-center w-full px-10 ">
              <p className="font-semibold text-watermark font-poppins opacity-60 select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw]  whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
                EREX STUDIO
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-10 px-4 py-10 md:py-10 lg:px-6 xl:px-10 md:items-start md:w-1/2 ">
              <div className="md:h-[120px] h-[135px] flex justify-center md:items-start items-center">
                <span className=" text-heading md:pt-5 select-none font-federo font-semibold text-[28px] md:text-left text-center leading-[48px] md:leading-[48px] md:text-[34px]  lg:leading-[52px] lg:text-[40px]  xl:leading-[62px] xl:text-[42px] drop-shadow-xl">
                  {textArray[currentTextIndex]}
                </span>
              </div>
              <h2 className="text-gray capitalize font-poppins select-none text-[16px] font-normal leading-[26px] text-justify  md:text-justify">
                Erex Studio pioneers digital transformation, delivering cutting-edge
                software, captivating designs, and strategic digital marketing. Elevate
                your brand with our innovative solutions and expert guidance.
              </h2>
              <a className="leading-loose" href="#contact">
                <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-primary shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                  <span class="relative z-10 font-federo text-[16px]">Hire Us</span>
                </button>
              </a>
            </div>
            <div className="w-full h-auto md:h-full z-30 md:w-1/2">
              {/* <Spline
                className="hidden md:block"
                scene="https://prod.spline.design/6li3mjiZmpzR3QRo/scene.splinecode"
              /> */}
              <div className="flex items-center justify-center w-full md:h-full">
                <Image
                  className=" w-[371px] md:w-[500px] md:pb-10"
                  height={0}
                  width={0}
                  src={Rocket}
                  alt="Erex"
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
