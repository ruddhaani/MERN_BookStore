import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom';

import Courses from './courses/Courses';
import Signup from './components/Signup';
import ContactUs from './contact-us/ContactUs';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>

      </Routes>
    </>
  )
}

export default App