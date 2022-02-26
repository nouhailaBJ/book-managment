import React from "react";
import CenterSide from "./CenterSide";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Footer() {
  return (
    <footer className="footer-bg gray">
      <div className="footer-top">
        <div className="container">
          <div className="row">
          <LeftSide />
          <CenterSide/>
          <RightSide />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
