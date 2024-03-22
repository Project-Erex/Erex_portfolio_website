"use client";

import {
  Application,
  DigitalMarketing,
  Website,
  mediumBusiness,
  smallBusiness,
} from "@/constants";
import {styles} from "@/app/styles";
import React, {useEffect, useState} from "react";
import {
  ComputerApp,
  Enterprise,
  Layer,
  MediumBusiness,
  MobileApp,
  SmalBusiness,
  Wave1,
  Wave2,
  Wave3,
} from "../assets";
import Image from "next/image";
import {FaCheck} from "react-icons/fa6";

import {LuIndianRupee} from "react-icons/lu";
import {get, getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import {useRouter} from "next/navigation";
import {FaRegEye} from "react-icons/fa";
import RevealPriceModal from "../../components/revealPrice/RevealPriceModal";
import Influencers from "../../components/Influencer/Influencers";

export default function Pricing() {
  const router = useRouter();

  const [isBanner, setIsBanner] = useState();
  const [isMobileBanner, setIsMobileBanner] = useState();
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
    initializeApp(firebaseConfig);
    const database = getDatabase();
    handlePrice();

    const dataRef = ref(database, "/");

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setIsBanner(data.digitalBanner);
          setIsMobileBanner(data?.mobileDigitalBanner);
        } else {
          console.error("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
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
    const controls = animate(count, 8990, {duration: 5});
    const control = animate(counts, 4990, {duration: 4});

    return controls.stop, control.stop;
  };

  return (
    <section className="flex justify-center w-full pt-20 bg-background">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} ${styles.xdivPadding} md:border-x-2 bg-background border-watermark   h-full  relative  bg-backgroundGray  `}>
          <div className="flex flex-col items-center justify-center w-full text-center ">
            {/* <text className="text-4xl md:text-5xl lg:text-6xl text-secondary font-federo">
              Digital & Social Media Marketing
            </text>
            <p className="text-xl md:text-3xl lg:text-4xl text-subheading">
              Grow your business with our modern marketing stratagies
            </p> */}
            {isBanner && (
              <Image
                src={isBanner}
                width={0}
                height={0}
                alt="Banner"
                className="hidden w-full h-auto md:block"
              />
            )}
            {isMobileBanner && (
              <Image
                src={isMobileBanner}
                width={0}
                alt="Banner"
                height={0}
                className="w-full h-auto md:hidden"
              />
            )}
          </div>
          <div className="flex flex-col w-full gap-5 pt-10 md:gap-10 md:pt-16 lg:pt-20">
            <text className="flex items-center justify-center w-full gap-2">
              <span className="text-xl font-medium capitalize md:text-3xl font-poppins text-secondary">
                EXPLORE
              </span>
              <p className="text-xl font-medium capitalize md:text-3xl font-poppins text-secondary">
                {" "}
                OUR PACKAGES
              </p>
            </text>

            <div className="flex items-center justify-center w-full h-full ">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
                <div className=" w-full shadow-lg  rounded-b-[15px] ">
                  <div className="relative w-full">
                    <Image
                      style={{width: "100%", height: 240}}
                      src={DigitalMarketing[0].wave}
                      alt="alt"
                      className="rounded-t-[15px] "
                    />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10 ">
                      <Image
                        src={DigitalMarketing[0].icon}
                        className="w-16 h-16 "
                        width={0}
                        height={0}
                        alt="icon"
                      />
                      <p className="text-2xl font-medium text-white">
                        {DigitalMarketing[0].title}
                      </p>
                      <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 pb-7">
                      <div className="flex items-center gap-2 pl-2">
                        {/* <div className="flex items-center">
                          <span className="text-lg font-normal text-subheading font-poppins">
                            <del>&#8377;10000</del>
                          </span>
                        </div> */}
                        <div className="px-[10px] py-1 text-center rounded-full flex items-center justify-center bg-opacity-20  bg-[#4169E1]">
                          <span className="text-[#4169E1]  font-medium">SAVE 59%</span>
                        </div>
                      </div>
                      <div>
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
                                <motion.div className="text-4xl text-secondary font-bold ">
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
                    </div>
                    {/* ******************************** */}
                    <div className="flex flex-col gap-3 px-5 rounded-b-[15px] pb-7 ">
                      <div className="flex flex-col items-start gap-3 ">
                        {smallBusiness.map((item, index) => (
                          <div key={index} className="flex w-full gap-3 ">
                            <div className="mt-1">{item.icon}</div>
                            <p className="text-secondary font-poppins">{item.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ******************************** */}
                  </div>
                </div>
                {/* 2ND Card */}
                <div className="  w-full rounded-b-[15px] shadow-lg">
                  <div className="relative w-full">
                    <Image
                      style={{width: "100%", height: 240}}
                      src={DigitalMarketing[1].wave}
                      alt="alt"
                      className="rounded-t-[15px]"
                    />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10">
                      <Image
                        src={DigitalMarketing[1].icon}
                        className="w-16 h-16"
                        width={0}
                        height={0}
                        alt="icon"
                      />
                      <p className="text-2xl font-medium text-white">
                        {DigitalMarketing[1].title}
                      </p>
                      <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 pb-7">
                      <div className="flex items-center gap-2 pl-2">
                        {/* <div className="flex items-center">
                          <span className="text-lg font-normal text-subheading font-poppins">
                            <del>&#8377;15000</del>
                          </span>
                        </div> */}
                        <div className="px-[10px] py-1 text-center rounded-full flex items-center justify-center bg-opacity-20  bg-[#A259FF]">
                          <span className="text-[#A259FF]  font-medium">SAVE 60%</span>
                        </div>
                      </div>
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
                              <motion.div className="text-4xl text-secondary font-bold ">
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
                            <p className="text-secondary font-poppins">{item.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* ******************************** */}
                  </div>
                </div>
                {/*  */}
                {/* 3RD Card */}
                <div className=" w-full rounded-b-[15px] shadow-lg">
                  <div className="relative w-full">
                    <Image
                      style={{width: "100%", height: 240}}
                      src={DigitalMarketing[2].wave}
                      alt="alt"
                      className="rounded-t-[15px]"
                    />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full gap-4 pt-10">
                      <Image
                        src={DigitalMarketing[2].icon}
                        className="w-16 h-16"
                        width={0}
                        height={0}
                        alt="icon"
                      />
                      <p className="text-2xl font-medium text-white">
                        {DigitalMarketing[2].title}
                      </p>
                      <div className="absolute w-24 h-24 bg-white rounded-full -left-2 -bottom-24 opacity-30"></div>
                      <div className="absolute w-24 h-24 bg-white rounded-full -right-5 md:-right-10 -bottom-0 opacity-30"></div>
                    </div>
                    <div className="flex px-5 pb-7">
                      <text className="flex items-center text-secondary">
                        <p className="text-[#F24E1E] text-4xl font-medium">
                          {DigitalMarketing[2].price}
                        </p>
                      </text>
                    </div>
                    {/* ******************************** */}
                    <div className="flex flex-col gap-3 rounded-b-[15px] px-5  pb-7">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Social Media Handle Facebook & Instagram.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Create 8 banners and post on <br />
                          social media each month.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Short video & reels post (max 2 per month)
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Logo and Store banner design support.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Static Website for the business.
                          <br /> (Domain & server price excluded).
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <FaCheck color="#F24E1E" />
                        </div>
                        <p className="text-secondary font-poppins">
                          Basic market analysis report monthly.
                        </p>
                      </div>
                      <div className="flex items-center justify-end w-full">
                        <div>
                          <div className={`container  ${isExpanded ? "expanded" : ""}`}>
                            <div className="flex flex-col items-start gap-3 ">
                              <div className="flex items-start gap-3 ">
                                <div className="mt-1">
                                  <FaCheck color="#F24E1E" />
                                </div>
                                <p className="text-secondary font-poppins">
                                  Marketing strategy analysis and report.(Analysis your
                                  business and recommend strategies to grow)
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <FaCheck color="#F24E1E" />
                                </div>
                                <p className="text-secondary font-poppins">
                                  Unique marketing campaigns.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <FaCheck color="#F24E1E" />
                                </div>
                                <p className="text-secondary font-poppins">
                                  Logo & Branding support.
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <FaCheck color="#F24E1E" />
                                </div>
                                <p className="text-secondary font-poppins">
                                  Social Media Marketing Along with Google & Facebook ads.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end w-full pt-4">
                            <button className="text-[#F24E1E]" onClick={toggleExpand}>
                              {isExpanded ? "Show less" : "Show all"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ******************************** */}
                  </div>
                </div>
              </div>
            </div>
            {/* !********************************************************** */}

            <div className="w-full h-full py-10">
              <div className="flex items-center justify-center pb-5 text-center">
                <text className="text-4xl md:text-5xl lg:text-6xl text-secondary font-federo">
                  Website & App for your Business
                </text>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="text-subheading text-lg text-center md:text-2xl xl:text-3xl ">
                  Empower Your Business with a Seamless Website and App Experience
                </p>
              </div>

              <div className="flex w-full gap-10 flex-col  xl:flex-row  pt-16 justify-center ">
                <div className=" w-full   shadow-3xl rounded-[15px] bg-background bg-opacity-30">
                  <div className="w-full flex justify-between flex-col  md:flex-row">
                    <div className=" w-full items-center   pb-3 md:pb-0   gap-4 flex flex-col justify-center">
                      <div className="flex justify-start pt-4 md:pt-8 pl-8   w-full">
                        <h2 className="font-public font-semibold text-[#A259FF] text-4xl">
                          Website Development
                        </h2>
                      </div>
                      <div className="flex  flex-col  md:flex-row md:gap-0">
                        <div className="flex flex-col gap-4 md:pt-6 pl-8  pr-4 md:pr-0 w-full  md:w-2/4">
                          <p className="font-public font-normal tracking-tight text-start break-word text-secondary text-base md:text-lg xl:text-base leading-6">
                            Expert website development: sleek design, seamless navigation,
                            optimized performance, and tailored solutions for your online
                            presence. Get started now!
                          </p>
                          <button
                            onClick={() => {
                              router.push("/pricing/business");
                            }}
                            className="relative flex h-[44px] w-32 rounded-full items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-[#A259FF]  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10 font-federo text-[16px]">
                              Get a quote
                            </span>
                          </button>
                        </div>
                        <div className="md:w-2/4 w-full pt-4 pb-2 px-8 flex justify-end md:pr-2 md:pb-2">
                          <Image
                            src={ComputerApp}
                            width={0}
                            alt="Logo"
                            height={0}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full   shadow-3xl rounded-[15px] bg-background bg-opacity-30">
                  <div className="w-full flex justify-between flex-col  md:flex-row">
                    <div className=" w-full items-center   pb-3 md:pb-0   gap-4 flex flex-col justify-center">
                      <div className="flex justify-start pt-4 md:pt-8 pl-8     w-full">
                        <h2 className="font-public font-semibold text-[#4169E1] text-4xl">
                          Application Development
                        </h2>
                      </div>
                      <div className="flex  flex-col  md:flex-row md:gap-0">
                        <div className="flex flex-col gap-4 md:pt-6 pl-8 pr-4 md:pr-0  w-full  md:w-2/4">
                          <p className="font-public font-normal tracking-tight text-start break-word text-secondary text-base md:text-lg xl:text-base leading-6">
                            Transform ideas into feature-rich mobile apps with sleek
                            design, seamless performance, scalable architecture, and
                            user-centric functionalities for diverse audiences.
                          </p>
                          <button
                            onClick={() => {
                              router.push("/pricing/business");
                            }}
                            className="relative flex h-[44px] w-32 rounded-full items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-[#4169E1]  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10 font-federo text-[16px]">
                              Get a quote
                            </span>
                          </button>
                        </div>
                        <div className="md:w-2/4 w-full pt-4 pb-2 px-8 flex justify-end md:pr-2 md:pb-2">
                          <Image
                            src={MobileApp}
                            width={0}
                            alt="Logo"
                            height={0}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* *********************************************** */}
            <div className="w-full">
              {/* <button
                onClick={() => {
                  router.push("/pricing/business");
                }}
                className="relative flex h-[50px] w-48 items-center justify-center overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                <span className="z-50 text-lg text-white font-federo">
                  Contact for business
                </span>
              </button> */}
              <Influencers />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
