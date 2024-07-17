import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';


export default function SideBar() {
    return (
        <div className="side-bar-body">
            <div className="side-bar-items">
                <div className="image">
                    <img alt="eGov Logo" src="logo192.png" />
                </div>

                <div className="items">
                    <p>Sample App</p>
                </div>
                <div className="nav-links">
                    <Link to="/form">Form</Link>
                    <Link to="/dashboard">dashboard</Link>
                    <Link to="/users">users</Link>

                </div>



            </div>


        </div>



    );
}