import {Arrow2, PACKAGES} from "@/app/assets";
import Heading from "@/components/heading/Heading";
import {styles} from "@/app/styles";
import {motion} from "framer-motion";
import React from "react";
import ContributionCard from "./ContributionCard";
import {OurContribution} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {NpmCardHoverEffect} from "@/components/ui/npm-card-hover-effect";

export default function Contribution() {
  return (
    <section
      id="contribution"
      className="flex items-center justify-center w-full bg-background ">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding} ${styles.xMargin} ${styles.xdivPadding}     relative   bg-background md:border-x-2  border-watermark`}>
          <Heading
            text={"Contribution"}
            text2={"Our Contribution"}
            img={PACKAGES}
            width={100}
          />
          <div className="flex items-center justify-center w-full">
            <div className="z-30 w-full mt-8 overflow-hidden md:mt-8 lg:mt-10 bg-background">
              <NpmCardHoverEffect items={OurContribution} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* {OurContribution.map((Contribution, index) => (
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
              ))} */
}
