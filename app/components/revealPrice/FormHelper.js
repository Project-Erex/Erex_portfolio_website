import * as yup from "yup";

export const Schema = yup.object().shape({
  BusinessName: yup.string().required("Business Name is required"),
  PhoneNo: yup
    .string()
    .required("Please enter your phone")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
      "Phone number is not valid",
    ),
})