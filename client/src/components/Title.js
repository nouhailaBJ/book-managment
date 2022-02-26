import React from 'react'

function Title({title, desc}) {
  return (
    <div className="heading-panel">
        <div className="col-xs-12 col-md-12 col-sm-12 text-center">
        <h1><span className="heading-color"> {title } </span></h1>
        <p className="heading-text">{desc}</p>
        </div>
    </div>
  )
}

export default Title