import { Box, Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "../Projects/General.module.css"
import {HiOutlineQuestionMarkCircle} from "react-icons/hi"
import { useSelector } from 'react-redux';

const General = ({setproject,setcode ,setClient}) => {
  // const[project,setproject] = useState("")
  const [data,setData] = useState([])
  const token = useSelector((state) => state.auth.token);

  const getdata=()=>{
    fetch("https://tmetric-41504.herokuapp.com/clients/",{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`}
    })
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getdata()
  },[])
  return (
    
    <Box id="general">
         
         {/* Main Box */}
        <Box className={styles.GeneralMainBox}>
            
            <Flex gap={15} mt="15px">
            <Text fontSize={20} >General</Text>
            <Text fontSize={18} color="#0e781c" bg="#e3f8e6"  p="1px 20px" borderRadius="20px">Active</Text>
            </Flex>
            
        {/* Project Name Input Box */}
           <Box className={styles.prMainBox}>

            <Box className={styles.prMianLeft}>
           <Text fontSize={12} color="gray" fontWeight={500}>Project name</Text>
           <Input placeholder='Enter Project name' border="1px solid gray"  fontSize="14px" fontWeight={500} h="33px" onChange={(e)=>setproject(e.target.value)}/>
           </Box> 

           <Box className={styles.prMianRight}>
            <Flex gap={2}>
           <Text fontSize={12} color="gray" fontWeight={500}>Project code</Text>
           <HiOutlineQuestionMarkCircle size={14} color="gray"/>
           </Flex>
           <Input placeholder='PR-01' border="1px solid gray"  fontSize="14px" fontWeight={500} h="33px" onChange={(e)=>setcode(e.target.value)}/>
           </Box> 
           </Box>
           {/* Project Name Input Box End*/}


            {/* Client Name Input Flex with two box */}
   <Box className={styles.ImageFlexBox}>
   
   <Box className={styles.ImageFlexLeftBox}>
    <Text fontSize={12} color="gray" fontWeight={500}>Client</Text>
    
    <Select placeholder='Select option' marginTop={1} h="33px" onChange={(e)=>setClient(e.target.value)}>
   {data?.map((el,i)=>(
    <option value={el.client}>{el.client}</option>
   ))}
   </Select>
    
   </Box>

   <Box className={styles.ImageFlexRightBox}>
    <img src="https://services.tmetric.com/storage/Content/Avatars/project.svg" alt="" className={styles.image}/>
    <Text fontSize={15}>Select Project Image</Text>
   </Box>

   </Box>
   {/* Client Name Input Flex with two box End*/}


   {/* Address Input Box */}

   <Box className={styles.AddressBox}>
    <Text fontSize={12} color="gray" fontWeight={500}>Notes</Text>
    <Input placeholder='Additional information on the project' border="1px solid gray" marginTop={1} fontSize="14px" fontWeight={500} padding="15px 0px 55px 10px" />
   </Box>

  {/* Address Input Box End*/}








        </Box>
        {/* Main Box end */}


    </Box>
  )
}

export default General