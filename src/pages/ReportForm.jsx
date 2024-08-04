// src/pages/ReportForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { firestore, storage } from '../firebaseConfig';
import Layout from '../components/Layout';

const ReportForm = () => {
  const [form, setForm] = useState({
    incidentDate: '',
    location: '',
    victimAge: '',
    description: '',
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.incidentDate || !form.location || !form.victimAge || !form.description) {
      setError('All fields are required');
      return;
    }

    try {
      let fileURL = null;
      if (file) {
        const fileRef = storage.ref(`reports/${file.name}`);
        await fileRef.put(file);
        fileURL = await fileRef.getDownloadURL();
      }

      await firestore.collection('reports').add({
        ...form,
        fileURL,
      });

      navigate('/');
    } catch (err) {
      setError('Error submitting report');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Report an Incident</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Incident Date</label>
            <input
              type="date"
              name="incidentDate"
              value={form.incidentDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Victim Age</label>
            <input
              type="number"
              name="victimAge"
              value={form.victimAge}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Report
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ReportForm;
