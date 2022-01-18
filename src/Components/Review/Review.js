import React from "react";
import "./review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dp from "../../img/pic.png";
import left from "../../img/left.png";
import right from "../../img/right.png";

export default function Review() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        src={left}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
        src={right}
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,
  };
  return (
    <section className="review">
      <div className="container">
        <div className="review-section">
          <Slider {...settings}>
            <div className="slider-sec">
              <div className="row">
                <div className="col-md-12">
                  <h3>What our customer are saying</h3>
                  <hr />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                  <center>
                    <img src={dp} />
                  </center>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <h4>Edward Newgate</h4>
                  <h5>Founder Circle</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-sec">
              <div className="row">
                <div className="col-md-12">
                  <h3>What our customer are saying</h3>
                  <hr />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                  <center>
                    <img src={dp} />
                  </center>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <h4>Edward Newgate</h4>
                  <h5>Founder Circle</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-sec">
              <div className="row">
                <div className="col-md-12">
                  <h3>What our customer are saying</h3>
                  <hr />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                  <center>
                    <img src={dp} />
                  </center>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <h4>Edward Newgate</h4>
                  <h5>Founder Circle</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </div>
            <div className="slider-sec">
              <div className="row">
                <div className="col-md-12">
                  <h3>What our customer are saying</h3>
                  <hr />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                  <center>
                    <img src={dp} />
                  </center>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <h4>Edward Newgate</h4>
                  <h5>Founder Circle</h5>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p>
                    “Our dedicated patient engagement app and web portal allow
                    you to access information instantaneously (no tedeous form,
                    long calls, or administrative hassle) and securely”
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
