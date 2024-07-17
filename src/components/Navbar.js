import React, { useContext, useDebugValue, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

import logo from "../resources/logo.png";
import { render } from "@testing-library/react";

import { credentailContext, userContext } from "../context/context";

function Navbar({ props }) {
  // const toggleSidebar = props.toggleSidebar();

  const navigate = useNavigate();

  const { credentail, setValue } = useContext(credentailContext);

  useEffect(() => {
    setValue(sessionStorage.getItem("loggedIn"));
    console.log(credentail);
  }, [credentail]);

  const logout = () => {
    sessionStorage.clear();
    navigate("login");
    setValue(null);
  };

  const gotoprofile = () => {
    navigate("profile");
  };
  console.log(props);

  return (
    <div className="navbar">
      <button onClick={props} className="sm:hidden bg-gray-700 p-2 rounded">
        ☰
      </button>
      <Link className="sm:block hidden" to="/">
        <img src={logo} alt="eGov" className="navbar-logo " />
      </Link>
      <div className="navbar-links">
        {credentail && (
          <div
            className="navbar-element hover:text-green-500"
            onClick={gotoprofile}
          >
            Profile
          </div>
        )}
        {credentail && (
          <div className="navbar-element hover:text-green-500" onClick={logout}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
