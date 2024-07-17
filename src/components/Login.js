// LoginForm.js
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';
import LoginContext from './LoginContext';
import './Login.css';

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const { setLoginData } = useContext(LoginContext); 
  
  const navigate = useNavigate();
  
  // const handleSaveData = () => {
  //   const formData = getValues();
  //   sessionStorage.setItem('formData', JSON.stringify(formData));
  //   console.log("session data", formData);
  // };

  const onSubmit = (data) => {
    console.log(data);
    setLoginData(data);
    sessionStorage.setItem('loginData', JSON.stringify(data));
    // Reset form fields after submission (optional)
    reset();
    navigate('/home');
    
  };
  

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p>Email is required</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password is required</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
