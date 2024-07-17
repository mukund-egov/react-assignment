import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";

import "../App.css";
import { userContext } from "../context/context";
import useJsonholder from "../custom-hooks/useJsonholder";

function Users() {
  // const retrieveUsers = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   return response.data;
  // };

  // const {
  //   data: users,
  //   error,
  //   isLoading,
  // } = useQuery("usersData", retrieveUsers);

  /*Using Custom hooks*/

  const {
    data: users,
    error,
    isLoading,
  } = useJsonholder("get", "https://jsonplaceholder.typicode.com/users");

  // throw new Error("testing");

  if (error) return <div className="text-red-500">{error.message}</div>;
  if (isLoading) return <div className="text-blue-500">Loading...</div>;

  return (
    <div className="bg-gray-100 rounded-lg shadow-md w-full">
      {users.map((el) => (
        <div className="p-4 mb-4 bg-slate-100 rounded-lg shadow-lg">
          <p>
            <span className="block text-opacity-80 text-slate-800 ">
              <strong>S.No.</strong>: {el.id}
            </span>
            <span className="block">
              <strong>Name</strong>: {el.name}
            </span>
            <span className="block">
              <strong>Email Id</strong>: {el.email}{" "}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Users;
