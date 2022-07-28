import React from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Course.module.css';
import { StarIcon } from '@chakra-ui/icons';


const MyCourse = () => {
  const [data,setData]=useState([]);
  const {category}=useParams();
  // console.log(category);

  const getData=()=> {
    const temptoken=localStorage.getItem('TOKEN');
    console.log(temptoken);
    const payload={token:temptoken};
    axios.get(`http://localhost:8080/mycourse`,JSON.stringify(payload)).then((res)=>setData(res.data))
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
                <h2 style={{"fontWeight":"bold","fontSize":"24px"}}>{el.courseName}</h2>
                <p>{el.description}</p>
                <span style={{"color":"darkorange"}}>{el.rating}</span>
                <StarIcon style={{"color":"darkorange","marginRight":"14px","marginTop":"-7px"}}/>
                <span style={{"color":"brown"}}>{el.instructor}</span>
                <p style={{"color":"red","fontWeight":"bold"}}>₹{el.price}</p>
                <Button colorScheme='purple'>SELL</Button>
          
              </div>              
        </div>
          )
        })}
    </div>
  )
}

export default MyCourse; 
