// import {styles} from "@/app/styles";
// import {ImageSlider} from "@/components/imageSlider/ImageSlider";
// import React from "react";
// import Image from "next/image";
// import {Star2} from "@/app/assets";

// export default function BlogPage() {
//   return (
//     <>
//       <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
//         <div className="w-full max-w-screen-2xl ">
//           <div>
//             <div
//               style={{
//                 background: "rgb(64, 123, 255)",
//                 background:
//                   "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
//               }}
//               className={`${styles.xPadding}  ${styles.yPadding}

//            mt-[90px] h-full overflow-hidden  relative  bg-backgroundGray `}>
//               <div
//                 className=" w-full h-[450px]
//             relative ">
//                 <ImageSlider />
//               </div>
//               <div className="w-full flex h-full">
//                 <div className=" gap-4 w-[65%] flex items-center  h-full">
//                   <Image
//                     width={0}
//                     height={0}
//                     src={Star2}
//                     alt="Star"
//                     className="w-10 h-full"
//                   />
//                   <h1 className="font-public font-semibold text-secondary text-3xl">
//                     Blog of the day
//                   </h1>
//                   <div>lorem*50</div>
//                 </div>
//                 <div className="w-[35%] h-full bg-purple-400 sticky top-0">
//                   <div className="flex items-center gap-3">
//                     <Image
//                       width={0}
//                       height={0}
//                       src={Star2}
//                       alt="Star"
//                       className="w-6 h-full"
//                     />
//                     <h2 className="font-public font-semibold text-secondary text-xl">
//                       Explore Categories
//                     </h2>
//                     <div></div>
//                   </div>
//                   <div>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
//                     adipisci quam saepe aperiam illum debitis, blanditiis quibusdam,
//                     inventore illo dolorum pariatur maiores autem quidem fugit amet,
//                     officia cum veritatis!
//                   </div>
//                   <div>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
//                     adipisci quam saepe aperiam illum debitis, blanditiis quibusdam,
//                     inventore illo dolorum pariatur maiores autem quidem fugit amet,
//                     officia cum veritatis!
//                   </div>
//                   <div>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
//                     adipisci quam saepe aperiam illum debitis, blanditiis quibusdam,
//                     inventore illo dolorum pariatur maiores autem quidem fugit amet,
//                     officia cum veritatis!
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import {styles} from "@/app/styles";
import {ImageSlider} from "@/components/imageSlider/ImageSlider";
import React, {useState} from "react";
import Image from "next/image";
import {Star2} from "@/app/assets";
import BlogCard from "@/components/card/BlogCard";
import Categories from "@/components/categories/Categories";
import {FaChevronUp} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa6";

export default function BlogPage() {
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    console.log("Toggling expand");
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <section className=" w-full h-full">
        <div className="w-full max-w-screen-2xl">
          <div
            style={{
              background: "rgb(64, 123, 255)",
              background:
                "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
            }}
            className={`${styles.xPadding}  relative lg:pt-16 md:pt-10 pt-6 mt-[90px] h-full overflow-hidden  w-full bg-background`}>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="h-[550px] sm:h-[600px] md:h-[300px] lg:h-[350px] xl:h-[450px] w-full relative">
              <ImageSlider isHover={isHovering} />
            </div>
          </div>
          <div
            className={`${styles.xPadding} ${styles.DMPyPadding}  flex flex-col-reverse w-full md:flex-row h-full relative`}>
            <div className="md:w-[70%] w-full  flex-col h-full  ">
              <div className="flex gap-4">
                <Image
                  width={0}
                  height={0}
                  src={Star2}
                  alt="Star"
                  className="w-10 h-full "
                />
                <h1 className="font-public font-semibold text-secondary text-3xl">
                  Blog of the day
                </h1>
              </div>
              <div className="w-full h-full py-10">
                <BlogCard showLoadMore={false} />
              </div>
              <div className="flex gap-4">
                <Image
                  width={0}
                  height={0}
                  src={Star2}
                  alt="Star"
                  className="w-10 h-full"
                />
                <h1 className="font-public font-semibold text-secondary text-3xl">
                  Blogs
                </h1>
              </div>
              <div className="w-full h-full py-10">
                <BlogCard showLoadMore={true} />
              </div>
            </div>
            <div className="md:w-[30%] w-full h-full  bg-white sticky top-16 pt-5 md:pt-0 md:top-28 ">
              <div className={`w-full flex py-4 justify-between md:py-0 items-center`}>
                <div className=" flex gap-4 items-center">
                  <Image
                    width={0}
                    height={0}
                    src={Star2}
                    alt="Star"
                    className="w-8 h-full"
                  />
                  <h2 className="font-public font-semibold text-secondary md:text-base lg:text-xl">
                    Explore Categories
                  </h2>
                </div>

                <button
                  className="text-white rounded-lg px-2 py-2 bg-primary shadow-3xl "
                  onClick={toggleExpand}>
                  {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
              <div className={`container ${isExpanded ? "" : "expanded"}`}>
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
