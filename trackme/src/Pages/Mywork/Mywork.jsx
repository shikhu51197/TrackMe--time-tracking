import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {  FaClipboardList, FaPlay, FaRegCalendarAlt, FaStopwatch } from 'react-icons/fa'

export const Mywork = () => {
  return (
    <Box  >
        <Text m={"20px"}>My Work</Text>
        {/* 1st child */}
        <Flex gap={'10px'}  >

            <Box width={'40%'} border={'0.5px solid lightgray'} h="150px" borderRadius={'10px'} p={"10px"} boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" >

                <Box 
                    display={"flex"} flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"} 
                >
                    <Text>Current task</Text>

                    <Box 
                        bg={"rgb(23,194,46)"} p={"10px"} 
                        borderRadius={"60px"}
                    > 
                        <FaPlay fontSize={'16px'} color={"white"}/> 
                    </Box>
                </Box>

                <Box>
                    <Text>Your currently running timer is displayed here.</Text>
                </Box>

            </Box>

            <Box width={'60%'} border={'0.5px solid lightgray'} h="150px" borderRadius={'10px'} p={"10px"} boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                <Box 
                    display={"flex"} flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"} 
                >
                    <Text>Overview</Text>
                    
                    <Box 
                        border={"0.5px solid lightgray"} p={"6px"} 
                        borderRadius={"60px"}
                    > 
                        <FaStopwatch fontSize={'12px'} color={"black"}/> 
                    </Box>

                </Box>

                <Box>
                    <Text>Your currently running timer is displayed here.</Text>
                    <Flex gap={"10px"} >

                        <Box background={"rgb(250,251,252)"} w={"50%"} h={"fit-content"} borderRadious={"20px"} border={"0.5px solid lightgray"} p={"10px"} boxSizing={"border-box"} >
                           <Text>Today</Text>
                           <Text>-</Text> 
                        </Box>

                        <Box w={"50%"} h={"fit-content"} borderRadious={"20px"} border={"0.5px solid lightgray"} p={"10px"} boxSizing={"border-box"} >
                           <Text>This Week</Text>
                           <Text>-</Text> 
                        </Box>

                        <Box w={"50%"} h={"fit-content"} borderRadious={"20px"} border={"0.5px solid lightgray"} p={"10px"} boxSizing={"border-box"} >
                           <Text>This Month</Text>
                           <Text>-</Text> 
                        </Box>

                        <Box w={"50%"} h={"fit-content"} borderRadious={"20px"} border={"0.5px solid lightgray"} p={"10px"} boxSizing={"border-box"} >
                            <Text>Monthly Balance</Text>
                            <Text>-</Text>  
                        </Box>

                    </Flex>
                </Box>
            </Box>

        </Flex>

        <Flex gap={'10px'} mt="20px" >

            <Box width={'50%'} border={'0.5px solid lightgray'} h="300px" borderRadius={'10px'} p="10px" boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                <Flex borderBottom={'0.5px solid lightgray'}>
                    <Text>Calender</Text>
                    <Spacer/>
                    <Box 
                        border={"0.5px solid lightgray"} p={"6px"} 
                        borderRadius={"60px"}
                    > 
                        <FaRegCalendarAlt fontSize={'16px'} color={"rgb(52,57,61)"}/> 
                    </Box>
                    
                </Flex>
                <Box>
                    <Text>Connect a calendar to track your events.</Text>
                </Box>
            </Box>

            <Box width={'50%'} border={'0.5px solid lightgray'} h="300px" borderRadius={'10px'} p="10px" boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                <Flex borderBottom={'0.5px solid lightgray'}>
                    <Text>Due Tasks</Text>
                    <Spacer/>
                    <Box 
                        border={"0.5px solid lightgray"} p={"6px"} 
                        borderRadius={"60px"}
                    > 
                        <FaClipboardList fontSize={'16px'} color={"rgb(52,57,61)"}/> 
                    </Box>
                    
                </Flex>
                <Box>
                    <Text>Create a task and set due date.</Text>
                </Box>
            </Box>

        </Flex>       
    </Box>
  )
}
