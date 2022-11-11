import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from './Account.module.css'
import Helmet from 'react-helmet';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { UserLogin } from '../../Redux/AuthReducer/action';

function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show);


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // Login form Submit Button function
    const LoginCheck = (e) => {
        e.preventDefault();



        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        // checking email formmat
        if (email.match(pattern)) {
            const payload = {
                email,
                password

            }
            console.log(payload)

            // Dispatch function to send the login function to axios and the the response
            dispatch(UserLogin(payload))
                .then((res) => {

                    // console.log(res, "in login file")


                    if (res.type === "LOGIN_SUCCESS") {
                        toast({
                            position: 'top',
                            marginTop: '150px',
                            description: res.payload.data.message,
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                        })
                        navigate("/sidebar/time")

                    }

                    else if (res.type === "LOGIN_FAILURE") {
                        toast({
                            position: 'top',
                            marginTop: '150px',
                            description: res.payload.response.data.message,
                            status: 'warning',
                            duration: 3000,
                            isClosable: true,
                        })
                    }

                })
                .catch(err => {
                    if (err.response.data) {
                        toast({
                            position: 'top',
                            marginTop: '150px',
                            description: err.response.data,
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                        })
                    }
                    else {

                        console.log("error in Login axios requres", err)
                        toast({
                            position: 'top',
                            marginTop: '150px',
                            description: "axios",
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                        })
                    }

                })





        } else {
            toast({
                position: 'top',
                marginTop: '150px',
                description: "email format is not correct",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        }

    }


    return (


        <>
            <Helmet bodyAttributes={{ style: 'background-color : rgb(250,250,250)' }} />
            <Box className={style.LoginMainBox} w='30%' m='auto' mt='30px' borderRadius='10px' bg='white' h='auto'>
                <Box w='100%' m='auto' h='auto'   >

                    <Box border='1px solid rgb(242,245,252) ' borderRadius='10px 10px 0 0' bg='rgb(242,245,252)'>
                        {/* Logo instagram */}
                        <Image m='auto' mt='40px' src='/Imges/tmetric_logo_and_text.svg' alt='logo' />

                        <Text
                            fontSize='25px'
                            fontWeight="bold"
                            color='black'
                            m='auto'
                            mt='15px'
                            textAlign='center'
                            mb='20px'
                            w='300px'>Log into TMetric</Text>


                    </Box>

                    {/* Inputs */}
                    <form style={{ marginTop: '40px' }} onSubmit={LoginCheck}>





                        {/* email */}
                        <div className={style.InputWrap}>
                            <Text mt='10px' ml='50px' mb='2px'>Email</Text>
                            <Input required
                                value={email}
                                w='80%'
                                h='35px'
                                placeholder='jonsmith@gmail.com'
                                onChange={(e) => { setEmail(e.target.value) }}
                                className={style.LoginInput}
                                type='text'
                                maxLength='50'
                            />

                        </div>





                        {/* Password */}
                        <div className={style.InputWrap}>
                            <InputGroup display='block'>
                                <Text mt='10px' ml='50px' mb='2px'>Password</Text>

                                <Input
                                    required
                                    value={password}
                                    w='80%'
                                    h='35px'
                                    display='block'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className={style.LoginInput}
                                    minLength='6'
                                    placeholder='Enter Your Password'
                                    type={show ? 'text' : 'password'}

                                />

                                <InputRightElement width='4.5rem'>
                                    <Button ml='-110px' mt='50px' h='20px' fontSize='12px' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>


                        {/* singup submit button */}

                        <button type='submit' className={style.LoginBtn} >Log In</button>


                    </form>

                </Box>


                <Box className={style.Loginstore}>
                    <Flex w='100%' h='39px' m='auto' mt='20px' borderRadius='8px' border='1px solid rgb(178, 174, 165)'>
                        <img src='/Imges/google.png' alt='img' />
                        <Text>SingUp with Google</Text>
                    </Flex>
                    <Flex w='100%' h='39px' m='auto' mt='10px' borderRadius='8px' border='1px solid rgb(178, 174, 165)'>
                        <img src='/Imges/microsoft.png' alt='img' />
                        <Text>SingUp with MicroSoft</Text>
                    </Flex>
                    <Flex w='100%' h='39px' m='auto' mt='10px' borderRadius='8px' border='1px solid rgb(178, 174, 165)'>
                        <img src='/Imges/apple.png' alt='img' />
                        <Text>SingUp with Apple </Text>
                    </Flex>
                </Box>


                <Box bg='white' borderTop='1px solid rgb(178, 174, 165)' w='65%' h='50px' m='auto' mt='20px'>
                    <Text className={style.end}>
                        Already have an account? <span ><Link to='/signup'>SingUp</Link></span>
                    </Text>


                </Box>
            </Box>
            <Outlet />

        </>
    )
}

export default Login
