
import React from "react";
import { useParams } from "react-router-dom";

import { Button, NumberDecrementStepper } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Course.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useToast } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";

const Indprod = ({
  _id,
  imgUrl,
  description,
  rating,
  instructor,
  courseName,
  price,
  validity,
  renderTime,
  time,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sell,setSell]=useState("");
  const localData=localStorage.getItem("userName");
  const toast = useToast();

  console.log("ID",_id)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <img src={imgUrl} alt="imageUrl" />
        </div>

        <div className={styles.containerRight}>
          <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>{courseName}</h2>
          <p>{description}</p>
          <span style={{ color: "darkorange" }}>{rating}</span>
          <StarIcon
            style={{
              color: "darkorange",
              marginRight: "14px",
              marginTop: "-7px",
            }}
          />
          <span style={{ color: "brown" }}>{instructor}</span>
          <p style={{ color: "red", fontWeight: "bold" }}>₹{price}</p>
          <p style={{fontWeight: "bold" }}>Validity: {validity}days</p>
          <Button onClick={onOpen} colorScheme="purple">
            SELL
          </Button>
          <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div>
                    <label>Course Name</label>
                    <Input value={courseName} disabled />
                  </div>

                  <div>
                    <label>Validity</label>
                    <Input value={Number(validity)-1} disabled/>
                  </div>
                  <div>
                    <label>CourseId </label>
                    <Input value={_id} disabled/>
                  </div>
                  <div>
                    <label>Seller Name</label>
                    <Input required value={localData} disabled/>
                  </div>
                  <div>
                    <label>Selling Price</label>
                  
                    <Input required onChange={(e) =>{setSell(e.target.value)}} />
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={()=>{
                    onClose()
                    const payload={courseid:_id,selling_price:Number(sell),Sellername:localData,validity:validity}
                  axios.post('http://localhost:8080/sell',payload).then(res=>console.log(res));
                    // console.log(payload);
                  
                  }}>
                    Proceed To Sell
                  </Button>
                  {/* <Button variant="ghost">Secondary Action</Button> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </div>
        <div>
          {/* <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={Math.floor(Math.random() * 10) * 1000}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 6, 3, 0]}
              onComplete={() => ({ shouldRepeat: false, delay: 1 })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Indprod;
