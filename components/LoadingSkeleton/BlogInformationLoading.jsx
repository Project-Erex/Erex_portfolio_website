import React from "react";

export default function BlogInformationLoading() {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-2 ">
        {[...Array(4)]?.map((item, index) => (
          <div key={index} role="status" className=" animate-pulse md:flex-col md:flex">
            <div className="w-full">
              <div className="flex items-center justify-center h-10 gap-2 px-2 bg-gray-200 max-w-52 rounded-xl dark:bg-gray-700">
                <div className="w-8 h-6 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
                <div className="w-full h-6 bg-gray-300 rounded-lg dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
