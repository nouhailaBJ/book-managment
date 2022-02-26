import React, { useState } from 'react'
import Title from '../Title'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

function Log() {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "register"){
            setSignInModal(false)
            setSignUpModal(true)
        }else{
            setSignInModal(true)
            setSignUpModal(false)
        }
    }
  return (
    <section className="section-padding gray">
    <Title title="Connection" desc="Connect to manage your Account" />
    <div className="container">
      <div className="row connection-page">
        <div className="col-md-6 col-sm-8">
        <div className="form-grid">
            {signInModal && (
                <>
                <SignInForm />
                <p className="text-center mt-3">
                    you don't Have an account <a href="#" id="register" onClick={handleModals}>Register Now</a>
                </p>
                </>
            )}
            {signUpModal && (
                <>
                    <SignUpForm />
                    <p className="text-center mt-3" >
                        you Have an account <a href="#" id="login" onClick={handleModals}>Login </a>
                    </p>
                </>
            )}
        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Log