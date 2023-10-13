import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext';
import axios from 'axios';

function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [animatedText, setAnimatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {setLoggedIn} = useAuth();

    useEffect(() => {
        // Animate the "MaidEase" text
        const animateText = async () => {
            const text = 'MaidEase';
            for (let i = 0; i <= text.length; i++) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        setAnimatedText(text.slice(0, i));
                        resolve();
                    }, 50 * i);
                });
            }
        };

        animateText();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Make an API call to your server for authentication
        try {
            const response = await axios.post('http://localhost:4000/login', {
              email,
              password,
            });
        
            if (response.status === 200) {
              localStorage.setItem('authToken', response.data.token);
              setLoggedIn(true);
              navigate('/');
            } else {
              setErrorMessage('Incorrect email or password');
            }
          } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in. Please try again later.');
          }
      };
      

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrorMessage('');
    };

    const clearInput = (setter) => () => {
        setter('');
    };

    return (
        <div className="relative flex flex-1 flex-col items-center justify-center p-8">
            <div className="absolute top-0 mt-4 ml-4 text-xl font-bold">
                <span className='text-purple-400'>Maid</span><span className='text-[#50C878]'>Ease</span>
            </div>
            <div className="w-full max-w-xs text-left">
                <h1 className="mb-2 text-2xl font-bold">
                    Welcome to <span className='text-gray-700'>{animatedText}</span>
                </h1>
                <p className="mb-6 text-base text-gray-600">
                    Your all-in-one home services solution
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xs text-left space-y-4"
            >
                <div className="relative">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        className={`w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'
                            } rounded-md`}
                        required
                    />
                    {errorMessage && email !== 'test@example.com' && (
                        <span
                            onClick={clearInput(setEmail)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        >
                            &#x2715;
                        </span>
                    )}
                </div>
                <div className="relative">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleInputChange(setPassword)}
                        className={`w-full px-3 py-2 border ${errorMessage ? 'border-red-500' : 'border-gray-300'
                            } rounded-md`}
                        required
                    />
                    {errorMessage && password !== 'password' && (
                        <span
                            onClick={clearInput(setPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        >
                            &#x2715;
                        </span>
                    )}
                </div>
                {errorMessage && (
                    <div className="text-red-500 text-sm">{errorMessage}</div>
                )}
                <div className="flex items-center justify-between">
                    <label htmlFor="remember" className="text-sm">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="mr-1"
                        />
                        Remember me
                    </label>
                    <button
                        type="button"
                        // onClick={() => alert('Forgot password functionality not implemented yet.')}
                        className="text-sm text-purple-500 hover:text-purple-700"
                    >
                        Forgot password?
                    </button>
                </div>
                <button
      type="submit"
      className="w-full py-2 mt-4 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 hover:text-xl transition-all duration-200"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
      ) : (
        'Sign in'
      )}
    </button>
            </form>
            <div className="mt-4 text-sm">
                Don't have an account?{' '}
                <Link to='/register'>
                    <button
                        //   onClick={() => alert('Sign up functionality not implemented yet.')}
                        className="text-purple-500 hover:text-purple-700"
                    >
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LoginForm;
