import React from "react";
import {BlogImage, Developer, Representations} from "../assets";
import ClientSlideshow from "@/components/ClientSlideshow/ClientSlideshow";
import {styles} from "../styles";

export default function page() {
  const slidesData = [
    {
      id: 1,
      image: "/img1.jpg",
      name: "Uday kumar",
      designation: "Founder | CEO",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 2,
      image: "/img2.jpg",
      name: "Gurucharan Karmakar",
      designation: "React Native Developer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 3,
      image: "/img3.jpg",
      name: "Shadab Khan",
      designation: "Backend Developer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 4,
      image: "/img4.jpg",
      name: "Nayan Dey",
      designation: "React Native Developer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 5,
      image: "/mithun.jpg",
      name: "Mithun Gorai",
      designation: "Frontend Web Developer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 6,
      image: "/img2.jpg",
      name: "Ramesh Gorai",
      designation: "UI/UX Designer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
    {
      id: 7,
      image: "/img3.jpg",
      name: "Akash Mandal",
      designation: "Frontend Web Developer",
      thumbnail: "/thumbnail_img_mithun.png",
    },
  ];

  return (
    <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div
          className={`   bg-background 2xl:border-y-4 
         md:border-x-2 border-watermark   h-full  relative  bg-backgroundGray `}>
          <ClientSlideshow slidesData={slidesData} />
        </div>
      </div>
    </section>
  );
}
