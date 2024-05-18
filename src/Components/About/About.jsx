import React from "react";
import "./about.css";
import Note from "../Note/Note";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import image112 from "../../Images/about.png";
import image113 from "../../Images/about1s.png";
import image114 from "../../Images/about2s.png";
import image115 from "../../Images/about3s.png";
import image116 from "../../Images/about4s.png";
import image117 from "../../Images/twitter2.png";
import image118 from "../../Images/insta2.png";
import image119 from "../../Images/linkedin2.png";
import image120 from "../../Images/person1.png";
import image121 from "../../Images/person2.png";
import image122 from "../../Images/person3.png";
import image123 from "../../Images/button3.png";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <Note />
      <Navbar />
      <div id="about-1">
        <div id="about-2">
          <div id="about-m1">
            <div id="about-3">
              <NavLink to="/" id="about-a1">
                Home /
              </NavLink>
              <NavLink to="/About" id="about-a2">
                About
              </NavLink>
            </div>
            <div id="about-4">
              <div id="about-5">
                <p id="about-t1">Our Story</p>
                <p id="about-t2">
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.
                </p>
                <p id="about-t3">
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
              <div id="about-6">
                <img id="about-i1" src={image112} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div id="about-sm1">
          <div id="about-sm2">
            <div id="about-1s">
              <div>
                <img src={image113} alt="" />
              </div>
              <p id="about-t4">10.5k</p>
              <p id="about-t5">Sallers active our site</p>
            </div>
            <div id="about-1s">
              <div>
                <img src={image114} alt="" />
              </div>
              <p id="about-t4">33k</p>
              <p id="about-t5">Monthly Product Sale</p>
            </div>
            <div id="about-1s">
              <div>
                <img src={image115} alt="" />
              </div>
              <p id="about-t4">45.5k</p>
              <p id="about-t5">Customer active in our site</p>
            </div>
            <div id="about-1s">
              <div>
                <img src={image116} alt="" />
              </div>
              <p id="about-t4">25k</p>
              <p id="about-t5">Annual gross sale in our site</p>
            </div>
          </div>
        </div>
        <div id="about-info-m1">
          <div id="about-info-m2">
            <div id="person-1">
              <div>
                <img id="per-i1" src={image120} alt="" />
              </div>
              <p id="pt-1">Tom Cruise</p>
              <p id="pt-2">Founder & Chairman</p>
              <div id="social1">
                <div>
                  <img src={image117} alt="" />
                </div>
                <div>
                  <img src={image118} alt="" />
                </div>
                <div>
                  <img src={image119} alt="" />
                </div>
              </div>
            </div>
            <div id="person-2">
              <div>
                <img id="per-i2" src={image121} alt="" />
              </div>
              <p id="pt-1">Emma Watson</p>
              <p id="pt-2">Managing Director</p>
              <div id="social1">
                <div>
                  <img src={image117} alt="" />
                </div>
                <div>
                  <img src={image118} alt="" />
                </div>
                <div>
                  <img src={image119} alt="" />
                </div>
              </div>
            </div>
            <div id="person-3">
              <div>
                <img id="per-i3" src={image122} alt="" />
              </div>
              <p id="pt-1">Will Smith</p>
              <p id="pt-2">Product Designer</p>
              <div id="social1">
                <div>
                  <img src={image117} alt="" />
                </div>
                <div>
                  <img src={image118} alt="" />
                </div>
                <div>
                  <img src={image119} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="button3ab">
            <img src={image123} alt="" />
          </div>
        </div>
      </div>
      <Services />
      <Footer footer="footer-l1" />
    </>
  );
}

export default About;
