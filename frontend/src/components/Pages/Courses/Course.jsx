import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Course.module.css';

const Course = () => {
  const [data,setData]=useState([]);
  const {category}=useParams();
  // console.log(category);

  const getData=()=> {
    axios.post(`http://localhost:8080/courses`,{
    category: category,
  }).then((res)=>setData(res.data))
  .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    getData();
  },[]);

  console.log(data);
  return (
    <div className={styles.main}>
      Course
        {data.map((el)=>{
          return (
            <div className={styles.container} key={el._id}>

              <div className={styles.containerLeft}>
                <img src={el.imgUrl} alt="imageUrl" />
              </div> 

              <div className={styles.containerRight}>
                {el.courseName}<br/>
                {el.description}<br/>
                {el.instructor}
              </div>              
        </div>
          )
        })}
    </div>
  )
}

export default Course