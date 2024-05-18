import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
import Carouseli1 from "../../Images/Vector13.png";
import Carouseli2 from "../../Images/Vector14.png";
import Carouseli3 from "../../Images/herosec.png";
import { NavLink } from "react-router-dom";

function Carousel() {
  const carousel1 = {
    backgroundColor: "#000000",
    // height: "398px",
    paddingTop: "0px",
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const data1 = [
    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },

    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },

    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },

    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },

    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },

    {
      name1: "iPhone 14 Series",
      name2: "Up to 10% off Voucher",
      link1: "Shop Now",
      image1: Carouseli2,
      image2: Carouseli1,
      image3: Carouseli3,
    },
  ];

  return (
    <div id="Carousel-1">
      <div id="Carousel-2">
        <Slider {...settings} style={carousel1}>
          {data1.map((d1) => (
            <div id="carousel-div-1">
              <div id="carousel-div-2">
                <div id="carousel-div-3">
                  <div id="carousel-div-6">
                    <div>
                      <img src={d1.image2} id="image-cs1" alt="" />
                    </div>
                    <p id="carousel-t1">{d1.name1}</p>
                  </div>
                  <p id="carousel-t2">{d1.name2}</p>
                  <div id="carousel-div-4">
                    <NavLink id="carousel-a1">{d1.link1}</NavLink>
                    <div>
                      <img src={d1.image1} id="image-cs2" alt="" />
                    </div>
                  </div>
                </div>
                <div id="carousel-div-5">
                  <img src={d1.image3} id="image-cs3" alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
