import React, { useState } from "react";
import "./signup.css";
import Note from "../Note/Note";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import { registerSchema } from "../../Schema/SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import image99 from "../../Images/register.png";
import image100 from "../../Images/google.png";
import { NavLink, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SignUp() {
  const navToHome = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const existed = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const getSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      localStorage.setItem("Token", user.accessToken);
      window.confirm("User created successfully...");
      navToHome("/Home");
    } catch (error) {
      const confirmExist = window.confirm("Email is Already in use");

      if (confirmExist) {
        existed("/");

        window.location.reload();
      }
    } finally {
      setIsLoading(false);
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
          <p id="r-t-1">Create an account</p>
          <p id="r-t-2">Enter your details below</p>
          <form action="" id="signup-form" onSubmit={getSubmit}>
            <div id="name-input">
              <input
                type="text"
                required
                name="name"
                id="r-input1"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p id="error-text">{errors.name}</p>
              ) : null}
            </div>
            <div id="email-input">
              <input
                type="email"
                required
                name="email"
                id="r-input1"
                placeholder="Email or Phone Number"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p id="error-text">{errors.email}</p>
              ) : null}
            </div>
            <div id="password-input">
              <input
                type="password"
                required
                name="password"
                id="r-input1"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p id="error-text">{errors.password}</p>
              ) : null}
            </div>
            <button type="submit" id="r-anchor1">
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <a href="#" id="r-a-m1">
            <div>
              <img src={image100} alt="" />
            </div>
            <NavLink to="/Login" id="r-anchor2">
              Sign up with Google
            </NavLink>
          </a>
          <p id="r-t-3">
            Already have account?
            <NavLink id="r-anchor3" to="/SignIn">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
      <Footer footer="footer-l1" />
    </>
  );
}

export default SignUp;
