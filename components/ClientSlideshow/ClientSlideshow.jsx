// This is my ClientSlideshow code
"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const ClientSlideshow = ({slidesData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(1);
  const [sliderState, setSliderState] = useState("");

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1,
      );
      setCurrentThumbnail((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1,
      );
      setSliderState("next");
    } else if (direction === "prev") {
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1,
      );
      setCurrentThumbnail((prevIndex) =>
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
  }, [currentSlide, currentThumbnail]);

  const reorderedSlidesData = [
    ...slidesData.slice(currentSlide),
    ...slidesData.slice(0, currentSlide),
  ];
  const reorderedThumbnailData = [
    ...slidesData.slice(currentThumbnail),
    ...slidesData.slice(0, currentThumbnail),
  ];

  return (
    <div>
      <div className={`slider ${sliderState}`}>
        <div className="list">
          {reorderedSlidesData.map((slide, index) => (
            <>
              <div
                key={index}
                className={`item ${index === 0 ? "active" : ""}`}
                style={{transitionDelay: `${index * 0.1}s`}} // Add delay for each slide
              >
                <Image src={slide.image} width={0} height={0} alt="" />
              </div>
              {sliderState === "" && index === 0 && (
                <motion.div
                  className="z-[200] absolute left-14 top-1/2"
                  initial={{y: 100, opacity: 0}}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.65, 0, 0.35, 1],
                      delay: 0.1 * index,
                    },
                  }}
                  viewport={{once: true}}>
                  <div className="flex flex-col w-full h-auto">
                    <h2 className="text-background text-6xl">{slide.name}</h2>
                  </div>
                  <motion.div
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}>
                    <h3 className="text-primary text-4xl pt-4 pl-1">
                      {slide.designation}
                    </h3>
                  </motion.div>
                </motion.div>
              )}
            </>
          ))}
        </div>

        <div className="thumbnail">
          {reorderedThumbnailData.map((slide, index) => (
            <div
              key={index}
              className={`item
              ${index === 0 ? "active" : ""}`}>
              <Image src={slide.image} className="w-32 " width={0} height={0} alt="" />
              {/* <div className="bg-lightwhite aspect-square flex justify-center items-center flex-col gap-2"> */}

              {/* <div>
                <h2 className="text-secondary text-center">{slide.name}</h2>
                <h3 className="text-primary text-center text-sm">{slide.designation}</h3>
              </div> */}
            </div>

            // </div>
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
