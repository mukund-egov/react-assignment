import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Form1() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedData = sessionStorage.getItem("user");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            for (const [key, value] of Object.entries(parsedData)) {
                setValue(key, value);
            }
        }
    }, [setValue]);

    const onSubmit = (data) => {
        setLoading(true);
        sessionStorage.setItem("user", JSON.stringify(data));
        console.log(data);
        setTimeout(() => {
            sessionStorage.removeItem("user");
            setLoading(false);
            // Perform further actions like redirecting or showing a success message
        }, 2000); // Simulate a network request
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    {...register('name', {
                        required: "Required field",
                        pattern: {
                            value: /[A-Za-z]{3}/,
                            message: "Should only contain letters and minimum length is 3"
                        }
                    })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    {...register('email', {
                        required: "Enter email",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Email is not valid",
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
