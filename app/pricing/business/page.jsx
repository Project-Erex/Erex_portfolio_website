"use client";

import {styles} from "../../styles";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useRef} from "react";
import {Schema} from "./FormHelper";
import {useState} from "react";
import {ThreeDots} from "react-loader-spinner";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Business() {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [data, setdata] = useState({
    BusinessName: "",
    OwnerName: "",
    PhoneNo: "",
    AltPhoneNo: "",
    BusinessAddress: "",
    OwnerPhoneNo: "",
    BusinessType: "",
    SellingPoint: "",
    Facebook: false,
    Instagram: false,
    Youtube: false,
    Url: "",
    Audience: "",
    Demographic: "",
    BusinessAge: "",
    BusinessSize: "",
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const form = useRef();

  const showToastMessage = () => {
    toast.success("Form Submitted Successfully");
  };
  const showToastErrorMessage = () => {
    toast.error("Something Went Wrong!");
  };
  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby6rgki6Af7dcrzQLjKy-jbpf3JBn5X4yVwcmHJDwkwZLV9o9ozScpKNO2FBgMfr72DRA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(), // Use data state
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setIsLoading(false);
      showToastMessage();
      // console.log("Form data sent successfully");
      // reset();
    } catch (error) {
      console.error("Error sending form data:", error);
      setIsLoading(false);
      showToastErrorMessage();
    }
  };

  const handleCheckboxChange = (checkbox) => {
    switch (checkbox) {
      case "Facebook":
        setIsChecked(!isChecked);
        setdata({...data, Facebook: !isChecked}); // Update data state
        break;
      case "Instagram":
        setIsChecked2(!isChecked2);
        setdata({...data, Instagram: !isChecked2}); // Update data state
        break;
      case "Youtube":
        setIsChecked3(!isChecked3);
        setdata({...data, Youtube: !isChecked3}); // Update data state
        break;
      default:
        break;
    }
  };
  return (
    <section className="relative flex justify-center w-full h-full pt-20 bg-background">
      <div className="w-full max-w-screen-2xl">
        <div
          className={`${styles.yPadding} ${styles.xMargin} px-4 lg:px-6  xl:px-20 md:border-x-2 bg-background border-bordercolor h-full relative bg-backgroundGray `}>
          <div className="flex flex-col items-center justify-center w-full gap-5 text-center ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary font-federo">
              Let’s get to know your business
            </h1>
            <p className="text-xl font-normal md:text-2xl lg:text-3xl text-gray">
              Please provide the following information so we can help you boost up <br />
              your business.
            </p>
          </div>
          <form
            className="py-5 md:py-10"
            action=""
            ref={form}
            onSubmit={handleSubmit(onSubmit)}>
            {/* *********************************************************** */}
            <div className="flex flex-col w-full gap-5 pt-10 md:gap-10 md:flex-row ">
              <div className="w-full ">
                <label
                  className="font-medium md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="businessName">
                  Business name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 mt-2 text-sm font-normal border-2 rounded-[10px] bgpt focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Your business name"
                  type="text"
                  id="businessName"
                  defaultValue={data?.BusinessName}
                  {...register("BusinessName")} // Pass field name to register directly
                />
                <p className="mt-2 text-red-500">{errors.BusinessName?.message}</p>
              </div>
              <div className="w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="ownerName">
                  Owner name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full rounded-[10px] p-3 mt-2 text-sm font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="Your name"
                  type="text"
                  id="ownerName"
                  defaultValue={data?.OwnerName}
                  {...register("OwnerName")} // Pass field name to register directly
                />
                <p className="mt-1 text-red-500">{errors.OwnerName?.message}</p>
              </div>
            </div>
            {/* *********************************************************** */}
            <div className="flex flex-col w-full gap-5 py-5 md:py-10 md:gap-10 md:flex-row">
              <div className="w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="phone">
                  Business mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  max={10}
                  className="w-full p-3 mt-2 text-sm rounded-[10px] font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="+91 1234567890"
                  type="text"
                  maxLength="10"
                  id="phoneNo"
                  defaultValue={data?.PhoneNo}
                  {...register("PhoneNo")}
                />
                <p className="mt-1 text-red-500">{errors.PhoneNo?.message}</p>
              </div>
              <div className="w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="altphone">
                  Business mobile number(Additional){" "}
                </label>
                <input
                  className="w-full p-3 mt-2 text-sm rounded-[10px] font-normal border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="+91 1234567890"
                  type="text"
                  maxLength="10"
                  id="altPhoneNo"
                  max={10}
                  defaultValue={data?.AltPhoneNo}
                  {...register("AltPhoneNo")}
                  // Pass field name to register directly
                />
              </div>
            </div>
            {/* ********************************************************** */}
            <div className="w-full">
              <label
                className="font-normal md:text-base xl:text-xl font-public text-secondary"
                htmlFor="BusinessAddress">
                Business address <span className="text-red-500">*</span>
              </label>

              <textarea
                {...register("BusinessAddress")}
                className="w-full p-3 mt-2 text-sm font-normal border-2 rounded-[10px] focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                placeholder="Example, 713324, Purulia, West Bengal"
                rows="6"
                id="BusinessAddress"
                name="BusinessAddress"
                defaultValue={data?.BusinessAddress}></textarea>
              <p className="mt-1 text-red-500">{errors.BusinessAddress?.message}</p>
            </div>
            {/* *********************************************************** */}
            <div className="flex flex-col w-full gap-5 py-5 md:py-10 md:gap-10 md:flex-row">
              <div className="w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="OwnerPhoneNo">
                  Owner contact number <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full p-3 mt-2 text-sm font-normal rounded-[10px] border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="+91 1234567890"
                  type="text"
                  maxLength="10"
                  id="ownerPhoneNo"
                  defaultValue={data?.OwnerPhoneNo}
                  {...register("OwnerPhoneNo")} // Pass field name to register directly
                />
                <p className="mt-1 text-red-500">{errors.OwnerPhoneNo?.message}</p>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="altphoneNo">
                  Business type <span className="text-red-500">*</span>
                </label>

                <select
                  className="w-full p-3 mt-2 text-sm font-normal rounded-[10px] border-2 custom-select focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background "
                  defaultValue={data?.BusinessType}
                  {...register("BusinessType")}>
                  <option value="">Select business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotels">Hotels</option>
                  <option value="general_shop">General Shop</option>
                  <option value="medical_health_care">Medical Health Care</option>
                  <option value="individual_doctors">Individual Doctors</option>
                </select>

                <p className="mt-1 text-red-500">{errors.BusinessType?.message}</p>
              </div>
            </div>
            {/* ********************************************************** */}
            {/* ********************************************************** */}
            <div>
              <label
                className="font-normal md:text-base xl:text-xl font-public text-secondary"
                htmlFor="address">
                What’s your USP (Unique Selling Point){" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                defaultValue={data?.SellingPoint}
                {...register("SellingPoint")}
                className="w-full p-3 mt-2 text-sm font-normal rounded-[10px] border-2 focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                placeholder="Explain what makes your product or service unique. (500 characters max)
                "
                rows="6"
                id="SellingPoint"
                name="SellingPoint"></textarea>
              <p className="mt-1 text-red-500">{errors.SellingPoint?.message}</p>
            </div>
            {/* *********************************************************** */}
            <div className="flex gap-2 py-5 md:py-10">
              <div className="checkbox-wrapper-40">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    defaultValue={data?.Facebook}
                    onClick={() => handleCheckboxChange("Facebook")}
                    {...register("Facebook", {required: true})}
                  />
                  <span className="checkbox"></span>
                  <label
                    className="font-normal md:text-base xl:text-xl font-public text-secondary"
                    htmlFor="myCheckbox">
                    Facebook page
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="checkbox-wrapper-40">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    defaultValue={data?.Instagram}
                    onClick={() => handleCheckboxChange("Instagram")}
                    {...register("Instagram", {required: true})}
                  />
                  <span className="checkbox"></span>
                  <label
                    className="font-normal md:text-base xl:text-xl font-public text-secondary"
                    htmlFor="myCheckbox">
                    Instagram profile
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-2 py-5 md:py-10">
              <div className="checkbox-wrapper-40">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    defaultValue={data?.Youtube}
                    onClick={() => handleCheckboxChange("Youtube")}
                    {...register("Youtube", {required: true})}
                  />
                  <span className="checkbox"></span>
                  <label
                    className="font-normal md:text-base xl:text-xl font-public text-secondary"
                    htmlFor="myCheckbox">
                    Youtube page
                  </label>
                </div>
              </div>
            </div>

            {(isChecked || isChecked2 || isChecked3) && (
              <div className="w-full ">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="Url">
                  Website and social media URLs
                </label>

                <textarea
                  {...register("Url")}
                  defaultValue={data?.Url}
                  className="w-full p-3 mt-2 rounded-[10px] overflow-y-hidden text-sm font-normal border-2 resize-none focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
                  placeholder="www.example.com, www.instagram.com/example, etc. "
                  rows="4"
                  id="Url"
                  name="Url"></textarea>
                <p className="mt-1 text-red-500">{errors.Url?.message}</p>
              </div>
            )}

            {/* ************************************************************************** */}
            <div className="flex flex-col w-full gap-5 py-5 md:py-10 md:gap-10 md:flex-row">
              <div className="flex flex-col w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="TargetAudience">
                  Target audience <span className="text-red-500">*</span>
                </label>

                <select
                  className="w-full p-3 mt-2 rounded-[10px] text-sm font-normal border-2 custom-select focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background "
                  defaultValue={data?.Audience}
                  {...register("Audience")}>
                  <option value="">Select business audience</option>

                  {/*  */}
                  <option value="general_audience">
                    General Audience (Include all types of customers)
                  </option>
                  <option value="students_13_25">Students (age 13 - 25)</option>
                  <option value="professionals">Professionals</option>
                  <option value="housewives">Housewives</option>
                  <option value="male_only">Male Only</option>
                  <option value="female_only">Female Only</option>
                  <option value="married_only">Married Only</option>
                  <option value="others">Others</option>
                </select>

                <p className="mt-1 text-red-500">{errors.Audience?.message}</p>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="TargetDemographic">
                  Target demographic <span className="text-red-500">*</span>
                </label>

                <select
                  className="w-full p-3 mt-2 rounded-[10px] text-sm font-normal border-2 custom-select focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background "
                  defaultValue={data?.Demographic}
                  {...register("Demographic")}>
                  <option value="">Select business demographic</option>
                  <option value="generic_local_customers">Generic Local Customers</option>
                  <option value="all_india">All India</option>
                  <option value="particular_state">Particular State</option>
                  <option value="worldwide">Worldwide</option>
                </select>

                <p className="mt-1 text-red-500">{errors.Demographic?.message}</p>
              </div>
            </div>
            {/* ************************************************************************** */}
            {/* ************************************************************************** */}
            <div className="flex flex-col w-full gap-5 pb-10 md:gap-10 md:flex-row">
              <div className="flex flex-col w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="BusinessAge">
                  Business age <span className="text-red-500">*</span>
                </label>

                <select
                  className="w-full p-3 mt-2 rounded-[10px] text-sm font-normal border-2 custom-select focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background "
                  defaultValue={data?.BusinessAge}
                  {...register("BusinessAge")}>
                  <option value="">Select business age</option>
                  <option value="0-2">0 - 2 Years</option>
                  <option value="2-5">2 - 5 Years</option>
                  <option value="5-10">5 - 10 Years</option>
                  <option value="10+">10 + Years</option>
                </select>

                <p className="mt-1 text-red-500">{errors.BusinessAge?.message}</p>
              </div>
              <div className="flex flex-col w-full">
                <label
                  className="font-normal md:text-base xl:text-xl font-public text-secondary"
                  htmlFor="BusinessSize">
                  Business size <span className="text-red-500">*</span>
                </label>

                <select
                  className="w-full p-3 mt-2 rounded-[10px] text-sm font-normal border-2 custom-select focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background "
                  defaultValue={data?.BusinessSize}
                  {...register("BusinessSize")}>
                  <option value="">Select business size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <p className="mt-1 text-red-500">{errors.BusinessSize?.message}</p>
              </div>
            </div>
            {/* ************************************************************************** */}
            {/* <div>
              <input
                className=" bg-secondary"
                type="file"
                accept="image/*"
                {...register("image")}
              />

              <p className="text-red-500">
                {errors.image?.type === "fileSize"
                  ? "Max file size is 10MB"
                  : errors.image?.type === "fileFormat"
                  ? "Only PNG, JPEG, or GIF formats are allowed"
                  : null}
              </p>
            </div> */}
            <div>
              <button
                type="submit"
                value="Send"
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                className="relative z-10 font-federo text-[16px] flex h-[50px] w-full sm:w-40 items-center justify-center overflow-hidden text-white bg-primary">
                {isLoading ? <ThreeDots width="50" color="#FFFFFF" /> : "Submit Now"}
              </button>
            </div>
          </form>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </section>
  );
}
