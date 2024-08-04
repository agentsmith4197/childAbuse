// src/components/Layout.js

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Layout = ({ children }) => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">
          <Link to="/">Child Abuse Report System</Link>
        </h1>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
