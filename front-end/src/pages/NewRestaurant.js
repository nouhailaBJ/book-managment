import React from 'react'
import Title from "../components/Title"

function NewRestaurant() {
  return (
  <section className="section-padding gray ">
    <div className='container'>
      <Title title="Add new Restaurant" desc="Add new Restaurant and help others to find interesting One" />
    <div className="post-ad-form postdetails">
                        <form  className="submit-form">
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                 <label className="control-label">Restaurant Title</label>
                                 <input className="form-control" placeholder="Title" type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Select City </label>
                                 <select className=" form-control make">
                                    <option label="Any Category !"></option>
                                    <option>BMW</option>
                                    <option>Honda </option>
                                    <option>Hyundai </option>
                                    <option>Nissan </option>
                                    <option>Mercedes Benz </option>
                                 </select>
                              </div>
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Address<small>Please The exact one</small></label>
                                 <input className="form-control" placeholder="$350" type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Select Restaurant Type</label>
                                 <select className=" form-control make">
                                    <option label="Any Type"></option>
                                    <option>Restaurants</option>
                                    <option>Coffee & Tea</option>
                                    <option>Bars & Pubs</option>
                                 </select>
                              </div>
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">PRICE RANGE<small>The chepeast - the top</small></label>
                                 <input className="form-control" placeholder="$350 - 3234$" type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                 <label className="control-label">Photo for your Restaurant <small>Please add image of your Restaurant. (350x450)</small></label>
                                 <input className="form-control"  type="file" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                                 <label className="control-label">Description</label>
                                 <textarea  id="editor1" rows="12" className="form-control" placeholder="Description"></textarea>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                                 <label className="control-label">Restaurant Tags </label>
                                 <input className="form-control" name="tags" id="tags" value="Amazing bar, good Pintxos, nice service ...." />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Phone Number</label>
                                 <input className="form-control" placeholder="0606060606" type="text" />
                              </div>
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Email <small>To contact you</small></label>
                                 <input className="form-control" placeholder="email@email.com" type="email" />
                              </div>
                           </div>
                           <button className="btn btn-theme pull-right">Publish My Restaurant</button>
                        </form>
                     </div>
    </div>
  </section>
  )
}

export default NewRestaurant