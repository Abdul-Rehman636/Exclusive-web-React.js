import React from "react";
import Slider from "react-slick";
import CardsOne from "../CardsOne/CardsOne";
import Product1 from "../../Images/product1.png";
import Product2 from "../../Images/product2.png";
import Product3 from "../../Images/product3.png";
import Product4 from "../../Images/product4.png";
import Product5 from "../../Images/product5.png";
import Product6 from "../../Images/product6.png";
import Product7 from "../../Images/product7.png";
import Product8 from "../../Images/product8.png";
import FourHalfStar from "../../Images/Four Half Star.png";
import FiveStar from "../../Images/Five star.png";
import FourStar from "../../Images/Four Star.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    wrapperId: "btn1",
    id: 1,
    heart: "heart",
    redHeart: "red-1",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    producti: Product1,
    price: "$120",
    lprice: "$160",
    rating: "(88)",
    stars: FiveStar,
  },
  {
    wrapperId: "btn2",
    id: 2,
    redHeart: "red-2",
    heart: "heart-2",
    discount: "-50%",
    name: "AK-900 Wired Keyboard",
    producti: Product2,
    price: "$60",
    lprice: "$120",
    rating: "(92)",
    stars: FourStar,
  },
  {
    wrapperId: "btn3",
    id: 3,
    heart: "heart-3",
    redHeart: "red-3",
    discount: "-30%",
    name: "IPS LCD Gaming Monitor",
    producti: Product3,
    price: "$150",
    lprice: "$200",
    rating: "(95)",
    stars: FiveStar,
  },
  {
    wrapperId: "btn4",
    id: 4,
    heart: "heart-4",
    redHeart: "red-4",
    discount: "-20%",
    name: "S-Series Comfort Chair",
    producti: Product4,
    price: "$160",
    lprice: "$200",
    rating: "(90)",
    stars: FourHalfStar,
  },
  {
    wrapperId: "btn5",
    id: 5,
    heart: "heart-5",
    redHeart: "red-5",
    discount: "-15%",
    name: "The north coat",
    producti: Product5,
    price: "$260",
    lprice: "$360",
    rating: "(65)",
    stars: FiveStar,
  },
  {
    wrapperId: "btn6",
    id: 6,
    heart: "heart-6",
    redHeart: "red-6",
    discount: "-25%",
    name: "Gucci duffle bag",
    producti: Product6,
    price: "$960",
    lprice: "$1160",
    rating: "(85)",
    stars: FourHalfStar,
  },
  {
    wrapperId: "btn7",
    id: 7,
    heart: "heart-7",
    redHeart: "red-7",
    discount: "-20%",
    name: "RGB liquid CPU Cooler",
    producti: Product7,
    price: "$160",
    lprice: "$170",
    rating: "(75)",
    stars: FourHalfStar,
  },
  {
    wrapperId: "btn8",
    id: 8,
    heart: "heart-8",
    redHeart: "red-8",
    discount: "-35%",
    name: "Small BookSelf",
    producti: Product8,
    price: "$360",
    lprice: "",
    rating: "(45)",
    stars: FiveStar,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4.5,
  slidesToScroll: 4,
};

const firstDiv = {
  width: "100%",
  display: "flex",
  justifyContent: "end",
};

const secondDiv = {
  width: "90%",
};

function CardEdit1() {
  const navigate = useNavigate();

  const addToCart = (item) => {
    console.log("Adding item to cart:", item);
    navigate("/Cart", {
      state: item,
    });
  };

  return (
    <div style={firstDiv}>
      <div style={secondDiv}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={item.id}>
              <CardsOne
                id={item.id}
                wrapperId={index}
                heart={item.heart}
                redHeart={item.redHeart}
                discount={item.discount}
                name={item.name}
                producti={item.producti}
                price={item.price}
                lprice={item.lprice}
                rating={item.rating}
                stars={item.stars}
                onCardClick={() => addToCart(item)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CardEdit1;
