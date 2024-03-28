import React from "react";
import {BlogImage, Developer, Representations} from "../assets";
import ClientSlideshow from "@/components/ClientSlideshow/ClientSlideshow";

export default function page() {
  const slidesData = [
    {
      id: 1,
      image: "/img1.jpg",
      name: "1",
      description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      id: 2,
      image: "/img2.jpg",
      name: "2",
      description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      id: 3,
      image: "/img3.jpg",
      name: "3",
      description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
    {
      id: 4,
      image: "/img4.jpg",
      name: "4",
      description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu",
    },
  ];

  return (
    <div className="w-full h-screen">
      <ClientSlideshow slidesData={slidesData} />
    </div>
  );
}
