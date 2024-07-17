import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { credentailContext, userContext } from "../context/context";

function Home() {
  const { credentail, setValue } = useContext(credentailContext);
  const navigate = useNavigate();
  return (
    <div className=" w-full h-full">
      <h1 class="p-20 text-5xl font-sans font-bold"> Welcome to eGov</h1>

      {!credentail && (
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Click here to Login
        </h2>
      )}
    </div>
  );
}

export default Home;
