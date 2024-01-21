import Hero from "./container/hero/Hero";
import Service from "./container/service/Service";
import Client from "./container/client/Client";
import Projects from "./container/projects/Projects";
import Testimonial from "./container/testimonial/Testimonial";
import Blog from "./container/blog/Blog";
import Ourteam from "./container/ourteam/Ourteam";
import Footer from "./container/footer/Footer";
import Contact from "./container/contact/Contact";
import Contribution from "./container/contribution/Contribution";
import GoToTop from "./components/heading/GoToTop";

export default function App() {
  return (
    <>
      <Hero />
      <Contribution />
      <Service />
      <Client />
      <Testimonial />
      <Contact />
      <GoToTop />
    </>
  );
}
