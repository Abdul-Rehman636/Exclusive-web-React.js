import React from "react";
import "./contact.css";
import image110 from "../../Images/phone-c.png";
import image111 from "../../Images/email-c.png";
import Note from "../Note/Note";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";

function Contact() {
  return (
    <>
      <Note />
      <Navbar
        img1="img-1"
        img2="img-2"
        user="user1-2"
        user2="user2-2"
        div8="div-8"
        div7="div-7"
        div5="div-5"
        togcut="tog-cut3"
        togdiv="tog-div3"
        div22="div-22-3"
        div9="div-9-2"
      />{" "}
      <div id="contact1">
        <div id="contact2">
          <div id="contact3">
            <NavLink to="/" id="con-a1">
              Home /
            </NavLink>
            <NavLink to="/Contact" id="con-a2">
              {" "}
              Contact
            </NavLink>
          </div>
          <div id="contact4">
            <div id="contact5">
              <div id="contact7">
                <div id="contact9">
                  <div>
                    <img src={image110} alt="" />
                  </div>
                  <p id="c-t-1">Call To Us</p>
                </div>
                <p id="c-t-2">We are available 24/7, 7 days a week.</p>
                <p id="c-t-3">Phone: +8801611112222</p>
              </div>
              <div id="contact8">
                <div id="contact9-2">
                  <div>
                    <img src={image111} alt="" />
                  </div>
                  <p id="c-t-1">Write To Us</p>
                </div>
                <p id="c-t-2">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p id="c-t-3">Emails: customer@exclusive.com</p>
                <p id="c-t-3">Emails: support@exclusive.com</p>
              </div>
            </div>
            <div id="contact6">
              <div id="input-mc1">
                <div id="c10-m">
                  <div id="contact-10">
                    <input type="text" required />
                    <div id="place1">
                      Your Name <span>*</span>
                    </div>
                  </div>
                </div>
                <div id="c11-m">
                  <div id="contact-11">
                    <input type="text" required />
                    <div id="place2">
                      Your Email <span>*</span>
                    </div>
                  </div>
                </div>
                <div id="c12-m">
                  <div id="contact-12">
                    <input type="number" required />
                    <div id="place3">
                      Your Phone <span>*</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  id="textarea-1"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div id="c-anchor-1m">
                <a href="#" id="con-a3">
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footer="footer-l1" />
    </>
  );
}

export default Contact;
