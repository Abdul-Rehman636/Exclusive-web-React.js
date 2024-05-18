import React from "react";
import "./signin.css";
import Note from "../Note/Note";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { loginSchema } from "../../Schema/SignIn";
import image99 from "../../Images/register.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const initialValues = {
  email: "",
  password: "",
};

function SignIn() {
  const navToHome = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const loginSubmit = async (l) => {
    l.preventDefault();
    const email = l.target.email.value;
    const password = l.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const loginUser = userCredential.user;
      console.log(loginUser);

      localStorage.setItem("Token", loginUser.accessToken);
      navToHome("/Home");
    } catch (error) {
      const invalidUser = window.confirm("Email or Password is Invalid");

      if (invalidUser) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      <Note />
      <Navbar />
      <div id="regis-m1">
        <div id="r-i1-d">
          <img id="r-image1" src={image99} alt="" />
        </div>
        <div id="regis-m2">
          <p id="l-t-1">Login in to Exclusive</p>
          <p id="r-t-2">Enter your details below</p>
          <form action="" id="signin-form" onSubmit={loginSubmit}>
            <input
              type="email"
              id="r-input1"
              placeholder="Email or Phone Number"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p id="error-text">{errors.email}</p>
            ) : null}
            <input
              type="password"
              id="r-input1"
              name="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p id="error-text">{errors.password}</p>
            ) : null}
            <div id="l-m-d1">
              <button id="l-anchor1" type="submit">
                Login
              </button>
              <NavLink id="l-anchor2">Forget Password?</NavLink>
            </div>
          </form>
        </div>
      </div>
      <Footer footer="footer-l1" />
    </>
  );
}

export default SignIn;
