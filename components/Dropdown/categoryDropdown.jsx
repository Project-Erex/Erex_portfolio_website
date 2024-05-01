import React from "react";

export default function CategoryDropdown() {
  return (
    <div>
      <select
        className="lg:text-[14px] w-full h-10 px-2 rounded-lg bg-background text-secondary font-public font-medium text-base"
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
