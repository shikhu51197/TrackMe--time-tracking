import { EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Input, InputGroup, InputLeftAddon, Link, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "../css-adil/getstarted.css"
import { FaPlay } from "react-icons/fa";

import {
    Modal,
    ModalOverlay,
    ModalContent
} from '@chakra-ui/react'

import { Vedio } from './Vedio'
import { useDispatch } from 'react-redux';
import { gettingTheEmailData } from '../../Redux/HomeReducer/action';

export const Getstarted = () => {

    const [email, setEmail] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()



    const dispatch = useDispatch()

    const savingtheEmail = () => {

        dispatch(gettingTheEmailData(email))
    }

    console.log(email);

    return (
        //parent box
        <Box
            display={'flex'}
            flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
                '2xl': 'row'
            }}
        >
            {/* //1st child  */}

            <Box
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "50%",
                    xl: "50%",
                    '2xl': '50%'
                }}
                bg={"rgb(255,240,184)"}
                display={'flex'}
                flexDirection={'column'}
                gap={'20px'}
                paddingX={{
                    base: "26px",
                    sm: "30px",
                    md: "40px",
                    lg: "50px",
                    xl: "60px",
                    '2xl': '60px'
                }}
                paddingY={'30px'}
            >
                <Text
                    fontSize={{
                        base: "30px",
                        sm: "40px",
                        md: "50px",
                        lg: "60px",
                        xl: "64px",
                        '2xl': '60px'
                    }}
                    fontWeight={'700'}
                >
                    Make the best use of your time
                </Text>
                <Text
                    fontSize={"20px"}
                    fontWeight={"600"}
                >
                    TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control
                </Text>

                <InputGroup>
                    <InputLeftAddon
                        height={'50px'}
                        bg={'white'}
                        children={<EmailIcon
                            color={"rgb(48,112,240)"} />}
                    />
                    <Input
                        height={'50px'}
                        bg={"white"}
                        type='email'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}

                    />
                </InputGroup>

                <Box
                    display={"flex"}
                    gap={'20px'}
                    alignItems={'center'}
                    flexDirection={{
                        base: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                        xl: "row",
                        '2xl': 'row'
                    }}

                >
                    <Box>
                        <Link href='/signup'>
                            <Button
                                // mt={"20px"} 
                                backgroundColor='rgb(48,112,240)'
                                _hover={{ backgroundColor: '#0053a6' }}
                                color={"white"}
                                size='lg'
                                paddingX={"60px"}
                                onClick={savingtheEmail}
                            >
                                Get Started
                            </Button>
                        </Link>
                    </Box>

                    <Box>
                        <Button
                            // mt={"20px"} 
                            backgroundColor='rgb(255,240,184)'
                            _hover={{ backgroundColor: 'rgb(255,240,184)' }}
                            color={"black"}
                            size='lg'
                        >
                            Fully Functional 30-Day Trial
                        </Button>
                    </Box>
                </Box>
            </Box >

            {/* //2nd child  */}

            <Box
                bg={"rgb(255,240,184)"}
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "50%",
                    xl: "50%",
                    '2xl': '50%'
                }}

            >
                <Box
                    // this div will be invisible from md display

                    display={{
                        base: "none",
                        sm: "none",
                        md: "none",
                        lg: "flex",
                        xl: "flex",
                        '2xl': 'flex'
                    }}
                    className='image'

                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box
                        // border={'1px solid green'} 
                        borderRadius={'60px'}
                        h={"90px"}
                        w={"90px"}
                        display={'flex'}
                        justifyContent={'center'}
                        margin={"auto"}
                        alignItems={'center'}
                        alignSelf={"center"}
                        color={'white'}
                    >
                        <Button
                            bg={'black'}
                            h={'90px'}
                            w={'90px'}
                            box-shadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                            borderRadius={"120px"}
                            onClick={onOpen}
                            _hover={{ backgroundColor: 'black' }}
                            _focus={{ backgroundColor: 'black' }}
                        >
                            <FaPlay fontSize={'26px'} />
                        </Button>

                        <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent    >
                                {/* //vedio is a components and passing a vedio id will display vedio in the modal */}
                                <Vedio id='d2LwNiALPIM' width={"100%"} height={"720"} />

                            </ModalContent>
                        </Modal>

                    </Box>

                </Box>

                {/* this div will be Visible from md display */}
                <Box
                    display={{
                        base: "block",
                        sm: "block",
                        md: "block",
                        lg: "none",
                        xl: "none",
                        '2xl': 'none'
                    }}
                    margin={'auto'}
                    justifyContent={'center'}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={"center"}
                        margin={"10px"} >

                        <Button
                            onClick={onOpen}
                            margin={'auto'}
                        >
                            Open Vedio
                            <Modal
                                size={"full"}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent width={"1000px"}  >

                                    {/* //vedio is a components and passing a vedio id will display vedio in the modal */}
                                    <Vedio id='d2LwNiALPIM' width={"500"} height={"400"} />

                                </ModalContent>
                            </Modal>
                        </Button>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}
