import React from "react";
import "./hero.css";
import image13 from "../../Images/Vector12.png";
import Carousel from "../Carousel/Carousel";

function Hero() {
  return (
    <div id="div-30">
      <div id="div-31">
        <div id="div-32">
          <div id="div-35">
            <a href="#" id="anchor-20">
              Woman’s Fashion
            </a>
            <div>
              <img src={image13} alt="" />
            </div>
          </div>
          <div id="div-36">
            <a href="#" id="anchor-21">
              Men’s Fashion
            </a>
            <div>
              <img src={image13} alt="" />
            </div>
          </div>
          <div id="div-37">
            <a href="#" id="anchor-22">
              Electronics
            </a>
          </div>
          <div id="div-38">
            <a href="#" id="anchor-23">
              Home & Lifestyle
            </a>
          </div>
          <div id="div-39">
            <a href="#" id="anchor-24">
              Medicine
            </a>
          </div>
          <div id="div-40">
            <a href="#" id="anchor-25">
              Sports & Outdoor
            </a>
          </div>
          <div id="div-41">
            <a href="#" id="anchor-26">
              Baby’s & Toys
            </a>
          </div>
          <div id="div-42">
            <a href="#" id="anchor-27">
              Groceries & Pets
            </a>
          </div>
          <div id="div-43">
            <a href="#" id="anchor-28">
              Health & Beauty
            </a>
          </div>
        </div>
        <div id="carousel-d1">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Hero;
