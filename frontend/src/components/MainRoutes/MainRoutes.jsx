import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Course from '../Pages/Courses/Course';
import MyCourse from '../Pages/Courses/MyCourse';
import LandingPage from '../Pages/LandingPage/LandingPage';

const MainRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/*' element={<LandingPage/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/courses/:category' element={<Course/>}/>
        <Route path='/mycourse' element={<MyCourse/>}/>
     </Routes>
    </div>
  )
}

export default MainRoutes