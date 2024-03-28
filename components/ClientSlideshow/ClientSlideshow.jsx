// This is my ClientSlideshow code
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";

const ClientSlideshow = ({slidesData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderState, setSliderState] = useState("");

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1,
      );
      setSliderState("next");
    } else if (direction === "prev") {
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1,
      );
      setSliderState("prev");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderState("");
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const reorderedSlidesData = [
    ...slidesData.slice(currentSlide),
    ...slidesData.slice(0, currentSlide),
  ];

  return (
    <div>
      <div className={`slider ${sliderState}`}>
        <div className="list">
          <div className={`item active`}>
            <Image src={slidesData[currentSlide].image} width={0} height={0} alt="" />
            <div className="content">
              <div className="title">{slidesData[currentSlide].name}</div>
              <div className="description">{slidesData[currentSlide].description}</div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          {reorderedSlidesData.map((slide, index) => (
            <div key={index} className={`item ${index === 0 ? "active" : ""}`}>
              <Image src={slide.image} width={0} height={0} alt="" />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev" onClick={() => moveSlider("prev")}>
            {"<"}
          </button>
          <button className="next" onClick={() => moveSlider("next")}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSlideshow;
