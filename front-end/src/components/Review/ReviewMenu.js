import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateParser } from "../Utils";
import BestRestaurants from "./BestRestaurants";

function ReviewMenu({restaurant}) {
  const cities = useSelector(state => state.cityReducer)
  const restaurants = useSelector(state => state.restaurantReducer)
  return (
    <>
      <div className="col-md-4 col-xs-12 col-sm-12">
        <div className="sidebar">
          <div className="white-bg user-contact-info">
            <div class="ad-listing-meta">
              <ul>
                <li>
                  <i class="fa fa-map-marker"></i> : 
                  <span class="color">{restaurant.location}</span>
                </li>
                <li>
                  <i class="fa fa-phone"></i> : 
                  <span class="color">{restaurant.number}</span>
                </li>
                <li>
                  <i class="fa fa-envelope"></i> : 
                  <span class="color">{restaurant.email}</span>
                </li>
                <li>
                  <i class="fa fa-clock-o"></i> : 
                  <span class="color">{dateParser(restaurant.createdAt)}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget">
            <div className="widget-heading">
              <h4 className="panel-title">
                <a>Cities</a>
              </h4>
            </div>
            <div className="widget-content categories">
              <ul>
                  {cities.length && cities.map((city, index) => (
                    <li>
                       <Link to={`/category/${city._id}`} key={index}>
                           {city.name}
                        </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <BestRestaurants restaurants={restaurants.slice(0, 5)}/>
        </div>
      </div>
    </>
  );
}

export default ReviewMenu;
