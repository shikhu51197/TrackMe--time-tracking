import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../../component/SideBar'

export const DetailedReports = () => {
  return (

              <Box  //my parent
              // border={"1px solid black"}
              >
                  <Box 
                  // border={"1px solid black"}
                  p={"16px"}
                  >
                    <Flex>

                        <Text>Detailed Report</Text>
                        <Spacer/>
                        <Text>Calender</Text>
                        
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
                          Team:All
                        </MenuButton>
                      </Menu>
                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"0px 0px 0px 0px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Project:All
                        </MenuButton>
                      </Menu>

                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"0px 0px 0px 0px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Client:All
                        </MenuButton>
                      </Menu>

                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"0px 0px 0px 0px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Tag:All
                        </MenuButton>
                      </Menu>

                      <Menu>
                          <MenuButton 
                          fontFamily={"sans-serif"} fontWeight={'500'} 
                          bg={"white"} 
                          _hover={{bg:"white"}} _focus={{bg:"white"}} 
                          py={"0px"} border={"0.5px solid lightgray"} borderRadius={"0px 0px 0px 0px"} 
                          as={Button} rightIcon={<ChevronDownIcon />}
                          fontSize={"14px"}
                        >
                          Billable:All
                        </MenuButton>
                      </Menu>

                      <InputGroup  htmlSize={6} width='auto' >
                        <InputLeftElement
                          pointerEvents='none'
                          children={<SearchIcon color='black' />}
                        />
                        <Input border={"0.5px solid lightgray"} borderRadius={"0px 10px 10px 0px"} type='tel' placeholder='Time entry description' />
                      </InputGroup>

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
                    <Box borderBottom={"0.5px solid lightgray"} pb={'16px'} >
                        <Text>Total</Text>
                        <Text>0 min</Text>
                    </Box>

                    <Box >
                        <Flex gap={'20px'} borderBottom={"0.5px solid lightgray"} pb={'16px'} >

                          <Menu>
                            <MenuButton  fontFamily={"sans-serif"} fontWeight={'500'} fontSize={"14px"} as={Button} rightIcon={<ChevronDownIcon />}>
                              Group by: Day, Project Name
                            </MenuButton>
                          </Menu>

                          <Menu>
                            <MenuButton  fontFamily={"sans-serif"} fontWeight={'500'} fontSize={"14px"} as={Button} rightIcon={<ChevronDownIcon />}>
                              Columns
                            </MenuButton>
                          </Menu>

                          <Menu>
                            <MenuButton  fontFamily={"sans-serif"} fontWeight={'500'} fontSize={"14px"} as={Button} rightIcon={<ChevronDownIcon />}>
                              Export
                            </MenuButton>
                          </Menu>

                          <Menu>
                            <MenuButton disabled={true} fontFamily={"sans-serif"} fontWeight={'500'} fontSize={"14px"} as={Button} rightIcon={<ChevronDownIcon />}>
                              Mark Time
                            </MenuButton>
                          </Menu>

                          <Spacer/>

                          <InputGroup htmlSize={6} width='auto' >
                            <InputLeftElement
                              pointerEvents='none'
                              children={<SearchIcon color='gray.300' />}
                            />
                            <Input type='tel' placeholder='Search' />
                        </InputGroup>

                        </Flex>
                    </Box>

                    <Box p={"60px"} >
                        <Text textAlign={'center'} >There are no data matching your criteria. Try different filter settings.</Text>
                    </Box>

                  </Box>


              </Box>

  )
}
