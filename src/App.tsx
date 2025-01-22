import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login/login'; // Ajuste o caminho conforme necessário
import Layout from './components/Layout'; // Ajuste o caminho conforme necessário

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota para a Home */}
        <Route path="/" element={<Layout pageSelected="home" />} />
      </Routes>
    </Router>
  );
}

export default App;
