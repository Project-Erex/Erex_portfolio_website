import React from "react";

export default function Categories() {
  const BlogCategories = [
    {
      Categorie: "Life Style",
      count: 10,
    },
    {
      Categorie: "Technology",
      count: 10,
    },
    {
      Categorie: "Life Style",
      count: 10,
    },
    {
      Categorie: "Technology",
      count: 10,
    },
    {
      Categorie: "Life Style",
      count: 10,
    },
    {
      Categorie: "Technology",
      count: 10,
    },
  ];
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-5 lg:grid-cols-2 py-5">
        {BlogCategories.map((item, index) => (
          <div key={index}>
            <div className="w-full flex  px-2 py-1 rounded-lg font-public font-medium text-secondary shadow bg-lightwhite  justify-center items-center gap-3">
              <p>{item.Categorie}</p>
              <span className="bg-white px-2 rounded-lg py-1 ">{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
