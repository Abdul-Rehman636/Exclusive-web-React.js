import React from "react";
import "./timer.css";
import image17 from "../../Images/Rectangle 17.png";
import image18 from "../../Images/Semiclone.png";

function Timer() {
  return (
    <div id="div-60">
      <div id="div-61">
        <div id="div-62">
          <div>
            <img id="nimage-30" src={image17} alt="" />
          </div>
          <p id="text-60">Today’s</p>
        </div>
      </div>
      <div id="div-63">
        <div id="div-64">
          <div id="div-66">
            <div id="div-65">
              <p id="text-61">Flash Sales</p>
            </div>
            <div id="ndiv-20">
              <div>
                <p id="text-62">Days</p>
                <p id="text-66">03</p>
              </div>
              <div>
                <img id="nimage-31" src={image18} alt="" />
              </div>
              <div>
                <p id="text-63">Hours</p>
                <p id="text-67">23</p>
              </div>
              <div>
                <img id="nimage-31" src={image18} alt="" />
              </div>
              <div>
                <p id="text-64">Minutes</p>
                <p id="text-68">13</p>
              </div>
              <div>
                <img id="nimage-31" src={image18} alt="" />
              </div>
              <div>
                <p id="text-65">Seconds</p>
                <p id="text-69">56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
