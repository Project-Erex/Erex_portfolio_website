"use client";

import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "./../app/assets/Lottie/Loading.json";

const style = {
  height: 300,
};

const AnimationLoading = () => (
  <Lottie animationData={LoadingAnimation} loop={true} style={style} />
);

export default AnimationLoading;
