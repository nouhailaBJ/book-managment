import React from 'react'

function Stars() {
  return (
    <div className="pro-rating text-center">
        <a href="#">
        <i className="fa fa-star"></i>
        </a>
        <a href="#">
        <i className="fa fa-star"></i>
        </a>
        <a href="#">
        <i className="fa fa-star"></i>
        </a>
        <a href="#">
        <i className="fa fa-star"></i>
        </a>
        <a href="#">
        <i className="fa fa-star-o"></i>
        </a>
        <span className="star-score">
        <strong>3.9</strong>/ <span>5</span>
        </span>
    </div>
  )
}

export default Stars