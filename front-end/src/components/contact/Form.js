import React, { useState } from "react";
import axios from "axios"
import {Alert} from "react-bootstrap"

function Form() {
  const [contact, setContact] = useState([])
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState([])
  const handleInput = (e) => {
      const {name, value} = e.target
      setContact({...contact, [name]: value})
  }
  const HandleSubmit = (e) => {
      e.preventDefault()
      axios.post(`${process.env.REACT_APP_API_URL}/contact`, contact).then((res) => {
          setMessage(res.data.message)
      }).catch((err) => setErrors(err.response.data.errors))
  }
  return (
    <>
        {errors && (
            <div className='errors'>
                { errors.map((err, index) => <Alert variant='danger' key={index}> {err.msg}</Alert>) }
            </div>
        )}
      {message && <Alert variant="success">{message}</Alert>}  
      <div className="form-group mt-2">
        <label>Subject</label>
        <input
          placeholder="Your Subject"
          className="form-control"
          type="text"
          name="subject"
          onChange={handleInput}
        />
      </div>
      <div className="form-group  mt-4">
        <label>Email</label>
        <input placeholder="Your Email" className="form-control" type="email" name="email" onChange={handleInput}/>
      </div>
      <div className="form-group  mt-4">
        <label>Message</label>
        <textarea
          placeholder="Your Message"
          className="form-control" name="message" onChange={handleInput}
        ></textarea>
      </div>
      <button className="btn btn-theme btn-lg btn-block  mt-4" onClick={HandleSubmit}>
        Send your message
      </button>
    </>
  );
}

export default Form;
