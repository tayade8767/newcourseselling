import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Courses from './pages/Courses';
const App = () => {
  return (
   <>
   <Routes>
       <Route path="/courses" element={<Courses/>}/>
       <Route path="/home" element={<Home/>}/>

   </Routes>
   </>
  )
};

export default App;