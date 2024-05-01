import React from "react";
import BlogDetailsPage from "@/container/blog/BlogDetailsPage";

export default async function BlogDetels({params}) {
  const blogId = params.blogId;
  return (
    <>
      <BlogDetailsPage blogId={blogId} />
    </>
  );
}
