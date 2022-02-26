import React from "react";
import { Container, Row } from "react-bootstrap";
import LeftHeaderTop from "./menus/LeftHeaderTop";
import NavHeader from "./menus/NavHeader";
import RightHeaderTop from "./menus/RightHeaderTop";

const Header = (props) => {
  return (
	<div className="colored-header">
	  <div className="header-top dark">
		<Container>
			<div className="header-top-flex">
				<LeftHeaderTop />
				<RightHeaderTop />
			</div>
		</Container>
	  </div>
	  <div className="clearfix"></div>
	  <NavHeader />
	</div>
  );
};

export default Header;
