import React from "react";

export default function BlogTagsLoading() {
  return (
    <div className="grid w-full grid-cols-3 gap-2 pr-10 ">
      {[...Array(5)]?.map((item, index) => (
        <div key={index} role="status" className=" animate-pulse md:flex-row md:flex">
          <div className="w-full">
            <div className="flex items-center justify-center w-full h-6 gap-1 px-1 py-1 bg-gray-200 rounded-lg dark:bg-gray-700">
              <div className="w-full h-4 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
