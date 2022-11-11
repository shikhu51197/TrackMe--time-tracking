import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import * as data from "./data"
  


export const ManageTeamData = () => {
  return (
    <Box 
        width={"100%"} 
    >
        {data.manageTeamData.map((element,index) => {
            return <Box
                        key={element}
                        display={"flex"}
                        gap={'30px'}
                        py={"40px"}
                        flexDirection={{
                            base:"column",
                            sm: "column",
                            md: "column",
                            lg: `${index%2 === 0 ? "row" : "row-reverse"}`,
                            xl: `${index%2 === 0 ? "row" : "row-reverse"}`,
                            '2xl': `${index%2 === 0 ? "row" : "row-reverse"}`
                        }}
                        bg={`${index%2 === 0 ? "rgb(246,247,248)" : "white"}`}
                        boxSizing={"border-box"} 
                        paddingX={'60px'}
                    >
                        {/* //1st child */}
                        <Box 
                        
                        // border={"1px solid black"}
                            w={{
                                base:"100%",
                                sm: "100%",
                                md: "100%",
                                lg: "50%",
                                xl: "50%",
                                '2xl': '50%'
                            }}
                            paddingX=
                            {{
                                base:`${index%2 === 0 ? "0px" : "0px"}`,
                                sm: `${index%2 === 0 ? "0px" : "0px"}`,
                                md: `${index%2 === 0 ? "0px" : "0px"}`,
                                lg: `${index%2 === 0 ? "0px" : "0px"}`,
                                xl: `${index%2 === 0 ? "0px" : "0px"}`,
                                '2xl': `${index%2 === 0 ? "0px" : "0px"}`
                            }}
                        //    mb={'20px'}
                        >
                            <Text
                                fontSize={{
                                    base:"30px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "40px",
                                    xl: "44px",
                                    '2xl': '48px'
                                }}
                                fontWeight={'700'} 
                                fontFamily={"sans-serif"}
                                color={"#292e33"}
                                textAlign={{
                                    base:"left",
                                    sm: "left",
                                    md: "left",
                                    lg: "left",
                                    xl: "left",
                                    '2xl': 'left'
                                }}
                            >
                                {data.manageTeamDataHeading[index]}
                            </Text>

                            <Box 
                                fontSize={'20px'}
                                fontWeight={500}
                                fontFamily={"sans-serif"}
                                color={"#212529"}
                            >
                                {index === 0 ? data.manageTeamDataListOne.map((item,i) => {
                                    return <Box> <li>{item}</li> </Box>
                                }):""}

                                {index === 1 ? data.manageTeamDataListTwo.map((item,i) => {
                                    return <Box><li>{item}</li></Box>
                                }):""}
                                {index === 2 ? data.manageTeamDataListThree.map((item,i) => {
                                    return <Box><li>{item}</li></Box>
                                }):""}
                            </Box>
                            <Button mt={"20px"} backgroundColor='rgb(48,112,240)' _hover={{ backgroundColor: '#0053a6' }} color={"white"} size='lg' paddingX={"60px"}>Get Started</Button>
                            
                        </Box>

                        {/* //2nd child */}
                        <Box 
                        // border={"1px solid black"}
                            w={{
                                base:"100%",
                                sm: "100%",
                                md: "100%",
                                lg: "50%",
                                xl: "50%",
                                '2xl': '50%'
                            }} 
                        >
                            <img width={"100%"} src={element} alt="" srcset="" />
                        </Box>
            </Box>
        }) }
    </Box>
  )
}