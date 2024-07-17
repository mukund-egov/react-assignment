import React from "react";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import { Link } from "react-router-dom";
import './DashBoard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <TopBar />
      <div className="main-content">
        <SideBar />
        <div className="content-area">
          <Link to="/form">Application Form</Link>
          <br />
          <Link to="/users">Users</Link>
        </div>
      </div>
    </div>
  );
}

