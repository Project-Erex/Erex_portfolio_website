"use client";

import {styles} from "@/app/styles";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ThreeDots} from "react-loader-spinner";
import {Schema} from "./FormHelper";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const showToastMessage = () => {
    toast.success("Form Submitted Successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showToastErrorMessage = () => {
    toast.error("Something Went Wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // const onSubmit = (data) => console.log("form submit", data);

  const BASE_URL = "https://backend.foodcomet.app/web";
  const SEND_CONTACT = "/contact";

  const onSubmit = async (data) => {
    // e.preventDefault();
    console.log(data);

    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}${SEND_CONTACT}`, {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: data.name, email: data.email, message: data.message}),
      });
      await res.json();
      if (res.status === 200) {
        setIsLoading(false);
        await showToastMessage();
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      await showToastErrorMessage();
    }
  };

  return (
    <section className="flex justify-center w-full bg-background " id="contact">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} md:border-x-2 bg-background border-watermark  h-full  relative  bg-backgroundGray  `}>
          <div className="py-10 mx-4 lg:mx-6 xl:mx-10 bg-lightwhite">
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <span className="font-federo z-50  text-secondary text-[28px] md:text-[44px] xl:text-[70px] text-center font-normal">
                Send A Message
              </span>
              <p className="font-normal font-poppins text-gray leading-[18px] text-center text-[10px]  md:text-[18px] px-4">
                Your email address will not be published. All fields are required
              </p>
            </div>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-full px-6 pt-10 space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 text-secondary" for="name">
                    Name*
                  </label>
                  <input
                    className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    {...register("name")}
                  />
                  <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div>
                  <label className="mb-3 text-secondary" for="email">
                    Email*
                  </label>
                  <input
                    className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                    placeholder="Your Email address"
                    type="text"
                    id="email"
                    {...register("email")}
                  />

                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
              </div>

              <div>
                <label className="mb-3 text-secondary" for="message">
                  Message*
                </label>

                <textarea
                  {...register("message")}
                  className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                  placeholder="Your Message"
                  rows="8"
                  id="message"></textarea>
                <p className="text-red-500">{errors.message?.message}</p>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  class="relative z-10 font-federo text-[16px] flex h-[50px] w-full sm:w-40 items-center justify-center overflow-hidden text-white  bg-primary">
                  {isloading ? <ThreeDots width="50" color="#FFFFFF" /> : "Submit Now"}
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
