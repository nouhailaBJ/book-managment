import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logout from '../Log/Logout'

function RightHeaderTop() {
  return (
	<div className="header-right">
		<div className="pull-right">
		 <ul className="listnone">
			<li>
				<Link to="/connection">
					<i className="fa fa-sign-in"></i> Connection
				</Link>
			</li>
			<li className="profile-menu dropdown_book speciel-drop">
				<img className="img-circle resize" alt="" src="/images/4.jpg" />
				<NavDropdown
				id="nav-dropdown-dark-example"
				className="dropdown_menu"
				title={"Nouhaila Bjs"}
				>
				<Link to="/profile">My Profile</Link>
				<NavDropdown.Divider />
				<Link to="/settings">Settings</Link>
				<NavDropdown.Divider />
				<Logout />
				</NavDropdown>
			</li>
		</ul>
		</div>
	</div>
  )
}

export default RightHeaderTop