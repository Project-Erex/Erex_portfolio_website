import {FaCheck} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";
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
  NpmLogo,
  Frame,
  SmalBusiness,
  MediumBusiness,
  Enterprise,
  Wave1,
  Wave2,
  Wave3,
  Twitter,
  Instagram,
  SaleForceTroops,
  Avatarify_logo,
  PuruliaPBD,
  Trimz_Logo,
  Trinayoni_logo,
} from "../app/assets";

const Check = <FaCheck color="#4169E1" />;
const PurpleCheck = <FaCheck color="#A259FF" />;
const CheckCircle = <FaCheckCircle />;
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
    title: "SaleForceTroops",
    icon: SaleForceTroops,
    id: 2,
  },
  {
    title: "Avatarify_logo",
    icon: Avatarify_logo,
    id: 3,
  },
  {
    title: "PuruliaPBD",
    icon: PuruliaPBD,
    id: 4,
  },
  {
    title: "Trimz_Logo",
    icon: Trimz_Logo,
    id: 5,
  },
  {
    title: "Trinayoni_logo",
    icon: Trinayoni_logo,
    id: 6,
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
  {
    icon: Twitter,
    title: "Twitter",
    url: "https://twitter.com/erexstudio",
  },
  {
    icon: Instagram,
    title: "Instagram",
    url: "https://www.instagram.com/erexstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const OurContribution = [
  {
    title: "@erexstudio/react-read-more-text",
    description:
      "A versatile React component for seamlessly implementing 'Read More/Show Less' functionality with customizable styles.",
    logo: NpmLogo,
    icon: Frame,
    id: 1,
    url: "https://www.npmjs.com/package/@erexstudio/react-read-more-text",
  },
  {
    title: "@erexstudio/geo-span-measure",
    description:
      "A simple npm package for calculating distance between two coordinates using the Haversine formula.",
    logo: NpmLogo,
    icon: Frame,
    id: 2,
    url: "https://www.npmjs.com/package/@erexstudio/geo-span-measure",
  },
];
const DigitalMarketing = [
  {
    icon: SmalBusiness,
    title: "Small Business",
    price: "4900/",
    wave: Wave1,
    id: 1,
  },
  {
    icon: MediumBusiness,
    title: "Medium Business",
    price: "8990/",
    wave: Wave2,

    id: 2,
  },
  {
    icon: Enterprise,
    title: "Enterprise",
    id: 3,
    wave: Wave3,
    price: "Contact Us",
  },
];

const smallBusiness = [
  {
    icon: Check,
    title: "Social Media Handle Facebook & Instagram.",
  },
  {
    icon: Check,
    title: "Create & post promotional banners 4 in a month.",
  },
  {
    icon: Check,
    title: "Create hoarding design for stores(Max 3 in a month).",
  },
  {
    icon: Check,
    title: "Basic Logo design support.",
  },
];
const mediumBusiness = [
  {
    icon: PurpleCheck,
    title: "Social Media Handle Facebook & Instagram.",
  },
  {
    icon: PurpleCheck,
    title: "Create 8 banners and post on social media each month.",
  },
  {
    icon: PurpleCheck,
    title: "Short video & reels post (max 2 per month)",
  },
  {
    icon: PurpleCheck,
    title: "Logo and Store banner design support.",
  },
  {
    icon: PurpleCheck,
    title: "Static Website for the business.(Domain & server price excluded).",
  },
  {
    icon: PurpleCheck,
    title: "Basic market analysis report monthly.",
  },
];

export const Application = [
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
];
export const Website = [
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: CheckCircle,
    title: "Lorem ipsum dolor sit amet.",
  },
];

export {
  services,
  ourClient,
  ourProjects,
  testiMonial,
  ourBlog,
  ourTeam,
  ourSocialLink,
  OurContribution,
  DigitalMarketing,
  smallBusiness,
  mediumBusiness,
};
