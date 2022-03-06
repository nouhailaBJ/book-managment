import React from 'react'
import { Link } from 'react-router-dom'

function Category({city}) {
  return (
    <div className="col-md-2 col-xs-12 col-sm-6">
        <div className="category-grid-box-1 city">
          <Link to={`/category/${city._id}`}><img src={city.image} /></Link>
          <h3>{city.name }</h3>
        </div>
    </div>
  )
}

export default Category