import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { Navigate, Outlet } from 'react-router-dom';
// import {currUser} from "../App"; 

const PrivateRoute = () => {
    const {user} = useContext(UserContext);
    const isLoggedIn = !!user;
    // console.log(!user, user, isLoggedIn, "inprivate");
    
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute