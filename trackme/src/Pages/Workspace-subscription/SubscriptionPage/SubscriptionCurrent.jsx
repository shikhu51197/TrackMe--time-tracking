import { Box, Flex, Grid,  Input } from '@chakra-ui/react'
import React from 'react'
import { SubscriptionCurrentFree } from './SubscriptionCurrentFree'
import { SubscriptionCurrentBusiness } from './SubscriptionCurrentBusiness'
import { SubscriptionCurrentProfessional } from './SubscriptionCurrentProfessional'

export const SubscriptionCurrent = () => {
  return (
    //parent box 
    <Box p={'20px'} display={"flex"} flexDirection={'column'} gap={"20px"} >

        {/* // 1st child */}
        <Flex  gap={'60px'} >

            <Box>
                Team size:<Input htmlSize={1} width='auto' />
            </Box>

            <Flex justifyContent={'center'} alignItems={'center'} >

                <Box 
                    px={"16px"} 
                    py={'6px'} 
                    border={"0.5px solid lightgray"} 
                    borderRadius={"10px 0px 0px 10px"} 
                >
                    Monthly
                </Box>

                <Box 
                    px={"16px"} 
                    py={'6px'} 
                    border={"0.5px solid lightgray"} 
                    borderRadius={"0px 10px 10px 0px"} 
                >
                    Annually
                </Box>
            </Flex>
        </Flex>

        {/* 2nd child*/}
        <Box 
        >
            {/* 2nd child 1st child */}
            <Grid 
            templateColumns={{
                base : 'repeat(1, 1fr)',
                sm   : 'repeat(1, 1fr)',
                md   : 'repeat(1, 1fr)',
                lg   : 'repeat(2, 1fr)',
                xl   : 'repeat(2, 1fr)',
                '2xl': 'repeat(3, 1fr)'
            }}   gap={3}>

                <SubscriptionCurrentBusiness/>               
                <SubscriptionCurrentProfessional/>               
                <SubscriptionCurrentFree/>
            </Grid>

        </Box>

    </Box>
  )
}
