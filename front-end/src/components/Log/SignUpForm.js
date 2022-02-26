import React, { useState } from 'react'
import SignInForm from './SignInForm';
import {Link} from "react-router-dom"

function SignUpForm() {
    const [formSubmit, setFormSubmit] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");
  
    const handleRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById("terms");
        const nameError = document.querySelector(".name.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(
            ".password-confirm.error"
        );
        const termsError = document.querySelector(".terms.error");
    
        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";
    
        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword)
            passwordConfirmError.innerHTML =
                "Les mots de passe ne correspondent pas";
    
            if (!terms.checked)
            termsError.innerHTML = "Veuillez valider les conditions générales";
        } else {
            // send the request
        }
    }
  return (
    <>
        {formSubmit ? (
            <>
            <h4 className="success">
                Enregistrement réussi, veuillez-vous connecter
            </h4>
            <SignInForm />
            </>
        ) : (
        <form  action="" onSubmit={handleRegister} id="sign-up-form">
            <div className="form-group">
                <label>Name</label>
                <input placeholder="Enter Your Name" className="form-control" name="name" type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <div className="name error"></div>
            </div>
            <div className="form-group">
                <label>Contact Number</label>
                <input placeholder="Enter Your Contact Number" className="form-control" name="number" type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <div className="number error"></div>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input placeholder="Your Email" className="form-control" name="password" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="email error"></div>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input placeholder="Your Password" className="form-control" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="password error"></div>
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input placeholder="Your Password" className="form-control" type="password"  onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}/>
                <div className="password-confirm error"></div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-xs-12 col-sm-7">
                        <div className="skin-minimal">
                        <ul className="list">
                            <li>
                                <input  type="checkbox" id="terms"/>
                                <label>I agree <Link to="/faqs">Terms of Services</Link></label>
                            </li>
                        </ul>
                        <div className="terms error"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-5 text-right ">
                        <p className="help-block"><a data-target="#myModal" data-toggle="modal">Forgot password?</a>
                        </p>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-theme btn-lg btn-block w-100">Register</button>
        </form>
        )}
    </>
  )
}

export default SignUpForm