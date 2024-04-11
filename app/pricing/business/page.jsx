import React from "react";
import {styles} from "../../styles";
import BusinessForm from "../../../components/form/BusinessForm";
export const metadata = {
  title: "Erex Studio Business | Transforming Ideas into Digital Triumphs,",
  openGraph: {
    title: "Erex Studio Business | Transforming Ideas into Digital Triumphs,",
  },
};

export default function BusinessPage() {
  return (
    <section className="relative flex justify-center w-full h-full pt-20 bg-background">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding} ${styles.xMargin} px-4 lg:px-6  xl:px-20 md:border-x-2 bg-background border-bordercolor h-full relative bg-backgroundGray `}>
          <div className="flex flex-col items-center justify-center w-full gap-5 text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-federo">
              Let’s get to know your business
            </h1>
            <p className="text-xl font-normal md:text-2xl lg:text-3xl text-gray">
              Please provide the following information so we can help you boost up <br />
              your business.
            </p>
          </div>
          <BusinessForm />
        </div>
      </div>
    </section>
  );
}
