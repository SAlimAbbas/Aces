import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import axios from "axios";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  tokenToCSSVar,
} from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ChevronDownIcon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Fade, ScaleFade, Slide, SlideFade,Collapse,Box
} from "@chakra-ui/react";
import { useEffect } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose,onToggle } = useDisclosure();
  // const { isOpenAcc, onToggle } = useDisclosure()
  const btnRef = React.useRef();
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const loginData = (name) => {
    localStorage.setItem("userName", name);
    loginName();
    axios
      .post(`http://localhost:8080/login`, {
        name,
      })
      .then((response) => {
        setToken(response.data);
        localStorage.setItem("TOKEN", response.data);
      });
  };

  const loginName = () => {
    setUserName(localStorage.getItem("userName"));
  };

  const logoutName = () => {
    setToken(localStorage.setItem("TOKEN",""));
    setUserName(localStorage.setItem("userName",""));
  }


  useEffect(()=>{
    loginName();
  },[userName])

 

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <Link to="/"><img src="Logo.png" alt="" width={85} height={80} /></Link>
      </div>
      <div style={{"width":"40%"}}>
      <Input variant='filled' placeholder='Find your course here..' className={styles.containerInput} />
      </div>
      <div >
        <Button
          className={styles.btn}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          {userName !== "" ? userName : "Login/SignUp"}
        </Button>

        <Menu >
        {token?<MenuButton style={{"marginTop":"10px","marginLeft":"10px"}} as={Button} colorScheme="teal">
          Dashboard
        </MenuButton>:<></>}
        <MenuList>
          <MenuGroup title="Dashboard">
            <MenuItem>
            <Link to="/myaccount">My Account</Link>
            </MenuItem>
            <MenuItem><Link to="/mycourse">My Courses</Link></MenuItem>
            <MenuItem onClick={logoutName}>Logout</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
        </Menu>
      </div>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
              <Menu>
                <MenuButton as={Button}>Your Accounts</MenuButton>
                <MenuList>
                  <MenuItem
                    minH="48px"
                    onClick={() => {
                      loginData("Alim");
                    }}
                  >
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://avatars.githubusercontent.com/u/99671890?v=4/100/100"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>Alim</span>
                  </MenuItem>
                  <MenuItem
                    minH="40px"
                    onClick={() => {
                      loginData("Papil");
                        
                    }}

                    
                  >
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://avatars.githubusercontent.com/u/98761099?v=4/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>Papil</span>
                  </MenuItem>

                  <MenuItem
                    minH="40px"
                    onClick={() => {
                      loginData("Prathmesh");
                    }}
                  >

                 

                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://avatars.githubusercontent.com/u/87255237?v=4/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>Prathmesh</span>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://avatars.githubusercontent.com/u/87255237?v=4/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>Admin</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={onClose}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Navbar;
