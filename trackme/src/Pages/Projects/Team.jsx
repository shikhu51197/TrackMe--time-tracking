import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../Projects/Team.module.css"
import {GrAdd} from "react-icons/gr"

const Team = () => {
  return (
    
    <Box>

   <Box className={styles.TeamMain}>
    <Text fontSize={22}>Team</Text>

    <Box className={styles.BillNotCheck}>
                <Button h="33px" fontSize={14} ml="20px">  <GrAdd size={22}/> Add members to project team</Button>
            </Box>


   </Box>

    </Box>
  )
}

export default Team