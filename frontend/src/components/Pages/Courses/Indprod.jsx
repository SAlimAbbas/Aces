import React from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Course.module.css';
import { StarIcon } from '@chakra-ui/icons';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Indprod=({_id,imgUrl,description,rating,instructor,courseName,price,renderTime,time})=>{
    console.log("time is",time)
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
  <Button colorScheme='purple'>SELL</Button>

</div>   
<div>
<div className="timer-wrapper">
<CountdownCircleTimer
isPlaying
duration={time}
colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
colorsTime={[10, 6, 3, 0]}
onComplete={() => ({ shouldRepeat: false, delay: 1 })}
>
{renderTime}
</CountdownCircleTimer>
</div>
  
  
  </div>           
</div>


    </>)

}

export default Indprod; 