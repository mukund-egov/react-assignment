import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
// import axios from "axios";

import './../styles.css';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useRequest from '../components/useRequest';


const Login = () => {

  const { setUser } = useContext(UserContext);
  const { login } = useRequest();
  const navigate = useNavigate();

  // const requiredEmail = process.env.REACT_APP_EMAIL;
  // const requiredPassword = process.env.REACT_APP_PASSWORD;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // if (data.email !== requiredEmail || data.password !== requiredPassword) {
    //   alert("Invalid email or password");
    //   return;
    // } 
    console.log(data);
    const response =  await login(data);
    console.log(response)
    setUser(data);
    sessionStorage.setItem('user', JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="login">
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email<span className="red">*</span></label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password<span className="red">*</span></label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required.",
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="errorMsg">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;