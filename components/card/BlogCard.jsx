import React, {Suspense} from "react";
import Image from "next/image";
import {GoDotFill} from "react-icons/go";
import moment from "moment";
import Link from "next/link";
import {getBlogs} from "@/constants/getBlogs";
import Loading from "../LoadingSkeleton/Loading";

async function BlogCardData() {
  const data = await getBlogs();

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-5 pr-5 md:grid-cols-2">
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <Link href={`/blog/${item?._id}`}>
                <div className="flex flex-col w-full h-full gap-3">
                  <Image
                    width={0}
                    height={0}
                    src={item.blog_thumbnail}
                    alt={item.title}
                    className="w-full h-full  sm:w-[450px] sm:h-[350px] rounded-xl"
                  />
                  <div className="flex items-center gap-2 text-sm text-secondary font-public md:text-sm lg:text-base lg:gap-4">
                    <h2>
                      By-
                      {item.created_by}
                    </h2>
                    <h2 className="flex items-center gap-2">
                      <GoDotFill size={12} />
                      {moment(item?.created_at).format("MMM DD YYYY")}
                    </h2>
                  </div>
                  <p className="text-secondary font-public">{item.title}</p>
                  <div className="w-24 h-auto rounded-lg bg-lightwhite ">
                    <p className="flex items-center justify-center py-1 text-secondary">
                      {item?.category?.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function BlogCard() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BlogCardData />
      </Suspense>
    </>
  );
}
