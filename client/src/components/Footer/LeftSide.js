import React from 'react'

function LeftSide() {
  return (
    <div className="col-md-5 col-sm-6 col-xs-12">
        <div className="widget">
        <div className="logo">
            <img alt="" src="images/logo.png" />
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur et dolor eget erat fringilla port.
        </p>
        <h4>Download the app for free:</h4>
        <ul className="apps-donwloads">
            <li>
            <img src="images/googleplay.png" alt="" />
            </li>
            <li>
            <img src="images/appstore.png" alt="" />
            </li>
        </ul>
        </div>
    </div>
  )
}

export default LeftSide