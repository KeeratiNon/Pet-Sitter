import * as Yup from "yup";

const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const phoneRegex = new RegExp("^[0-9]+$");

export const bookingInfoSchema = Yup.object({
  email: Yup.string().matches(emailRegex, "Please enter valid email"),
  phone: Yup.string()
    .matches(phoneRegex, "Please enter valid phone")
    .required("Please enter your phone"),
});
