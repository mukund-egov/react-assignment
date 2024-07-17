import React,{ useContext,useEffect} from "react";
import { useForm } from "react-hook-form";
import './Login.css';
import  {UserContext} from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
// import {Dashboard} from "./Pages/Dashboard";



export default function Login() {

  
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const {user,setUser}=useContext(UserContext);
  const navigate=useNavigate();

  useEffect(() => {
    if (user) {
      console.log("submitted");
    console.log("this is the new user1",{user});
      navigate("/form");
    }
  }, [user]);

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("user",JSON.stringify(data));

    // setUser(JSON.stringify(data));
    console.log('user setuser',user,setUser);
    setUser(data);
    
    // navigate("/dashboard");

  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Name</label>
          <input type='text' {
            ...register(
              'name', {
              required: true,
              pattern: {
                value: /[A-Za-z]{3}/,
                message: "should only contain letters and minimum length is 3"
              }
            }
            )
          } />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required.",
              minLength: 5,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$])/.test(
                    value
                  ),
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {
            errors.password?.type === "minLength" &&
            <p className="errorMsg">Well password should be atleast 5 chars</p>
          }
          {errors.password?.type === "checkLength" && (
            <p className="errorMsg">
              Password should be at least 6 characters.
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
