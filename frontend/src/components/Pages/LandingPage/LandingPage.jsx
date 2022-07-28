import React from 'react';
import styles from "./Landing.module.css";
import { Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>All Categories</h1>
      <div className={styles.lgrid} >

        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://www.webdschool.com/img/other.png' /><p>All Categories Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/design' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' /><p>Design Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/development' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' /><p>Development Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/marketing' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' /><p>Marketing Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/IT and Software' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' /><p>IT and Software Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/Personal Development' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' /><p>Personal Development Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/coursesBusiness' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' /><p>Business Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/Photography' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' /><p>Photography Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/Music' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' /><p>Music Courses</p></Link></div>

      </div>
    </div>
  )
}

export default LandingPage