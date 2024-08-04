// src/pages/SupportResources.js

import React from 'react';
import Layout from '../components/Layout';

const SupportResources = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Support Resources</h1>
          <div className="space-y-8">
            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Counseling and Therapy Services</h2>
              <p className="text-gray-600">
                Professional counseling and therapy can provide crucial support for children and families dealing with abuse. Various organizations offer services tailored to specific needs...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Helplines and Hotlines</h2>
              <p className="text-gray-600">
                Helplines and hotlines provide immediate assistance and guidance for those in need. These resources are available 24/7 to offer support and connect individuals with local services...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Support Programs</h2>
              <p className="text-gray-600">
                Community programs play a vital role in supporting families and children. These programs can include parenting classes, support groups, and recreational activities...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportResources;
