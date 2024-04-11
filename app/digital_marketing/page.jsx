import React from "react";
import {styles} from "../styles";
import {FaArrowLeftLong} from "react-icons/fa6";
import Image from "next/image";
import {
  Digital_marketing,
  Icon10,
  Icon11,
  Icon12,
  Pexels_steve,
  Vector5,
} from "../assets";

const DigitalMarketingData = [
  {
    image: Pexels_steve,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    icon: Icon10,
    icon2: Icon11,
    icon3: Icon12,
  },
  {
    image: Pexels_steve,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    icon: Icon10,
    icon2: Icon11,
    icon3: Icon12,
  },
  {
    image: Pexels_steve,
    title: "Digital Marketing",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
    date: "March, 07, 2024",
    icon: Icon10,
    icon2: Icon11,
    icon3: Icon12,
  },
];

export default function DigitalMarketing() {
  return (
    <section className="flex justify-center w-full border-y-2 2xl:border-y-0 bg-background border-watermark ">
      <div className="w-full max-w-screen-2xl ">
        <div>
          <div
            style={{
              background: "rgb(64, 123, 255)",
              background:
                "linear-gradient(180deg, rgba(205,221,255,1) 30%, rgba(255,255,255,1) 100%)",
            }}
            className={`lg:pt-16 md:pt-10 pt-6  ${styles.DMPxPadding} 
            
           mt-[90px] h-full  relative  bg-backgroundGray `}>
            <div className="bg-primary/30 w-10 h-10   flex justify-center items-center rounded-full">
              <FaArrowLeftLong />
            </div>
            <div className="w-full flex flex-col mt-5 gap-5">
              <h2 className="font-public font-normal text-primary text-base">
                Digital Marketing
              </h2>
              <p className="font-federo leading-snug font-medium text-secondary text-3xl md:text-4xl xl:text-5xl">
                The evolution of live-stream content and short-form video: a look at the
                TikTok revolution
              </p>
            </div>
            <div className="w-full flex py-4 pb-6 justify-between items-center">
              <h3
                className="
            font-public font-normal text-secondary text-base">
                March, 2024
              </h3>

              <div className="flex gap-3">
                <Image
                  alt="Icon"
                  src={Icon10}
                  width={0}
                  height={0}
                  className="w-8 h-auto"
                />
                <Image
                  alt="Icon"
                  src={Icon11}
                  width={0}
                  height={0}
                  className="w-8 h-auto"
                />
                <Image
                  alt="Icon"
                  src={Icon12}
                  width={0}
                  height={0}
                  className="w-8 h-auto"
                />
              </div>
            </div>
            <Image
              alt="DigitalMarketing"
              src={Digital_marketing}
              width={0}
              height={0}
              className="w-full h-auto"
            />
          </div>
          <div
            className={`  ${styles.DMPxPadding}  w-full h-full  relative  bg-background`}>
            <p className="text-secondary text-base py-6 font-public font-normal">
              {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
            </p>
            <h4 className="text-secondary text-2xl pb-6  font-public font-normal">
              Short-form vs. long-form video content: Definitions
            </h4>
            <p className="text-secondary text-base pb-6 font-public font-normal">
              {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
            </p>
            <Image
              alt="Pexels_steve"
              src={Pexels_steve}
              width={0}
              height={0}
              className="w-full h-auto"
            />
            <p className="text-secondary text-base py-6 font-public font-normal">
              {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
            </p>
            <h4 className="text-secondary text-2xl   font-public font-normal">
              Short-form vs. long-form video content: Definitions
            </h4>
            <p className="text-secondary text-base py-6 font-public font-normal">
              {`In the battle of short form vs. long form video content, only one can win…right
                Well, not exactly. Creating videos for your business is a tried-and-true way to
                boost engagement with your audience. In fact, it can increase conversion rates,
                email click-through rates (CTR), brand association, and audience engagement.
                But the question isn’t if you should use either short-form or long-form video for
                your brand. It’s how you should incorporate both into your video marketing
                strategy.`}
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              alt="Vector5"
              src={Vector5}
              width={0}
              height={0}
              className="w-full h-auto"
            />
            <h2 className="text-center text-secondary top-1/2 text-lg lg:text-4xl font-medium font-federo -translate-x-1/2 left-1/2 z-[200] absolute">
              What to read next
            </h2>
          </div>
          <div
            className={`${styles.xPadding} ${styles.DMPyPadding} w-full flex flex-col gap-8`}>
            {DigitalMarketingData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full">
                  <div className="lg:w-1/3 w-full">
                    <Image
                      alt={item?.title}
                      src={item?.image}
                      width={0}
                      height={0}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full flex flex-col justify-center px-5 gap-4 ">
                    <h2 className="text-primary text-base font-public font-normal">
                      {item?.title}
                    </h2>
                    <p
                      className="font-federo font-medium text-3xl
                     text-secondary">
                      {item?.description}
                    </p>
                    <div className="flex gap-4 items-center">
                      <span
                        className="text-lg font-public font-normal
                     text-secondary">
                        {item.date}
                      </span>
                      <div className="flex gap-3">
                        <Image
                          alt={item?.title}
                          src={item?.icon}
                          width={0}
                          height={0}
                          className="w-8 h-auto"
                        />
                        <Image
                          alt={item?.title}
                          src={item?.icon2}
                          width={0}
                          height={0}
                          className="w-8 h-auto"
                        />
                        <Image
                          alt={item?.title}
                          src={item?.icon3}
                          width={0}
                          height={0}
                          className="w-8 h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
