"use client";

import {useState} from "react";

import {RxCrossCircled} from "react-icons/rx";
export default function TagSelect({initialTags, onTagsChange}) {
  const [tags, setTags] = useState(initialTags);

  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        const newTags = [...tags, e.target.value];
        setTags(newTags);
        onTagsChange(newTags); // Call the callback function
        e.target.value = "";
      }
    }
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
    onTagsChange(newTags); // Call the callback function
  };
  return (
    <div className="flex flex-wrap w-full gap-2 p-2 border border-gray-300 rounded-md bg-background ">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-full gap-2 p-2 border border-gray-300 rounded-md text-secondary ">
          {tag}{" "}
          <span
            className="flex items-center justify-center cursor-pointer "
            onClick={() => removeTag(tag)}>
            <RxCrossCircled size={20} />
          </span>
        </div>
      ))}
      <input
        className="flex-1 p-1 border-none outline-none text-secondary bg-background "
        onKeyDown={addTag}
      />
    </div>
  );
}
