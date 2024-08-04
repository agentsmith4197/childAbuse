// src/pages/DetailedArticles.js

import React from 'react';
import Layout from '../components/Layout';

const DetailedArticles = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Detailed Articles</h1>
          <div className="space-y-8">
            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Signs of Child Abuse</h2>
              <p className="text-gray-600">
                Child abuse can manifest in many ways, including physical, emotional, and sexual abuse. Recognizing the signs is the first step in preventing further harm. Some common signs include...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention Strategies for Child Abuse</h2>
              <p className="text-gray-600">
                Preventing child abuse involves educating parents, caregivers, and children about the dangers and signs of abuse. Some effective prevention strategies include...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Framework for Protecting Children</h2>
              <p className="text-gray-600">
                Understanding the legal protections available for children can help in reporting and preventing abuse. Various laws and regulations are in place to safeguard children...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailedArticles;
