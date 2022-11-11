import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from './Account.module.css'
import Helmet from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { SingupUser } from '../../Redux/AuthReducer/action';


function Singup() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const toast = useToast()

  const [email, setEmail] = useState('');
  const [name, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  console.log(email)

  // Singup Submit Button
  const SingUpForm = async (e) => {
    e.preventDefault();


    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    // checking email formmat
    if (email.match(pattern)) {
      let payload = {
        email,
        name,
        password

      }

      // console.log(payload)
      // Dispatch for sending the data to action.js getting response
      dispatch(SingupUser(payload))
        .then((res) => {
          // console.log(res, "SingUp respnse in SInup Page")

          if (res.type === "SINGUP_SUCCESS") {
            toast({
              position: 'top',
              marginTop: '150px',
              description: "Sign Up Succefully",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
            navigate("/login")
          }

          else if (res.type === "SINGUP_FAILURE") {
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
          // console.log(err.response.data.message)
          if (err.response.data.message) {
            toast({
              position: 'top',
              marginTop: '150px',
              description: err.response.data.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
            })

          }
          else {
            console.log(err, "error i Singup Axios request")
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
      <Flex className={style.FlexBox} >
        <Box w='50%' h='auto' borderRadius='10px 0 0 10px' bg='white'>
          <Helmet bodyAttributes={{ style: 'background-color : rgb(250,250,250)' }} />

          <Box w='100%' h='auto' bg='white'  >

            {/* Logo instagram */}
            <Image m='auto' mt='40px' src='/Imges/tmetric_logo_and_text.svg' alt='logo' />

            <Text
              fontSize='25px'
              fontWeight="bold"
              color='black'
              m='auto'
              mt='15px'
              textAlign='center'
              w='300px'>Create Your Account</Text>



            {/* Inputs */}
            <form style={{ marginTop: '40px' }} onSubmit={SingUpForm}>



              {/* full name */}
              <div className={style.InputWrap}>
                <Text ml='102px' mb='2px'>Name</Text>
                <Input required
                  value={name}
                  w='60%'
                  h='35px'
                  placeholder='Jon Smith'
                  onChange={(e) => { setFullName(e.target.value) }}
                  className={style.SingupInputs}
                  type='text' />


              </div>

              {/* email */}
              <div className={style.InputWrap}>
                <Text mt='10px' ml='102px' mb='2px'>Email</Text>
                <Input required
                  value={email}
                  w='60%'
                  h='35px'
                  placeholder='jonsmith@gmail.com'
                  onChange={(e) => { setEmail(e.target.value) }}
                  className={style.SingupInputs}
                  type='text'
                  maxLength='50'
                />

              </div>





              {/* Password */}
              <div className={style.InputWrap}>
                <InputGroup display='block'>
                  <Text mt='10px' ml='102px' mb='2px'>Password</Text>

                  <Input
                    required
                    value={password}
                    w='60%'
                    h='35px'
                    display='block'
                    onChange={(e) => { setPassword(e.target.value) }}
                    className={style.SingupInputs}
                    minLength='6'
                    placeholder='Enter Your Password'
                    type={show ? 'text' : 'password'}

                  />

                  <InputRightElement width='4.5rem'>
                    <Button ml='-250px' mt='50px' h='20px' fontSize='12px' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>

              <div className={style.checkboxCondition}>

                <div>  <input required type='checkbox' /></div>
                <label>i accepts term and conditons</label>
              </div>

              {/* singup submit button */}

              <button type='submit' className={style.SingupBtn} >Sign Up</button>


            </form>

          </Box>


          <Box className={style.store}>
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
              Already have an account? <span ><Link to='/login'>Log in</Link></span>
            </Text>


          </Box>

        </Box>


        {/* right image */}
        <Box className={style.rightImg}>
          <img src='/Imges/side_image_register.svg' alt='side bar img' />
        </Box>

      </Flex>
    </>
  )
}

export default Singup
