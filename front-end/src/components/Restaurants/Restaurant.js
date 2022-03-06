import React from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";

function Restaurant() {
  return (
    <div className="book">
      <div className="category-grid-box-1">
        <div className="image">
        <Link to="/restaurant/2"><img
            alt="Carspot"
            src="/images/restaurant/1.jpg"
            className="img-responsive"
          /></Link>
          <div className="ribbon popular"></div>
        </div>
        <div className="short-description-1 clearfix">
          <div className="category-title">
            <span>
              <a href="#">San Sebastian - Donostia, Spain</a>
            </span>
          </div>
          <h3>
            <a title="" href="single-page-listing.html">
              Akelarre
            </a>
          </h3>
          <Stars />
        </div>
        {/* <div className="ad-info-1">
          <a href="#" className="btn btn-theme w-100">
            <i className="fa fa-angle-right"></i> More details
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Restaurant;
