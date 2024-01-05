import * as yup from "yup";
export const Schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .strict(true)
    .trim("white spaces before/after name are note allowed"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ),
  message: yup
    .string()
    .required("Message is required")
    .strict(true)
    .trim("white spaces before/after message are note allowed")
    .min(30),
});
