import React from "react";
import "./note.css";
import image1 from "../../Images/Vector1.png";

function Note() {
  return (
    <div className="App">
      <div id="start">
        <div id="div-1">
          <div id="div-2">
            <p id="text-1">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a id="anchor-1" href="#">
                ShopNow
              </a>
            </p>
            <a href="#" id="anchor-2">
              English <img id="image-1" src={image1} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
