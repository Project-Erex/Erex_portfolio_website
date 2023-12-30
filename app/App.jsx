import React from "react";
import {Hero} from "./container";
import Service from "./container/service/Service";
import Client from "./container/client/Client";
import Projects from "./container/projects/Projects";
import Testimonial from "./container/testimonial/Testimonial";
import Blog from "./container/blog/Blog";
import Ourteam from "./container/ourteam/Ourteam";
import Footer from "./container/footer/Footer";
import Contact from "./container/contact/Contact";

export default function App() {
  return (
    <>
      <Hero />
      <Service />
      <Client />
      <Projects />
      <Testimonial />
      <Blog />
      <Ourteam />
      <Contact />
      <Footer />
    </>
  );
}
