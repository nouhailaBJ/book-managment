import React from 'react'
import Title from '../Title'
import Book from './Book'

function Books() {
  return (
    <section className="section-padding services-center">
        <div className="container">
            <Title title="Our Featured Books" desc="These books may interest you" />
            <div className="col-sm-12 col-xs-12 col-md-12">
            <div className="row">
              <div className="book-section">
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Books