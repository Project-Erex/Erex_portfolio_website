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
      className="flex items-center justify-center w-full border-t-2 2xl:border-t-0 bg-background border-watermark">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding} ${styles.xMargin} ${styles.xdivPadding} 2xl:border-t-4    relative   bg-background md:border-x-2  border-watermark`}>
          <Heading
            text={"Contribution"}
            text2={"Our Contribution"}
            img={PACKAGES}
            width={100}
          />
          <div className="flex items-center justify-center w-full">
            <div className="z-30 grid w-full grid-cols-1 mt-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:mt-8 lg:mt-10 bg-background">
              {OurContribution.map((Contribution, index) => (
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
                  <ContributionCard
                    key={Contribution.id}
                    index={index}
                    {...Contribution}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.33,
                    ease: [0.65, 0, 0.35, 1],
                  },
                }}
                viewport={{once: true}}
                className="flex flex-col items-center justify-center w-full bg-lightwhite h-[275px] lg:h-full gap-2 transition-all duration-500 ease-in-out delay-75 border-2  border-watermark group hover:bg-bghover hover:border-bghover">
                <Link
                  target="_blank"
                  href={"https://www.npmjs.com/~erexstudio"}
                  className="w-20 px-4 py-4 transition-all duration-500 bg-white rounded-full group-hover:bg-opacity-10">
                  <Image src={Arrow2} alt="Erex" />
                </Link>
                <Link href={"https://www.npmjs.com/~erexstudio"} target="_blank">
                  <button className="text-heading font-federo  transition-all duration-500 group-hover:text-white  font-normal text-[18px] lg:text-[24px] xl:text-[30px] text-start  leading-normal">
                    View All
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
