import React, { useEffect, useState } from 'react'
import { Container, NavDropdown, NavLink, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHeader() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	  }
	useEffect(() => {
		const changeWidth = () => {
		  setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', changeWidth)
		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	  }, [])
	
  return (
    <nav id="menu-1" className="mega-menu navbar navbar-expand-lg ">
        <section className="menu-list-items">
        <Container>
            <Row>
                <div className="col-lg-12 col-md-12">
                    <ul className="menu-logo">
                        <li>
                            <Link to="/" ><img src="/images/logo.png" alt="logo" /> </Link>
                        </li>
                    </ul>
					<button className='btn toggle-menu' onClick={toggleNav}><i className="fa fa-bars"></i></button>
					{(toggleMenu || screenWidth > 500) && (
                    <ul className="menu-links">
                        <li>
                            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                        </li>
                        <li className='dropdown_book'>
                            <NavDropdown
                            id="nav-dropdown-dark-example"
                            className="dropdown_menu"
                            title={"Shop By Category"}
                            >
                            <Link to="/about">Book cat</Link>
                            <NavDropdown.Divider />
                            <Link to="/about">Book cat</Link>
                            </NavDropdown>
                        </li>
                        <li>
                            <Link to="/contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact Us </Link>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-globe" aria-hidden="true"></i> English </a>
                        </li>
                    </ul>						
					)}
                    <ul className="menu-search-bar active">
                        <li>
                            <Link to="/addNewBook" className="btn btn-theme"><i className="fa fa-plus" aria-hidden="true"></i> Add new Book</Link>
                        </li>
                    </ul>
                </div>
            </Row>
            </Container>
        </section>
  </nav>
  )
}

export default NavHeader