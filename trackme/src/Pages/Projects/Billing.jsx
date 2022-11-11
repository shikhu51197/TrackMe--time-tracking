import { Box, Button, Flex, Input, Select, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Projects/Billing.module.css"

const Billing = ({setamount , setcurrency, sethourly,  setfreetype, setfreeRecurr}) => {
    const[change,setChange] = useState(false)
    const[data,setData]=useState(false)


    console.log(data)
    const PricingFirstButtonState={
        padding: "10px 15px",
        border: "1px solid #3f7af0",
        borderBottomLeftRadius: "5px",
        borderTopLeftRadius: "5px",
        borderBottomRightRadius:"0px",
        borderTopRightRadius:"0px",
        color: "#3f7af0",
        backgroundColor:"#e7edfc"
    }

    

    const PricingFirstButton={
        padding: "10px 15px",
        border: "1px solid gray",
        borderBottomLeftRadius: "5px",
        borderTopLeftRadius: "5px",
        borderBottomRightRadius:"0px",
        borderTopRightRadius:"0px",
    }

    const PricingSecButtonState={
        padding: "10px 15px",
        border: "1px solid #3f7af0",
        borderBottomRightRadius: "5px",
        borderTopRightRadius: "5px",
        borderBottomLeftRadius: "0px",
        borderTopLeftRadius: "0px",
        color: "#3f7af0",
        backgroundColor:"#e7edfc"
    }

    const PricingSecButton={
        padding: "10px 15px",
        border: "1px solid gray",
        borderBottomRightRadius: "5px",
        borderTopRightRadius: "5px",
        borderBottomLeftRadius: "0px",
        borderTopLeftRadius: "0px",
    }

    const handleMonthly=()=>{
        setData(false)
    }

    const handleYearly=()=>{
        setData(true)
    
    }
   
  return (
    <Box>


     <Box className={styles.BillMainBox}>

        <Flex gap={10}>

            <Text fontSize={22}>Billing</Text>
            <Stack align='center' direction='row'>
  
           <Switch size='md'  onChange={()=>setChange(!change)}/>
 
         </Stack>
        </Flex>


        {/* Bill Checked or Not Box */}
        <Box>
        {!change?
            <Box className={styles.BillNotCheck}>
                <Text color="gray" fontSize={15} fontWeight="500">To set up billing options for the project, mark it as billable.</Text>
            </Box>
        :
        <Box className={styles.billCheck}>
            <Flex>
                <Button style={data? PricingFirstButton :PricingFirstButtonState} onClick={handleMonthly} h="35px">Time & Materials</Button>
                <Button style={data? PricingSecButtonState:PricingSecButton} onClick={handleYearly} h="35px">Fixed free</Button>
            </Flex>

        {!data?
        
        // Time and Materials Box 
        <Box className={styles.InBillNotCheck}>
         
        <Box className={styles.InBillCurr}>
    <Text fontSize={12} color="gray" fontWeight={500}>Project currency</Text>
    <Select placeholder='Select option' marginTop={1} h="33px" onChange={(e)=>setcurrency(e.target.value)}>
   <option value='USD'>USD</option>
   <option value='UYU'>UYU</option>
   <option value='INR'>INR</option>
   </Select>
   </Box>


    {/* Currency Box */}
  <Box className={styles.Billinside}>
   
   <Box className={styles.BillInsLeft}>
    <Text fontSize={12} color="gray" fontWeight={500}>Hourly Rates</Text>
    <Select placeholder='Project rate' marginTop={1} h="33px" onChange={(e)=>sethourly(e.target.value)}>
   <option value='Project rate'>Project rate</option>
   <option value='Person rate'>Person rate</option>
   <option value='Work Type rate'>Work Type rate</option>
   </Select>
   </Box>

   <Box >
   <Text fontSize={12} color="gray" fontWeight={500}>Project Rate</Text>
   <Box style={{display:"flex" , alignItems:"center"}}>
    <Input h="33px" borderRight="none" width="55%" marginTop={1} borderBottomRightRadius="none" borderTopRightRadius={0} placeholder='Amount' onChange={(e)=>setamount(e.target.value)}/>
    <Text fontSize={13} border="1px solid lightgray" padding="6px 13px 6px 13px" borderRadius={5} borderLeft="none" bg="rgb(248, 245, 245)" marginTop={1} borderBottomLeftRadius="none" borderTopLeftRadius={0}>USD / hour</Text>
   </Box>
   </Box>

   </Box>

     {/* Currency Box End*/}

        </Box>

    //   Time and Materials Box End 
        :



    // Fixed Free Box
        <Box>
                <Box className={styles.InBillCurr}>
    <Text fontSize={12} color="gray" fontWeight={500}>Project currency</Text>
    <Select placeholder='Select option' marginTop={1} h="33px" onChange={(e)=>setcurrency(e.target.value)}>
   <option value='USD'>USD</option>
   <option value='UYU'>UYU</option>
   <option value='INR'>INR</option>
   </Select>
   </Box>


  <Box className={styles.FreeThreeFlex}>
   
   <Box className={styles.FreeLeft}>
    <Text fontSize={12} color="gray" fontWeight={500}>Project fee type</Text>
    <Select placeholder='Simple' marginTop={1} h="33px" onChange={(e)=>setfreetype(e.target.value)}>
   <option value='Simple'>Simple</option>
   <option value='Compound'>Compound</option>
   </Select>
   </Box>


   <Box className={styles.FreeLeft}>
    <Text fontSize={12} color="gray" fontWeight={500}>Recurrence </Text>
    <Select placeholder='One-time' marginTop={1} h="33px" onChange={(e)=>setfreeRecurr(e.target.value)}>
   <option value='One-time'>One-time</option>
   <option value='Daily'>Daily</option>
   <option value='Weekly'>Weekly</option>
   <option value='Monthly'>Monthly</option>
   </Select>
   </Box>

   <Box >
   <Text fontSize={12} color="gray" fontWeight={500}>Project Rate</Text>
   <Box style={{display:"flex" , alignItems:"center"}}>
    <Input h="33px" borderRight="none" width="60%" marginTop={1} borderBottomRightRadius="none" borderTopRightRadius={0} placeholder='Amount' onChange={(e)=>setamount(e.target.value)}/>
    <Text fontSize={13} border="1px solid lightgray" padding="6px 13px 6px 13px" borderRadius={5} borderLeft="none" bg="rgb(248, 245, 245)" marginTop={1} borderBottomLeftRadius="none" borderTopLeftRadius={0}>USD / hour</Text>
   </Box>
   </Box>

   </Box>
            </Box>
        }

        {/* Free Check box End */}
        </Box>
        }

         {/* Bill Checked or Not Box */}
       </Box>





     </Box>





    </Box>
  )
}

export default Billing