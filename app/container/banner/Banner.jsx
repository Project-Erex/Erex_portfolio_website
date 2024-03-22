"use client";
// BenarImage.js
import React, {useState, useEffect} from "react";
import {getDatabase, ref, get} from "firebase/database";
import {styles} from "@/app/styles";
import {app} from "@/app/firebaseConfig";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import {useRouter} from "next/navigation";
// import {m} from "framer-motion";

const BenarImage = () => {
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState(null);
  const [mobileImage, setMobileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [ImageLoad, setImageLoad] = useState(false);
  const [position, setPosition] = useState();
  // const [Background, setBackground] = useState();
  const [direction, setDirection] = useState();
  const [bottom, setBottom] = useState();
  const [ButtonText, setButtonText] = useState();

  useEffect(() => {
    const database = getDatabase();

    // Fetch data
    const dataRef = ref(database, "/");
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.isAvailable) {
            setImageUrl(data.image);
            setPosition(data.position);
            setDirection(data.direction);
            setBottom(data.bottom);
            setMobileImage(data.mobileScreenImage);
            // setBackground(data.background);
          }
          if (data.isAvlButton === "true") {
            setUrl(data.url);
            setButtonText(data.buttontext);
          } else {
            console.warn("Image is not available");
          }
          // Set the URL
          console.log("data", data.isAvlButton);
        } else {
          console.error("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getPositionStyle = () => {
    switch (direction) {
      case "left":
        return {left: 0};
      case "center":
        return {left: "50%", transform: "translateX(-50%)"};
      case "right":
        return {right: 0};
    }
  };

  if (!imageUrl && !loading) {
    return null;
  }

  return (
    //
    <div>
      {/* {loading && <p className="text-green-400">Loading...</p>} */}
      {imageUrl && !loading && (
        <section
          // style={{background: `${Background}`}}
          className={`  flex items-center justify-center w-full h-auto border-b-2 2xl:border-b-0 border-watermark `}>
          <div className="w-full max-w-screen-2xl">
            <div
              className={`xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 md:border-x-2  2xl:border-b-4 border-watermark`}>
              <div className="relative w-full ">
                {imageUrl && (
                  <Image
                    className="hidden w-full h-auto md:block"
                    src={imageUrl}
                    property={true}
                    width={0}
                    height={0}
                    onLoad={() => {
                      setImageLoad(true);
                    }}
                    alt="Firebase Image"
                  />
                )}
                {mobileImage && (
                  <Image
                    width={0}
                    height={0}
                    className="w-full h-auto md:hidden"
                    alt="alt"
                    onLoad={() => {
                      setImageLoad(true);
                    }}
                    src={mobileImage}
                  />
                )}

                {url && ImageLoad && (
                  <div className={` flex  items-center justify-center w-full `}>
                    {/*for laptop screen*/}
                    <Link
                      style={{
                        position: `${position}`,
                        ...getPositionStyle(),
                        bottom: `${bottom}`,
                      }}
                      href="/pricing"
                      to="/pricing"
                      className=" lg:flex hidden   items-center  max-w-screen-2xl justify-center text-[10px] md:text-sm px-2 py-1  hover:before:h-64 hover:before:w-64  bg-primary sm:px-5 sm:py-2  md:px-8 md:py-2 lg:px-10 lg:py-3 lg:text-[18px] xl:text-[20px] xl:py-[15px] xl:px-12   overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-white  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover">
                      <span className="relative z-10 font-federo ">{ButtonText}</span>
                    </Link>

                    {/*for mobile screen */}

                    <Link
                      href="/pricing"
                      to="/pricing"
                      className=" lg:hidden flex bottom-10 md:bottom-2 absolute  items-center  max-w-screen-2xl justify-center text-[16px] md:text-sm px-10 py-3   hover:before:h-64 hover:before:w-64  bg-primary sm:px-12    sm:py-3 sm:text-[22px]  md:px-8 md:py-2 lg:px-10 lg:py-3 lg:text-[18px] xl:text-[20px] xl:py-[15px] xl:px-12   overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-white  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover">
                      <span className="relative z-10 font-federo ">{ButtonText}</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BenarImage;
