import { set, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import "../App.css";
import { credentailContext, userContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const { credentail, setValue } = useContext(credentailContext);

  const navigate = useNavigate();

  const onSubmit = async (object) => {
    console.log(object);
    sessionStorage.setItem("loggedIn", JSON.stringify(object));
    setValue(object);
    console.log(credentail);
    navigate("/dashboard");
  };

  return (
    <div className=" w-full flex  justify-center">
      <div className="LoginForm  rounded-lg p-6 m-4 justify-center align-middle w-auto h-auto">
        <h1 className="text-xl font-sans font-bold mb-6">Login Page</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 md:flex-row flex-col">
            <label className="w-32 mt-4">Email</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter valid email-id",
                },
              })}
              className="border border-gray-500 p-1"
            />
            {errors.email && (
              <p className="errorMsg"> {errors.email.message}</p>
            )}
            {/* {console.log({ ...register("email") })} */}
          </div>
          <div className="flex flex-col mb-4 md:flex-row flex-col">
            <label className="w-32 mt-4">Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  checkLength: (value) => value.length >= 6,
                  matchPattern: (value) =>
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                      value
                    ),
                },
              })}
              className="border border-gray-500 p-1"
            />
            {errors.password?.type === "required" && (
              <p className="errorMsg"> Password is required</p>
            )}
            {errors.password?.type === "checkLength" && (
              <p className="errorMsg">
                {" "}
                Password should be atleast 6 characters
              </p>
            )}
            {errors.password?.type === "matchPattern" && (
              <p className="errorMsg">
                Password should contain at least one uppercase letter, lowercase
                letter, digit, and special symbol.{" "}
              </p>
            )}
          </div>
          <div className="form-control justify-center items-center flex">
            <label></label>
            <button type="submit">{!loading ? "Login" : "Logging"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
