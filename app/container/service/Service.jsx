"use client";
import React from "react";
import {services} from "@/app/constants";
import {styles} from "../../styles";
import Heading from "@/app/components/heading/Heading";
import ServiceCard from "./ServiceCard";
import {SERVICES} from "@/app/assets";
import {motion} from "framer-motion";
// import Image from "next/image";
const Service = () => {
  return (
    <section
      id="service"
      className="flex justify-center w-full border-t-2 2xl:border-t-0 border-watermark bg-background ">
      <div className="w-full max-w-screen-2xl">
        <div
          className={` ${styles.yPadding} ${styles.xMargin} ${styles.xdivPadding} 2xl:border-t-4   relative  md:border-r-2 md:border-l-2 border-watermark`}>
          <Heading
            text={"Check Services"}
            text2={"Our Best Services"}
            img={SERVICES}
            width={100}
          />
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
              {services.map((service, index) => (
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
                  <ServiceCard key={service.title} index={index} {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
