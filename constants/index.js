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
  Arrow2,
} from "../app/assets";

const Check = <FaCheck color="#4169E1" />;
const PurpleCheck = <FaCheck color="#A259FF" />;
const OrengeCheck = <FaCheck color="#F24E1E" />;

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
  //   id: "blog",
  //   title: "Blog",
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
  // {
  //   title: "@erexstudio/geo-span-measure",
  //   description:
  //     "A simple npm package for calculating distance between two coordinates using the Haversine formula.",
  //   logo: NpmLogo,
  //   icon: Frame,
  //   id: 3,
  //   url: "https://www.npmjs.com/package/@erexstudio/geo-span-measure",
  // },
  {
    logo: Arrow2,
    icon: Frame,
    id: 3,
    url: "https://www.npmjs.com/package/@erexstudio/geo-span-measure",
  },
];
const DigitalMarketing = [
  {
    title: "Small Business",
    price: "4900/",
    id: 1,
  },
  {
    title: "Medium Business",
    price: "8990/",
    id: 2,
  },
  {
    title: "Custom",
    id: 3,
    price: "Contact Us",
  },
  {
    title: "Ads Only",
    id: 4,
    text: "[ The First Month Includes No Extra Charges. ]",
  },
  {
    title: "General",
    id: 5,
    text: "[ Rs. 14900 First Month ]",
  },
  {
    title: "Social Media & Marketing",
    id: 6,
    text: "[ The First Month Includes No Extra Charges. ]",
  },
  {
    title: "Basic",
    id: 7,
    text: "[ Maintenance Charge Rs. 3000/Year ]",
  },
  {
    title: "Regular",
    id: 8,
    text: "[ Maintenance Charge Rs. 3500/Year ]",
  },
  {
    title: "Pro",
    id: 9,
    text: "[ The First Month Incurs No Extra Charges. ]",
  },
];

const smallBusiness = [
  {
    icon: Check,
    title: "Manage Your Social Media Accounts, Specifically Facebook & Instagram.",
  },
  {
    icon: Check,
    title: "Analyze The Post Strategy Each Month.",
  },
  {
    icon: Check,
    title: "Create 8 Posts Per Month For Facebook & Instagram.",
  },
  {
    icon: Check,
    title: "Create 2 Reels Per Month For Instagram.",
  },
  {
    icon: Check,
    title: "Boost On Meta Platform With 2 Posts Per Month.",
  },
  {
    icon: Check,
    title: "Provide Post For Each Event- Event Posts.",
  },
  {
    icon: Check,
    title: "Design 2 Banners Per Month.",
  },
  {
    icon: Check,
    title: "Business Registration On Google My Business.",
  },
  {
    icon: Check,
    title:
      "Display The Verified Badge On Your Business, On The Purulia Business Directory (PBD) Website.",
  },
];
const mediumBusiness = [
  {
    icon: PurpleCheck,
    title:
      "Manage Your Social Media Accounts, Specifically Facebook, Instagram, X(Twitter) & Youtube.",
  },
  {
    icon: PurpleCheck,
    title: "Analyze The Post Strategy Each Month.",
  },
  {
    icon: PurpleCheck,
    title: "Create 12 Posts Per Month For Facebook & Instagram.",
  },
  {
    icon: PurpleCheck,
    title: "Create 4 Reels Per Month For Instagram.",
  },
  {
    icon: PurpleCheck,
    title: "Boost On Meta Platform With 4 Posts Per Month.",
  },
  {
    icon: PurpleCheck,
    title: "Provide Post For Each Event- Event Posts.",
  },
  {
    icon: PurpleCheck,
    title: "Design 4 Banners Per Month.",
  },
  {
    icon: PurpleCheck,
    title: "Logo & Branding Support.",
  },
  {
    icon: PurpleCheck,
    title: "Business Registration On Google My Business.",
  },
  {
    icon: PurpleCheck,
    title:
      "Display The Verified Badge On Your Business, On The Purulia Business Directory (PBD) Website.",
  },
];

