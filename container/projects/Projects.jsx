import React from "react";
import {styles} from "../../app/styles";
import Heading from "@/components/heading/Heading";
import ProjectsCard from "./ProjectsCard";
import {ourProjects} from "@/constants";
export default function Projects() {
  return (
    <section className="w-full border-b-2 border-watermark ">
      <div
        className={` ${styles.yPadding} xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-6 px-4 lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
        <div className="absolute flex items-center justify-center w-full px-10 ">
          <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
            Projects
          </p>
        </div>
        <Heading text={"Our Projects"} text2={"Our Latest Projects"} />
        <div className="flex flex-col items-center justify-between w-full gap-6 pt-5 xl:pt-16 md:pt-10 md:flex-row ">
          {ourProjects.map((projects, index) => (
            <ProjectsCard key={projects.title} index={index} {...projects} />
          ))}
        </div>
      </div>
    </section>
  );
}
