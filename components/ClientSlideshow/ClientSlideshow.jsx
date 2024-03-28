"use client";

import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";

const ClientSlideshow = ({slidesData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    const sliderItems = sliderRef.current.querySelectorAll(".item");
    const thumbnailItems = document.querySelectorAll(".thumbnail .item");

    if (direction === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailItems[0]?.parentNode?.appendChild(thumbnailItems[0]);
      sliderRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailItems[0].parentNode.prepend(thumbnailItems[thumbnailItems.length - 1]);
      sliderRef.current.classList.add("prev");
    }

    // Remove the { once: true } option to enable repeated navigation
    sliderRef.current.addEventListener("animationend", () => {
      if (direction === "next") {
        sliderRef.current.classList.remove("next");
      } else {
        sliderRef.current.classList.remove("prev");
      }
    });
  };

  useEffect(() => {
    const handleNextClick = () => moveSlider("next");
    const handlePrevClick = () => moveSlider("prev");

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    nextBtn.addEventListener("click", handleNextClick);
    prevBtn.addEventListener("click", handlePrevClick);

    return () => {
      nextBtn.removeEventListener("click", handleNextClick);
      prevBtn.removeEventListener("click", handlePrevClick);
    };
  }, [currentSlide, slidesData]);

  return (
    <div>
      <div className="slider" ref={sliderRef}>
        <div className="list">
          {slidesData.map((slide, index) => (
            <div key={index} className={`item ${currentSlide === index ? "active" : ""}`}>
              <Image src={slide.image} width={0} height={0} alt="" />
              <div className="content">
                <div className="title">{slide.name}</div>
                <div className="type">{slide.type}</div>
                <div className="description">{slide.description}</div>
                <div className="button">
                  <button>SEE MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {slidesData.map((slide, index) => (
            <div key={index} className={`item ${currentSlide === index ? "active" : ""}`}>
              <Image src={slide.image} width={0} height={0} alt="" />
            </div>
          ))}
        </div>

        <div className="nextPrevArrows">
          <button className="prev"> {"<"} </button>
          <button className="next"> {">"} </button>
        </div>
      </div>
    </div>
  );
};

export default ClientSlideshow;
