import { Box, Button, Flex, FormControl, Input, Select, Text, useToast,  } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Client/NewClient.module.css"
import { IoMdArrowRoundBack  } from "react-icons/io";
import { FcInfo } from "react-icons/fc";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoAddOutline } from "react-icons/io5";
import { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';


const AkayNewClient = () => {
  const[client,setclient] = useState("")
  const[address,setaddress] = useState("")
  const[amount,setamount] = useState()
  const[currency,setcurrency] = useState("")
  const toast = useToast()
  const token = useSelector((state) => state.auth.token);
  // const[btn,setBtn] = useState(false)
  // console.log(btn)



  const handleSubmit=()=>{
    // setBtn(false)
    const payload ={client,address,amount ,currency}
    fetch("https://tmetric-41504.herokuapp.com/clients/new" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    // .then((res)=>console.log(res))
    toast({
      position: 'top',
      marginTop: '150px',
      description: "New Client Added Successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
  })
    .catch((err)=>console.log(err))
}


  return (
    <Box>
    {/* MainBox */}
    <Box className={styles.NewClientmainBox}>

   {/* UpperArrowBox */}
   <Box className={styles.NewClientarrowBox}>
   
  <Link to="/sidebar/client"> <IoMdArrowRoundBack size={24} className={styles.arrow}/> </Link>

   <Text fontSize="26px" fontWeight="semibold">
   New Client
   </Text>

   </Box>

   {/* UpperArrowBoxEnd */}


  {/* InputMainBox */}
   <Box className={styles.InputComBox}>
   

   {/* Input Inside complete box */}
   <Box className={styles.InputComInsBox}>
   
   <Text fontSize="24px" fontWeight="500">
   General
   </Text>
  

  {/* Client Name Input Flex with two box */}
   <Box className={styles.ImageFlexBox}>
   
   <Box className={styles.ImageFlexLeftBox}>
    <Text fontSize={12} color="gray" fontWeight={500}>Client name</Text>
    
    <Input placeholder='My Corp.' border="1px solid gray" marginTop={1} onChange={(e)=>setclient(e.target.value)}  />
    
   </Box>

   <Box className={styles.ImageFlexRightBox}>
    <img src="https://services.tmetric.com/storage/Content/Avatars/client.svg" alt="" className={styles.image}/>
    <Text>Select Client Image</Text>
   </Box>

   </Box>
   {/* Client Name Input Flex with two box End*/}

  
  {/* Address Input Box */}

   <Box className={styles.AddressBox}>
    <Text fontSize={12} color="gray" fontWeight={500}>Address</Text>
    <Input placeholder='Enter client address' border="1px solid gray" marginTop={1} fontSize="14px" fontWeight={500} padding="15px 0px 55px 10px" onChange={(e)=>setaddress(e.target.value)} />
   </Box>

  {/* Address Input Box End*/}



  {/* Currency Box */}
  <Box className={styles.ImageFlexBox}>
   
   <Box className={styles.ImageFlexLeftBox}>
    <Text fontSize={12} color="gray" fontWeight={500}>Preferred currency</Text>
    <Select placeholder='Select option' marginTop={1} onChange={(e)=>setcurrency(e.target.value)}>
   <option value='USD'>USD</option>
   <option value='UYU'>UYU</option>
   <option value='INR'>INR</option>
   </Select>
   </Box>

   <Box className={styles.ICurrFlexRightBox}>
   <Text fontSize={12} color="gray" fontWeight={500}>Default billable rate</Text>
   <Box style={{display:"flex" , alignItems:"center"}}>
    <Input borderRight="none" width="55%" marginTop={1} borderBottomRightRadius="none" borderTopRightRadius={0} placeholder='Amount' onChange={(e)=>setamount(Number(e.target.value))}/>
    <Text fontSize={13} border="1px solid lightgray" padding="9px 13px 9px 13px" borderRadius={5} borderLeft="none" bg="rgb(248, 245, 245)" marginTop={1} borderBottomLeftRadius="none" borderTopLeftRadius={0}>USD per hour</Text>
   </Box>
   </Box>

   </Box>

     {/* Currency Box End*/}


     <Text fontSize="26px" fontWeight="semibold" marginTop="50px">Contacts</Text>

     <Box className={styles.BlueBgBox}>
      
      <FcInfo size={25} />
      <Text fontSize={14} color="#1a6c9b" fontWeight={500}>Client's contact persons may login to TMetric and view reports for projects associated with this client.</Text>
     </Box>


    {/* LAST BOX */}
     <Box className={styles.lastBox}>
     
     <Box className={styles.LastleftBox}>
      <BsEnvelopeFill/>
      <Text fontSize={14} fontWeight={400}>Invite Client Representative</Text>
     </Box>
     <Box className={styles.LastleftBox}>
      <IoAddOutline size={22}/>
      <Text fontSize={14} fontWeight={400}>Select Existing Workspace Member</Text>
     </Box>

     </Box>

     {/* LAST BOX END */}

   <Link to="/sidebar/client"> <Button onClick={handleSubmit}>SAVE</Button> </Link> 

   {/* {btn?
   <Box width="200px" height="80px" border="1px solid red" bg="lightred" >
   <Button onClick={handleSubmit}>SAVE</Button>
   </Box>
   :""} */}
   


   </Box>
 {/* Input Inside complete box End*/}

   </Box>
  {/* InputMainBoxEnd */}



    </Box>
   {/* Main Box End */}
    


    </Box>
  )
}

export default AkayNewClient