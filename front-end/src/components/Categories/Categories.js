import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Category from "./Category"

function Categories({cities}) {
  return (
    <section className="custom-padding gray">
    <div className="container">
      <div className="row">
        <Title title="Explore By City" desc="" />
          <div className="row grid-style-2">
          {cities.map((city, index) =>
            <Category city={city} key={index}/>
          )}
          </div>
      </div>
    </div>
  </section>
  )
}

export default Categories