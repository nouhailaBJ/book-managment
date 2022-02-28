import React, { useContext } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UidContext } from '../AppContext'
import Logout from '../Log/Logout'
import {useSelector} from "react-redux"

function RightHeaderTop() {
const uid = useContext(UidContext)
const userData = useSelector((state) => state.userReducer)
  return (
	<div className="header-right">
		<div className="pull-right">
		 <ul className="listnone">
			{uid ? (
				<li className="profile-menu dropdown_book speciel-drop">
					<img className="img-circle resize" alt="" src={userData.avatar} />
					<NavDropdown
					id="nav-dropdown-dark-example"
					className="dropdown_menu"
					title={userData.name}
					>
					<Link to="/profile">My Profile</Link>
					<NavDropdown.Divider />
					<Link to="/settings">Settings</Link>
					<NavDropdown.Divider />
					<Logout />
					</NavDropdown>
				</li>
			) : (
				<li>
					<Link to="/connection">
						<i className="fa fa-sign-in"></i> Connection
					</Link>
				</li>
			)}
		</ul>
		</div>
	</div>
  )
}

export default RightHeaderTop