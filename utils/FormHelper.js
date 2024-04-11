import * as yup from "yup";

export const Schema = yup.object().shape({
  BusinessName: yup.string().required("Business Name is required"),
  OwnerName: yup.string().required("Business Owner name is required"),
  // Url: yup
  //   .string()
  //   .required("Social media URL is required")
  //   .matches(
  //     /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  //     "Enter a valid social media URL",
  //   ),
  BusinessAddress: yup.string().required("Please enter your business address"),
  PhoneNo: yup
    .string()
    .required("Please enter your phone")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
      "Phone number is not valid",
    ),
  OwnerPhoneNo: yup
    .string()
    .required("Please enter Business Owner phone number")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
      "Please enter valid Phone No",
    ),
  BusinessType: yup.string().required("Select your business type"),
  SellingPoint: yup.string().required("Tell us your USP"),
  Audience: yup.string().required("Select your targeted audience"),
  Demographic: yup.string().required("Select your targeted demographic"),
  BusinessAge: yup.string().required("Please enter your business age"),
  BusinessSize: yup.string().required("Select your business size"),
  // image: yup
  //   .mixed()
  //   .test("fileSize", "Max file size is 10MB", (value) => {
  //     if (!value || !value[0]) return true;
  //     return value[0].size <= 10000000; // 10MB
  //   })
  //   .test("fileFormat", "Only PNG, JPEG, or GIF formats are allowed", (value) => {
  //     if (!value || !value[0]) return true;
  //     return ["image/jpeg", "image/png", "image/svg"].includes(value[0].type);
  //   }),
});
