import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/login/login'; // Ajuste o caminho conforme necessário
import Layout from './components/Layout'; // Ajuste o caminho conforme necessário
import Register from './pages/register/register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
       
        <Route path="/" element={<Layout pageSelected="home" />} />
      </Routes>
    </Router>
  );
}

export default App;
