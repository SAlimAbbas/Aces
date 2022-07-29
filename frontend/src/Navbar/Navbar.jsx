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
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  return (
    <div className={styles.container}>
      <div>
        <img src="LOGO.jpg" alt="" width={85} height={80} />
      </div>
      <div>
        <input
          className={styles.containerInput}
          placeholder="Find Your Course Here...."
        />
      </div>
      <div>
        <Button
          className={styles.btn}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
        >
          {userName !== "" ? userName : "Login/SignUp"}
        </Button>
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
                      loginData("Prathamesh");
                    }}
                  >
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://avatars.githubusercontent.com/u/87255237?v=4/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>Prathamesh</span>
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
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Navbar;
