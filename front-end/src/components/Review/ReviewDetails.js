import React from "react";
import Stars from "../Restaurants/Stars";
import { dateParser } from "../Utils";
import ListReviews from "./ListReviews";

function ReviewDetails({restaurant}) {
  return (
    <>
      <div className="col-md-12">
        <div className="heading-zone">
          <h1>{restaurant.title}</h1>
          <div className="short-history">
            <ul>
              <li>
                <b>{dateParser(restaurant.createdAt)}</b>
              </li>

              <li>
                City:
                <b>
                  <a href="#">{restaurant.city.name}</a>
                </b>
              </li>
              <li>
                <Stars stars={restaurant.reviews}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-xs-12 col-sm-12">
        <div className="featured-slider-single">
          <img
            alt="Carspot"
            src={restaurant.image}
            className="img-responsive"
          />
          <div className="information-book">
            <div className="singlepage-detail ">
              <div className="content-box-grid">
                <div className="short-features">
                  <div className="heading-panel">
                    <h3 className="main-title text-left">Details</h3>
                  </div>
                  <p>
                    {restaurant.desc}
                  </p>
                  <div className="heading-panel">
                    <h3 className="main-title text-left">PRICE RANGE</h3>
                  </div>
                  <p> {restaurant.price_range}</p>
                  <div className="heading-panel">
                    <h3 className="main-title text-left">SPECIAL DIETS</h3>
                  </div>
                  <p>
                     {restaurant.price_range}
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="alert-box-container margin-top-30">
          <div className="well p-4 text-center">
            <h3>You can Book fro here</h3>
            <button className="btn btn-theme mt-4 w-50 ">Book</button>
          </div>
        </div> */}
        <ListReviews reviews={restaurant.reviews} id={restaurant._id }/>
      </div>
    </>
  );
}

export default ReviewDetails;
