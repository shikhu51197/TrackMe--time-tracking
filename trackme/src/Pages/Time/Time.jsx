import React,  { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import {  Box, Button, Checkbox, Divider, Fade, Flex, Input, Progress, Text, useDisclosure } from '@chakra-ui/react';
import { FaPlay, FaStop } from "react-icons/fa";
import { TiMediaRecord } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid'
import TimePicker from 'react-time-picker'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ActiveProject from "./ActiveProject";
import axios from 'axios'
const Time = () => {
    const { isOpen, onOpen, onClose} = useDisclosure()
    const[play, setPlay]=useState(0)
    const[uptime, setUptime]=useState([0,0])
    let [value, onChange] = useState("8:00");
    let [value1, onChange1] = useState("9:00");
    const [shour,setshour]=useState([])
    const [ehour,setehour]=useState([])
 
    const token = useSelector((state) => state.auth.token);
    // console.log(clock2)
    // console.log(value)
    const[data ,setData]=useState([])
    const [form,setForm]=useState({
      id:"",
      description:"",
      project:"",
      start:shour,
      end:ehour,
    })
    // console.log(form)
    const DeleteProject=(id)=>{
      let newData=data.filter((e)=>e.id!==id)
      setData(newData)
      rset();
    }
    const rset=()=>{
      let h=ehour[0]-shour[0];
      let m=ehour[1]-shour[1];
      let temp=[...uptime];
      setUptime([temp[0]-h,temp[1]-m])
    }

    const handleChange=(e)=>{
      const {name,value}=e.target;
      // console.log(value)
      setForm({
        ...form,[name]:value,id:uuidv4(),
      })
    }
    const set=()=>{
      let h=ehour[0]-shour[0];
      let m=ehour[1]-shour[1];
      let temp=[...uptime];
      setUptime([temp[0]+h,temp[1]+m])
    }

    const Addproject=(e)=>{
      e.preventDefault()
      setData([...data,form])
      set();
      onClose();

      axios.post('https://tmetric-41504.herokuapp.com/time/addTime', {
        description :form.description,
        project : form.project,
        startTime: value,
        endTime: value1,
        duration: `${ehour[0]-shour[0]}:${ehour[1]-shour[1]}`
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }
        )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
   
    
    useEffect(()=>{
      setshour(value.trim().split(":").map(Number));
      setForm({...form,start:shour.join(":")})
    },[value])
    useEffect(()=>{
      setehour(value1.trim().split(":").map(Number));
      setForm({...form,end:ehour.join(":")})
    },[value1])
      
     
  return (
<Box  w="100%" p="0.5rem">

{/* Upper Part */}

<Flex justifyContent="space-between">
  {/*left section Time*/}
  <Box display={"flex"} gap="10px" border={""}>
      {/*button*/}
      <Flex gap="5px">
      <Button bg="#17c22e" disabled={play>0}  colorScheme='#17c22e' borderRadius="50%"><FaPlay color='white'/></Button>
      <Button bg="red" disabled={play<=0}  colorScheme='grey' borderRadius="50%"><FaStop color='white'/></Button>
      </Flex>

      {/*select Team*/}
      <Flex ml={"10px"}>
          <Text fontSize='3xl'>My Time</Text>
          <Box h="30px" mt={"10px"} ml={"13px"}></Box>
          
        
      </Flex>
  </Box>
  
  
  <Box display={"flex"} gap="15px" >
      <Input type="date" ></Input>
      <Text fontSize={"2xl"}>Today</Text>
      <Flex mt="14px" gap="10px">
      <Text as='samp'><AiOutlineLeft/></Text>
      <Text as='samp'><TiMediaRecord/></Text>
      <Text as='samp'><AiOutlineRight/></Text>
      </Flex>
  </Box>
</Flex>

{/*Middle part*/}

<Box border={"1px solid #d0d6db"} mt="0.5rem" p={"1rem"}>
<Box >
    <Text textAlign={"left"}>Total</Text>
    <Flex mt="-2" justifyContent={"space-between"}>
        <Text fontSize={"3xl"} fontWeight="medium">{Math.abs(uptime[0])+"h"+":"+Math.abs(uptime[1])+"m" }</Text>
        <Text>...</Text>
       
    </Flex>
    <Progress hasStripe value={10} />
</Box>
</Box>

{/*down part*/}

<Box border={"1px solid #d0d6db"} mt="0.5rem" borderRadius="6px">

<Box>
    <Flex gap="5px" p={"1rem"}>
    <Checkbox isDisabled></Checkbox>
    <Button onClick={onOpen}>Add Time Entry</Button>      
    </Flex>

    {/* Active Project */}

    {
      data.map((e)=>{
        return <ActiveProject props={e} key={e.id} setPlay={setPlay} play={play} DeleteProject={DeleteProject}/>
      })
    }
    


    {/* Add Time entey */}
    <form action="">
    <Fade in={isOpen} >
    <Divider  />
        <Box
          color='black'
          w="90%"
          rounded='md' 
          boxShadow='xs'
          p={"1rem"}
          pt="3rem"
          
        >
          
        {/* First Flex*/}

          <Flex mt={"-3%"}  justifyContent="space-between">
            <Box w="50%">
                <Text textAlign={"left"}>Description</Text>
                <Input w="100%" h="30px" name="description" onChange={(e)=>handleChange(e)} placeholder='Description'></Input>
            </Box>
            <Box>
                <Text textAlign={"left"}>Start Time</Text>
                <TimePicker onChange={onChange} value={value}/>
            </Box>
            <Box>
            <Text textAlign={"left"}>End Time</Text>
            <TimePicker onChange={onChange1} value={value1}/>
                {/* <Clock setClock2={setClock2}/> */}
            </Box>
        
            <Box  w="12%">
                <Text textAlign={"left"}>Duration</Text>
                <Text border="1px solid" borderRadius={"3px"}>{ehour[0]-shour[0]}h : {ehour[1]-shour[1]}m</Text>
            </Box>
          </Flex>

        {/* Second Flex*/}
          <Flex mt="30px" w="60%" justifyContent={"space-between"}>
            <Box w="55%">
              <Text textAlign={"left"}>Add Project</Text>
            <Input name="project" onChange={(e)=>handleChange(e)} placeholder='Add project'/>
            </Box>
            <Box w="40%">
            <Text textAlign={"left"}>Add Tags</Text>
            <Input placeholder='Add Tags'/>
            </Box>
          </Flex>



          {/* Form End */}
          <Flex  gap="20px" textAlign={"left"} mt="20px">
          <Button bg="blue" type='submit' onClick={Addproject} colorScheme='facebook'>Save</Button>
          <Button onClick={onClose} color="black">Cancel</Button>
          </Flex>
                
        </Box>
    </Fade>
    </form>
    
</Box>

</Box>

</Box>
  )
}

export default Time;