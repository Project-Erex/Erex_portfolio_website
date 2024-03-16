import {
  Facebook2,
  Girl1,
  Girl2,
  Girl3,
  Instagram2,
  Like,
  Love,
  Star,
  Youtube,
} from "@/app/assets";
import Image from "next/image";
import {motion} from "framer-motion";

import React from "react";
import Link from "next/link";

export default function Influencers() {
  return (
    <div className="w-full relative">
      <div
        className="flex w-full
      justify-center items-center py-28  flex-col gap-8  ">
        <h1 className="font-bold font-public tracking-wider leading-[1.15] text-2xl lg:text-7xl text-center text-secondary ">
          Hire Creators & Influencers
          <br /> To Promote Your Brand
        </h1>
        <p className="text-secondary font-public font-medium text-base md:text-xl  text-center">
          Social media networks are open to all. Social media is typically used for social
          interaction
          <br /> and access to news and information, and decision making.
        </p>
        <Link
          type="button"
          href={"/pricing/business"}
          to="/pricing/business"
          className="relative z-10 font-federo text-lg rounded-full flex h-[48px] w-40 font-medium  sm:w-52 items-center justify-center overflow-hidden text-white bg-primary">
          Contact Us
        </Link>

        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute top-0 left-0">
          <Image
            src={Star}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 0.7,
            repeat: Infinity,
          }}
          className="absolute top-8 left-1/4">
          <Image
            src={Like}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 0.9,
            repeat: Infinity,
          }}
          className="absolute top-0 ">
          <Image
            src={Girl2}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 1,
            repeat: Infinity,
          }}
          className="absolute top-8 right-[20%]">
          <Image
            src={Youtube}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 1.3,
            repeat: Infinity,
          }}
          className="absolute  bottom-32 left-0">
          <Image
            src={Love}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 1.6,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/4">
          <Image
            src={Instagram2}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 1.8,
            repeat: Infinity,
          }}
          className="absolute   bottom-0 md:-bottom-5">
          <Image
            src={Girl1}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 2.1,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-1/4">
          <Image
            src={Girl3}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
        <motion.div
          initial={{y: -10}}
          animate={{y: 10}}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1.5,
            delay: 2.6,
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-20">
          <Image
            src={Facebook2}
            width={0}
            height={0}
            alt="girl"
            className="w-10 md:w-14 h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
