import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element ={<App />}>
        <Route path="" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="dashboard" element={<Dashboard />} />

      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
