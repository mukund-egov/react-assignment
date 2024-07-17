import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './logo.png';
import email from './email.jpg';
import telephone from './telephone.png';
import usericon from './usericon.png';

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/home" >
                <img src={logo} alt="Company Logo" />
                </a>
            </div>
            <div className="navbar-buttons">
                <a href="/telephone">
                    <img src={telephone} alt="Telephone Icon" className="navbar-icon" />
                </a>
                <a href="/email">
                    <img src={email} alt="Email Icon" className="navbar-icon" />
                </a>
                <a href="/user-profile">
                    <img src={usericon} alt="User Icon" className="navbar-icon" />
                </a>
            </div>
        </div>
    )
}
export default Navbar;