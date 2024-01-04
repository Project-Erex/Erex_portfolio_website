import {styles} from "@/app/styles";
import Image from "next/image";
import React from "react";
import {Mail, erexLogo} from "@/app/assets";
import NextLink from "next/link"; // Rename Link to NextLink to avoid conflicts
import Link from "next/link";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <div className="w-full bg-lightwhite">
      <section className={`${styles.xMargin} ${styles.yPadding}`}>
        <div className="grid w-full grid-cols-1 border-b-2 md:grid-cols-2 lg:grid-cols-3 border-watermark">
          <div className="">
            <div className="flex flex-col items-center justify-center w-full mb-10 lg:pr-4 xl:pr-0 md:justify-center md:items-start">
              <a href="/#" className="mb-6 inline-block max-w-[160px]">
                <Image src={erexLogo} alt="logo" className="max-w-full" />
              </a>
              <p className="text-base mb-7 text-body-color text-gray">
                West Bengal India
              </p>
              <div className="flex justify-center w-full gap-2 md:justify-start">
                <div className="px-2 py-2 rounded-full bg-background">
                  <a href="#">
                    <Image src={Mail} alt="mail" />
                  </a>
                </div>
                <span className="flex items-center text-sm font-medium text-primary">
                  support@erex.in
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <LinkGroup header="Our Client">
              <NavLink href="/#ourClient" label="Food Comet" />
              <NavLink href="/#ourClient" label="Kids Quiz" />
              <NavLink href="/#ourClient" label="DetectifyX" />
              {/* <NavLink href="/#" label="Legal" />
              <NavLink href="/#" label="Site Map" /> */}
            </LinkGroup>
            <LinkGroup header="Our Services">
              <NavLink href="/#service" label="Software Development" />
              <NavLink href="/#service" label="Creative Design" />
              <NavLink href="/#service" label="Digital Marketing" />
              <NavLink href="/#service" label="ASO Expertise" />
              <NavLink href="/#service" label="UI/UX Design" />
              <NavLink href="/#service" label="AI/ML" />
            </LinkGroup>
          </div>
          <div className="flex justify-center w-full lg:justify-end lg:pl-8 xl:pl-0">
            <div className="flex flex-col items-center mb-10 md:items-start ">
              <h4 className="text-xl font-normal font-federo mb-9 text-secondary">
                Get In Touch
              </h4>
              <p className="text-gray hover:text-primary ">
                We Are Always Ready For Your Solution
              </p>
              <div className="flex justify-center w-full gap-4 py-5 md:justify-start ">
                <SocialLink />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const LinkGroup = ({children, header}) => {
  return (
    <>
      <div className="w-full ">
        <div className="w-full mb-10 md:pt-8 lg:pt-0">
          <h4 className="text-xl font-normal mb-9 font-federo text-secondary">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({href, label}) => {
  return (
    <li>
      <Link
        className="inline-block text-base leading-normal text-body-color hover:text-primary text-gray"
        href={href}
        passHref>
        {label}
      </Link>
    </li>
  );
};
