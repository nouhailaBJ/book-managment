import React from 'react'
import Title from "../components/Title"

function NewBook() {
  return (
  <section className="section-padding gray ">
    <div className='container'>
      <Title title="Add new Book" desc="Add new Book to our bibio and help others to find interesting books" />
    <div className="post-ad-form postdetails">
                        <form  className="submit-form">
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                 <label className="control-label">Book Title</label>
                                 <input className="form-control" placeholder="The Desclergues of la Villa Ducal de Montblanc" type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Select Categories </label>
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
                                 <label className="control-label">Author Name<small>The complete Name</small></label>
                                 <input className="form-control" placeholder="$350" type="text" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Published Year </label>
                                 <input className="form-control" placeholder="$350" type="date" />
                              </div>
                              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                                 <label className="control-label">Select Book Type</label>
                                 <select className=" form-control make">
                                    <option label="Any Type"></option>
                                    <option>novel</option>
                                    <option>Book</option>
                                 </select>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                 <label className="control-label">Photos for your Book <small>Please add image of your Book. (350x450)</small></label>
                                 <input className="form-control"  type="file" />
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                                 <label className="control-label">Ad Description <small>Enter long description for the book to help the readers</small></label>
                                 <textarea name="editor1" id="editor1" rows="12" className="form-control" placeholder=""></textarea>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                                 <label className="control-label">Book Tags </label>
                                 <input className="form-control" name="tags" id="tags" value="novel ,book ,lover history" />
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-sm-12">
                                 <label className="control-label">Pages</label>
                                 <input className="form-control" placeholder="ex : 1000 pages" type="number" />
                              </div>
                              <div className=" col-sm-12">
                                 <label className="control-label">Url to Download the book</label>
                                 <input className="form-control" placeholde="please choose a correct url" type="text" />
                              </div>
                           </div>
                           <button className="btn btn-theme pull-right">Publish My Book</button>
                        </form>
                     </div>
    </div>
  </section>
  )
}

export default NewBook