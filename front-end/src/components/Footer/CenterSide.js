import React from "react";
import {Link} from "react-router-dom"

function CenterSide() {
  return (
    <>
      <div className="col-md-2 col-sm-6 col-xs-12">
        <div className="widget my-quicklinks">
          <h5>Quick Links</h5>
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
              <a className="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
              {/* <span>Facebook</span> */}
            </li>
            <li>
              <a className="Twitter" href="">
                <i className="fa fa-twitter"></i>
              </a>
              {/* <span>Twitter</span> */}
            </li>
            <li>
              <a className="Linkedin" href="">
                <i className="fa fa-linkedin"></i>
              </a>
              {/* <span>Linkedin</span> */}
            </li>
            <li>
              <a className="Google" href="">
                <i className="fa fa-google-plus"></i>
              </a>
              {/* <span>Google+</span> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CenterSide;
