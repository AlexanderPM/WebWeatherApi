import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleSlider(props) {

  const matches = useMediaQuery('(min-width:1020px)');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    AdaptiveHeight: true,
    arrows: true
  };

  if (matches === true) {
    return (
      <div className="main-hourly_contener-slider">
        <Slider {...settings}>
          {props.renderHoyrlyPredictions}
        </Slider>
      </div>
    );
  }
  else {
    return (
      <div className="main-hourly_contener-slider">
        <div>Для просмотра почасового прогноза используйте компьютерную версию сайта.</div>
      </div>
    );
  }

}