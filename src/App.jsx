// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Corazon from './pages/Corazon';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/corazon">Corazón</Link>
      </nav>
      
      <Routes>
        <Route path="/corazon" element={<Corazon />} />
      </Routes>
    </Router>
  );
}

export default App;

