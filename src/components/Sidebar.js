import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { credentailContext, userContext } from "../context/context";

export default function Sidebar({ props }) {
  const { credentail, setValue } = useContext(credentailContext);

  return (
    <div className="sidebar sm:h-screen">
      {credentail && (
        <Link
          className="sidebar-element  hover:text-red-500"
          to="/"
          onClick={props}
        >
          Home
        </Link>
      )}
      {credentail && (
        <Link
          className="sidebar-element  hover:text-red-500"
          to="/dashboard"
          onClick={props}
        >
          Dashboard
        </Link>
      )}

      {credentail && (
        <Link
          className="sidebar-element  hover:text-red-500"
          to="/submit-form"
          onClick={props}
        >
          Submit Form
        </Link>
      )}

      {credentail && (
        <Link
          className="sidebar-element  hover:text-red-500"
          to="/users"
          onClick={props}
        >
          Get Users
        </Link>
      )}
    </div>
  );
}
