import React from "react";

import {getBlogs} from "@/constants/getBlogs";
import BlogBanner from "./BlogBanner";

export const Banner = async () => {
  const Blogdata = await getBlogs();
  return (
    <>
      <BlogBanner data={Blogdata} />
    </>
  );
};
