import React, {Suspense} from "react";
import getBlogById from "@/constants/getBlogById";
import BlogTagsLoading from "../LoadingSkeleton/BlogTagsLoading";

async function BlogTagsData({blogId}) {
  const data = await getBlogById(blogId);
  console.log("object........", blogId);

  return (
    <>
      <p className="font-medium text-textsecondary font-public">
        {data?.tags?.split(",").join(" | ")}
      </p>
    </>
  );
}

export default function BlogTags({blogId}) {
  return (
    <>
      <Suspense fallback={<BlogTagsLoading />}>
        <BlogTagsData blogId={blogId} />
      </Suspense>
    </>
  );
}
