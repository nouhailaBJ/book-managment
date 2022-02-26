import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.scss"
import React from "react";

function Slider() {
  return (
    <div  className="background-rotator">
      <OwlCarousel items={1} className="owl-theme background-rotator-slider" loop nav margin={8} autoplay={true} dots={false}>
      <div className="item linear-overlay">
          <img className="img" src={"/images/slider/slider2.jpg"} />
        </div>
        <div className="item linear-overlay">
          <img className="img" src={"/images/slider/slider1.jpg"} />
        </div>
      </OwlCarousel>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <div className="heading-caption">
                  <h1>Your Guide to Exceptional Books in Morocco</h1>
                  <p>Find what are you looking for</p>
                </div>
                <div className="search-form">
                  <form>
                    <div className="row">
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <select className="model form-control">
                          <option label="Select Option"></option>
                          <option value="0">Cars & Bikes</option>
                          <option value="1">Mobile Phones</option>
                          <option value="2">Home Appliances</option>
                          <option value="3">Clothing</option>
                          <option value="4">Human Resource</option>
                          <option value="5">Information Technology</option>
                          <option value="6">Marketing</option>
                          <option value="7">Others</option>
                          <option value="8">Sales</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What Are You Looking For..."
                        />
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <button type="submit" className="btn btn-theme btn-block">
                          Search <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
