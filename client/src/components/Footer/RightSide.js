import React from 'react'

function RightSide() {
  return (
    <div className="col-md-5 col-sm-6 col-xs-12">
        <div className="widget widget-newsletter">
        <h5>Singup for Weekly Newsletter</h5>
        <div className="fieldset">
            <form>
            <input
                className=""
                placeholder="Enter your email address"
                type="text"
            />
            <button className="submit-btn" name="submit" type="submit">Submit</button>
            </form>
        </div>
        </div>
        <div className="copyright">
            
        <p>© 2022-2023 All rights reserved</p>
        </div>
     </div>
  )
}

export default RightSide