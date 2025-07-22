import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Header.css"

const Header = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:{speed:2000}
  };
  return (
<>
<header className='main-header'>
<Slider {...settings}>
      <div className='headerImages'>
        <img src="./assets/banner/Slider1.png" alt="" className='slider4'/>
      </div>
      <div>
        <img src="./assets/banner/Slider2.png" alt="" className='slider4' />
      </div>
      <div>
        <img src="./assets/banner/Slider3.png" alt="" className='slider4'/>
      </div>
      <div>
        <img src="./assets/banner/Slider4.png" alt="" className='slider4'/>
      </div>
    </Slider>
</header>
</>
  )
}

export default Header
