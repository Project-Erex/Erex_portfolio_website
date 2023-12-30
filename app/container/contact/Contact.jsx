"use client";

import {styles} from "@/app/styles";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Schema} from "./FormHelper";
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit = (data) => console.log("form submit", data);

  return (
    <section className="w-full bg-gray-100">
      <div
        className={`${styles.yPadding} xl:mx-36 lg:mx-32 md:mx-22 sm:mx-16 mx-6   md:border-x-2 border-watermark  h-full  relative  bg-backgroundGray  `}>
        <div className="py-10 mx-4 lg:mx-6 xl:mx-10 bg-lightwhite">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <span className="font-federo z-50  text-secondary text-[28px] md:text-[44px] xl:text-[70px] text-center font-normal">
              Send A Message
            </span>
            <p className="font-normal font-poppins text-gray leading-none text-center  text-[18px]">
              Your email address will not be published. All fields are required
            </p>
          </div>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="w-full px-10 pt-10 space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 text-secondary" for="name">
                  Name*
                </label>
                <input
                  className="w-full p-3 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
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
                  className="w-full p-3 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
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
                className="w-full p-3 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                placeholder="Your Message"
                rows="8"
                id="message"></textarea>
              <p className="text-red-500">{errors.message?.message}</p>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full px-10 py-3 text-base font-medium text-white font-federo bg-primary sm:w-auto">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
