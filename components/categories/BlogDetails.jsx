import React, {Suspense} from "react";
import getBlogById from "@/constants/getBlogById";
import Image from "next/image";
import BlogDetailsLoading from "../LoadingSkeleton/BlogDetailsLoading";
import parse from "html-react-parser";

async function BlogDetailsData({blogId}) {
  const data = await getBlogById(blogId);

  console.log("object>>>>>>", data);

  return (
    <>
      <div className="flex flex-col w-full gap-5 py-5">
        <h2 className="text-base font-normal font-public text-primary">
          {data?.category?.title}
        </h2>
        <p className="text-3xl font-medium leading-snug font-federo text-secondary md:text-4xl xl:text-5xl">
          {data?.title}
        </p>
      </div>
      <Image
        alt={data?.category?.title}
        src={data?.blog_thumbnail}
        width={0}
        height={0}
        className="w-full h-auto rounded-xl"
      />
      <div className="mt-4 text-secondary">{parse(data.blog_contents)}</div>
    </>
  );
}

export default function BlogDetails({blogId}) {
  return (
    <>
      <Suspense fallback={<BlogDetailsLoading />}>
        <BlogDetailsData blogId={blogId} />
      </Suspense>
    </>
  );
}
