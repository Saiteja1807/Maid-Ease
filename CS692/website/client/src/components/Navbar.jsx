import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setLoggedIn(false);
  };

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      <nav className="px-4 md:px-12 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#672ab2]">
          <Link to="/">MaidEase</Link>
        </div>

        {/* Menu */}
        <ul className="md:flex items-center space-x-20">
          <li>
            <Link to="/" className="text-gray-800 hover:text-gray-500">
              Home
            </Link>
          </li>
          {/* Services Dropdown */}{
            loggedIn? ( 
              <>
              <li className="relative group">
            <Link
              to="/Service"
              className="text-gray-800 hover:text-gray-500"
            >
              Services
            </Link>
            {/* Dropdown menu */}
            <ul className="absolute mt-1 space-y-1 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md hidden group-hover:block w-32">
              <li>
                <Link
                  to="/favourites"
                  className="block w-full px-6 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Favourites
                </Link>
              </li>
              <li>
                <Link
                  to="/add-to-cart/1"
                  className="block w-full px-6 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                >
                  Add to Cart
                </Link>
              </li>
              {/* ... add other service types here */}
            </ul>
          </li>
              </>
            ) : (
              <></>
            )
          }
          <li>{
            loggedIn? (
              <>
              <Link
              to="/order-history/1"
              className="text-gray-800 hover:text-gray-500"
            >
              Order History
            </Link>
              </>
            ):(
              <>
              <Link
              to="/contact-us"
              className="text-gray-800 hover:text-gray-500"
            >
              ContactUs
            </Link>
              </>
            )
          }
          </li>
          <li className="relative group">
            {loggedIn ? (
              <>
                <a href="/account/profile" className="text-gray-800 hover:text-gray-500">
                  <FaUserCircle size={24} />
                </a>
                <ul className="absolute right-0 mt-1 space-y-1 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md hidden group-hover:block w-34">
                  <li>
                    <Link
                      to="/account/profile"
                      className="block w-full px-6 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="statistical-data"
                      className="block w-full px-6 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    >
                      Statistica Data
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-6 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <button onClick={handleSignIn} className="text-gray-800 hover:text-gray-500">
                Sign In
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;