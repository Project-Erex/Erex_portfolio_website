import React, {useEffect, useState} from "react";

import {get, getDatabase, ref} from "firebase/database";
import Image from "next/image";
import {erexLogo} from "../assets";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";

// import {motion, useAnimationControls} from "framer-motion";
// import {fadeInTopVariant} from "../constants/framer_motion";

export default function ErexLogo() {
  const [isLogo, setIsLogo] = useState(erexLogo);
  // const [updatedLogo, setUpdatedLogo] = useState(false);
  // const controls = useAnimationControls();

  useEffect(() => {
    initializeApp(firebaseConfig);
    const database = getDatabase();

    const dataRef = ref(database, "/");

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          if (data.erexLogo) {
            setIsLogo(data.erexLogo || erexLogo);
            setUpdatedLogo(true);
          }
        } else {
          console.error("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
        setIsLogo(erexLogo);
      });
  }, []);

  // useEffect(() => {
  //   if (updatedLogo) {
  //     console.log("update", updatedLogo);
  //     controls.start({
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 0.5,
  //         delay: 0.2,
  //         type: "spring",
  //         stiffness: 160,
  //       },
  //     });
  //   } else {
  //     controls.start({
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 1,
  //         delay: 0.2,
  //         type: "spring",
  //         stiffness: 60,
  //       },
  //     });
  //   }
  // }, [isLogo]);

  return (
    <>
      {isLogo && (
        <div>
          <Image
            src={isLogo}
            width={0}
            height={0}
            alt="logo"
            onLoad={() => {
              setIsLogo(isLogo);
            }}
            className="sm:w-[110px]  sm:h-auto w-[80px]  h-[54px] object-contain"
          />
        </div>
      )}
    </>
  );
}
