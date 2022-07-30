import React from 'react';
import { useParams } from 'react-router-dom';
import {Button} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Selling.module.css';
import { StarIcon } from '@chakra-ui/icons';

const Selling = () => {
    const [data,setData]=useState([]);
    // console.log(category);
  
    const getData=()=> {
      axios.get(`http://localhost:8080/getselldata`).then((res)=>setData(res.data))
    .catch((err)=>console.log(err));
    }
    useEffect(()=>{
      getData();
    },[]);
  
    console.log(data);
    return (
      <div className={styles.main}>
        Selling
          {data.map((el)=>{
            return (
              <div className={styles.container} key={el._id}>
  
                <div className={styles.containerLeft}>
                  <img src={el.image} alt="imageUrl" />
                </div> 
  
                <div className={styles.containerRight}>
                  <h2 style={{"fontWeight":"bold","fontSize":"24px"}}>{el.courseName}</h2>
                  <p>{el.description}</p>
                  <span style={{"color":"darkorange"}}>{el.rating}</span>
                  <StarIcon style={{"color":"darkorange","marginRight":"14px","marginTop":"-7px"}}/>
                  <span style={{"color":"brown"}}>{el.instructor}</span>
                  <p style={{"color":"red","fontWeight":"bold"}}>₹{el.selling_price}</p>
                  <Button colorScheme='purple' onClick={()=>{
                    const Token=localStorage.getItem("TOKEN")
                    const payload ={courseid:el._id,sellername:el.sellername,token:Token, selling_price:el.selling_price

                    }
                    // console.log(payload)
                    axios.post(`http://localhost:8080/buyfromsell`,payload).then(response => {console.log(response)})
                  }}>BUY NOW</Button>
            
                </div>              
          </div>
            )
          })}
      </div>
    )
  }

export default Selling