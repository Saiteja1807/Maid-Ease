import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password

  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (step) {
      case 1:
        // Here, you would typically send an email with an OTP to the user's email address.
        // For this example, we'll just skip that step and go directly to the OTP input form.
        setOtp('123456');
        setStep(2);
        break;
      case 2:
        // Here, you would typically check if the OTP entered by the user is valid.
        // For this example, we'll just skip that step and go directly to the new password input form.
        setStep(3);
        break;
      case 3:
        // Here, you would typically update the user's password in your database.
        // For this example, we'll just log the new password to the console and reset the form.
        console.log(`New password: ${newPassword}`);
        setEmail('');
        setOtp('');
        setNewPassword('');
        setConfirmPassword('');
        setStep(1);
        navigate('/login');
        break;
      default:
        break;
    }
  };

  const renderForm = () => {
    const formStyles = "p-6 rounded w-full mx-auto flex flex-col items-center";
    const inputStyles = "border border-gray-400 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    const buttonStyles = "bg-blue-500 text-white w-full py-2 rounded focus:outline-none focus:shadow-outline";
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSubmit} className={formStyles}>
            <h2 className="text-2xl mb-4">Enter your email address</h2>
            <div className="w-full mb-4">
              <label className="text-gray-700 block mb-2">Email address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyles}
              />
            </div>
            <button type="submit" className={buttonStyles}>
              Submit
            </button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit} className={formStyles}>
            <h2 className="text-2xl mb-4">Enter the OTP sent to your email address</h2>
            <div className="w-full mb-4">
              <label className="text-gray-700 block mb-2">OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className={inputStyles}
              />
            </div>
            <button type="submit" className={buttonStyles}>
              Submit
            </button>
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} className={formStyles}>
            <h2 className="text-2xl mb-4">Enter a new password</h2>
            <div className="w-full mb-4">
              <label className="text-gray-700 block mb-2">New password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full mb-4">
              <label className="text-gray-700 block mb-2">Confirm new password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={inputStyles}
              />
            </div>
            <button type="submit" className={buttonStyles}>
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleBackToLogin}
        className="text-blue-500 text-xl font-base mb-4 absolute top-4 left-4"
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-4">Reset Password</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">
        {renderForm()}
      </div>
    </div>
  );

}

export default ForgetPassword;
