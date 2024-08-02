import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JavaScript import
import './Components/style.css'

import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Courses from './Course/Courses';
import Signup from './Components/Signup';
import Contactus from './Contact/Contactus';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default App
