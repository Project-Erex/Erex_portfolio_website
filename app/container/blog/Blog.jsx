import React from "react";
import {styles} from "../../styles";
import Heading from "@/app/components/heading/Heading";
import {ourBlog} from "@/constants";
import Blogcard from "./Blogcard";
import Checkbox from "@/app/components/Checkbox";
export default function Blog() {
  return (
    <section className="w-full border-b-2 border-watermark ">
      <div
        className={` ${styles.yPadding} xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-6 px-4 lg:px-6  xl:px-10  md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray `}>
        <div className="absolute flex items-center justify-center w-full px-10 ">
          <p className="font-semibold text-watermark font-poppins select-none hidden md:block md:text-[12.8vw] lg:text-[9.6vw] xl:text-[10.25vw] opacity-60 whitespace-nowrap antialiased tracking-widet lg:tracking-widest">
            OUR BLOGS
          </p>
        </div>
        <Heading text={"Latest Blog"} text2={"Our Latest News"} />
        <div className="flex flex-col items-center justify-between w-full gap-6 pt-5 md:gap-2 lg:gap-4 xl:pt-16 md:pt-10 md:flex-row ">
          {ourBlog.map((blog, index) => {
            return <Blogcard key={blog.title} index={index} {...blog} />;
          })}
        </div>
      </div>
    </section>
  );
}
