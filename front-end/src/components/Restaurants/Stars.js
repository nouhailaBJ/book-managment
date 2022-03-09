import React from 'react'

function Stars({reviews}) {
  // let stars = 0
  // for (let i = 0; i < reviews.length; i++){
  //   stars += reviews[i].stars
  // }
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