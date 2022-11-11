import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import Member from '../WorkSpace/Member';
import { Outlet } from "react-router";

import { Team } from '../Team/Team';


function SlideTeam() {
    const sideSize = useSelector((state) => state.auth.sideSize);



    return (
        <Flex>


            <Box transition={' 0.5s ease-in-out'}
                ml={sideSize == 'large' ? '180px' : "300px"}

                border='1px solid red' w='100%' mr='50px' mt='20px' h='auto'>


                <Team />

                <Outlet />




            </Box>

        </Flex>
    )
}

export default SlideTeam