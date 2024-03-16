import * as React from "react";
import {useRef} from "react";
import {motion} from "framer-motion";
import {Rocket} from "../assets";
import Image from "next/image";

export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      className="flex w-full h-full overflow-hidden  place-content-center place-items-center rounded-3xl"
      ref={constraintsRef}>
      <motion.div
        className="w-[150px] h-[150px] bg-white rounded-[inherit]"
        drag
        dragConstraints={constraintsRef}>
        <Image src={Rocket} width={0} height={0} alt="Rocket" draggable="false" />
      </motion.div>
    </motion.div>
  );
};
