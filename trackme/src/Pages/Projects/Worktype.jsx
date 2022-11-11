import { Box,  Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Projects/WorkType.module.css"

const WorkType = () => {
  return (
    <Box>


     <Box className={styles.BillMainBox}>


            <Text fontSize={22}>Work types</Text>
           


        {/* Bill Checked or Not Box */}

            <Box className={styles.BillNotCheck}>
                <Text color="gray" fontSize={15} fontWeight="500">There are no work types in the workspace. You should create a work type.</Text>
            </Box>
        
 </Box>       

 </Box> 
)
}
export default WorkType