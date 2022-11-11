import { Box, Flex, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Projects/Budget.module.css"

const Budget = () => {
    const[change,setChange] = useState(false)
  return (
    <Box id="budget">


     <Box className={styles.BillMainBox}>

        <Flex gap={10}>

            <Text fontSize={22}>Budget</Text>
            <Stack align='center' direction='row'>
  
           <Switch size='md'  onChange={()=>setChange(!change)}/>
 
         </Stack>
        </Flex>


        {/* Bill Checked or Not Box */}
        <Box>
        {!change?
            <Box className={styles.BillNotCheck}>
                <Text color="gray" fontSize={15} fontWeight="500">To add a budget to the project, you need to enable the section.</Text>
            </Box>
        :""
        }
 </Box>       

 </Box> 
 </Box> 
)
}
export default Budget