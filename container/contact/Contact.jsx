"use client";

import {styles} from "@/app/styles";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ThreeDots} from "react-loader-spinner";
import {Schema} from "./FormHelper";
import {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import React, {useRef} from "react";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui/moving-border";
export default function Contact() {
  const [isloading, setIsLoading] = useState(false);
  const form = useRef();
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

  // .sendForm("service_2fb01t8", "template_is4luwg", form.current, "CVSZF54pQOwsGqN-p")
  //     .sendForm("service_frwjxzy", "template_f17ikzf", form.current, "RkTwaJJERy9Lqcc-_") mithun

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = async (data) => {
    reset();
    if (isloading) return; // Ignore if already loading
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_2fb01t8", //uday
        // "service_frwjxzy",
        "template_is4luwg", //uday
        // "template_f17ikzf",
        {
          from_name: data.name,
          to_name: "Erex Studio",
          message: `${data.message}, Sender Email- ${data.email}`,
        },
        "CVSZF54pQOwsGqN-p", //uday
        // "RkTwaJJERy9Lqcc-_",
      );

      console.log(result.text);
      showToastMessage();
    } catch (error) {
      console.log(error.text);
      showToastErrorMessage();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center w-full bg-background " id="contact">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding}  ${styles.xMargin} md:border-x-2 bg-background border-watermark  h-full  relative    `}>
          <div className="py-10 mx-4 lg:mx-6 xl:mx-10 bg-lightwhite">
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.65, 0, 0.35, 1],
                  delay: 0.08,
                },
              }}
              viewport={{once: true}}
              className="flex flex-col items-center justify-center w-full gap-2">
              <span className="font-federo z-50  text-secondary text-[28px] md:text-[44px] xl:text-[70px] text-center font-normal">
                Send A Message
              </span>
              <p className="font-normal font-poppins text-grey leading-[18px] text-center text-[10px]  md:text-[18px] px-4">
                Your email address will not be published. All fields are required
              </p>
            </motion.div>
            <form
              action=""
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="w-full px-6 pt-10 space-y-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <motion.div
                  initial={{y: 50, opacity: 0}}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.65, 0, 0.35, 1],
                      delay: 0.08,
                    },
                  }}
                  viewport={{once: true}}>
                  <label className="mb-3 text-secondary" htmlFor="name">
                    Name*
                  </label>
                  <input
                    className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    name="from_name"
                    {...register("name")}
                  />
                  <p className="text-red-500">{errors.name?.message}</p>
                </motion.div>
                <motion.div
                  initial={{y: 50, opacity: 0}}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.65, 0, 0.35, 1],
                      delay: 0.08,
                    },
                  }}
                  viewport={{once: true}}>
                  <label className="mb-3 text-secondary" htmlFor="email">
                    Email*
                  </label>
                  <input
                    className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                    placeholder="Your Email address"
                    type="text"
                    id="email"
                    name="from_email"
                    {...register("email")}
                  />

                  <p className="text-red-500">{errors.email?.message}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                    delay: 0.08,
                  },
                }}
                viewport={{once: true}}>
                <label className="mb-3 text-secondary" htmlFor="message">
                  Message*
                </label>

                <textarea
                  {...register("message")}
                  className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-poppins border-watermark bg-background"
                  placeholder="Your Message"
                  rows="8"
                  id="message"
                  name="message"></textarea>
                <p className="text-red-500">{errors.message?.message}</p>
              </motion.div>

              <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                    delay: 0.08,
                  },
                }}
                className="flex justify-between mt-4">
                <Button
                  type="submit"
                  value="Send"
                  disabled={isloading}
                  className="relative flex items-center justify-center overflow-hidden text-white transition-all border-none before:absolute before:h-0 before:w-0 before:rounded-full bg-primary before:bg-secondary before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10 font-federo text-[16px]">
                    {" "}
                    {isloading ? <ThreeDots width="50" color="#FFFFFF" /> : "Submit Now"}
                  </span>
                </Button>

                <ToastContainer />
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// className="relative flex h-[44px] w-32 items-center justify-center
// overflow-hidden bg-gray-800 text-white transition-all before:absolute
// before:h-0 before:w-0 before:rounded-full bg-primary before:bg-bghover
// before:duration-500 before:ease-out hover:shadow-bghover
// hover:before:h-56 hover:before:w-56">
