import React from 'react';
import styles from "./Landing.module.css";
import { Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>All Categories</h1>
      <div className={styles.lgrid} >
      <div className={styles.gridCard} ><Link to='/courses/design' ><img src='https://www.webdschool.com/img/other.png' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses/design' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' /></Link></div>
        <div className={styles.gridCard} ><Link to='/courses' ><img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' /></Link></div>
      </div>
    </div>
  )
}

export default LandingPage