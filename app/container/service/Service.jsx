import React from "react";
import {services} from "@/app/constants";
import {styles} from "../../styles";
import Image from "next/image";
import Heading from "@/app/components/heading/Heading";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section
      id="service"
      className={` ${styles.yPadding}  xl:mx-36 relative lg:mx-32 md:mx-22 sm:mx-16 mx-2 px-4 lg:px-6  xl:px-10  bg-background md:border-r-2 md:border-l-2 border-watermark`}>
      <div className="absolute flex items-center justify-center w-full px-10 ">
        <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
          SERVICES
        </p>
      </div>
      <Heading text={"Check Services"} text2={"Our Best Services"} />
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
