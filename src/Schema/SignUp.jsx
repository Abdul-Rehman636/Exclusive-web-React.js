import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().min(6).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(8).required("Please Enter Your Password"),
});
