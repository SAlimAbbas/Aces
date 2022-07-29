import React from 'react';
import styles from "./Landing.module.css";
import { Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1 style={{"fontWeight":"bold","fontSize":"24px","marginTop":"10px"}}>All Categories</h1>
      <div className={styles.lgrid} >

        <div className={styles.gridCard} ><Link to='/courses' ><img className={styles.Img} src='https://www.webdschool.com/img/other.png' />
        <h2>All Categories Courses</h2></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/design' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' /><p>Design Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/development' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' /><p>Development Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/marketing' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' /><p>Marketing Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/IT & Software' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' /><p>IT and Software Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/personal development' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' /><p>Personal Development Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/Business' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' /><p>Business Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/photography' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' /><p>Photography Courses</p></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/music' ><img className={styles.Img} src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' /><p>Music Courses</p></Link></div>

      </div>
    </div>
  )
}

export default LandingPage