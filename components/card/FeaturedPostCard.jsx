import {Digital_marketing} from "@/app/assets";
import React from "react";
import {GoDotFill} from "react-icons/go";
import Image from "next/image";

export default function FeaturedPostCard() {
  const FeaturedBlogCard = [
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

  return (
    <div className="w-full grid grid-cols-1 py-4  gap-5">
      {FeaturedBlogCard.map((item, index) => (
        <div key={index}>
          <div className="w-full h-full flex gap-4 ">
            <Image
              width={0}
              height={0}
              src={item.image}
              alt={item.title}
              className="w-32 h-full"
            />
            <div className="w-full flex-col h-full justify-center flex  gap-3">
              <div className="flex  text-secondary font-public text-sm md:text-xs items-center gap-2">
                <h2>By-{item.writer}</h2>
                <h2 className="flex items-center gap-1">
                  <GoDotFill size={12} />
                  {item.date}
                </h2>
              </div>
              <p className="text-secondary text-sm font-public">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
