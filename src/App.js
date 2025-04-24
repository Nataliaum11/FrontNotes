import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Casa from './vistas/Casa';
import Registro from './vistas/Registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Casa />} />
        <Route path='/Registro' element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;

