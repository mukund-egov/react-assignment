import { Controller, set, useForm, useWatch } from "react-hook-form";
import { useContext, useState } from "react";
import "../App.css";
import ReactSelect from "react-select";
import { credentailContext, userContext } from "../context/context";

function ApplicationForm() {
  const [loading, setLoading] = useState(false);

  const { user, setuser } = useContext(userContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: JSON.parse(sessionStorage.getItem("user")) });

  const formValues = useWatch({ control });
  sessionStorage.setItem("user", JSON.stringify(formValues));

  const CountryOptions = [
    { value: "india", label: "India" },
    { value: "sri-lanka", label: "Sri Lanka" },
    { value: "nepal", label: "Nepal" },
    { value: "taiwan", label: "Taiwan" },
    { value: "other", label: "Other" },
  ];

  const LanguageOptions = [
    { value: "hindi", label: "Hindi" },
    { value: "kannada", label: "Kannada" },
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (object) => {
    console.log(object);
    setuser(object);
    sessionStorage.setItem("user", JSON.stringify(object));
    window.alert("form submitted");
  };
  // throw new Error("This is a test error!");
  return (
    <div className="items-center justify-center sm:w-3/4 lg:w-2/3">
      <div className="shadow-lg rounded-lg p-6 sm:mr-10 sm:ml-10 mt-4 bg-slate-100">
        <h1 className="text-3xl pb-4 mb-4 font-sans font-bold">
          Application Form
        </h1>
        <form className="sm:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Name</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
              className="border border-gray-500 p-1 w-full"
            />
            {errors.name && <p className="errorMsg"> {errors.name.message}</p>}
          </div>

          {/* email */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Email</label>
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
              className="border border-gray-500 p-1 w-auto"
            />
            {errors.email && (
              <p className="errorMsg"> {errors.email.message}</p>
            )}
          </div>

          {/* Phone Number  */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">
              Phone Number
            </label>
            <input
              type="number"
              name="phonenumber"
              {...register("phonenumber", {
                required: "Phone Number is required",
                validate: {
                  checkLength: (value) => value.length >= 10,
                },
              })}
              className="border border-gray-500 p-1 w-auto"
            />
            {errors.phonenumber?.type === "required" && (
              <p className="errorMsg"> Phone Number is required</p>
            )}
            {errors.phonenumber?.type === "checkLength" && (
              <p className="errorMsg"> Phone Number is not Valid</p>
            )}
          </div>

          {/* Age */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Age</label>
            <input
              type="number"
              name="age"
              {...register("age")}
              className="border border-gray-500 p-1 w-auto"
            />
            {/* {errors.name && <p className="errorMsg"> {errors.age.message}</p>} */}
          </div>

          {/* {/* Gender */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Gender</label>
            <div className="flex items-center space-x-4 justify-center pb-1">
              <label className="flex items-center">Male</label>
              <input
                type="radio"
                value="male"
                name="male"
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="mr-2 w-auto"
              />
              <label className="flex items-center">Female</label>
              <input
                type="radio"
                value="female"
                name="female"
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="mr-2 w-auto"
              />
            </div>
            {errors.gender && (
              <p className="errorMsg">{errors.gender.message}</p>
            )}
          </div>

          {/* {/* Hobbies */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Hobbies</label>
            <div className="flex items-center space-x-4 justify-center pb-1">
              <label>Traveling</label>
              <input
                type="checkbox"
                value="traveling"
                name="traveling"
                {...register("hobbies")}
              />
              <label>Dancing</label>
              <input
                type="checkbox"
                value="dancing"
                name="dancing"
                {...register("hobbies")}
                className="mr-2 w-auto"
              />
            </div>
            {/* {errors.hobbies && (
            <p className="errorMsg">{errors.hobbies.message}</p>
          )} */}
          </div>

          {/* Country */}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Country</label>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country field is required" }}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={CountryOptions}
                  className="border-gray-500 w-auto"
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Languages Known*/}
          <div className="flex md:flex-row flex-col  mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">
              Languages Known
            </label>
            <Controller
              name="languages"
              control={control}
              rules={{ required: "Mention the language you know" }}
              render={({ field }) => (
                <ReactSelect {...field} isMulti options={LanguageOptions} />
              )}
            />
            {errors.languages && (
              <p className="errorMsg">{errors.languages.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col md:flex-row mb-4">
            <label className="text-lg font-medium mb-2 sm:mr-6">Message</label>
            <input
              type="text"
              name="message"
              {...register("message", {
                required: "Message is required",
                validate: {
                  checkLength: (value) => value.length >= 10,
                },
              })}
              className="border border-gray-500 p-1 w-auto"
            />
            {errors.message?.type === "required" && (
              <p className="errorMsg">Message is required</p>
            )}
            {errors.message?.type === "checkLength" && (
              <p className="errorMsg">
                Message should be atleast 10 charcaters
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <label></label>
            <button type="submit">{!loading ? "Submit" : "Submitting"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
