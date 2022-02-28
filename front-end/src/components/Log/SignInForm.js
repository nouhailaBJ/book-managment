import React, { useState } from 'react'
import axios from "axios"
import { Alert } from 'react-bootstrap';
import Cookies from "js-cookie"

function SignInForm({handleModals}) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errors, setErrors] = useState([]);
    const errorsVerifcation = document.querySelector(".verify.error");
    const handleLogin = (e) => {
        e.preventDefault()
        // send data
        axios.post(`${process.env.REACT_APP_API_URL}/user/login`,{
            email,
            password
        }, {withCredentials: true} ).then((res) => {
            window.location = '/'
        }).catch(error => {
            if (error.response.data.err)
                errorsVerifcation.innerHTML = 'Your credentials are not Correct'
            setErrors(error.response.data.errors)
        });
      }
  return (
    <>
        <form action="" onSubmit={handleLogin} id="sign-up-form">
            <div className="verify error text-center"></div>
            {errors && (
                <div className='errors'>
                 { errors.map((err, index) => <Alert variant='danger' key={index}>
                      {err.msg}</Alert>) }
                </div>
            )}
            <div className="form-group">
                <label>Email</label>
                <input
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your Email"
                className="form-control"
                type="email"
                />
                <div className="email error"></div>
            </div>
            <div className="form-group mt-4">
                <label>Password</label>
                <input
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Your Password"
                className="form-control"
                type="password"
                />
                <div className="password error"></div>
            </div>
            <button className="btn btn-theme btn-lg btn-block mt-4 w-100">Login</button>
            <p className="text-center mt-3">
                 you don't Have an account <a href="#" id="register" onClick={handleModals}>Register Now</a>
             </p>
        </form>
    </>
  )
}

export default SignInForm