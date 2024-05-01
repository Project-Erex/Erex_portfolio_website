import React, {Fragment} from "react";
import {getAllBlogsCategories} from "@/constants/getAllBlogsCategories";

async function CategoryData({onSelectCategory}) {
  const categories = await getAllBlogsCategories();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="w-full">
      <select
        className="lg:text-[14px] w-full h-12 px-2 rounded-lg border border-bordercolor bg-background text-secondary font-public font-medium text-base"
        onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {categories.map((item, index) => (
          <option key={index} value={item._id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Category({onCategoryChange}) {
  const handleCategoryChange = (selectedCategory) => {
    onCategoryChange(selectedCategory);
  };

  return (
    <Fragment>
      <CategoryData onSelectCategory={handleCategoryChange} />
    </Fragment>
  );
}
