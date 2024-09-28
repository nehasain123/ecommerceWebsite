import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import companyimage1 from "../Carousel/images/logo1.png";
import companyimage2 from "../Carousel/images/logo2.png";  // Ensure you have different images
import companyimage3 from "../Carousel/images/logo3.png";
import companyimage4 from "../Carousel/images/logo4.png";
import companyimage5 from "../Carousel/images/logo5.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="logo-carousel-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="logo-carousel-inner">
              <div className="single-logo-item">
                <img src={companyimage1} alt="Company 1" />
              </div>
              <div className="single-logo-item">
                <img src={companyimage2} alt="Company 2" />
              </div>
              <div className="single-logo-item">
                <img src={companyimage3} alt="Company 3" />
              </div>
              <div className="single-logo-item">
                <img src={companyimage4} alt="Company 4" />
              </div>
              <div className="single-logo-item">
                <img src={companyimage5} alt="Company 5" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
