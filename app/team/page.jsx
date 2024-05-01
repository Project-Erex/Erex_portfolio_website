import React from "react";

import ClientSlideshow from "@/components/ClientSlideshow/ClientSlideshow";
import {slidesData} from "@/constants";

export default function page() {
  return (
    <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          className={`   bg-background 2xl:border-y-4 
         md:border-x-2 border-watermark   h-full  relative   `}>
          <ClientSlideshow slidesData={slidesData} />
        </div>
      </div>
    </section>
  );
}
