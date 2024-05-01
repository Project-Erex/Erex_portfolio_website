"use client";

import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/moving-border";
import {styles} from "../styles";
import {AdminLogin} from "../assets";
import {useRouter} from "next/navigation";
import axios from "axios";
import {FaRegEye} from "react-icons/fa";
import {FaRegEyeSlash} from "react-icons/fa";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ThreeDots} from "react-loader-spinner";

export default function Admin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Define the submit handler function

  const showToastMessage = () => {
    toast.success("Form Submitted Successfully");
  };
  const showToastErrorMessage = () => {
    toast.error("Oops! Something went wrong. Please try again .");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://erex-backend.onrender.com/admin/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Redirect or perform actions upon successful login
        console.log("Login successful!");
        const result = response.data;
        console.log("result", result);
        localStorage.setItem("AccessToken", result.token.toString());
        router.push("/blog_create");
        showToastMessage();
      } else {
        // Handle unsuccessful login
        console.error("Login failed");
        showToastErrorMessage();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error occurred while logging in:", error);
      showToastErrorMessage();
    }
  };

  return (
    <section className={`${styles.xPadding} ${styles.yPadding} md:mt-20 xl:mt-0`}>
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row">
        <div className="w-full">
          <Image
            src={AdminLogin}
            width={0}
            height={0}
            alt="Admin"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full h-full gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-medium font-federo text-primary">Log In</h2>
            <p className="text-base font-normal font-public text-subheading">
              Login with your admin credentials.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-5">
              <div>
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Username..."
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    className="w-full p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                    placeholder="Password..."
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute text-primary right-5 top-1/2 -translate-y-1/4 "
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                value="Send"
                disabled={isLoading}
                className="relative flex items-center justify-center overflow-hidden text-white transition-all border-none before:absolute before:h-0 before:w-0 before:rounded-full bg-primary before:bg-secondary before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
                <span className="relative z-10 font-federo text-[16px]">
                  {" "}
                  {isLoading ? <ThreeDots width="50" color="#FFFFFF" /> : "Submit Now"}
                </span>
              </Button>
            </div>
          </form>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </section>
  );
}
