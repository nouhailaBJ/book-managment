import React, { useContext, useEffect, useState } from 'react'
import { UidContext } from '../AppContext'
import Title from '../Title'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { useNavigate } from 'react-router-dom';

function Log() {
    const uid = useContext(UidContext)
    const navigate = useNavigate()
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(true);
    const handleModals = (e) => {
        if (e.target.id === "register"){
            setSignInModal(false)
            setSignUpModal(true)
        }else{
            setSignInModal(true)
            setSignUpModal(false)
        }
    }
    useEffect(() => {
        if (uid)
            navigate('/profile');
    })
    return (
        <section className="section-padding gray">
            <Title title="Connection" desc="Connect to manage your Account" />
            <div className="container">
            <div className="row connection-page">
                <div className="col-md-6 col-sm-8">
                <div className="form-grid">
                    {signInModal && (
                        <>
                        <SignInForm handleModals={handleModals} />
                        </>
                    )}
                    {signUpModal && (
                        <>
                            <SignUpForm  handleModals={handleModals} />
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