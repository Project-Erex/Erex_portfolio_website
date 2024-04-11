"use client";
import React, {useState} from "react";

import Image from "next/image";
import {Digital_marketing} from "@/app/assets";
import {GoDotFill} from "react-icons/go";

export default function BlogCard({showLoadMore}) {
  const [visibleCards, setVisibleCards] = useState(4);
  const BlogCard = [
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
    {
      image: Digital_marketing,
      title: "Digital Marketing",
      description: "The Minimalist Movement: Tips for Decluttering YourLife and Mind",
      date: "March, 07, 2024",
      writer: "Shadab Khan",
      read: "Life Style",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
  };
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 pr-5">
        {BlogCard.slice(0, visibleCards).map((item, index) => (
          <div key={index}>
            <div className="w-full h-full flex flex-col gap-3">
              <Image width={0} height={0} src={item.image} alt={item.title} />
              <div className="flex  text-secondary font-public text-sm md:text-sm lg:text-base items-center gap-2 lg:gap-4">
                <h2>By-{item.writer}</h2>
                <h2 className="flex items-center gap-2">
                  <GoDotFill size={12} />
                  {item.date}
                </h2>
              </div>
              <p className="text-secondary font-public">{item.description}</p>
              <div className="w-24 rounded-lg bg-lightwhite h-auto ">
                <p className="  py-1 flex justify-center items-center text-secondary">
                  {item.read}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-full py-10">
        {showLoadMore && visibleCards < BlogCard.length && (
          <div className="w-full flex items-center justify-center ">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
