"use client";
import {useState, useEffect} from "react";
import {get, getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "@/app/firebaseConfig";
import Image from "next/image";

export default function DigitalMarketingbanner() {
  const [isBanner, setIsBanner] = useState();
  const [isMobileBanner, setIsMobileBanner] = useState();

  useEffect(() => {
    initializeApp(firebaseConfig);
    const database = getDatabase();

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
  return (
    <div className="flex flex-col items-center justify-center w-full text-center ">
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
  );
}
