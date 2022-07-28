import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}  >
         <div><h1>CourShare-App</h1></div>
         <div><input className={styles.containerInput} placeholder='Find Your Course Here....' /></div>
         <div></div>
    </div>
  )
}

export default Navbar