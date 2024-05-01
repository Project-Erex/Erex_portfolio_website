import React from "react";
import {FaArrowLeftLong} from "react-icons/fa6";
import Image from "next/image";
import {Digital_marketing, Pexels_steve, Vector5} from "@/app/assets";
import {styles} from "@/app/styles";
import {BlogHeadingSec} from "@/components/heading/BlogHeading";
import Link from "next/link";
import BlogTags from "@/components/categories/BlogTags";
import BlogInformation from "@/components/categories/BlogInformation";
import BlogDetails from "@/components/categories/BlogDetails";
import WhatToReadNextCard from "@/components/card/WhatToReadNextCard";

export default function BlogDetailsPage({blogId}) {
  return (
    <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          style={{
            background: "rgb(64, 123, 255)",
            background:
              "linear-gradient(180deg, rgba(205,221,255,1) 60%, rgba(255,255,255,1) 100%)",
          }}
          className={`w-full flex relative  ${styles.xPadding} md:pt-[96px]`}>
          <div
            className={`w-[30%] py-8  border-b border-bordercolor   hidden md:block h-full   sticky top-24  `}>
            <Link
              href={"/blog"}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/30">
              <FaArrowLeftLong />
            </Link>
            <div className="flex flex-col w-full gap-4 py-5">
              <BlogHeadingSec Heading={"Blog Information"} />
              <BlogInformation blogId={blogId} />
            </div>

            <div className="flex flex-col w-full gap-4 pt-10">
              <BlogHeadingSec Heading={"Blog Tags"} />
              <BlogTags blogId={blogId} />
            </div>
          </div>
          <div className="w-[70%] pt-6 h-full flex flex-col">
            <BlogDetails blogId={blogId} />
          </div>
        </div>
        {/* **************************** */}

        <div className="relative w-full h-auto pt-10">
          <Image
            src={Vector5}
            alt="image"
            width={0}
            height={0}
            className="w-full h-auto"
          />

          <div className="absolute -translate-x-1/2 translate-y-1/2 top-1/2 left-1/2">
            <h2 className="text-5xl font-medium text-center font-federo text-secondary">
              What to read next
            </h2>
          </div>
        </div>
        <div className={`w-full  relative py-14    h-auto  ${styles.xPadding}`}>
          <WhatToReadNextCard />
        </div>
      </div>
    </section>
  );
}
