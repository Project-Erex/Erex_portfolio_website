"use client";

// import React from "react";
// import OtherPageNavbar from "./OtherPageNavbar";
// import MainNavbar from "./MainNavbar";
// import {usePathname} from "next/navigation";

// const navbarComponents = {
//   "/": MainNavbar, // Home page
//   "/pricing": OtherPageNavbar,
// };

// export default function Navbar() {
//   const pathname = usePathname();
//   const CurrentNavbar = navbarComponents[pathname] || MainNavbar; // Default to MainNavbar if no match
//   return <CurrentNavbar />;
// }

import React from "react";
import OtherPageNavbar from "./OtherPageNavbar";
import MainNavbar from "./MainNavbar";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const CurrentNavbar = pathname === "/" ? MainNavbar : OtherPageNavbar;
  return <CurrentNavbar />;
}
