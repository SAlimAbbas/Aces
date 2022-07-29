import React from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Course.module.css';
import { StarIcon } from '@chakra-ui/icons';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Indprod from "./Indprod"


const MyCourse = () => {
  const [data,setData]=useState([]);
  const {category}=useParams();
  // console.log(category);
  // ---------------------------------
  const time=300
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Course Expire</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  }
 
  // -------------------------------

  const getData=()=> {
    const temptoken=localStorage.getItem('TOKEN');
    console.log(temptoken);
    const payload={token:temptoken};
   
    axios.post("http://localhost:8080/mycourse",payload).then((res)=>{
    // console.log(res)
    setData([...res.data])
    })
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
       
          return <Indprod {...el} renderTime={renderTime} time={time}/>
        })}
    </div>
  )
}

export default MyCourse; 
