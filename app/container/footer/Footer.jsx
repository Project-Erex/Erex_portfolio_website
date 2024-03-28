"use client";

import {styles} from "@/app/styles";
import Image from "next/image";

import {Mail, erexLogo} from "@/app/assets";
import SocialLink from "./SocialLink";
import {HiArrowUp} from "react-icons/hi";
import {motion} from "framer-motion";
// import Particles from "@/app/components/heading/Particles";
import {Link, Link as ScrollLink} from "react-scroll";
// import {usePathname} from "next/";
import {useRouter} from "next/navigation";

export default function Footer() {
  const Router = useRouter();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const transition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
  };

  const Client = [
    {label: "Privacy Policy", destination: "/privacy_policy"},
    // {label: "Terms Of Use", destination: "/terms"},
    // {label: "Sales And Refunds", destination: "/sales"},
    // {label: "Legal", destination: "/legal"},
    // {label: "Site Map", destination: "/sitemap"},
    {label: "About Us", destination: "/about"},
  ];
  const Services = [
    {label: "Software Development"},
    {label: "Creative Design"},
    {label: "Digital Marketing"},
    {label: "ASO Expertise"},
    {label: "UI/UX Design"},
    {label: "AI/ML"},
  ];
  return (
    <div className="relative flex justify-center w-full z-[998] bg-lightwhite">
      {/* <div className="absolute w-full h-full">
        <Particles />
      </div> */}
      <div className="z-50 w-full max-w-screen-2xl">
        <section className={`${styles.xMargin}  ${styles.xdivPadding} md:pt-16 pt-6`}>
          <div className="grid w-full grid-cols-1 border-b-2 md:grid-cols-2 lg:grid-cols-3 border-watermark">
            <div className="flex flex-col items-start justify-center w-full mb-10 md:mb-24 lg:pr-4 xl:pr-0 md:justify-center">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="mb-6 inline-block max-w-[160px]">
                <Image src={erexLogo} alt="logo" className="max-w-full" />
              </ScrollLink>

              <p className="text-base mb-7 text-body-color text-gray">
                West Bengal India
              </p>
              <div className="flex justify-start w-full gap-2 ">
                <div className="px-2 py-2 rounded-full bg-background">
                  <a>
                    <Image src={Mail} alt="mail" />
                  </a>
                </div>
                <a className="flex items-center text-sm font-medium text-heading">
                  support@erex.in
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse w-full md:flex-row">
              <div className="w-full ">
                <div className="w-full mb-10 md:pt-8 lg:pt-0">
                  <h4 className="mb-6 text-xl font-normal font-federo text-secondary">
                    Our Pages
                  </h4>
                  <ul className="space-y-3">
                    {Client.map((client, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            Router.push(client?.destination);
                          }}
                          className="inline-block text-base leading-normal cursor-pointer text-body-color hover:text-primary text-gray">
                          {client.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <div className="w-full mb-10 md:pt-8 lg:pt-0">
                  <h4 className="mb-6 text-xl font-normal font-federo text-secondary">
                    Our Services
                  </h4>
                  <ul className="space-y-3">
                    {Services.map((services, index) => (
                      <li key={index}>
                        <ScrollLink
                          to="service"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="inline-block text-base leading-normal cursor-pointer text-body-color hover:text-primary text-gray">
                          {services.label}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-start w-full lg:justify-end lg:pl-8 xl:pl-0">
              <div className="flex flex-col items-start mb-10 ">
                <h4 className="mb-6 text-xl font-normal font-federo text-secondary">
                  Get In Touch
                </h4>
                <p className="text-gray hover:text-primary ">
                  We Are Always Ready For Your Solution
                </p>
                <div className="flex justify-start w-full gap-4 py-5 ">
                  <SocialLink />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-3 md:py-8">
            <text className="text-black font-poppins">
              © 2024. <text className="underline underline-offset-2">Erex Studio</text>{" "}
              All Rights Reserved.
            </text>
          </div>
          <div className="relative flex items-center -top-2 justify-center w-full md:hidden ">
            <div
              className=" w-12 h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16 rounded-full flex justify-center pt-[4px]  md:pt-[5px]    md:bottom-36 bottom-[6.5rem] 2xl:pt-[9px]  right-4 cursor-pointer  bg-primary absolute z-[999] "
              onClick={scrollUp}>
              <motion.div
                className="text-3xl md:text-4xl "
                animate={{
                  y: [0, 8, 0],
                }}
                transition={transition}>
                <HiArrowUp color="#fff" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

//
