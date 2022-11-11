import React from 'react'
import { AddIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { useState } from 'react'

export const Invoice = () => {

    const [status,setStatus] = useState("All")

  return (
    <Box  //my parent
              // border={"1px solid black"}
              >
                  <Box 
                  // border={"1px solid black"}
                  p={"16px"}
                  >
                    <Flex alignItems={"center"} gap={"10px"} >

                        <Text>Invoices</Text>
                        <Spacer/>
                        <FaRegCalendarAlt fontSize={'16px'} color={"rgb(52,57,61)"}/> 
                        <Text> 7 Aug - 9 Sep</Text>
                                                
                    </Flex>

                    <Flex>

                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"10px 0px 0px 10px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Client : All
                        </MenuButton>
                        <MenuList h={'200px'} w={"400px"} p={"20px"} boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" >
                            <Input placeholder='Find Client' />
                        </MenuList>
                      </Menu>

                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"0px 10px 10px 0px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Status : {status}
                        </MenuButton>
                        <MenuList>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"All"} 
                            >
                                All
                            </MenuItem>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"Open"} 
                            >
                                Open
                            </MenuItem>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"Closed"} 
                            >
                                Closed
                            </MenuItem>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"Draft"} 
                            >
                                Draft
                            </MenuItem>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"Sent"} 
                            >
                                Sent
                            </MenuItem>
                            <MenuItem 
                                onClick= {(e) => {setStatus(e.target.value)}}  
                                value={"Late"} 
                            >
                                Late
                            </MenuItem>
                        </MenuList>
                      </Menu>

                    </Flex>

                  </Box>

                  <Box 
                    border={"0.5px solid lightgray"}
                    borderRadius={"16px"}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'16px'}
                    p={'16px'}
                  >
                    <Box borderBottom={"0.5px solid lightgray"} pb={'16px'} display={"flex"} gap={"20px"} >
                        <Box >
                            <Text fontFamily={"sans-serif"} > Total Open</Text>
                            <Text fontFamily={"sans-serif"} fontSize={"24px"} fontWeight={600} > 
                                0.00 USD
                            </Text>
                        </Box>
                        <Box>
                            <Text fontFamily={"sans-serif"} > Total Paid</Text>
                            <Text fontFamily={"sans-serif"} fontSize={"24px"} fontWeight={600} > 
                                0.00 USD
                            </Text>
                        </Box>
                    </Box>

                    <Box >
                        <Flex gap={'20px'} borderBottom={"0.5px solid lightgray"} pb={'16px'} >

                          <Menu>
                            <MenuButton color={"white"} bg={"rgb(48,112,240)"} _hover={{backgroundColor:"rgb(48,112,240)"}} fontFamily={"sans-serif"} fontWeight={'500'} fontSize={"14px"} as={Button} leftIcon={<AddIcon/> }>
                              New Invoice
                            </MenuButton>
                          </Menu>

                          

                        </Flex>
                    </Box>

                    <Box textAlign={'center'} h={"60px"} >
                        <Text textAlign={'center'} >There are no invoices to view. Create new invoice.</Text>
                    </Box>

                  </Box>


              </Box>
  )
}
