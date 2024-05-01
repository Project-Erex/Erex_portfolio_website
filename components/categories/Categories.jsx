import React, {Suspense} from "react";
import {getAllBlogsCategories} from "@/constants/getAllBlogsCategories";
import CategoriesLoadng from "../LoadingSkeleton/CategoriesLoading";

async function BlogCategoriesData() {
  const Categories = await getAllBlogsCategories();

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-3 pt-4 pb-5 md:grid-cols-1 xl:grid-cols-2">
        {Array.isArray(Categories) &&
          Categories.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-between w-full gap-3 px-2 py-1 font-medium rounded-lg shadow font-public text-secondary bg-lightwhite">
                  <p className="lg:text-[14px] line-clamp-[1] font-public font-medium text-base">
                    {item.title}
                  </p>
                  <span className="px-2 py-1 bg-white rounded-lg ">
                    {item.total_blogs}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default function Categories() {
  return (
    <>
      <Suspense fallback={<CategoriesLoadng />}>
        <BlogCategoriesData />
      </Suspense>
    </>
  );
}
