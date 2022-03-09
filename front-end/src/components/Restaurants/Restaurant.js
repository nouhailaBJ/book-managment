import React from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";

function Restaurant({restaurant}) {
  return (
    <div className="book">
      <div className="category-grid-box-1">
        <div className="image">
        <Link to={`/restaurant/${restaurant._id}`}><img
            src={restaurant.image}
            className="img-responsive"
          /></Link>
          <div className="ribbon popular"></div>
        </div>
        <div className="short-description-1 clearfix">
          <div className="category-title">
            <span>
              {restaurant.location}
            </span>
          </div>
          <h3>
          <Link to={`/restaurant/${restaurant._id}`}>
            {restaurant.title}
          </Link>
          </h3>
          <Stars reviews={restaurant.reviews}/>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
