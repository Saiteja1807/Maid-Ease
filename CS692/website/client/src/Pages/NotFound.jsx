import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="min-h-screen flex items-center justify-center text-center bg-gray-200"
            style={{ backgroundColor: 'lightgray' }}
        >
            <div>
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl">Page Not Found</p>
                <p>Redirecting to the home page in 5 seconds...</p>
            </div>
        </div>
    );
};

export default NotFound;
