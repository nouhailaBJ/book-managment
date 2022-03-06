import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.scss"
import React from "react";
import { useSelector } from "react-redux";

function Slider() {
  const cities = useSelector(state => state.cityReducer)
  return (
    <div  className="background-rotator">
      <OwlCarousel items={1} className="owl-theme background-rotator-slider" loop nav margin={8} autoplay={true} dots={false}>
      <div className="item linear-overlay">
          <img className="img" src={"/images/slider/pexels-huy-phan-1383776.jpg"} />
        </div>
        <div className="item linear-overlay">
          <img className="img" src={"/images/slider/pexels-huy-phan-1383776.jpg"} />
        </div>
      </OwlCarousel>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <div className="heading-caption">
                  <h1>Your Guide to Exceptional Restaurant in Morocco</h1>
                  <p>Find what are you looking for</p>
                </div>
                <div className="search-form">
                    <div className="row">
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <select className="model form-control">
                          <option label="Select Option"></option>
                          {
                            cities.map((city, index) => <option value={city._id} key={index}>{city.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City or Restaurant Name ..... "
                        />
                      </div>
                      <div className="col-md-4 col-xs-12 col-sm-4">
                        <button type="submit" className="btn btn-theme btn-block">
                        Let’s go <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
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
