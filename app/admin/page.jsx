"use client";
import React, {useState} from "react";
import Image from "next/image";
import {AdminLogin} from "../assets";
import {styles} from "../styles";
import {Button} from "@/components/ui/moving-border";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username || "",
      password: password || "",
    };
    console.log(data);
  };

  return (
    <section className={`${styles.xPadding} ${styles.yPadding} `}>
      <div className="w-full h-full flex-col md:flex-row flex justify-center items-center">
        <div className="w-full">
          <Image
            src={AdminLogin}
            width={0}
            height={0}
            alt="Admin"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex h-full justify-center  gap-10 flex-col">
          <div className="flex flex-col gap-2">
            <h2 className="font-federo font-medium text-primary text-2xl">Log In</h2>
            <p className="font-public font-normal text-subheading text-base">
              Login with your admin credentials.
            </p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="w-full flex  flex-col gap-5 ">
              <div>
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="ownerName">
                  Username
                </label>
                <input
                  className="w-full  p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Username..."
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="ownerName">
                  Password
                </label>
                <input
                  className="w-full p-3 mt-2  text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Password..."
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                value="Send"
                className="  relative flex   border-none items-center justify-center
          overflow-hidden bg-gray-800 text-white transition-all before:absolute
          before:h-0 before:w-0 before:rounded-full bg-primary before:bg-secondary
          before:duration-500 before:ease-out hover:shadow-bghover
         hover:before:h-56 hover:before:w-56">
                <span className="relative z-10 font-federo text-[16px]">Submit Now</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
