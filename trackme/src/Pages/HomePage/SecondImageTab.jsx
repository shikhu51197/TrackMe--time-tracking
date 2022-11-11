import { Box } from '@chakra-ui/react'
import React from 'react'

export const SecondImageTab = () => {

    const image =[
        "https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png",
        "https://tmetric.com/media/w4mhgaul/time-tracking-software.png",
        "https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png",
        "https://tmetric.com/media/c2eewysw/g2_2022_main_page.png",
        "https://tmetric.com/media/a00doqsb/icon-customer-rating.png",
        "https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png",
        "https://tmetric.com/media/jfxavlps/getapp-logotype.svg",
    ]

  return (
    <Box borderBottom={"0.1px solid lightgray"} pt={"10px"} > 
 
        <Box
            
            padding={"20px"}
            boxSizing={"border-box"} 
            display={'grid'} 
            margin={"auto"}
            gridTemplateColumns={{
                base:'repeat(2,1fr)',
                sm: 'repeat(3,1fr)',
                md: 'repeat(4,1fr)',
                lg: 'repeat(7,1fr)',
                xl:'repeat(7,1fr)',
                '2xl': 'repeat(7,1fr)'
            }} 
            width={{
                base:"90%",
                sm: "90%",
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
            { image.map((e,i) => 
                <Box 
                key={e}
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'} 
                > 
                    <img  src={`${e}`} alt="" srcset="" />  
                </Box>
        )}
        </Box>

    </Box>
  )
}
