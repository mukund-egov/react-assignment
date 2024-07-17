import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
// import "./Form.css";
import {UserContext} from "../Contexts/UserContext";
import { useContext } from "react";

export default function Form() {
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        async function fetchData() {
            console.log("user daat ", { user })
            console.log("renderr");
            const data = sessionStorage.getItem("user");
            const parsedData = await JSON.parse(data);
            console.log("hiii", parsedData);

            for (const [key, value] of Object.entries(parsedData)) {
                // console.log("ki", key, "val", value);
                setValue(key, value);
            }
            console.log("values", getValues());

        }
        fetchData();
    }
        ,
        [getValues, setValue]);

    const onSubmit = (data) => {
        setLoading(true);

        sessionStorage.setItem("user", JSON.stringify(data));
        console.log("context user", { user });
        console.log("submitted", sessionStorage.getItem("user"));
        console.log(typeof sessionStorage.getItem("user"));
        console.log(JSON.parse(sessionStorage.getItem("user")));
        console.log(data);
        console.log("this is setValue", setValue);
        // console.log("this is uers data ",users)
        // setTimeout(()=>{
        //     sessionStorage.removeItem("user");
        //     setLoading(false);

        // },2000);

    };

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <label>Name</label>
                <input type='text' {
                    ...register(
                        'name', {
                        // required: "Reuired field",
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: "should only contain letters and minimum length is 3"
                        }
                    }
                    )
                } />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type='text' {
                    ...register(
                        'email', {
                        // required: "Enter email ",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid",
                        }
                    }
                    )
                } />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Age</label>
                <input type="number" {
                    ...register(
                        'age',
                        {
                            max: { value: 130, message: "Age must be below 120" },
                            min: { value: 0, message: "Age must be above 0" }
                        }
                    )
                } />
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div>
                <label>Gneder</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            {...register("gender", { required: true })}
                        />
                        Male
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            {...register("gender"
                                // , { required: true }
                            )}
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            {...register("gender"
                                // , { required: true }
                            )}
                        />
                        Other
                    </label>
                </div>

            </div>
            <div>
                <label>Hobby</label>
                <div>
                    <label>
                        <input type="checkbox"
                            name="hobbies" value="cricket"
                            {...register("hobbies", { required: "enter Hobby" }
                            )} />
                        Cricket

                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                            name="hobbies" value="football"
                            {...register("hobbies", { required: "enter Hobby" }
                            )} />
                        Football

                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"
                            name="hobbies" value="badminton"
                            {...register("hobbies", { required: "enter Hobby" }
                            )} />
                        Badminton

                    </label>
                </div>
            </div>


            <div>
                <label>Country</label>
                <select
                    id="country"
                    {...register('country', { required: true })}
                >
                    <option value="">Select a country...</option>
                    <option value="IND">India</option>
                    <option value="USA">USA</option>
                    <option value="ARG">Argentina</option>

                </select>
                {errors.country && <p>Please select a country.</p>}
            </div>
            <div>
                <label>Languages</label>
                <select
                    id="language"
                    {...register('language', { required: true })}
                >
                    <option value="">Choose Languages...</option>
                    <option value="ENG">English</option>
                    <option value="HINDI">Hindi</option>
                    <option value="KAN">Kannada</option>

                </select>
                {errors.language && <p>Please select a language.</p>}
            </div>
            <div>
                <label>Message</label>
                <input type='text' {
                    ...register(
                        'message', {
                        required: "Reuired field",
                        minLength: { value: 10, message: "min length of message should be 10" }
                    }
                    )
                } />
                {errors.message?.type === "minLength" && <p>min length of message should be 10</p>}
            </div>
            <div>
                <label>Phone Number</label>
                <input type="number" {
                    ...register(
                        'phone_number', {
                        // required: "Required field",
                        // pattern: {
                        //     value: /^(\+?\d{1,3})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/,

                        //     message: "Enter valid phone number"
                        // }

                    }
                    )
                } />
                {errors.phone_number?.type === "pattern" && <p>{errors.phone_number.message}</p>}
            </div>





            <div>
                <button type='submit' disabled={loading} >{loading ? "Loading..." : "Submit"}</button>
            </div>

        </form>
    );


};