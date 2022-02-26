import React from 'react'
import Category from './Category'

function Categories() {
  return (
    <section className="custom-padding gray">
    <div className="container">
      <div className="row">
        <div className="row grid-style-2">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Categories