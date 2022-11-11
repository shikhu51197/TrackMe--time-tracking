import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import * as data from "./data"

export const PopularServices = () => {
  return (
    <Box 
    borderBottom={"0.5px solid lightgray"}
        px={"40px"} 
        py={'60px'} 
        display={"flex"} 
        flexDirection={"column"} 
        gap={'40px'} >

        <Box 
            textAlign={"center"} 
        >
            <Text 
                fontSize={{base:"30px",
                sm: "34px",
                md: "36px",
                lg: "40px",
                xl: "44px",
                '2xl': '48px'}}
                fontWeight={700}  
                fontFamily={"sans-serif"}  
                color={"#292e33"}
            >
                Integration with 50+ popular services
            </Text>
            <Text
                fontSize={{base:"16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
                xl: "20px",
                '2xl': '20px'}}
                fontWeight={500}  
                fontFamily={"sans-serif"}  
                color={"#292e33"}
                 mb={"30px"}  >
                TMetric integrates with dozens of services, which lets you measure progress and activity in any tool you use.
            </Text>
            <Button             
                backgroundColor='rgb(48,112,240)' 
                _hover={{ backgroundColor: '#0053a6' }} 
                color={"white"} size='lg' 
                paddingX={"60px"}>
                    Start Free Trial
            </Button>

            <Button
            ml={"20px"}
            variant='link' 
            color={"rgb(48,112,240)"} 
            _hover={{ textDecoration: 'none', color:"#0053a6" }} 
            size='lg' 
            paddingX={"60px"}>
                    Explore All Integrations
            </Button>
        </Box>

        <Box 
            // border={"1px solid black"} 
            display={'grid'}
            gridTemplateColumns={{
                base:'repeat(2,1fr)',
                sm: 'repeat(3,1fr)',
                md: 'repeat(4,1fr)',
                lg: 'repeat(7,1fr)',
                xl:'repeat(7,1fr)',
                '2xl': 'repeat(8,1fr)'
            }} 
            w={{
                base:'100%',
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl:'100%',
                '2xl': '80%'
            }} 
            margin={'auto'}
            gap={"20px"}
            >
            {data.popularServicesImages.map((item,index) => {
                return <Box 
                        key={item}
                        display={"flex"}
                        justifyContent={'center'}
                        alignItems={"center"}
                        border={"0.2px solid lightgray"}
                        paddingX={"10px"}  
                        paddingY={"40px"}  
                        borderRadius={"20px"}
                        _hover={{ boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;' }} 
                    > 
                        <img width={"100%"} src={item} alt="" srcset="" /> 
                </Box>
            })}
        </Box>

    </Box>
  )
}
