import {styles} from "@/app/styles";
import React from "react";
import BlogCard from "@/components/card/BlogCard";
import Categories from "@/components/categories/Categories";
import FeaturedPostCard from "@/components/card/FeaturedPostCard";
import {BlogHeading, BlogHeadingSec} from "@/components/heading/BlogHeading";
import {Banner} from "@/components/Banners/Banner";

export default function BlogPage() {
  return (
    <>
      <section className="w-full h-full ">
        <div className="w-full max-w-screen-2xl">
          <div
            style={{
              background: "rgb(64, 123, 255)",
              background:
                "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
            }}
            className={`${styles.xPadding}  relative lg:pt-16 md:pt-10 pt-6 mt-[90px] h-full  overflow-hidden  w-full bg-background`}>
            <Banner />
          </div>
          <div
            className={`${styles.xPadding} ${styles.DMPyPadding}  flex flex-col-reverse w-full md:flex-row h-full relative`}>
            <div className="md:w-[70%] w-full  flex-col h-full  ">
              <BlogHeading Heading={"Blog of the day"} />
              <div className="w-full h-full py-10">
                <BlogCard />
              </div>
              <div className="flex gap-4">
                <BlogHeading Heading={"Blogs"} />
              </div>
              <div className="w-full h-full py-10">
                <BlogCard />
              </div>
            </div>
            <div className="md:w-[30%] hidden md:block h-full   sticky top-16 pt-5 md:pt-0 md:top-28 ">
              <div className={`w-full flex py-4 justify-between md:py-0 items-center`}>
                <BlogHeadingSec Heading={"Explore Categories"} />
              </div>
              <div>
                <Categories />
              </div>
              {/*  */}
              <div className="w-full py-5">
                <BlogHeadingSec Heading={"Featured Posts"} />
                <div>
                  <FeaturedPostCard />
                </div>
              </div>
            </div>
            {/* for mobile device */}
            {/* <MobileCategories /> */}
          </div>
        </div>
      </section>
    </>
  );
}
