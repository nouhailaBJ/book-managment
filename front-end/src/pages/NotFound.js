import React from 'react'

function NotFound() {
  return (
    <section className="section-padding mt-4 gray error-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12">
                    <div className="error-container">
                        <div className="error-text">404</div>
                        <div className="error-info">The Page Could Not Be Found!</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NotFound