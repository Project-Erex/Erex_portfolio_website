"use client";

import {Arrow2, PACKAGES} from "@/app/assets";
import Heading from "@/app/components/heading/Heading";
import {styles} from "@/app/styles";
import {motion} from "framer-motion";
import React from "react";
import ContributionCard from "./ContributionCard";
import {OurContribution} from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export default function Contribution() {
  return (
    <section
      id="contribution"
      className="flex justify-center w-full border-b-2 border-watermark">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding} ${styles.xMargin} ${styles.xdivPadding}    relative   bg-background md:border-x-2  border-watermark`}>
          <Heading
            text={"Contribution"}
            text2={"Our Contribution"}
            img={PACKAGES}
            width={100}
          />
          <div className="flex items-center justify-center w-full">
            <motion.div
              initial={{y: 100, opacity: 0}}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.1,
                },
              }}
              viewport={{once: true}}
              className="z-30 grid w-full grid-cols-1 mt-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:mt-8 lg:mt-10 bg-lightwhite">
              {OurContribution.map((Contribution, index) => (
                <ContributionCard key={Contribution.id} index={index} {...Contribution} />
              ))}
              <div className="flex flex-col items-center justify-center w-full h-[275px] md:h-full gap-2 transition-all duration-500 ease-in-out delay-75 border-2  border-watermark group hover:bg-bghover hover:border-bghover">
                <Link
                  target="_blank"
                  href={"https://www.npmjs.com/~erexstudio"}
                  className="w-20 px-4 py-4 bg-white rounded-full bg group-hover:bg-opacity-10">
                  <Image src={Arrow2} alt="Erex" />
                </Link>
                <Link href={"https://www.npmjs.com/~erexstudio"} target="_blank">
                  <button className="text-heading font-federo  transition-all duration-500 group-hover:text-white  font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal">
                    Viwe All
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
