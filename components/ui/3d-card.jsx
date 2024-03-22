"use client";

import {cn} from "../../utils/cn";
import React, {createContext, useState, useContext, useRef, useEffect} from "react";

const MouseEnterContext = createContext(
  [false, () => {}], // Default values for context
);

export const CardContainer = ({children, className, containerClassName}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const {left, top, width, height} = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return React.createElement(
    MouseEnterContext.Provider,
    {value: [isMouseEntered, setIsMouseEntered]},
    React.createElement(
      "div",
      {
        className: cn("py-20 flex items-center justify-center", containerClassName),
        style: {
          perspective: "1000px",
        },
      },
      React.createElement(
        "div",
        {
          ref: containerRef,
          onMouseEnter: handleMouseEnter,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
          className: cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className,
          ),
          style: {
            transformStyle: "preserve-3d",
          },
        },
        children,
      ),
    ),
  );
};

export const CardBody = ({children, className}) => {
  return React.createElement(
    "div",
    {
      className: cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className,
      ),
    },
    children,
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return React.createElement(
    Tag,
    {
      ref: ref,
      className: cn("w-fit transition duration-200 ease-linear", className),
      ...rest,
    },
    children,
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
