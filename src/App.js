
import React from 'react';
import './App.css'
import {Routes, Route } from "react-router-dom"

import Navbar from './components/common components/Navbar';
import HomePage from './components/pages/home_page';
import PracticePage from './components/pages/practice_page'
import AboutPage from './components/pages/About_page';
import ContactPage from './components/pages/Contact_page';
import StudenLogin from './components/login_registration/student_login_registration/student_login';


function App() {
  return (

    <>
        <Navbar/>
        
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/studentlogin" element={<StudenLogin />} />
          
        </Routes>

    </>
  )
}

export default App;

