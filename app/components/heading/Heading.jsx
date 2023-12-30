import React from "react";

export default function Heading({text, text2}) {
  return (
    <div className="z-50 flex flex-col items-center justify-center w-full gap-4 md:gap-0 xl:gap-6">
      {/* first-heading */}
      <div className="relative flex items-center justify-center pr-12 w-80">
        <div className="px-5 py-5 border-2 border-primary"></div>
        <div className="absolute flex items-center bg-green-600 w-[8.5rem] right-14 justify-items-center">
          <span className="absolute left-0 whitespace-nowrap bg-background text-primary">
            {text}
          </span>
        </div>
      </div>
      {/* second heading */}
      <span className="font-federo z-50  text-secondary text-[28px] md:text-[44px] xl:text-[70px] text-center font-normal">
        {text2}
      </span>
    </div>
  );
}
