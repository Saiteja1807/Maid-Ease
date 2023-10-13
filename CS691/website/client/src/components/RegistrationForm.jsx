import React, { useState } from 'react';
import registration from './assets/registration.jpg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const isFormValid = () => {
    if (step === 1) {
      const {
        firstName,
        lastName,
        address1,
        city,
        state,
        country,
        zip,
        email,
      } = formData;
      return (
        firstName &&
        lastName &&
        address1 &&
        city &&
        state &&
        country &&
        zip &&
        email
      );
    } else {
      const { phoneNumber, password, confirmPassword } = formData;
      return (
        phoneNumber &&
        password &&
        confirmPassword &&
        password === confirmPassword
      );
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill in all required fields.');
      return;
    }
    if (step === 1) {
      setStep(2);
    } else {
      try {
        const response = await axios.post('http://localhost:4000/register', formData);
        console.log(response.data);
        if (response.status === 201) { // If registration is successful
          alert('Registration complete');
          setTimeout(() => {
            navigate('/login');
          }, 5000);
        }
      } catch (error) {
        console.error('Error while submitting the form:', error);
        // Show an error alert if the email is already registered
        if (error.response && error.response.status === 400) {
          alert('Error: Email is already registered');
        } else {
          alert('An error occurred while submitting the form');
        }
      }
    }
  };
  

  const handleBack = () => {
    setStep(1);
  };

  const renderStepOne = () => (
    <>
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder='First Name'
          onChange={handleChange}
          className="w-full py-2 px-4 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder='Last Name'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          placeholder='Street Adress 1'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="address2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          placeholder='Street Adress 2 (Optional)'
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          placeholder='City'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          placeholder='State'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          placeholder='Country'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          placeholder='Zip Code'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder='Email Address'
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </>
  );

  const renderStepTwo = () => (
    <>
      {/* Step Two Form Fields */}
      <div>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </>
  );

  return (
    <div className="mx-auto px-4 min-h-screen flex items-center" style={{ backgroundColor: '#fcfdf5' }}>
      <div className="flex w-full">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold mb-4">Create Your Account</div>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
            {step === 1 ? renderStepOne() : renderStepTwo()}
            <div>
              <button
                type="submit"
                className="w-full py-2 mt-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 hover:text-white transition-all duration-200"
              >
                {step === 1 ? 'Next' : 'Submit'}
              </button>
            </div>
            {step === 2 && (
              <div className="w-full max-w-xs flex justify-center mt-4">
                <button
                  onClick={handleBack}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Back
                </button>
              </div>
            )}
            <div className="w-full max-w-xs flex justify-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Sign In
              </Link>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={registration}
            alt="Sample"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
