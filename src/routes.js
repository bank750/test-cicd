import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './About';
import Home from './Home';

const Routess = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};

export default Routess;
