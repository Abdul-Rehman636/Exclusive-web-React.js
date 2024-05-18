import React from "react";
import "./cardsOne.css";
import Heart from "../../Images/Vector15.png";
import Eye from "../../Images/Vector16.png";
import RedHeart from "../../Images/red heart group.png";

function CardsOne(props) {
  function heart() {
    var heart = document.getElementById(props.heart);

    heart.style.display = "none";

    var redHeart = document.getElementById(props.redHeart);

    redHeart.style.display = "flex";
  }

  function redheart() {
    var heart = document.getElementById(props.heart);

    heart.style.display = "block";

    var redHeart = document.getElementById(props.redHeart);

    redHeart.style.display = "none";
  }

  function enter() {
    var button1 = document.getElementById(props.wrapperId);
    if (button1) {
      button1.style.display = "flex";
    }
  }

  function leave() {
    var button1 = document.getElementById(props.wrapperId);

    if (button1) {
      button1.style.display = "none";
    }
  }

  return (
    <div id="card-m">
      <div id="card-1">
        <div id="card-2">
          <div id="card-3">
            <div>
              <img src={props.producti} alt="" />
            </div>
          </div>
          <div id="card-4" onMouseEnter={enter} onMouseLeave={leave}>
            <div id="card-5">
              <p id="text-1">{props.discount}</p>
              <div id="icon-m">
                <div id="heart-m">
                  <img id={props.heart} onClick={heart} src={Heart} alt="" />
                  <img
                    id={props.redHeart}
                    onClick={redheart}
                    src={RedHeart}
                    alt=""
                  />
                </div>
                <div id="eye-m">
                  <img id="eye" src={Eye} alt="" />
                </div>
              </div>
            </div>
            <button id={props.wrapperId} onClick={props.onCardClick}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <p id="text-2">{props.name}</p>
        <div id="card-6">
          <p id="text-3">{props.price}</p>
          <del id="text-4">{props.lprice}</del>
        </div>
        <div id="card-7">
          <div>
            <img src={props.stars} alt="" />
          </div>
          <p id="text-5">{props.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default CardsOne;
