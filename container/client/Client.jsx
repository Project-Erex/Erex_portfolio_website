"use client";
import React from "react";
import {styles} from "../../app/styles";

import Slick from "./Slick";
import {motion} from "framer-motion";
import Heading from "@/components/heading/Heading";
import {CLIENTS} from "@/app/assets";
import {ourClient} from "@/constants";
import Image from "next/image";
import {useState} from "react";

const Client = () => {
  return (
    <section
      id="ourClient"
      className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          className={` ${styles.yPadding}   ${styles.xMargin} ${styles.xdivPadding}  2xl:border-y-4  md:border-x-2 border-watermark  h-full  relative  bg-background `}>
          <Heading text={"Our Client"} text2={"Discover Our Clients"} img={CLIENTS} />
          <div className="z-30 grid w-full grid-cols-2 gap-2 mt-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:mt-8 lg:mt-10 bg-background ">
            {ourClient.map((client, index) => (
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
                <div key={index}>
                  <div className="w-full h-full ">
                    <div className="flex flex-col items-center justify-center w-full h-32 px-4 py-4 bg-lightwhite ">
                      <Image
                        src={client.icon}
                        alt={client.title}
                        width={0}
                        height={0}
                        className="h-auto w-60"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
