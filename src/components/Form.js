import React, { useEffect, useContext } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import "./FormComponent.css";
import FormContext from './FormContext';

const FormComponent = () => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      age: '',
      gender: '',
      hobbies: [],
      country: '',
      languages: [],
      message: '',
      phoneNumber: '',
    },
  });
  
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);
  const { setValue, getValues, watch, handleSubmit, formState: { errors, isSubmitting }, reset } = methods;

  useEffect(() => {
    const savedData = sessionStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      for (const key in parsedData) {
        setValue(key, parsedData[key]);
      }
    }
  }, [setValue]);

  const handleSaveData = () => {
    const formData = getValues();
    sessionStorage.setItem('formData', JSON.stringify(formData));
    console.log("session data", formData);
  };

  useEffect(() => {
    const subscription = watch(() => {
      handleSaveData();
    });
    return () => subscription.unsubscribe();
  }, [watch, handleSaveData]);

  const onSubmit = async (data) => {
    console.log(data);
    setFormData(data);
    //sessionStorage.removeItem('formData');
    //reset();
    navigate('/dashboard');
  };

  const handleClear = () => {
    sessionStorage.removeItem('formData');
    reset();
    // Optionally clear form values from react-hook-form state
    // setValue('name', '');
    // setValue('email', '');
    // setValue('age', '');
    // ... repeat for other fields
  };

  const hobbiesOptions = [
    { value: 'reading', label: 'Reading' },
    { value: 'traveling', label: 'Traveling' },
    { value: 'cooking', label: 'Cooking' },
    { value: 'others', label: 'Others' },
  ];

  const languagesOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India"
  ];

  return (
    <FormProvider {...methods}>
      <div className='form-card'>
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input {...methods.register('name', { required: 'Name is required' })} />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label>Email</label>
            <input {...methods.register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label>Age</label>
            <input type="number" {...methods.register('age', { valueAsNumber: true, validate: value => value >= 0 || 'Age must be a positive number' })} />
            <p>{errors.age?.message}</p>
          </div>

          <div>
            <label>Gender</label>
            <div className="radio-group">
              <label><input type="radio" value="male" {...methods.register('gender', { required: 'Gender is required' })} /> Male</label>
              <label><input type="radio" value="female" {...methods.register('gender', { required: 'Gender is required' })} /> Female</label>
              <label><input type="radio" value="other" {...methods.register('gender', { required: 'Gender is required' })} /> Other</label>
            </div>
            <p>{errors.gender?.message}</p>
          </div>

          <div>
            <label>Hobbies</label>
            <div className="checkbox-group">
              {hobbiesOptions.map(option => (
                <label key={option.value}>
                  <input type="checkbox" value={option.value} {...methods.register('hobbies')} />
                  {option.label}
                </label>
              ))}
            </div>
            <p>{errors.hobbies?.message}</p>
          </div>

          <div>
            <label>Country</label>
            <select {...methods.register('country', { required: 'Country is required' })}>
              <option value="">Select Country</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <p>{errors.country?.message}</p>
          </div>

          <div>
            <label>Languages Known</label>
            <Controller
              name="languages"
              control={methods.control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={languagesOptions}
                  isMulti
                />
              )}
            />
            <p>{errors.languages?.message}</p>
          </div>

          <div>
            <label>Message</label>
            <textarea {...methods.register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })} />
            <p>{errors.message?.message}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <input {...methods.register('phoneNumber', { required: 'Phone Number is required', pattern: { value: /^[0-9]{10}$/, message: 'Must be a valid phone number' } })} />
            <p>{errors.phoneNumber?.message}</p>
          </div>

          {/* <button type="submit" className="form" disabled={isSubmitting}>Submit</button>
          {isSubmitting && <p>Loading...</p>}

          <button type="clear" className="form" onClick={handleClear}>Clear</button>
          {isSubmitting && <p>Loading...</p>} */}

          <div className="button-group">
            <button type="submit" className="form" disabled={isSubmitting}>Submit</button>
            <button type="button" className="form" onClick={handleClear}>Clear</button>
          </div>
          {isSubmitting && <p>Loading...</p>}

        </form>
      </div>
    </FormProvider>
  );
};

export default FormComponent;
