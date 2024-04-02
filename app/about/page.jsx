"use client";
import React from "react";
import {styles} from "../styles";
import Image from "next/image";
import {MediumBusiness, Office, OurGoal, Teamwork} from "../assets";
import {motion} from "framer-motion";
import {IoIosArrowRoundForward} from "react-icons/io";

export default function page() {
  const data = [
    {
      icon: MediumBusiness,
      title: "Satisfied Client",
      point: 9652,
      bgcolor: "#029e76",
    },
    {
      icon: MediumBusiness,
      title: "Project Completed",
      point: 9752,
      bgcolor: "#ffa808",
    },
    {
      icon: MediumBusiness,
      title: "Project Launched",
      point: 8752,
      bgcolor: "#5543d1",
    },
    {
      icon: MediumBusiness,
      title: "Years Completed",
      point: 2,
      bgcolor: "#ff586e",
    },
  ];
  return (
    <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          className={` ${styles.yPadding}   ${styles.xMargin} ${styles.xdivPadding} bg-background 2xl:border-y-4 
           md:border-x-2 border-watermark  mt-20 h-full  relative  bg-backgroundGray `}>
          <div className="w-full h-auto relative">
            <Image
              src={Office}
              alt="Office"
              width={0}
              height={0}
              className="w-full h-full"
            />
            <div className="w-full absolute top-0  flex justify-center items-center  h-full bg-secondary/40">
              <h1 className="text-white text-5xl font-federo font-medium">About Us</h1>
            </div>
          </div>
          <div
            className={`w-full flex justify-center flex-col items-center pt-6 md:pt-10  lg:pt-12 xl:pt-16 pb-4 md:pb-10 gap-4 md:gap-8 ${styles.xdivPadding}`}>
            <h1 className="text-secondary text-3xl md:text-5xl text-center font-federo font-medium">
              About our startup company.
            </h1>
            <p className="text-subheading text-base md:text-lg font-public text-center font-medium">
              {` Tech startup: Empowering industries, driving innovation, and shaping
              tomorrow's digital landscape with groundbreaking solutions that
              enhance user experiences.`}
            </p>
            <div className="lg:px-20 md:px-5 pt-5">
              <Image
                src={Teamwork}
                alt="Teamwork"
                width={0}
                height={0}
                className="w-full h-full "
              />
            </div>
          </div>
          {/* ******************************************* */}
          {/* <div
            className={`w-full flex justify-center flex-col items-center  py-10 gap-6  md:gap-8 ${styles.xdivPadding}`}>
            <h1 className="text-secondary text-3xl md:text-5xl text-center font-federo font-medium">
              Grow Up Your Workflow Speed.
            </h1>
            <p className="text-subheading text-base md:text-lg font-public text-center font-medium">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis eget
              est ante, sed <br />
              viverra nunc tincidunt nec eleifend et turpis.`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
              {data.map((item, index) => (
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
                  <div className=" bg-white shadow-3xl px-5 py-6 gap-3 rounded-2xl w-full h-full flex items-center justify-center flex-col">
                    <div
                      style={{backgroundColor: item.bgcolor}}
                      className={`py-4 px-4 rounded-full`}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={0}
                        height={0}
                        className="w-10"
                      />
                    </div>

                    <h2 className="text-secondary font-public font-medium text-xl">
                      {item.title}
                    </h2>
                    <h5 className="text-primary text-xl font-semibold  ">{item.point}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div> */}
          {/* ********************************************************* */}

          <div
            className={`w-full flex flex-col-reverse lg:flex-row gap-10 py-10  ${styles.xdivPadding}`}>
            <div className="w-full">
              <Image
                src={OurGoal}
                alt="OurGoal"
                width={0}
                height={0}
                className="w-full h-full shadow-3xl rounded-xl"
              />
            </div>
            <div className="w-full  flex flex-col gap-4  justify-evenly">
              <h1 className="text-secondary  text-5xl font-federo font-medium">
                Our Goal
              </h1>
              <p className="text-subheading text-base   md:text-lg font-public md:text-clip font-medium">
                {`At Erex Studio, our primary goal is to empower small and medium-sized businesses by offering comprehensive digital solutions tailored to their unique needs. We strive to be a leading agency in Digital Marketing, Software Development, UI/UX Design, and other IT services, ensuring our clients achieve sustainable growth and success in today's competitive landscape. Through innovative strategies, personalized services, and a commitment to excellence, we aim to drive measurable results and create lasting value for our clients.`}
              </p>
              <button className="text-secondary flex items-center ">
                Contact Us{" "}
                <span className="pt-[2px]">
                  <IoIosArrowRoundForward size={25} />
                </span>
              </button>
            </div>
          </div>
          {/* ************************************** */}
        </div>
      </div>
    </section>
  );
}
