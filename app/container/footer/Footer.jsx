import {erexLogo} from "@/app/assets";
import {styles} from "@/app/styles";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-lightwhite pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className={`container ${styles.xPadding}`}>
          <div className="flex flex-wrap justify-between -mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <Image src={erexLogo} alt="logo" className="max-w-full " />
                </a>
                <p className="text-base mb-7 text-body-color text-secondary">
                  West Bengal, India
                </p>
                <p className="flex items-center text-sm font-medium text-secondary ">
                  <span className="mr-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <g clip-path="url(#clip0_31_239)">
                        <path
                          d="M21 1H3C2.20435 1 1.44129 1.31607 0.87868 1.87868C0.31607 2.44129 0 3.20435 0 4L0 23H24V4C24 3.20435 23.6839 2.44129 23.1213 1.87868C22.5587 1.31607 21.7956 1 21 1ZM3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V4.667L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2 4.667V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM2 21V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V21H2Z"
                          fill="#4169E1"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_31_239">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>hello.erex@gmail.com</span>
                </p>
              </div>
            </div>

            {/* <LinkGroup header="Contact Us">
              <NavLink link="/#" label="+91 " />
              <NavLink link="/#" label="Terms Of Use" />
              <NavLink link="/#" label="Sales And Refunds" />
              <NavLink link="/#" label="Legal" />
              <NavLink link="/#" label="Site Map" />
            </LinkGroup> */}
            <LinkGroup header="Our Services">
              <NavLink link="/#service" label="Software Development" />
              <NavLink link="/#service" label="Creative Design" />
              <NavLink link="/#service" label="Digital Marketing" />
              <NavLink link="/#service" label="ASO Expertise" />
              <NavLink link="/#service" label="UI/UX Design" />
              <NavLink link="/#service" label="AI/ML" />
            </LinkGroup>
            {/* <LinkGroup header="Get In Touch">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup> */}

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full mb-10">
                <h4 className="text-lg font-semibold mb-9 text-secondary">
                  Get In Touch
                </h4>
                <p className="text-secondary hover:text-primary ">
                  We Are Always Ready For Your Solution
                </p>
                <div className="flex items-center my-6">
                  <a
                    href="https://www.facebook.com/profile.php?id=61554303807037"
                    className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke text-secondary hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current">
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  {/* <a
                    href="https://www.linkedin.com/company/99069712"
                    className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke text-secondary hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current">
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke text-secondary hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current">
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/company/99069712"
                    className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full border-stroke text-secondary hover:border-primary hover:bg-primary hover:text-white sm:mr-4 lg:mr-3 xl:mr-4">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current">
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                {/* <p className="text-base text-body-color text-secondary">
                  &copy; 2025 TailGrids
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({children, header}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="w-full mb-10">
          <h4 className="text-lg font-semibold mb-9 text-secondary ">{header}</h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({link, label}) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary text-secondary">
        {label}
      </a>
    </li>
  );
};
