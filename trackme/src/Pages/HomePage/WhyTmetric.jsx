import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import * as data from "./data"
export const WhyTmetric = () => {

    

  return (
    <Box 
        borderBottom={"0.1px solid lightgray"} 
        py={{
            base:'30px',
            sm: '30px',
            md: '40px',
            lg: '60px',
            xl:'60px',
            '2xl': '60px'
        }}  
    > 
        <Text textAlign={"center"} fontSize={'66px'} fontWeight={700} >Why choose TMetric?</Text>
        <Box
            padding={"20px"}
            boxSizing={"border-box"} 
            display={'grid'} 
            margin={"auto"}
            gridTemplateColumns={{
                base:'repeat(2,1fr)',
                sm: 'repeat(2,1fr)',
                md: 'repeat(3,1fr)',
                lg: 'repeat(5,1fr)',
                xl:'repeat(5,1fr)',
                '2xl': 'repeat(5,1fr)'
            }} 
            width={{
                base:"100%",
                sm: "100%",
                md: "90%",
                lg: "90%",
                xl:'90%',
                '2xl': '90%'
            }} 
            gap={{
                base:"30px",
                sm: "30px",
                md: "30px",
                lg: "30px",
                xl:'30px',
                '2xl': '30px'
            }} 
            // border={'1px solid black'} 
        >
            { data.whyTmetricImage.map((e,i) => 
                <Box 
                    key={e}
                    display={'flex'}
                    flexDirection={"column"} 
                    justifyContent={'top'} 
                    alignItems={'left'}
                    border={'1px solid lightgray'}
                    borderRadius={"20px"}
                    gap={'20px'}
                    py={'30px'}
                    px={'10px'}
                    h={'240px'}
                > 
                    <img style={{width:'30%'}}  src={`${e}`} alt="" srcset="" />  
                    <Text 
                        fontFamily={'sans-serif'} 
                        fontWeight={600} 
                        
                    >
                        {data.whyTmetricText[i]}
                    </Text>
                </Box>
        )}
        </Box>

    </Box>
  )
}
