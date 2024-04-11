"use client";
import React, {useEffect, useState} from "react";
import {get, getDatabase, ref} from "firebase/database";
import Image from "next/image";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../../app/firebaseConfig";
import {HeroBanner, Rocket} from "../../app/assets";
import {motion} from "framer-motion";
import {CardBody, CardContainer, CardItem} from "../ui/3d-card";

// new //
export default function HeroImage() {
  const defaultImage = Rocket;
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeApp(firebaseConfig);
    const database = getDatabase();
    const dataRef = ref(database, "/");

    // Check if imageData already exists before fetching
    if (imageData) {
      setLoading(false);
      return;
    }

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          if (data.rocketImage) {
            setImageData(data.rocketImage);
          } else {
            console.error("Empty data for rocketImage");
            setError("No data available");
          }
        } else {
          console.error("No data available");
          setError("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
        setError("Error getting data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [imageData]);

  const handleImageError = () => {
    setError("Image loading error");
  };

  return (
    <>
      {error ? ( // If error, show default image with error message
        <motion.div
        // initial={{y: -20}}
        // animate={{y: 20}}
        // transition={{
        //   type: "smooth",
        //   repeatType: "mirror",
        //   duration: 2,
        //   repeat: Infinity,
        // }}
        >
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card   w-full   h-auto rounded-xl p-6   ">
              <CardItem translateZ="100" className="w-full ">
                <Image
                  className="w-[371px]  md:w-[450px] "
                  height={0}
                  width={0}
                  src={Rocket}
                  alt="Erex"
                  draggable="false"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      ) : (
        // If no error and imageData is available, show Firebase image
        <div>
          {imageData && ( // Render Firebase image only if imageData is available
            <Image
              className="w-[371px] md:w-[500px]"
              height={0}
              width={0}
              src={imageData}
              alt="Erex"
              draggable="false"
              onError={handleImageError}
            />
          )}
        </div>
      )}
    </>
  );
}
