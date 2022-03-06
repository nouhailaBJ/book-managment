import React from 'react'
import Title from '../Title'
import Restaurant from './Restaurant'

function Restaurants() {
  return (
    <section className="section-padding services-center">
        <div className="container">
            <Title title="Top Restaurants" desc="These Restaurants may interest you" />
            <div className="col-sm-12 col-xs-12 col-md-12">
            <div className="row">
              <div className="book-section">
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
                  <Restaurant />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Restaurants