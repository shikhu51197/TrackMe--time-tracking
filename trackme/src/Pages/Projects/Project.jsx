import { Box, Button, Flex, Input, Select, Text , Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import styles from "../Projects/Project.module.css"
// import {HiOutlineSearch} from "react-icons/hi"
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

const Project = () => {
  const[project,setproject]=useState(true)
  const[code,setcode]=useState(true)
  const[client,setclient]=useState(true)
  const[amount,setamount]=useState(true)
    const [data,setData] = useState([])
    const token = useSelector((state) => state.auth.token);

    

    const getdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/",{
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
    console.log(data)



    const sortproascdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortproasc",{
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
      sortproascdata()
    },[])
  
  
    const sortprodecdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortprodec",{
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
      sortprodecdata()
    },[])


    const sortcodeascdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortcodeasc",{
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
      sortproascdata()
    },[])
  
  
    const sortcodedecdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortcodedec",{
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
      sortprodecdata()
    },[])


    const sortamoascdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortamoasc",{
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
      sortproascdata()
    },[])
  
  
    const sortamodecdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortamodec",{
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
      sortprodecdata()
    },[])


    const sortcliascdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortcliasc",{
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
      sortproascdata()
    },[])
  
  
    const sortclidecdata=()=>{
      fetch("https://tmetric-41504.herokuapp.com/project/sortclidec",{
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
      sortprodecdata()
    },[])


    const handleDelete=(id)=>{
        fetch(`https://tmetric-41504.herokuapp.com/project//${id}`,{
         method:"DELETE",
        })
        .then((res)=>res.json())
        .then(()=>getdata())
        .catch((err)=>{
         console.log(err)
        })
       }


       const handleProject=()=>{
        if(project==true)
        {
          sortprodecdata()
          setproject(false)
        }
        else{
          sortproascdata()
          setproject(true)
        }
       }

       const handleCode=()=>{
        if(code==true)
        {
          sortcodedecdata()
          setcode(false)
        }
        else{
          sortcodeascdata()
          setcode(true)
        }
       }

       const handleclient=()=>{
        if(client==true)
        {
          sortclidecdata()
          setclient(false)
        }
        else{
          sortcliascdata()
          setclient(true)
        }
       }

       const handleAmount=()=>{
        if(amount==true)
        {
          sortamodecdata()
          setamount(false)
        }
        else{

          sortamoascdata()
          setamount(true)
        }
       }
  return (
   
    <Box>
    
    <Box className={styles.NewProjectMainBox}>
   

   <Text fontSize={22} letterSpacing="1px" fontWeight={500}>Projects</Text>

   {/* ALL SELECT BOX  */}

   <Box className={styles.Inputmerge}>
   
   <Select  w="10%" h="38%">
   <option value="Client:All" >Client:All</option>
    <option value="Option 1" >Option 1</option>
   </Select>

   <Select placeholder="Status : Active or Done" w="20%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>


   <Select placeholder="Billing : Any" w="12%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>


   <Select placeholder="Budget : Any" w="13%" h="38%">
    <option value="Option 1" >Option 1</option>
   </Select>

   </Box>

   {/* ALL SELECT BOX END */}



   {/* gray Box */}
   <Box className={styles.ProjectGrayBox}>


   <Box className={styles.ClientBtnBox}>

    <Box>
  <Link to="/sidebar/project/new"><Button className={styles.ClientBtn} bg="#3070f0" color="white" h="33px"><IoMdAdd size={24}/>New Project</Button></Link>
   </Box>

   <Box>
    <Flex>
     {/* <Text> {data.length} projects </Text> */}
   <Input placeholder='Search'/>
    </Flex>
   </Box>
   </Box>

   </Box>
    {/* Gray Box End */}



      {/* Sorting Box */}
  <Box className={styles.sortingBox}>
   


   <Box className={styles.sortingFirstBox} onClick={handleProject}>
   {project?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>} <Text color='gray' fontWeight={500} fontSize="14px">PROJECT</Text>
   </Box>
   <Box className={styles.sortingSecBox} onClick={handleCode}>
   {code?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>}<Text color='gray' fontWeight={500} fontSize="14px">CODE</Text>
   </Box>
   <Box className={styles.sortingThirBox} onClick={handleclient}>
   {client?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>} <Text color='gray' fontWeight={500} fontSize="14px">CLIENT</Text>
   </Box>
   <Box className={styles.sortingForthBox} onClick={handleAmount}>
   {amount?<AiOutlineArrowUp color='gray' fontWeight={900}/>:<AiOutlineArrowDown color='gray' fontWeight={900}/>}<Text color='gray' fontWeight={500} fontSize="14px">BILLABLE AMOUNT</Text>
   </Box>
   <Box className={styles.sortingFirftBox}>
    <Text color='gray' fontWeight={500} fontSize="14px">TEAM</Text>
   </Box>

  </Box>
  {/* Sorting Box End */}

   
   {data?.map((el,i)=>(
    <Box className={styles.mapBox} key={el._id}>

        <Box className={styles.sortingFirstBox}>
        <img src="https://services.tmetric.com/storage/Content/Avatars/project.svg" alt="" className={styles.image}/>
            {el.project}</Box>
         <Box className={styles.sortingSecBox}>{el.code}</Box>
         <Box className={styles.sortingThirBox}>
         <img src="https://services.tmetric.com/storage/Content/Avatars/client.svg" alt="" className={styles.image}/>
            {el.client}</Box>
          <Box className={styles.sortingForthBox}>{el.amount} {el.currency}</Box>
          <Box className={styles.sortingFirftBox}>No Team</Box>
          <Box className={styles.menuBox}>
          <Menu>
  <MenuButton >
   <BsThreeDots/>
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem onClick={()=>handleDelete(el._id)}>Delete</MenuItem>
  </MenuList>
</Menu>
          </Box>
        </Box>
   ))}


    </Box>

    </Box>
  )
}

export default Project