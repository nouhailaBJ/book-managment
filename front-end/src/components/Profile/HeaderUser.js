import React from 'react'
import {Link} from "react-router-dom"
import { dateParser } from '../Utils'

function HeaderUser({editibale, userData }) {
  return (
    <div className="col-md-12 col-xs-12 col-sm-12">
      <section className="search-result-item">
        <div className="image-link">
          <img className="image center-block" alt="" src={userData.avatar} />
        </div>
        <div className="search-result-item-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12 text-center">
              <h4 className="search-result-item-heading">
                <a href="#">{userData.name }</a>
              </h4>
              <p>Join us at : { dateParser(userData.createdAt) }</p>
              {!editibale ? (
                 <Link to="/settings" className="btn btn-theme">
                  Edit My Profile
                  </Link>
              ) : (
                <Link to="/profile" className="btn btn-theme">
                  return To My Profile
                </Link>
              )}
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="row ad-history">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="user-stats">
                    <h2>0</h2>
                    <small>Books</small>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="user-stats">
                    <h2>0</h2>
                    <small>Reviews</small>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="user-stats">
                    <h2>0</h2>
                    <small>Followers</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeaderUser