"use client";
// import React, {useRef} from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionTemplate,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import {cn} from "../../utils/cn";

// export function Button({
//   children,
//   as: Component = "button",
//   containerClassName,
//   borderClassName,
//   duration,
//   className,
//   ...otherProps
// }) {
//   return (
//     <Component
//       className={cn(
//         "bg-transparent relative text-xl  h-14 w-40 pt-[2.5px] pb-[2px] px-[2.5px] overflow-hidden ",
//         containerClassName,
//       )}
//       {...otherProps}>
//       <div className="absolute inset-0">
//         <MovingBorder duration={duration} rx="30%" ry="30%">
//           <div
//             className={cn(
//               "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--red-600)_40%,transparent_60%)]",
//               borderClassName,
//             )}
//           />
//         </MovingBorder>
//       </div>
//       <div
//         className={cn(
//           "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
//           className,
//         )}>
//         {children}
//       </div>
//     </Component>
//   );
// }

// export const MovingBorder = ({children, duration = 2000, rx, ry, ...otherProps}) => {
//   const pathRef = useRef();
//   const progress = useMotionValue(0);

//   useAnimationFrame((time) => {
//     const length = pathRef.current?.getTotalLength();
//     if (length) {
//       const pxPerMillisecond = length / duration;
//       progress.set((time * pxPerMillisecond) % length);
//     }
//   });

//   const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
//   const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

//   const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         className="absolute h-full w-full"
//         width="100%"
//         height="100%"
//         {...otherProps}>
//         <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
//       </svg>
//       <motion.div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           display: "inline-block",
//           transform,
//         }}>
//         {children}
//       </motion.div>
//     </>
//   );
// };

import React, {useRef, useState} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {cn} from "../../utils/cn";

export function Button({
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-14 w-40 pt-[2.5px] pb-[2.2px] px-[2.5px] overflow-hidden ",
        containerClassName,
      )}
      {...otherProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute inset-0">
        {isHovered && (
          <MovingBorder duration={duration} rx="30%" ry="30%">
            <div
              className={cn(
                "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-600)_40%,transparent_60%)]",
                borderClassName,
              )}
            />
          </MovingBorder>
        )}
      </div>
      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className,
        )}>
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({children, duration = 2000, rx, ry, ...otherProps}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}>
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}>
        {children}
      </motion.div>
    </>
  );
};
