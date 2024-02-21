// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import AuthPage from './AuthPage';
// Import other components as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
