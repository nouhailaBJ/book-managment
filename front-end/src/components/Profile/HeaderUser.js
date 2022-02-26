import React from 'react'
import {Link} from "react-router-dom"

function HeaderUser({editibale}) {
  return (
    <div className="col-md-12 col-xs-12 col-sm-12">
      <section className="search-result-item">
        <a className="image-link" href="#">
          <img className="image center-block" alt="" src="/images/1.jpeg" />
        </a>
        <div className="search-result-item-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12 text-center">
              <h4 className="search-result-item-heading">
                <a href="#">Nouhaila Bjaghou</a>
              </h4>
              <p>Join us at : 2020/08/25</p>
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
                    <h2>374</h2>
                    <small>Book Added</small>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="user-stats">
                    <h2>980</h2>
                    <small>Reviews Shared</small>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="user-stats">
                    <h2>980</h2>
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