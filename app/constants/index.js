import {
  foodComet,
  Representations,
  Layer,
  BlogImage,
  Developer,
  CreativeIcon,
  SoftwareIcon,
  DigitalIcon,
  ASOIcon,
  UIIcon,
  AIIcon,
  Software_white,
  CreativeWhite,
  AIWhite,
  ASOWhite,
  DigitalWhite,
  UIWhite,
  KidQuiz,
  DetectifyX,
  Facebook,
  Linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },

  {
    id: "service",
    title: "Services",
  },
  {
    id: "ourClient",
    title: "Our Client",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  // {
  //   id: "blog",
  //   title: "Blog",
  // },
  // {
  //   id: "ourteam",
  //   title: "Our Team",
  // },
];

const services = [
  {
    title: "Software Development",
    description:
      "Turning ideas into powerful code for various platforms, iOS, Android, React, React Native and modern techs.",
    icon: SoftwareIcon,
    whiteIcon: Software_white,
  },
  {
    title: "Creative Designs",
    description:
      "Our UI/UX mastery brings aesthetics and functionality together, shaping memorable digital experiences.",
    icon: CreativeIcon,
    whiteIcon: CreativeWhite,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing for real-world results with 10+ years of hands-on experience.",
    icon: DigitalIcon,
    whiteIcon: DigitalWhite,
  },
  {
    title: "ASO Expertise",
    description:
      "We provide App Store Optimization to greater visibility of your app in playstore/appstore.",
    icon: ASOIcon,
    whiteIcon: ASOWhite,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing interfaces that tell your brand story beautifully with Figma, Adobe, AE & more.",
    icon: UIIcon,
    whiteIcon: UIWhite,
  },
  {
    title: "AI/ML",
    description:
      "We are open to accept challenges to solve modern world problems using Artificial Intelligence. ",
    icon: AIIcon,
    whiteIcon: AIWhite,
  },
];

const ourClient = [
  {
    title: "Food Comet",
    icon: foodComet,
    id: 1,
  },
  {
    title: "KidsQuiz",
    icon: KidQuiz,
    id: 2,
  },
  {
    title: "DetectifyX",
    icon: DetectifyX,
    id: 3,
  },
];
const ourProjects = [
  {
    title: "Software Application",
    icon: Representations,
    id: 1,
    product: "Food Comet Application",
  },
  {
    title: "Software Application",
    icon: Representations,
    id: 2,
    product: "Food Comet Application",
  },
  {
    title: "Software Application",
    icon: Representations,
    id: 3,
    product: "Food Comet Application",
  },
];
const testiMonial = [
  {
    name: "Sarah Thompson",
    icon: Layer,
    id: 1,
    description:
      "“Erex Studio exceeded our expectations! Their software solutions transformed our operations. Kudos to the talented team!”",
  },
  {
    name: "Alex Rodriguez",
    icon: Layer,
    id: 2,
    description:
      "“Working with Erex Studio was a game-changer for our brand. Their design prowess brought our vision to life!”",
  },
  {
    name: "David Miller",
    icon: Layer,
    id: 3,
    description:
      "“Erex Studio's web development team delivered a site that reflects our brand perfectly!”",
  },
  {
    name: "Rachel Carter",
    icon: Layer,
    id: 4,
    description:
      "“Digital marketing brilliance! Erex Studio's strategies increased our online presence, driving significant growth!”",
  },
];
const ourBlog = [
  {
    name: "SHADAB KHAN",
    icon: BlogImage,
    date: "22 Dec,2023",
    id: 1,
    title: "Master These Awesome New Skills in May 2023",
    description: "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
  },
  {
    name: "UDAY KUMAR",
    icon: BlogImage,
    date: "22 Dec,2023",
    id: 2,
    title: "Master These Awesome New Skills in May 2023",
    description: "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
  },
  {
    name: "MITHUN GORAI",
    icon: BlogImage,
    date: "22 Dec,2023",
    id: 3,
    title: "Master These Awesome New Skills in May 2023",
    description: "Consectetur adipiscing elit. Purusout phasellus malesuada lectus.",
  },
];
const ourTeam = [
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 1,
    name: "SHADAB KHAN",
  },
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 2,
    name: "SHADAB KHAN",
  },
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 3,
    name: "SHADAB KHAN",
  },
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 4,
    name: "SHADAB KHAN",
  },
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 5,
    name: "SHADAB KHAN",
  },
  {
    title: "Back-End Developer",
    icon: Developer,
    id: 6,
    name: "SHADAB KHAN",
  },
];

const ourSocialLink = [
  {
    icon: Facebook,
    title: "facebook",
    url: "https://www.facebook.com/people/Erex-Studio/61554303807037/",
  },
  {
    icon: Linkedin,
    title: "linkedin",
    url: "https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F99069712",
  },
];

export {services, ourClient, ourProjects, testiMonial, ourBlog, ourTeam, ourSocialLink};
