import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link className="dashboard-link" to="/application">Application Form</Link>
      <br />
      <Link className="dashboard-link" to="/users">Users</Link>
    </div>
  );
};

export default Dashboard;
