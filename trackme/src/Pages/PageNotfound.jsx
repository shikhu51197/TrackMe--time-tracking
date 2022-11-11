import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


function PageNotfound() {
    return (
        <>
            <Box textAlign='center' mt='300px' fontSize='40px' fontWeight='600'>Page Not Found</Box>

            <Link to='sidebar/time'>    <Button m='auto' ml='680px' color='white' bg='blue.400' mt='50px'>Go Back To Home Page</Button></Link>

        </>
    )
}

export default PageNotfound
