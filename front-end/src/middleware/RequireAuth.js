import React, {useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {UidContext} from "../components/AppContext"

const RequireAuth = ({ children})  => {
    const uid = useContext(UidContext)
    const navigate = useNavigate()
    if (uid)
        return children
    
    return <Navigate to="/connection" />;
}
  
export default RequireAuth