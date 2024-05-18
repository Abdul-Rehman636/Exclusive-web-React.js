import React from "react";
import "./services.css";
import image86 from "../../Images/car.png";
import image87 from "../../Images/sup.png";
import image88 from "../../Images/trust.png";

function Services() {
  return (
    <div id="div-ms">
      <div id="div-ms2">
        <div id="div-s1">
          <div>
            <img src={image86} alt="" />
          </div>
          <p id="ctext-s1">FREE AND FAST DELIVERY</p>
          <p id="ctext-s2">Free delivery for all orders over $140</p>
        </div>
        <div id="div-s2">
          <div>
            <img src={image87} alt="" />
          </div>
          <p id="ctext-s1">24/7 CUSTOMER SERVICE</p>
          <p id="ctext-s2">Friendly 24/7 customer support</p>
        </div>
        <div id="div-s3">
          <div>
            <img src={image88} alt="" />
          </div>
          <p id="ctext-s1">MONEY BACK GUARANTEE</p>
          <p id="ctext-s2">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
