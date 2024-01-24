import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide1 from "../assets/img/slider1.png";
import Slide2 from "../assets/img/slider2.png";
import Slide3 from "../assets/img/slider3.png";
// import IconNext from "../assets/img/icons/icon-white-next.svg";
// import IconPrev from "../assets/img/icons/icon-white-prev.svg";

const SliderCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 2.3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 2.4,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 2.5,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="customSlick max-h-[100%] h-[100%] w-[100%] mx-auto">
        <Slider {...settings}>
          <div>
            <img src={Slide1} className="" />
          </div>
          <div>
            <img src={Slide2} className="" />
          </div>
          <div>
            <img src={Slide3} className="" />
          </div>
          <div>
            <img src={Slide1} className="" />
          </div>
          <div>
            <img src={Slide2} className="" />
          </div>
          <div>
            <img src={Slide3} className="" />
          </div>
          <div>
            <img src={Slide1} className="" />
          </div>
          <div>
            <img src={Slide2} className="" />
          </div>
          <div>
            <img src={Slide3} className="" />
          </div>
          <div>
            <img src={Slide1} className="" />
          </div>
          <div>
            <img src={Slide2} className="" />
          </div>
          <div>
            <img src={Slide3} className="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderCarousel;
