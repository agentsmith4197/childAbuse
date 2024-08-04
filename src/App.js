// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailedArticles from './pages/DetailedArticles';
import SupportResources from './pages/SupportResources';
import ReportForm from './pages/ReportForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailed-articles" element={<DetailedArticles />} />
        <Route path="/support-resources" element={<SupportResources />} />
        <Route path="/reportform" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;
