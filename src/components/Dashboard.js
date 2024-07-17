

import React, { useState, useEffect, useContext } from 'react';
import FormContext from './FormContext';
import LoginContext from './LoginContext';
import useFetch from './useFetch';
import "./Dashboard.css";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const { formData, setFormData } = useContext(FormContext);
  const { loginData, setLoginData } = useContext(LoginContext);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       console.log("Message printed after 3 seconds");
//     }, 3000);

//     // Cleanup timeout if the component unmounts
//     return () => clearTimeout(timer);
//   }, []); // Empty dependency array ensures this runs only once


  useEffect(()=>{
    const savedData = sessionStorage.getItem('loginData');
    if(savedData)
    {
      const parsedData = JSON.parse(savedData);
      setLoginData(parsedData);
    }
  }, []);

  useEffect(()=>{
    const savedData = sessionStorage.getItem('formData');
    if(savedData)
    {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, []);

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  
  console.log("yoy");
  
  useEffect(() => {
    if (data.length > 0) {
      setUserList(data);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (userList.length === 0) {
    return <p>No users found.</p>; // Handle case where no users are fetched
  }

  return (
    <div>
      <h2>User Dashboard</h2>
      <div>
        {formData ? (
          <div>
            <h3>Form Data</h3>
            <p>{formData.name}</p>
            <p>{formData.email}</p>
            <hr />
          </div>
        ) : (
          <div>
            <p>No form data available.</p>
            <hr />
          </div>
        )}
      </div>
      <div>
        {loginData ? (
          <div>
            <h3>Login Data</h3>
            <p>{loginData.email}</p>
            <p>{loginData.password}</p>
            <hr />
          </div>
        ) : (
          <div>
            <p>No login data available.</p>
            <hr />
          </div>
        )}
      </div>
      {userList.map((user) => (
        <div key={user.id} >
          <p><strong>Name:</strong> {user.name}</p> 
          {/* <p><strong>Email:</strong> {user.email}</p> */}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
