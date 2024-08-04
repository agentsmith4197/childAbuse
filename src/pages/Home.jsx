// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Introduction Section */}
          <section className="text-center mb-10">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">Welcome to Child Abuse Awareness</h1>
            <p className="text-lg text-gray-700">Educating and Protecting Our Future Generations</p>
          </section>

          {/* Educational Content Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Child Abuse</h2>
              <p className="text-gray-600">
                Child abuse is any action by another person – adult or child – that causes significant harm to a child. It can be physical, emotional, or sexual, and can also involve neglect. Raising awareness and educating people about the signs and prevention of child abuse is crucial for protecting children.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Child Abuse</h2>
              <p className="text-gray-600">
                There are several forms of child abuse, including:
                <ul className="list-disc list-inside">
                  <li>Physical abuse: Inflicting physical injury upon a child.</li>
                  <li>Emotional abuse: Damaging a child's self-esteem or emotional well-being.</li>
                  <li>Sexual abuse: Involving a child in sexual activities.</li>
                  <li>Neglect: Failing to provide basic needs such as food, shelter, and medical care.</li>
                </ul>
              </p>
            </div>
          </section>

          {/* Images and Additional Resources Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Child Support" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support Systems</h3>
              <p className="text-gray-600">Find out how to support children who have experienced abuse and the resources available to help them heal and grow.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Awareness Programs" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Awareness Programs</h3>
              <p className="text-gray-600">Learn about programs and initiatives that educate communities about preventing child abuse and supporting victims.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/400x300" alt="Legal Protection" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal Protection</h3>
              <p className="text-gray-600">Understand the legal protections available for children and how to report suspected abuse.</p>
            </div>
          </section>

          {/* Navigation and Additional Resources Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Explore More Resources</h2>
            <div className="flex flex-col md:flex-row justify-around">
              <Link to="/detailed-articles" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4 md:mb-0">
                Detailed Articles
              </Link>
              <Link to="/support-resources" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4 md:mb-0">
                Support Resources
              </Link>
              <Link to="/reportform" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Report an Incident
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
