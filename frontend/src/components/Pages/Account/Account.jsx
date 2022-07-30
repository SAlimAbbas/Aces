import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

const Account = () => {
  const [data,setData]=useState({});
   
useEffect(()=>{
  const userName=localStorage.getItem('userName');
  axios.post("http://localhost:8080/account",{userName}).then((response)=>{setData({...response.data})});
   },[])
  return (
    <Center py={6}>
      {console.log(data)}
      
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={data.imgUrl}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {data.Name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
         {data.email}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          
          <Link href={'#'} color={'blue.400'}>
            #Moblie
          </Link>{' '}
          {data.mobile}
          
        </Text>
        <p style={{"fontWeight": "bold","marginTop":"10px"}}>Balance: ₹{data.Amount}</p>
    
      </Box>
    </Center>
  )
}

export default Account