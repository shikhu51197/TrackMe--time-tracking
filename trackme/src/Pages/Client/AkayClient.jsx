import React, { useState } from 'react'
import { Box , Text ,Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import styles from "../Client/Client.module.css"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from 'react-icons/bs';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';




const AkayClient = () => {
  const[change,setChange]=useState(true)
  const[active,setactive]=useState(true)
  const[total,settotal]=useState(true)

  const [data,setData] = useState([])
  const token = useSelector((state) => state.auth.token);

  const getdata=()=>{
    fetch("https://tmetric-41504.herokuapp.com/clients/", {
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

  const sortascdata=()=>{
    fetch("https://tmetric-41504.herokuapp.com/clients/sortasc",{
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
    sortascdata()
  },[])


  const sortdecdata=()=>{
    fetch("https://tmetric-41504.herokuapp.com/clients/sortdec",{
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
    sortdecdata()
  },[])



  const handleDelete=(id)=>{
    fetch(`https://tmetric-41504.herokuapp.com/clients/${id}`,{
      method:"DELETE",
      headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`}
    })
    .then((res)=>res.json())
    .then(()=>getdata())
    .catch((err)=>{
     console.log(err)
    })
   }

  const handleClientSort=()=>{
  if(change==true)
  {
    sortdecdata()
    setChange(false)
  }
  else{
    sortascdata()
    setChange(true)
  }
  }

  const handleActiveSort=()=>{
    if(active==true)
    {
      setactive(false)
    }
    else{
      setactive(true)
    }
    }

    const handleProSort=()=>{
      if(total==true)
      {
        settotal(false)
      }
      else{
        settotal(true)
      }
      }
  return (
    <Box>

       <Box className={styles.ClientMainBox}>

       <Text className={styles.ClientText}>
       Clients <label style={{color:"#1f7a2a" , backgroundColor:"#e3f8e7" , borderRadius:"50%" ,padding:"1px 5px" ,fontSize:"17px" ,fontWeight:"500"}}>
        {data.length}</label> 
        <label style={{fontSize:"15px" ,color:"gray" ,marginLeft:"5px" ,fontWeight:"500"}}>total</label>
       </Text>

       <Box className={styles.ClientBtnBox}>
        
      <Link to="/sidebar/client/new">  <Button className={styles.ClientBtn} bg="#3070f0"><IoMdAdd size={24}/>New Client</Button> </Link>
       </Box>
      

      {/* Filter Box */}
      <Box className={styles.filterBox}>
       
       <Box className={styles.filterLeftBox} onClick={handleClientSort}>
        {change?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>} <Text color="gray" fontSize={12} fontWeight={500}>CLIENT</Text>
       </Box>
       <Box className={styles.filterRightBox}>
        <Box className={styles.filterRightLeftBox} onClick={handleActiveSort}>
        {active?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>} <Text color="gray" fontSize={12} fontWeight={500}>Active Projects</Text>
        </Box>
        <Box className={styles.filterRightLeftBox} onClick={handleProSort}>
        {total?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>} <Text color="gray" fontSize={12} fontWeight={500}>Total Projects</Text>
        </Box>
       </Box>
      

      </Box>
      {/* Filter Box End */}


      {data?.map((el,i)=>(
      <Box className={styles.mapBox}>
        <Box className={styles.MapleftBox}>
        <img src="https://services.tmetric.com/storage/Content/Avatars/client.svg" alt="" className={styles.image}/>
        <Text>{el.client}</Text>
        </Box>
        <Box className={styles.MapRightBox}>
        <Box className={styles.MapRightLeftBox}></Box>
          <Box className={styles.MapRightRightBox}>
          <Menu>
  <MenuButton as={Button}>
   <BsThreeDots/>
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem onClick={()=>handleDelete(el._id)}>Delete</MenuItem>
  </MenuList>
</Menu>
          </Box>
        </Box>
      </Box>
      ))
}
       </Box>
      
    </Box>
  )
}

export default AkayClient