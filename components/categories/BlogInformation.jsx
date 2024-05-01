import React, {Suspense} from "react";
import getBlogById from "@/constants/getBlogById";
import moment from "moment";
import {Author, Category, Readingtime, Updated} from "@/app/assets";
import Image from "next/image";
import BlogInformationLoading from "../LoadingSkeleton/BlogInformationLoading";

async function BlogInformationData({blogId}) {
  const BlogInfoData = await getBlogById(blogId);
  return (
    <>
      <div className="flex flex-col w-full gap-5 ">
        <div className="flex items-center w-full gap-4">
          <Image width={0} height={0} src={Category} alt="Category" />
          <p className="font-medium text-secondary font-public">
            Category :{" "}
            <span className="text-textsecondary">{BlogInfoData?.category.title}</span>
          </p>
        </div>
        <div className="flex items-center w-full gap-4">
          <Image width={0} height={0} src={Updated} alt="Updated" />
          <p className="font-medium text-secondary font-public">
            Updated :{" "}
            <span className="text-textsecondary">
              {moment(BlogInfoData?.created_at).format("MMM DD YYYY")}
            </span>
          </p>
        </div>
        <div className="flex items-center w-full gap-4">
          <Image width={0} height={0} src={Author} alt="Author" />
          <p className="font-medium text-secondary font-public">
            Author :{" "}
            <span className="text-textsecondary">{BlogInfoData?.created_by}</span>
          </p>
        </div>
        <div className="flex items-center w-full gap-4">
          <Image width={0} height={0} src={Readingtime} alt="Reading" />
          <p className="font-medium text-secondary font-public">
            Reading time :{" "}
            <span className="text-textsecondary">{BlogInfoData?.reading_time}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default function BlogInformation({blogId}) {
  return (
    <>
      <Suspense fallback={<BlogInformationLoading />}>
        <BlogInformationData blogId={blogId} />
      </Suspense>
    </>
  );
}