export const adsOnly = [
  {
    icon: Check,
    title:
      "Running Ads - The Ads Budget Is Customizable Depends On The Client's Requirements & Budget, With Facebook & Google Ads Included In The Default Package At Rs. 500 Each Per Month.",
  },
  {
    icon: Check,
    title:
      "Create Ads Content Including Images, Reels, Videos, And Animations As Needed.",
  },
  {
    icon: Check,
    title: "SEO Guide & Keyword Analysis [ If Business Has Website ]",
  },
  {
    icon: Check,
    title: "Sales Report & Ads Performance Report Each Month.",
  },
  {
    icon: Check,
    title:
      "Display The Verified Badge On Your Business, On The Purulia Business Directory (PBD) Website.",
  },
];

export const general = [
  {
    icon: PurpleCheck,
    title: "Business & Competitors Analysis. [ First Month Only ]",
  },
  {
    icon: PurpleCheck,
    title: "Targeted Audience Analysis.  [ First Month Only ]",
  },
  {
    icon: PurpleCheck,
    title: "Present A Growth Idea Report Based On The Two Points. [ First Month Only ]",
  },
  {
    icon: PurpleCheck,
    title: "Sales Report & Ads Performance Report Each Month.",
  },
  {
    icon: PurpleCheck,
    title:
      "Running Ads - The Ads Budget Is Customizable Depends On The Client's Requirements & Budget, With Facebook & Google Ads Included In The Default Package At Rs. 1000 Each Per Month.",
  },
  {
    icon: PurpleCheck,
    title:
      "Create Ads Content Including Images, Reels, Videos, And Animations As Needed.",
  },
  {
    icon: PurpleCheck,
    title: "SEO Guide & Keyword Analysis [ If Business Has Website ]",
  },
  {
    icon: PurpleCheck,
    title:
      "Display The Verified Badge On Your Business, On The Purulia Business Directory (PBD) Website.",
  },
];

export const generalAds = [
  {
    icon: OrengeCheck,
    title: "Social Media Packaage [ Small Business ]",
  },
  {
    icon: OrengeCheck,
    title: "Digital Marketing Package [ Ads only ]",
  },
];

export const basic = [
  {
    icon: Check,
    title: "Create A Website That Effectively Showcases Your Business Online.",
  },
  {
    icon: Check,
    title: "Provide Free Domain Name [ Limit Rs 500]",
  },
  {
    icon: Check,
    title: "Provide Free Hosting [ Shared Hosting ]",
  },
  {
    icon: Check,
    title: "Latest Programming Technology Provided.",
  },
  {
    icon: Check,
    title: "Fixed Design.",
  },
  {
    icon: Check,
    title: "5 Pages Max.",
  },
  {
    icon: Check,
    title: "No Database.",
  },
];

export const regular = [
  {
    icon: PurpleCheck,
    title:
      "Create A Informative Website That Effectively Showcases Your Business Online. [ Eg:-  Food Menu Item list For Restaurants ]",
  },
  {
    icon: PurpleCheck,
    title: "Provide Free Domain Name. [ No Limit ]",
  },
  {
    icon: PurpleCheck,
    title: "Provide Free Hosting [ Shared Hosting ]",
  },
  {
    icon: PurpleCheck,
    title: "Latest Programming Technology Provided.",
  },
  {
    icon: PurpleCheck,
    title: "Client Approved Design.",
  },
  {
    icon: PurpleCheck,
    title: "15 Pages Max.",
  },
  {
    icon: PurpleCheck,
    title: "Database Access Up To 512 MB.",
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

const slidesData = [
  {
    id: 1,
    image: "/img1.jpg",
    name: "Uday kumar",
    designation: "Founder | CEO",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 2,
    image: "/img2.jpg",
    name: "Gurucharan Karmakar",
    designation: "React Native Developer",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 3,
    image: "/img3.jpg",
    name: "Shadab Khan",
    designation: "Backend Developer",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 4,
    image: "/img4.jpg",
    name: "Nayan Dey",
    designation: "React Native Developer",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 5,
    image: "/mithun.jpg",
    name: "Mithun Gorai",
    designation: "Frontend Web Developer",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 6,
    image: "/image6.png",
    name: "Ramesh Gorai",
    designation: "UI/UX Designer",
    thumbnail: "/thumbnail_img_mithun.png",
  },
  {
    id: 7,
    image: "/member.jpg",
    name: "Akash Mandal",
    designation: "Frontend Web Developer",
    thumbnail: "/thumbnail_img_mithun.png",
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
  slidesData,
};
