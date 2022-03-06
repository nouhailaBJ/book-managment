import React from "react";
import {Link} from "react-router-dom"

function CenterSide() {
  return (
    <>
      <div className="col-md-2 col-sm-6 col-xs-12">
        <div className="widget my-quicklinks">
          <h5>Popular Pages</h5>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/faqs">Faqs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="widget socail-icons">
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a className="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a className="" href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="" href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="" href="">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CenterSide;
