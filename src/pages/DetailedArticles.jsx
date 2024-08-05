// src/pages/DetailedArticles.js

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

import image from '../asserts/image.jpg'

const DetailedArticles = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Detailed Articles</h1>
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding the Signs of Child Abuse</h2>
              <img
                src={image} // Replace with a real image URL
                alt="Signs of Child Abuse"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Recognizing the signs of child abuse is crucial in preventing further harm. Abuse can manifest in various forms including physical, emotional, and sexual abuse. Some common signs to look for include:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Unexplained injuries or frequent visits to the emergency room.</li>
                <li>Behavioral changes such as extreme aggression or withdrawal.</li>
                <li>Inappropriate sexual behavior or knowledge for their age.</li>
                <li>Fearful reactions when certain individuals are mentioned or approached.</li>
                <li>Neglect indicators such as poor hygiene or malnutrition.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Understanding these signs and acting promptly can help protect children and get them the help they need.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Prevention Strategies for Child Abuse</h2>
              <img
                src="https://www.example.com/prevention-strategies.jpg" // Replace with a real image URL
                alt="Prevention Strategies"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Preventing child abuse involves a combination of education, awareness, and proactive measures. Here are some effective strategies:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Educate children about their bodies and boundaries in an age-appropriate manner.</li>
                <li>Encourage open communication between children and trusted adults.</li>
                <li>Establish and enforce clear rules and boundaries for behavior.</li>
                <li>Provide training for parents and caregivers on recognizing and preventing abuse.</li>
                <li>Create a safe environment where children feel supported and valued.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Implementing these strategies can help reduce the risk of child abuse and create safer communities for children.
              </p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Framework for Protecting Children</h2>
              <img
                src="https://www.example.com/legal-framework.jpg" // Replace with a real image URL
                alt="Legal Framework"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Various laws and regulations are in place to protect children from abuse and neglect. Understanding these legal protections is essential for ensuring children's safety. Key aspects include:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Mandatory reporting laws requiring professionals to report suspected abuse.</li>
                <li>Child protective services responsible for investigating allegations and providing support.</li>
                <li>Legal definitions and criteria for abuse and neglect.</li>
                <li>Rights of children in legal proceedings and child welfare cases.</li>
                <li>Support services and resources available for victims and their families.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Knowing the legal framework can empower individuals and communities to better protect and support children.
              </p>
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

export default DetailedArticles;
