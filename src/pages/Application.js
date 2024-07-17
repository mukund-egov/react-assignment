import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import useRequest from '../components/useRequest';


const Application = () => {
    const { postForm } = useRequest();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const savedFormData = sessionStorage.getItem('formData');
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            Object.keys(formData).forEach(key => {
                setValue(key, formData[key]);
            })
        }
    }, [setValue]);

    useEffect(() => {
        const subscription = watch((value) => {
            sessionStorage.setItem('formData', JSON.stringify(value));
        })
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        const response = await postForm(data);
        console.log(response);
        setLoading(false);
        sessionStorage.removeItem("formData");
        setIsSubmitted(true);
    }
    // throw new Error("testing");

  return (
    <div className='application-page'>
        {isSubmitted ? (
            <h2>Form submitted</h2>
        ) : (
        <form className='data-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
                <label>Name<span className="red">*</span></label>
                <input 
                    type="text"
                    name="name"
                    {...register("name", {
                        required: "Name is required"
                    })}
                />
                {errors.name && <p className='errorMsg'>{errors.name.message}</p>}
            </div>
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
            <div className='form-control'>
                <label>Age</label>
                <input 
                    type="number"
                    name="age"
                    {...register("age")}
                />
                {errors.age && <p className='errorMsg'>{errors.age.message}</p>}
            </div>
            <div className='form-control'>
                <label>Gender<span className="red">*</span></label>
                <div>
                    <input
                        type='radio'
                        id='male'
                        {...register("gender", {
                            required: "Gender is required"
                        })}
                        value='male'
                    />
                    <label htmlFor='male'>Male</label>
                    <input
                        type='radio'
                        id='female'
                        {...register("gender", {
                            required: "Gender is required"
                        })}
                        value='female'
                    />
                    <label htmlFor='female'>Female</label>
                    <input
                        type='radio'
                        id='other'
                        {...register("gender", {
                            required: "Gender is required"
                        })}
                        value='other'
                    />
                    <label htmlFor='other'>Other</label>
                </div>
                {errors.gender && <p className='errorMsg'>{errors.gender.message}</p>}
            </div>
            <div className='form-control'>
                <label>Hobbies</label>
                <div>
                    <input type='checkbox' id='reading' {...register("hobbies")} value='reading' />
                    <label htmlFor='reading'>Reading</label>
                    <input type='checkbox' id='traveling' {...register("hobbies")} value='traveling' />
                    <label htmlFor='traveling'>Traveling</label>
                    <input type='checkbox' id='cooking' {...register("hobbies")} value='cooking' />
                    <label htmlFor='cooking'>Cooking</label>
                    <input type='checkbox' id='others' {...register("hobbies")} value='others' />
                    <label htmlFor='others'>Others</label>
                </div>
                {errors.hobbies && <p className='errorMsg'>{errors.hobbies.message}</p>}
            </div>
            <div className='form-control'>
                <label>Country</label>
                <select {...register("country")} >
                    {/* <option value="">Select Country</option> */}
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                </select>
                {errors.country && <p className='errorMsg'>{errors.country.message}</p>}
            </div>
            <div className='form-control'>
                <label>Languages</label>
                <select multiple {...register("languages")} >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                </select>
                {errors.languages && <p className='errorMsg'>{errors.languages.message}</p>}
            </div>
            <div className='form-control'>
                <label>Message<span className="red">*</span></label>
                <input
                    type="text"
                    name="message"
                    {...register("message", {
                        required: "Message is required",
                        minLength: {
                            value: 10,
                            message: "Message must be atleast 10 characters"
                        }
                    })}
                />
                {errors.message && <p className='errorMsg'>{errors.message.message}</p>}
            </div>
            <div className='form-control'>
                <label>Phone Number<span className="red">*</span></label>
                <input
                    type="number"
                    name="phone_number"
                    {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\d{10}$/,
                            message: "Phone number is invalid"
                        }
                    })}
                />
                {errors.phone_number && <p className='errorMsg'>{errors.phone_number.message}</p>}
            </div>
            <div className="form-control">
                {loading ? <p>Loading...</p> : 
                <button type="submit">Submit</button>}
            </div>
        </form>

    )}
    </div>
  )
}

export default Application