import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
   
   <div>
    <Navbar/>
    
    <Routes>
    <Route path="/" element={<Home />} /> 
    
    <Route path="/About" element={<About />} /> 
    
    <Route path="/Contact" element={<Contact />} /> 
   
    </Routes>
    <Footer/>
   </div>
   </Router>
  
  );
}

export default App;
