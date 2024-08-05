// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailedArticles from './pages/DetailedArticles';
import SupportResources from './pages/SupportResources';
import ReportForm from './pages/ReportForm';
import { AuthProvider } from './contexts/AuthContext';
// import Login from './pages/Login'
import ScrollToTop from './ScrollToTop'
function App() {
  return (
    <>
    <ScrollToTop />
    <AuthProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed-articles" element={<DetailedArticles />} />
          <Route path="/support-resources" element={<SupportResources />} />
          <Route path="/reportform" element={<ReportForm />} />
        </Routes>

    </AuthProvider>
    </>
  );
}

export default App;
