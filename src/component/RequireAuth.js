import React, { useContext } from 'react'
import  { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './AuthProvider';


function RequiredAuth() {
    // const location = useLocation();
    const {auth} = useContext(AuthContext)
    return (
        auth.username === "aaa"
        ? <Outlet replace/>
        : <Navigate to = '/loginpage' replace/>

    )

}

export default RequiredAuth