"use client";
import React, {useEffect, useState} from "react";
import {styles} from "../../styles";
import {motion} from "framer-motion";
// import Spline from "@splinetool/react-spline";
import {EREXSTUDIO, Rocket} from "@/app/assets";
import Image from "next/image";
import {
  fadeInLeftVariant,
  fadeInLeftchildrenVariant,
  fadeInTopVariant,
  fadeInVariant,
} from "@/app/constants/framer_motion";
import TextAnimation from "@/app/components/heading/TextAnimation";
import HeroImage from "@/app/components/HeroImage";
import {useRef} from "react";
import {Link, ScrollLink} from "react-scroll";

const Hero = () => {
  const constraintsRef = useRef(null);

  const transition = {duration: 4.5, yoyo: Infinity, ease: "easeInOut"};

  return (
    <>
      <section
        id="home"
        className="relative flex justify-center w-full pt-20 bg-background">
        <div className="w-full border-b-2 2xl:border-b-0 border-watermark max-w-screen-2xl ">
          <div
            className={`${styles.xMargin} relative 2xl:border-b-4 pb-16 bg-background  md:py-20 xl:pt-5 xl:pb-20 flex-col-reverse md:flex-row md:border-r-2 md:border-l-2 flex  border-watermark h-full md:min-h-full 2xl:min-h-full bg-green-60  bg-cover  `}>
            <motion.div
              variants={fadeInTopVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              className="absolute items-center justify-center hidden w-full md:flex top-10 lg:pt-0 xl:pt-12 md:px-4 lg:px-6 xl:px-10">
              {/* <Image src={EREXSTUDIO} alt="EREXSTUDIO" /> */}
              <svg
                width="1358"
                height="145"
                viewBox="0 0 1370 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M34.6117 30V58.4H80.4117V84.8H34.6117V115.6H86.4117V143H0.411719V2.6H86.4117V30H34.6117ZM190.215 143L161.015 90H152.815V143H118.615V2.6H176.015C187.082 2.6 196.482 4.53333 204.215 8.39999C212.082 12.2667 217.948 17.6 221.815 24.4C225.682 31.0667 227.615 38.5333 227.615 46.8C227.615 56.1333 224.948 64.4667 219.615 71.8C214.415 79.1333 206.682 84.3333 196.415 87.4L228.815 143H190.215ZM152.815 65.8H174.015C180.282 65.8 184.948 64.2667 188.015 61.2C191.215 58.1333 192.815 53.8 192.815 48.2C192.815 42.8667 191.215 38.6667 188.015 35.6C184.948 32.5333 180.282 31 174.015 31H152.815V65.8ZM293.284 30V58.4H339.084V84.8H293.284V115.6H345.084V143H259.084V2.6H345.084V30H293.284ZM463.287 143L434.687 100L409.487 143H370.687L415.687 71.6L369.687 2.6H409.487L437.687 45L462.487 2.6H501.287L456.687 73.4L503.087 143H463.287ZM633.438 144.4C623.172 144.4 613.972 142.733 605.838 139.4C597.705 136.067 591.172 131.133 586.238 124.6C581.438 118.067 578.905 110.2 578.638 101H615.038C615.572 106.2 617.372 110.2 620.438 113C623.505 115.667 627.505 117 632.438 117C637.505 117 641.505 115.867 644.438 113.6C647.372 111.2 648.838 107.933 648.838 103.8C648.838 100.333 647.638 97.4667 645.238 95.2C642.972 92.9333 640.105 91.0667 636.638 89.6C633.305 88.1333 628.505 86.4667 622.238 84.6C613.172 81.8 605.772 79 600.038 76.2C594.305 73.4 589.372 69.2667 585.238 63.8C581.105 58.3333 579.038 51.2 579.038 42.4C579.038 29.3333 583.772 19.1333 593.238 11.8C602.705 4.33333 615.038 0.599998 630.238 0.599998C645.705 0.599998 658.172 4.33333 667.638 11.8C677.105 19.1333 682.172 29.4 682.838 42.6H645.838C645.572 38.0667 643.905 34.5333 640.838 32C637.772 29.3333 633.838 28 629.038 28C624.905 28 621.572 29.1333 619.038 31.4C616.505 33.5333 615.238 36.6667 615.238 40.8C615.238 45.3333 617.372 48.8667 621.638 51.4C625.905 53.9333 632.572 56.6667 641.638 59.6C650.705 62.6667 658.038 65.6 663.638 68.4C669.372 71.2 674.305 75.2667 678.438 80.6C682.572 85.9333 684.638 92.8 684.638 101.2C684.638 109.2 682.572 116.467 678.438 123C674.438 129.533 668.572 134.733 660.838 138.6C653.105 142.467 643.972 144.4 633.438 144.4ZM816.685 2.6V30H779.485V143H745.285V30H708.085V2.6H816.685ZM877.449 2.6V86.6C877.449 95 879.516 101.467 883.649 106C887.783 110.533 893.849 112.8 901.849 112.8C909.849 112.8 915.983 110.533 920.249 106C924.516 101.467 926.649 95 926.649 86.6V2.6H960.849V86.4C960.849 98.9333 958.183 109.533 952.849 118.2C947.516 126.867 940.316 133.4 931.249 137.8C922.316 142.2 912.316 144.4 901.249 144.4C890.183 144.4 880.249 142.267 871.449 138C862.783 133.6 855.916 127.067 850.849 118.4C845.783 109.6 843.249 98.9333 843.249 86.4V2.6H877.449ZM1047.46 2.6C1062.26 2.6 1075.2 5.53333 1086.26 11.4C1097.33 17.2667 1105.86 25.5333 1111.86 36.2C1118 46.7333 1121.06 58.9333 1121.06 72.8C1121.06 86.5333 1118 98.7333 1111.86 109.4C1105.86 120.067 1097.26 128.333 1086.06 134.2C1075 140.067 1062.13 143 1047.46 143H994.865V2.6H1047.46ZM1045.26 113.4C1058.2 113.4 1068.26 109.867 1075.46 102.8C1082.66 95.7333 1086.26 85.7333 1086.26 72.8C1086.26 59.8667 1082.66 49.8 1075.46 42.6C1068.26 35.4 1058.2 31.8 1045.26 31.8H1029.06V113.4H1045.26ZM1184.38 2.6V143H1150.18V2.6H1184.38ZM1285.56 144.4C1272.36 144.4 1260.23 141.333 1249.16 135.2C1238.23 129.067 1229.5 120.533 1222.96 109.6C1216.56 98.5333 1213.36 86.1333 1213.36 72.4C1213.36 58.6667 1216.56 46.3333 1222.96 35.4C1229.5 24.4667 1238.23 15.9333 1249.16 9.8C1260.23 3.66666 1272.36 0.599998 1285.56 0.599998C1298.76 0.599998 1310.83 3.66666 1321.76 9.8C1332.83 15.9333 1341.5 24.4667 1347.76 35.4C1354.16 46.3333 1357.36 58.6667 1357.36 72.4C1357.36 86.1333 1354.16 98.5333 1347.76 109.6C1341.36 120.533 1332.7 129.067 1321.76 135.2C1310.83 141.333 1298.76 144.4 1285.56 144.4ZM1285.56 113.2C1296.76 113.2 1305.7 109.467 1312.36 102C1319.16 94.5333 1322.56 84.6667 1322.56 72.4C1322.56 60 1319.16 50.1333 1312.36 42.8C1305.7 35.3333 1296.76 31.6 1285.56 31.6C1274.23 31.6 1265.16 35.2667 1258.36 42.6C1251.7 49.9333 1248.36 59.8667 1248.36 72.4C1248.36 84.8 1251.7 94.7333 1258.36 102.2C1265.16 109.533 1274.23 113.2 1285.56 113.2Z"
                  fill="#F7F7F7"
                  strokeWidth="4"
                  stroke="#4169E1"
                  strokeLinecap="round"
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={transition}
                />
              </svg>
            </motion.div>
            <div className="z-40 flex flex-col items-center justify-center h-full px-4 md:pl-4 bg-fuchsia-00 bg-red-40 lg:px-6 xl:px-10 md:items-start md:w-1/2 ">
              <div className="relative flex flex-col items-center justify-center w-full h-full md:pt-24 lg:pt-24 xl:pt-52 md:items-start">
                <motion.div
                  variants={fadeInLeftVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
                  className="w-full">
                  <TextAnimation />
                </motion.div>
                <motion.h2
                  variants={fadeInLeftchildrenVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
                  className="text-gray bg-background  md:pb-10  md:pt-7 pb-8 pt-8  capitalize font-poppins select-none text-[16px] font-normal leading-[26px] text-justify  md:text-justify">
                  Erex Studio pioneers digital transformation, delivering cutting-edge
                  software, captivating designs, and strategic digital marketing. Elevate
                  your brand with our innovative solutions and expert guidance.
                </motion.h2>
                <motion.div
                  variants={fadeInLeftchildrenVariant}
                  initial="hidden"
                  animate="visible"
                  className="leading-loose">
                  <Link to="contact" spy={true} offset={-90} smooth={true} duration={300}>
                    <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden  text-white shadow-primary shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                      <span className="relative z-10 font-federo text-[16px]">
                        Hire Us
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
              ref={constraintsRef}
              className="z-50 w-full h-auto md:h-full md:w-1/2">
              {/* <Spline
                className="hidden md:block"
                scene="https://prod.spline.design/6li3mjiZmpzR3QRo/scene.splinecode"
              /> */}

              <motion.div
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                drag
                dragConstraints={constraintsRef}
                className="z-50 flex items-center justify-center w-full xl:mt-12 md:h-full">
                <HeroImage />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
