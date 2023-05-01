import React from 'react';
import './App.css';
import './Font/RotterburgstylishfreeRegular.otf'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Author from './Components/Author';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route path='/'  Component={Home} />
         <Route path='/:id' Component={Author} />
      </Routes>

    </Router>

  );
}

export default App;