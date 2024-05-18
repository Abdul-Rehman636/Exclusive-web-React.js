import React from "react";
import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import image2 from "../../Images/Logo.png";
import image3 from "../../Images/Vector2.png";
import image4 from "../../Images/Vector3.png";
import image5 from "../../Images/Vector4.png";
import image6 from "../../Images/Vector5.png";
import image7 from "../../Images/Vector6.png";
import image8 from "../../Images/Vector7.png";
import image9 from "../../Images/Vector8.png";
import image10 from "../../Images/Vector9.png";
import image11 from "../../Images/Vector10.png";
import image12 from "../../Images/Vector11.png";

function Navbar() {
  function user() {
    try {
      var a = document.getElementById("Account-items");

      a.style.display = "flex";

      a.style.justifyContent = "end";

      var b = document.getElementById("user-open");

      b.style.display = "none";

      var c = document.getElementById("user-close");

      c.style.display = "block";
    } catch (error) {
      throw new Error(error);
    }
  }

  function user2() {
    var d = document.getElementById("Account-items");

    d.style.display = "none";

    d.style.justifyContent = "end";

    var e = document.getElementById("user-close");

    e.style.display = "none";

    var f = document.getElementById("user-open");

    f.style.display = "block";
  }

  function toggler() {
    var g = document.getElementById("Navbar-Toggler-Links");

    g.style.display = "flex";

    var h = document.getElementById("Toggler-close");

    h.style.display = "block";

    var i = document.getElementById("Toggler-open");

    i.style.display = "none";
  }

  function toggler2() {
    var j = document.getElementById("Navbar-Toggler-Links");

    j.style.display = "none";

    var k = document.getElementById("Toggler-close");

    k.style.display = "none";

    var l = document.getElementById("Toggler-open");

    l.style.display = "block";
  }

  const navToSign = useNavigate();

  const logout = () => {
    localStorage.removeItem("Token");

    navToSign("/");
  };

  return (
    <div id="div-3">
      <div id="div-4">
        <div>
          <img src={image2} alt="" />
        </div>
        <div id="NavLinks-div">
          <NavLink id="anchor-3" to="/">
            Home
          </NavLink>
          <NavLink id="anchor-4" to="/Contact">
            Contact
          </NavLink>
          <NavLink id="anchor-5" to="/About">
            About
          </NavLink>
          <NavLink id="anchor-6" to="/">
            Sign Up
          </NavLink>
        </div>
        <div id="div-6">
          <div id="Navbar-items">
            <div id="Navbar-input">
              <input
                type="text"
                id="search-input"
                placeholder="What are you looking for?"
              />
              <img src={image3} alt="" />
            </div>
            <div id="Wishlist">
              <NavLink to="/Wishlist">
                <img src={image4} alt="" />
              </NavLink>
            </div>
            <div id="Cart">
              <img src={image5} alt="" />
            </div>
            <div id="user-open" onClick={user}>
              <img src={image6} alt="" />
            </div>
            <div id="user-close" onClick={user2}>
              <img src={image6} alt="" />
            </div>
            <div id="Toggler-open" onClick={toggler}>
              <i id="toggler" class="fa-solid fa-bars fa-lg"></i>
            </div>
            <div id="Toggler-close" onClick={toggler2}>
              <i class="fa-solid fa-xmark fa-xl"></i>
            </div>
          </div>
          <div id="Account-items">
            <div id="div-15">
              <div id="div-10">
                <div>
                  <img src={image7} alt="" />
                </div>
                <NavLink id="text-1">Manage My Account</NavLink>
              </div>
              <div id="div-11">
                <div id="nav-item-img">
                  <img src={image8} alt="" />
                </div>
                <NavLink id="text-2">My Order</NavLink>
              </div>
              <div id="div-12">
                <div id="nav-item-img">
                  <img src={image9} alt="" />
                </div>
                <NavLink id="text-3">My Cancellations</NavLink>
              </div>
              <div id="div-13">
                <div id="nav-item-img">
                  <img src={image10} alt="" />
                </div>
                <NavLink id="text-4">My Reviews</NavLink>
              </div>
              <div id="div-14" onClick={logout}>
                <div id="nav-item-img">
                  <img src={image11} alt="" />
                </div>
                <NavLink id="text-5">Logout</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Navbar-Toggler-Links">
        <div id="div-23">
          <NavLink id="anchor-10" to="/">
            Home
          </NavLink>
          <NavLink id="anchor-11" to="/Contact">
            Contact
          </NavLink>
          <NavLink id="anchor-12" to="/About">
            About
          </NavLink>
          <NavLink id="anchor-13" to="/">
            Sign Up
          </NavLink>
          <NavLink id="anchor-14" to="/SignIn">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
