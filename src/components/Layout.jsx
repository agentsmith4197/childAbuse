// src/components/Layout.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import logo1 from '../asserts/logo1.png'
import logo2 from '../asserts/logo2.png'
import logo3 from '../asserts/logo3.jpeg'
import logo4 from '../asserts/logo4.jpg'
import logo5 from '../asserts/logo5.jpg'

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* <header>
        {user ? <p>Welcome, {user.name}</p> : <p>Please log in.</p>}
      </header> */}
      <main>{children}</main>
       {/* Footer Section */}
       <footer className="bg-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-wrap justify-center">
              <img src= {logo1} alt="Organization 1" className="m-2 w-50 h-10" />
              <img src={logo2} alt="Organization 2" className="m-2 w-50 h-12" />
              <img src={logo3} alt="Organization 3" className="m-2 w-50 h-12" />
              <img src={logo4} alt="Organization 4" className="m-2 w-50 h-12" />
              <img src={logo5} alt="Organization 5" className="m-2 w-50 h-12" />
              {/* Add more logos as needed */}
            </div>
            <p className="text-center text-gray-400 mt-4">© 2024 Child Abuse Awareness. All rights reserved.</p>
          </footer>
    </div>
  );
};

export default Layout;
