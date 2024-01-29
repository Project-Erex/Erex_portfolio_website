"use client";
// BenarImage.js
import React, {useState, useEffect} from "react";
import {getDatabase, ref, get} from "firebase/database";
import {styles} from "@/app/styles";
import {app} from "@/app/firebaseConfig";
import Image from "next/image";

const BenarImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [ImageLoad, setImageLoad] = useState(false);

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
          } else {
            console.warn("Image is not available");
          }
          // Set the URL
          setUrl(data.url);
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

  if (!imageUrl && !loading) {
    return null;
  }
  return (
    //
    <div>
      {/* {loading && <p className="text-green-400">Loading...</p>} */}
      {imageUrl && !loading && (
        <section className="flex items-center justify-center w-full h-auto border-b-2 2xl:border-y-0 bg-background border-watermark">
          <div className="w-full max-w-screen-2xl">
            <div className={`${styles.xMargin} py-4 px-4 md:border-x-2 border-watermark`}>
              <div className="relative w-full">
                {imageUrl && (
                  <Image
                    className="w-full h-auto"
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

                {ImageLoad && (
                  <div className="absolute flex items-center justify-center w-full bottom-[0px]  md:bottom-3 lg:bottom-4 xl:bottom-12">
                    <a
                      className="flex items-center max-w-screen-2xl justify-center text-[10px] md:text-sm px-2 py-1 relative  hover:before:h-56 hover:before:w-56  bg-primary sm:px-5 sm:py-2  md:px-8 md:py-2 lg:px-10 lg:py-3 lg:text-[18px] xl:text-[20px] xl:py-[15px] xl:px-12   overflow-hidden bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:text-white  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover"
                      href={url}
                      target="_blank">
                      <span className="relative z-10 font-federo ">Contact Us</span>
                    </a>
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
