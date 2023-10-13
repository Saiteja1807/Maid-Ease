import React, { useState } from 'react';
import registration from './assets/registration.jpg';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Address1: '',
    Address2: '',
    City: '',
    StateId: 31,
    State:'',
    Country: '',
    ZipCode: '',
    EmailId: '',
    ContactNo: '',
    Password: '',
    ConfirmPassword: '',
  });

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const isFormValid = () => {
    if (step === 1) {
      const {
        FirstName,
        LastName,
        Address1,
        City,
        State,
        Country,
        ZipCode,
        EmailId,
      } = formData;
      return (
        FirstName &&
        LastName &&
        Address1 &&
        City &&
        State &&
        Country &&
        ZipCode &&
        EmailId
      );
    } else {
      const { ContactNo, Password, ConfirmPassword } = formData;
      return (
        ContactNo &&
        Password &&
        ConfirmPassword &&
        Password === ConfirmPassword
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
          value={formData.FirstName}
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
          value={formData.LastName}
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
          value={formData.Address1}
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
          value={formData.Address2}
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
          value={formData.City}
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
          value={formData.State}
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
          value={formData.Country}
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
          value={formData.EmailId}
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
          value={formData.ContactNo}
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
          value={formData.Password}
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
          value={formData.ConfirmPassword}
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
