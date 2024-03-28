"use client";
import React, {useState} from "react";

const Review = () => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const ratings = [
    {emoji: "", name: "Give us a rating"},
    {emoji: "😔", name: "Poor"},
    {emoji: "😇", name: "Good"},
    {emoji: "😍", name: "Very Good"},
    {emoji: "🥰", name: "Excellent"},
    {emoji: "🤩", name: "Outstanding"},
  ];

  const handleRatingHover = (index) => {
    setHoveredRating(index + 1);
  };

  const handleRatingLeave = () => {
    setHoveredRating(null);
  };

  const handleRatingClick = (index) => {
    setSelectedRating(index + 1);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex w-full justify-center flex-col gap-1 items-center">
        <p className=" text-3xl">
          {selectedRating !== null ? ratings[selectedRating]?.emoji : ratings[0]?.emoji}
        </p>
        <p className="text-secondary text-xl">
          {selectedRating !== null ? ratings[selectedRating]?.name : ratings[0]?.name}
        </p>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="cursor-pointer text-secondary text-5xl"
            onMouseEnter={() => handleRatingHover(index)}
            onMouseLeave={handleRatingLeave}
            onClick={() => handleRatingClick(index)}>
            {index < (hoveredRating || selectedRating) ? "★" : "☆"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Review;
