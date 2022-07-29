import React,{useRef} from 'react';
import { useParams } from 'react-router-dom';

import {Button} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect} from 'react';
import styles from './Course.module.css';
import { StarIcon } from '@chakra-ui/icons';
import { CountdownCircleTimer } from "react-countdown-circle-timer";







const Indprod=({_id,imgUrl,description,rating,instructor,courseName,price,validity})=>{
  const [check,setCheck]=useState(false)
  const timerId=useRef(600)
  const [seconds,setSeconds]=useState(0)

  const renderTime = ({ remainingTime }) => {
   
    if (remainingTime === 0) {
      return <div className="timer">Course Expire</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">weeks</div>
      </div>
    );
  }

useEffect(()=>{
  timerId.current=setInterval(()=>{
    setSeconds(pre=>pre+1)
   },1000)
},[])

const stoptimer=()=>{
  clearInterval(timerId.current)
  timerId.current=0
}




    return(<>

<div className={styles.container} key={_id}>

<div className={styles.containerLeft}>
  <img src={imgUrl} alt="imageUrl" />
</div> 

<div className={styles.containerRight}>
  <h2 style={{"fontWeight":"bold","fontSize":"24px"}}>{courseName}</h2>
  <p>{description}</p>
  <span style={{"color":"darkorange"}}>{rating}</span>
  <StarIcon style={{"color":"darkorange","marginRight":"14px","marginTop":"-7px"}}/>
  <span style={{"color":"brown"}}>{instructor}</span>
  <p style={{"color":"red","fontWeight":"bold"}}>₹{price}</p>
  <Button colorScheme='purple' onClick={()=>{stoptimer()}}>SELL</Button>
{/* {check?<h1>Expire</h1>:<h1>Running</h1>}
{!check?<p>{timerId.current}</p>:<p>done</p>} */}
<p>{seconds}</p>
</div>   
<div>
<div className="timer-wrapper">
<CountdownCircleTimer
isPlaying

duration={validity*60}
colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
colorsTime={[10, 6, 3, 0]}
onComplete={() => ({ shouldRepeat: false, delay: 100 })}
>
{renderTime}
</CountdownCircleTimer>
</div>
  
  
  </div>           
</div>


    </>)

}

export default Indprod; 