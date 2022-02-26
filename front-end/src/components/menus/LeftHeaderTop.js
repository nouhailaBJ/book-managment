import React from 'react'
import { Link } from 'react-router-dom'

function LeftHeaderTop() {
  return (
    <div className="header-top-left hidden-xs">
        <ul className="listnone">
        <li>
            <Link to="/about">
                <i className="fa fa-heart-o" aria-hidden="true"></i> About
            </Link>
        </li>
        <li>
            <Link to="/faqs">
                <i className="fa fa-folder-open-o" aria-hidden="true"></i> FAQS
            </Link>
        </li>
        </ul>
    </div>
  )
}

export default LeftHeaderTop