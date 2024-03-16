"use client";

import Image from "next/image";
import React from "react";
import {CardBody, CardContainer, CardItem} from "../ui/3d-card";
import Link from "next/link";
import {Rocket} from "@/app/assets";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card   w-full   h-auto rounded-xl p-6   ">
        <CardItem translateZ="100" className="w-full ">
          {/* <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
          <Image
            className="w-[371px]  md:w-[400px] "
            height={0}
            width={0}
            src={Rocket}
            alt="Erex"
            draggable="false"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
