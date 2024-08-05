// src/pages/SupportResources.js

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const SupportResources = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Support Resources</h1>
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Counseling and Therapy Services</h2>
              <img
                src="https://www.example.com/counseling-therapy.jpg" // Replace with a real image URL
                alt="Counseling and Therapy"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Counseling and therapy play a vital role in helping children who have experienced abuse to heal and recover. These services offer a safe space for children to express their feelings and work through their trauma with the support of trained professionals.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Individual therapy tailored to the child's needs.</li>
                <li>Family therapy to address dynamics and improve communication.</li>
                <li>Group therapy with peers who have similar experiences.</li>
                <li>Support groups for caregivers and families.</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Helplines and Hotlines</h2>
              <img
                src="https://www.example.com/helplines-hotlines.jpg" // Replace with a real image URL
                alt="Helplines and Hotlines"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Helplines and hotlines provide immediate support for those in crisis. They offer a confidential and accessible way to seek help and advice, whether for the individual experiencing abuse or for those who are concerned about a child.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>24/7 crisis helplines for immediate assistance.</li>
                <li>Specialized hotlines for child abuse reporting and support.</li>
                <li>Online chat services for anonymous support.</li>
                <li>Resources for finding local help and services.</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Support Programs</h2>
              <img
                src="https://www.example.com/community-support.jpg" // Replace with a real image URL
                alt="Community Support Programs"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Community support programs offer various resources and services aimed at preventing child abuse and supporting affected families. These programs often involve partnerships between local organizations, schools, and other community groups.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Educational workshops and seminars on child safety.</li>
                <li>Community outreach and awareness campaigns.</li>
                <li>Support groups for parents and caregivers.</li>
                <li>Volunteer opportunities to help support local initiatives.</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 text-center">
            <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportResources;
