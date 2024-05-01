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
        {/* <div className={`w-full flex relative   ${styles.xPadding}`}>
          <div className={`w-[30%] pt-8   hidden md:block h-full   sticky top-0 `}></div>
          <div className={`w-[70%] h-full flex flex-col ${styles.xdivPadding}`}>
            <div className={`  w-full h-full  relative  bg-background`}>
              <p className="py-6 text-base font-normal text-secondary pr-14 font-public">
                {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
              </p>
              <h4 className="pb-6 text-2xl font-normal text-secondary font-public">
                Short-form vs. long-form video content: Definitions
              </h4>
              <p className="pb-6 text-base font-normal text-secondary pr-14 font-public">
                {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
              </p>
              <Image
                alt="Pexels_steve"
                src={Pexels_steve}
                width={0}
                height={0}
                className="w-full h-auto"
              />
              <p className="py-6 text-base font-normal text-secondary pr-14 font-public">
                {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
              </p>
              <h4 className="text-2xl font-normal text-secondary font-public">
                Short-form vs. long-form video content: Definitions
              </h4>
              <p className="py-6 text-base font-normal text-secondary pr-14 font-public">
                {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
              </p>
            </div>
          </div>
        </div> */}

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
