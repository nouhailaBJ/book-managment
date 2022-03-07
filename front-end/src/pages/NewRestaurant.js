import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";
import axios from "axios"
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { createRestaurant } from "../actions/restaurant.action";

function NewRestaurant() {
   const cities = useSelector((state) => state.cityReducer)
   const user = useSelector((state) => state.userReducer)
   const [file, setFile] = useState();
  const [restaurant, setRestaurant] = useState({user});
  const dispatch = useDispatch()
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };
  const HandleSubmit = (e) => {
   e.preventDefault()
   const data = new FormData()
   data.append("image", file)
   //add the data here
   dispatch(createRestaurant(data))
}
  return (
    <section className="section-padding gray ">
      <div className="container">
        <Title
          title="Add new Restaurant"
          desc="Add new Restaurant and help others to find interesting One"
        />
        <div className="post-ad-form postdetails">
          <div className="submit-form">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              s  <label className="control-label">Restaurant Title</label>
                <input
                  className="form-control"
                  placeholder="Title"
                  type="text"
                  name="title"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">Select City</label>
                <select className=" form-control make" onChange={handleInput} name="city">
                  <option label="Any City !"></option>
                  {cities.map((city, index) => <option key={index} value={city._id}>{city.name}</option>)}
                </select>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">
                  Address<small>Please The exact one</small>
                </label>
                <input
                  className="form-control"
                  placeholder="Rue mouhamdia, rce Bdr Bloc N , Marrakech"
                  type="text"
                  name="location"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">Select Restaurant Type</label>
                <select className=" form-control make" onChange={handleInput} name="type">
                  <option label="Any Type"></option>
                  <option value="Restaurants">Restaurants</option>
                  <option value="Coffee & Tea">Coffee & Tea</option>
                  <option value="Bars & Pubs">Bars & Pubs</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">
                  PRICE RANGE<small>The chepeast - the top</small>
                </label>
                <input
                  className="form-control"
                  placeholder="$350 - 3234$"
                  type="text"
                  name="price_range"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">
                  Date Works<small>Available Date of the restaurant</small>
                </label>
                <input
                  className="form-control"
                  placeholder="11AM - 11PM"
                  type="text"
                  name="date_works"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">
                Special Plats
                </label>
                <input
                  className="form-control"
                  placeholder="buff - couscous - rfissa ..."
                  type="text"
                  name="special_plats"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <label className="control-label">
                  Photo for your Restaurant{" "}
                  <small>Please add image of your Restaurant. (350x450)</small>
                </label>
                <input className="form-control" type="file" name="image" accept=".jpg, .jpeg, .png" onChange={(e) => setFile(e.target.files[0])}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                <label className="control-label">Description</label>
                <textarea
                  id="editor1"
                  rows="12"
                  className="form-control"
                  placeholder="Description"
                  onChange={handleInput}
                  name="desc" 
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xs-12  col-sm-12">
                <label className="control-label">Restaurant Tags </label>
                <input
                  className="form-control"
                  name="tags"
                  id="tags"
                  name="tags" 
                  placeholder="Amazing bar, good Pintxos, nice service ...."
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row">
               <hr></hr>
               <h5 className="text-center mb-4">Information to contact the restaurant</h5>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">Phone Number</label>
                <input
                  className="form-control"
                  placeholder="0606060606"
                  type="text"
                  name="number"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                <label className="control-label">
                  Email <small>To contact the restaurant</small>
                </label>
                <input
                  className="form-control"
                  placeholder="email@email.com"
                  type="email"
                  name="email"
                  onChange={handleInput}
                />
              </div>
            </div>
            <button className="btn btn-theme pull-right" onClick={HandleSubmit}>
              Publish My Restaurant
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewRestaurant;
