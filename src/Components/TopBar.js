import React from "react";
import { Link } from "react-router-dom";
import './TopBar.css';


export default function TopBar() {
    return (
        <div className="top-bar-body">
            <div className="top-bar-items">
                <div className="image">
                    <img alt="eGov Logo" src="logo192.png" />
                </div>
                <div className="items-list">
                <div className="items">
                    <p>Sample App</p>
                </div>
                
                </div>

            </div>


        </div>



    );
}