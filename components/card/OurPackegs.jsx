"use client";
import {useEffect, useState} from "react";

import {DigitalMarketing, mediumBusiness, smallBusiness} from "@/constants";

import {LuIndianRupee} from "react-icons/lu";

import {motion, useMotionValue, useTransform, animate} from "framer-motion";
import {FaRegEye} from "react-icons/fa";
import RevealPriceModal from "../../components/revealPrice/RevealPriceModal";
import Image from "next/image";
import {Home, Mall, Messgae5, Paperplane, PoliceStation} from "@/app/assets";
export default function OurPackegs() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const count = useMotionValue(0);
  const counts = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const price = useTransform(counts, (latests) => Math.round(latests));
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const animated = {
    layout: "position",
    animate: {opacity: 1},
    transition: {delay: 0.3},
    initial: {opacity: 0},
  };

  useEffect(() => {
    handlePrice();
  }, []);

  const handlePrice = async () => {
    const price = await localStorage.getItem("isPrice");
    if (price) {
      setIsPrice(true);
      priceAnimation();
    } else {
      setIsPrice(false);
    }
  };

  const handlePriceClick = () => {
    setShowModal(true); // Show login form when "Price" button is clicked
  };

  const priceAnimation = () => {
    const controls = animate(count, 14990, {duration: 5});
    const control = animate(counts, 7990, {duration: 4});

    return controls.stop, control.stop;
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
        <div className="relative flex rounded-[15px] flex-col w-full py-10 shadow-lg">
          <div className="w-full absolute top-0 py-4 rounded-t-[15px] bg-[#4169E1] "></div>
          <div className="relative w-full">
            <div className="flex items-center w-full gap-4 px-5 pt-6">
              <div className="px-2 py-2 rounded-lg bg-opacity-20  bg-[#4169E1]">
                <Image
                  src={Home}
                  className="w-full h-full "
                  width={0}
                  height={0}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-medium text-[#4169E1]">
                {DigitalMarketing[0].title}
              </p>
            </div>
            <div className="px-5 py-6">
              <text className="flex items-center gap-1 text-secondary">
                <LuIndianRupee size={29} />
                <div className="flex gap-1">
                  {showModal && (
                    <RevealPriceModal
                      setShowModal={setShowModal}
                      showModal={showModal}
                      setIsPrice={setIsPrice}
                      priceAnimation={priceAnimation}
                    />
                  )}

                  {!isPrice && (
                    <>
                      <button
                        onClick={handlePriceClick}
                        className=" text-background flex items-center gap-2 text-center bg-primary font-bold py-[6px] px-4 rounded-lg">
                        Show price
                        <span className="pt-1">
                          <FaRegEye size={20} />
                        </span>
                      </button>
                    </>
                  )}
                  {isPrice && (
                    <>
                      <motion.div className="text-4xl font-bold text-secondary ">
                        {price}
                      </motion.div>
                      <p className="text-[#4169E1] pt-[6px] ">
                        <span className="text-2xl">/</span>Month
                      </p>
                    </>
                  )}
                </div>
              </text>
            </div>

            {/* ******************************** */}
            <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
              <div className="flex flex-col items-start gap-3 ">
                {smallBusiness.map((item, index) => (
                  <div key={index} className="flex w-full gap-3 ">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-sm text-secondary font-poppins">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ******************************** */}
          </div>
          <div className="w-full py-4 absolute bottom-0 rounded-b-[15px] bg-[#4169E1] "></div>
        </div>
        {/* ************************************************ */}
        <div className="relative flex rounded-[15px] flex-col justify-between w-full py-10 shadow-lg">
          <div className="w-full py-4 absolute top-0 rounded-t-[15px] bg-[#A259FF] "></div>
          <div className="relative w-full ">
            <div className="flex items-center w-full gap-4 px-5 pt-6">
              <div className="px-2 py-2 rounded-lg bg-opacity-20  bg-[#A259FF]">
                <Image
                  src={PoliceStation}
                  className="w-full h-full "
                  width={0}
                  height={0}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-medium text-[#A259FF]">
                {DigitalMarketing[1].title}
              </p>
            </div>
            <div className="px-5 py-6">
              <text className="flex items-center gap-1 text-secondary">
                <LuIndianRupee size={29} />
                <div className="flex gap-1">
                  {!isPrice && (
                    <>
                      <button
                        onClick={handlePriceClick}
                        className=" text-background flex items-center gap-2 text-center bg-[#A259FF] font-bold py-[6px] px-4 rounded-lg">
                        Show price
                        <span className="pt-1">
                          <FaRegEye size={20} />
                        </span>
                      </button>
                    </>
                  )}
                  {isPrice && (
                    <>
                      <motion.div className="text-4xl font-bold text-secondary ">
                        {rounded}
                      </motion.div>
                      <p className="text-[#A259FF] pt-[6px] ">
                        <span className="text-2xl">/</span>Month
                      </p>
                    </>
                  )}
                </div>
              </text>
            </div>
            {/* ******************************** */}
            <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
              <div className="flex flex-col items-start gap-3 ">
                {mediumBusiness.map((item, index) => (
                  <div key={index} className="flex w-full gap-3 ">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-sm text-secondary font-poppins">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ******************************** */}
          </div>
          <div className="w-full py-4 absolute bottom-0 rounded-b-[15px] bg-[#A259FF] "></div>
        </div>
        {/* ************************************** */}

        <div className="relative flex rounded-[15px] flex-col justify-between w-full py-10 shadow-lg h-[620px] xl:h-full">
          <div className="w-full py-4 absolute top-0 rounded-t-[15px] bg-[#F24E1E] "></div>
          <div className="flex flex-col items-center w-full h-full ">
            <div className="flex items-center w-full gap-4 px-5 pt-6">
              <div className="px-2 py-2 rounded-lg bg-opacity-20  bg-[#F24E1E]">
                <Image
                  src={Mall}
                  className="w-full h-full "
                  width={0}
                  height={0}
                  alt="icon"
                />
              </div>
              <p className="text-2xl font-medium text-[#F24E1E]">
                {DigitalMarketing[2].title}
              </p>
            </div>

            <div className="absolute px-6 py-6 -translate-y-1/2 top-1/2 ">
              <Image
                src={Messgae5}
                className="w-full h-full "
                width={0}
                height={0}
                alt="icon"
              />
              <p className="pt-2 text-2xl font-bold text-secondary font-public">
                Contact Us
              </p>
            </div>
            {/* ******************************** */}
          </div>
          <div className="w-full py-4 absolute bottom-0 rounded-b-[15px] bg-[#F24E1E] "></div>
        </div>
      </div>
    </div>
  );
}
