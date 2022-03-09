import React from 'react'
import { Link } from 'react-router-dom'

function BestRestaurants({restaurants}) {
  return (
    <div className="widget">
    <div className="widget-heading">
      <h4 className="panel-title">
        <a>Popular restaurants</a>
      </h4>
    </div>
    <div className="widget-content recent-ads">
    {restaurants.length && (
        restaurants.map((restaurant) => (
            <div className="recent-ads-list">
            <div className="recent-ads-container">
              <div className="recent-ads-list-image">
                <Link to={`/restaurant/${restaurant._id}`} href="#" className="recent-ads-list-image-inner">
                  <img src={restaurant.image} alt="" />
                </Link>
              </div>
              <div className="recent-ads-list-content">
                <h3 className="recent-ads-list-title">
                  <Link to={`/restaurant/${restaurant._id}`}>{restaurant.title}</Link>
                </h3>
              </div>
            </div>
          </div>
        ))
    )}

    </div>
  </div>
  )
}

export default BestRestaurants