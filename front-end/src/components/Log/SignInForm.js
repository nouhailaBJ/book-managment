import React, { useState } from 'react'

function SignInForm() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        const emailError = document.querySelector('.email.error')
        const passwordError = document.querySelector('.password.error')
        // send data
      }
  return (
    <>
        <form action="" onSubmit={handleLogin} id="sign-up-form">
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
        </form>
    </>
  )
}

export default SignInForm