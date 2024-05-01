// import Image from "next/image";
// import React, {Suspense} from "react";
// import moment from "moment";
// import {GoDotFill} from "react-icons/go";
// import {motion} from "framer-motion";
// import {getBlogs} from "@/constants/getBlogs";

// const data = [
//   {
//     name: "Mithun",
//     age: 23,
//     sex: "male",
//     image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
//   },
//   {
//     name: "Raj",
//     age: 21,
//     sex: "male",
//     image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
//   },
//   {
//     name: "Guru",
//     age: 24,
//     sex: "male",
//     image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
//   },
//   {
//     name: "Mona",
//     age: 19,
//     sex: "female",
//     image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
//   },
// ];

// async function BlogBannerData() {
//   // const currentBlog = await getBlogs();

//   return (
//     <>
//       {data.map((Blog, index) => {
//         console.log("baaba", Blog);

//         return (
//           <motion.div
//             key={index}
//             initial={{y: 100, opacity: 0}}
//             whileInView={{
//               y: 0,
//               opacity: 1,
//               transition: {
//                 duration: 0.8,
//                 ease: [0.65, 0, 0.35, 1],
//                 delay: 0.1 * index,
//               },
//             }}
//             viewport={{once: true}}>
//             <div key={index}>
//               <div className="w-full px-5 md:px-6 lg:px-10 py-10 rounded-xl bg-[#407BFF] bg-opacity-40 items-center h-full flex flex-col md:flex-row">
//                 <div className="flex flex-col w-full h-full gap-5 py-auto md:px-5 md:justify-center lg:py-10">
//                   <div className="flex items-center gap-2 text-sm text-secondary font-public md:text-sm lg:text-base lg:gap-4">
//                     {/* <h2>By-{Blog.created_by}</h2> */}

//                     <h2>By-{Blog.name}</h2>

//                     <h2 className="flex items-center gap-2">
//                       <GoDotFill size={12} />
//                       {/* {moment(Blog.created_at).format("MMM DD YYYY h:mm:ss a")} */}
//                     </h2>
//                   </div>
//                   <p className="text-secondary font-federo font-medium text-xl md:pr-5 lg:pr-10 sm:text-lg md:text-2xl xl:text-5xl xl:leading-[1.15]">
//                     {/* {Blog.title} */}
//                     {Blog.sex}
//                   </p>
//                   <h2 className="font-medium text-secondary font-public">
//                     READ FULL STORY
//                     <div className="h-1 w-36 bg-primary"></div>
//                   </h2>
//                 </div>
//                 <div className="flex items-center justify-center w-full h-full md:px-5 md:justify-end xl:px-0 ">
//                   {/* <Image
//                     width={0}
//                     height={0}
//                     src={Blog.blog_thumbnail}
//                     alt={Blog.title}
//                     draggable="false"
//                     className="w-full h-full rounded-xl  sm:w-[450px] md:w-full "
//                   /> */}
//                   <Image
//                     width={0}
//                     height={0}
//                     src={Blog.image}
//                     alt={Blog.title}
//                     draggable="false"
//                     className="w-full h-full rounded-xl  sm:w-[450px] md:w-full "
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         );
//       })}
//     </>
//   );
// }

// export default function BannerData() {
//   return (
//     <>
//       <Suspense>
//         <BlogBannerData />
//       </Suspense>
//     </>
//   );
// }

// BannerData.js
import React, {Suspense} from "react";
import {motion} from "framer-motion";
import {GoDotFill} from "react-icons/go";

// Simulated blog data
const data = [
  {
    name: "Mithun",
    age: 23,
    sex: "male",
    image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
  },
  // Add more blog data objects here as needed
  {
    name: "Raj",
    age: 21,
    sex: "male",
    image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
  },
  {
    name: "Guru",
    age: 24,
    sex: "male",
    image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
  },
  {
    name: "Mona",
    age: 19,
    sex: "female",
    image: "https://i.pinimg.com/originals/6a/44/f0/6a44f0e35b10e6ed063eeebf7ed844f9.jpg",
  },
];

export default function BannerData() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((blog, index) => (
          <motion.div
            key={index}
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.1 * index}}>
            <div className="w-full px-5 md:px-6 lg:px-10 py-10 rounded-xl bg-[#407BFF] bg-opacity-40 items-center h-full flex flex-col md:flex-row">
              <div className="flex flex-col w-full h-full gap-5 py-auto md:px-5 md:justify-center lg:py-10">
                <div className="flex items-center gap-2 text-sm text-secondary font-public md:text-sm lg:text-base lg:gap-4">
                  <h2>By-{blog.name}</h2>
                  <h2 className="flex items-center gap-2">
                    <GoDotFill size={12} />
                    {blog.sex}
                  </h2>
                </div>
                <p className="text-secondary font-federo font-medium text-xl md:pr-5 lg:pr-10 sm:text-lg md:text-2xl xl:text-5xl xl:leading-[1.15]">
                  {/* Display other blog information */}
                </p>
                <h2 className="font-medium text-secondary font-public">
                  READ FULL STORY
                  <div className="h-1 w-36 bg-primary"></div>
                </h2>
              </div>
              <div className="flex items-center justify-center w-full h-full md:px-5 md:justify-end xl:px-0">
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="w-full h-full rounded-xl  sm:w-[450px] md:w-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </Suspense>
    </>
  );
}
