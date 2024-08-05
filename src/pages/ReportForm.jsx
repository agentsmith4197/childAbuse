// src/pages/ReportForm.js

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ReportForm = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Report an Incident</h1>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="incident" className="block text-gray-700 text-sm font-bold mb-2">Incident Details:</label>
              <textarea
                id="incident"
                name="incident"
                rows="6"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit Report
            </button>
          </form>
          <div className="text-center mt-10">
            <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportForm;
