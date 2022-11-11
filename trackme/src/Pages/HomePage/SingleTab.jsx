import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import * as data from "./data"

export const SingleTab = ({element,index}) => {
  return (
    <Box display={"flex"} gap={'40px'} padding={'30px'} justifyContent={"space-between"} >

        <Box 
          // border={'1px solid black'} 
          width={"100%"}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
            <Box>
              <Text 
                fontSize={'20px'} 
                fontFamily={'sans-serif'} 
                fontWeight={'400'}
              >
              {element}
              </Text>
            </Box>

            <Box 
              display={'flex'} 
              justifyContent={'space-between'}
            >
                <Text 
                  fontSize={'16px'} 
                  fontFamily={'sans-serif'} 
                  fontWeight={'600'} 
                >
                  {data.tabsDataInnerHeading[index]}

                  <img 
                    style={{width:'150px'}} 
                    src="https://tmetric.com/media/j2klt5pd/img-rating-5.svg" 
                    alt="" srcset="" 
                  />
                </Text>

                <Link 
                  fontSize={'16px'} 
                  fontFamily={'sans-serif'} 
                  fontWeight={'600'}
                  color={"rgb(53,112,240)"}
                >
                  Read Full Story  <ArrowForwardIcon />
                </Link>

            </Box>
        </Box>

        <Box
          // border={'1px solid black'} 
          width={"30%"}
          boxShadow='0 0 10px'
          display={{
            base:"none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            '2xl': 'block'
            }}  
        >
          <img src={data.tabsDataImages[index]} alt="" srcset="" />
        </Box>
    </Box>

  )
}
