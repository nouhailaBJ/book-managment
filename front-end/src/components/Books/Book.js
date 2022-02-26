import React from 'react'

function Book() {
  return (
    <div className="book">
        <div className="category-grid-box-1">
        <div className="featured-ribbon">
            <span>Featured</span>
        </div>
        <div className="image">
            <img
            alt="Carspot"
            src="/images/books/3.jpeg"
            className="img-responsive"
            />
            <div className="ribbon popular"></div>
            <div className="price-tag">
            <div className="price"><span>$25,00</span></div>
            </div>
        </div>
        <div className="short-description-1 clearfix">
            <div className="category-title">
            <span><a href="#">Sports & Equipment</a></span>
            </div>
            <h3>
            <a title="" href="single-page-listing.html"
                >Honda Civic 2017 Sports Edition</a
            >
            </h3>
        </div>
        <div className="ad-info-1">
            <a href="#" className='btn btn-theme w-100'><i className="fa fa-book"></i> Review The Book</a>
        </div>
        </div>
    </div>
  )
}

export default Book