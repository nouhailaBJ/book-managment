import React from "react";

function Information() {
  return (
    <div className="contactInfo  mt-4">
      <div className="singleContadds">
        <i className="fa fa-map-marker"></i>
        <p>Model Town Link Road Lahore, 60 Street. Pakistan 54770</p>
      </div>
      <div className="singleContadds phone">
        <i className="fa fa-phone"></i>
        <p>
          0123 456 78 90 - <span>(Office)</span>
        </p>
        <p>
          0123 456 78 90 - <span>(Mobile)</span>
        </p>
      </div>
      <div className="singleContadds">
        <i className="fa fa-envelope"></i>
        <p>contact@scriptsbundle.com</p>
        <p>contact@scriptsbundle.com</p>
      </div>
    </div>
  );
}

export default Information;
