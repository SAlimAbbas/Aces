import React from 'react';
import styles from "./Navbar.module.css"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,Input
} from '@chakra-ui/react'
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div className={styles.container}  >
         <div><h1>CourShare-App</h1></div>
         <div><input className={styles.containerInput} placeholder='Find Your Course Here....' /></div>
         <div><Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <Link to="/login" >Login/SignUp</Link>
      </Button></div>
         <>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    </div>
  )
}

export default Navbar