import React, {useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {UidContext} from "../components/AppContext"

function RequireAuth({ children}) {
    const uid = useContext(UidContext)
    const navigate = useNavigate()
    if (uid)
        return children
    navigate(-1)
    return (<></>);
}
  
export default RequireAuth