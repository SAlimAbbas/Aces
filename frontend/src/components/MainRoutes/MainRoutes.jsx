import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Account from '../Pages/Account/Account';
import Course from '../Pages/Courses/Course';
import MyCourse from '../Pages/Courses/MyCourse';
import LandingPage from '../Pages/LandingPage/LandingPage';
import Selling from '../Pages/Selling/Selling';

const MainRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/*' element={<LandingPage/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/courses/:category' element={<Course/>}/>
        <Route path='/mycourse' element={<MyCourse/>}/>
        <Route path='/myaccount' element={<Account/>}/> 
        <Route path='/sell' element={<Selling/>}/> 
     </Routes>
    </div>
  )
}

export default MainRoutes