import * as React from "react";
import {useRef} from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export const RocketImage = ({defaultImage}) => {
  console.log("image", defaultImage);
  const constraintsRef = useRef(null);

  return (
    <motion.div className="container" ref={constraintsRef}>
      <motion.div
        className="w-full h-full bg-primary"
        drag
        dragConstraints={constraintsRef}>
        <Image
          className="w-[371px] md:w-[500px]"
          height={0}
          width={0}
          src={defaultImage}
          alt="Erex"
        />
        <p className="text-red-700">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quas praesentium?
          Voluptatem omnis, aliquid eligendi repellat odit accusamus quam autem quia
          dolorum doloremque ratione atque debitis iste dolorem illo dolores.
        </p>
      </motion.div>
    </motion.div>
  );
};
