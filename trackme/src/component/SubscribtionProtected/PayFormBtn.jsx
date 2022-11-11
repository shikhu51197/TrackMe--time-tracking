import React, { useState } from 'react'
import {
    Box,
    Flex,
    Button,
    FormControl,
    Text,
    Image,
    Stack,
    Input,
    FormLabel,
    InputLeftAddon,
    InputGroup,
    FormHelperText

} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import img1 from './Payimg/img1.svg'
import img2 from './Payimg/amex.svg'
import img3 from './Payimg/discover.svg'
import img4 from './Payimg/jcb.svg'
import img5 from './Payimg/visa.svg'
import input1 from './Payimg/input1.svg'
import PaymentModal from './PaymentModal/PaymentModal'
import { useSelector } from 'react-redux'




export const PayForm = () => {
    const subToken = useSelector((state) => state.auth.SubToken)
    console.log(subToken, "token use selector")
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [errorEx, setErrorEx] = useState('');
    const [cvvEr, setCvvEr] = useState('');
    const [card, setCard] = useState(false);
    const [exDate, setExDate] = useState(false);
    const [cvvS, setCvvS] = useState(false);


    const handlechange = (e, props) => {
        // console.log(e.target.value)
        console.log(e.target.name)
        // var number = e.target.name === 'number';

        const { name, value } = e.target;
        // setFull(value.length)
        // number ----------------------------------------------
        // if (value.length <= 0 && name === 'number') {
        //     setError(false);

        // }

        if (value.length < 12 && name === 'number') {
            setError(`You Enter ${value.length} no you have to enter 12 no `)

        }

        if ((value.length >= 12 || value.length <= 0) && name === 'number') {

            setError(false);

        }

        // ex--------------------------------------------------------------

        if (value.length === 0 && name === 'exdate') {
            setErrorEx(false);

        }

        if (value.length < 4 && name === 'exdate') {
            setErrorEx(`You Enter ${value.length} no you have to enter 4 no `)

        }

        if (value.length >= 4 && name === 'exdate') {

            setErrorEx(false);

        }

        // cvv========================================================
        if (value.length === 0 && name === 'cvv') {
            setCvvEr(false);

        }

        if (value.length < 3 && name === 'cvv') {
            setCvvEr(`You Enter ${value.length} no you have to enter 4 no `)

        }

        if (value.length >= 3 && name === 'cvv') {

            setCvvEr(false);

        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();


        setExDate(true)
        setCvvS(true)
        setCard(true)



    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <Box w='50%' border='1px solid #d9d9d9' m='auto' pl='200px' h='auto' pb='50px' mt='20px' >
                        <Text
                            fontWeight='700'
                            fontSize='xl'
                            pl='20px'
                            pt='20px'
                        >Pay</Text>
                        <Text
                            fontWeight='700'
                            fontSize='md'
                            pt='10px'
                            pl='20px'
                        >How do you want to pay?</Text>

                        <Flex w='300px' h='20px' mt='30px' justifyContent='space-evenly' >
                            <Image src={img1}></Image>
                            <Image src={img2}></Image>
                            <Image src={img3} ></Image>
                            <Image src={img4}></Image>
                            <Image src={img5}></Image>
                        </Flex>

                        <FormControl isRequired ml='20px' mt='20px'>
                            <FormLabel>Cardholder's Name</FormLabel>
                            <Input
                                borderRadius='none'
                                h='35px'
                                w='60%'
                                type='text'
                                placeholder='Name'
                                name='text'
                                outline='black solid 1px'
                                onChange={handlechange}
                            />
                        </FormControl>

                        <FormControl isRequired ml='20px' mt='20px' h='80px'>
                            <FormLabel>Card Number</FormLabel>
                            <InputGroup >

                                <InputLeftAddon borderRadius='none' h='35px' bg='white' outline='1px solid black' > <Image src={input1} /> </InputLeftAddon>

                                <Input
                                    borderRadius='none'
                                    h='35px'
                                    w='48%'
                                    type="tel"
                                    name='number'
                                    placeholder='1111 1111 1111'
                                    maxLength={12}
                                    outline='black solid 1px'
                                    onChange={handlechange}
                                />

                            </InputGroup>
                            <FormHelperText color='red' >{card ? error : ''}</FormHelperText>

                        </FormControl>


                        <Flex w='60%' ml='20px' mt='20px' gap={5}>
                            <Box w='50%'>
                                <FormControl isRequired>

                                    <FormLabel fontSize='sm'>Expiration Date </FormLabel>
                                    <Input

                                        placeholder='MM/YY'
                                        borderRadius='none'
                                        h='35px'
                                        type='tel'
                                        name='exdate'

                                        outline='black solid 1px'
                                        onChange={handlechange}
                                    />
                                    <FormHelperText color='red' >{exDate ? errorEx : ''}</FormHelperText>

                                </FormControl>
                            </Box>
                            <Box w='50%'>
                                <FormControl isRequired >

                                    <FormLabel fontSize='sm'>CVV </FormLabel>
                                    <Input
                                        borderRadius='none'
                                        h='35px'
                                        type='tel'
                                        name='cvv'
                                        placeholder='CVV'
                                        maxLength={3}
                                        outline='black solid 1px'
                                        onChange={handlechange}

                                    />
                                    <FormHelperText h='40px' color='red' >{cvvS ? cvvEr : ''}</FormHelperText>

                                </FormControl>
                            </Box>
                        </Flex>

                    </Box>


                    <Flex justifyContent='center' mt='40px'>
                        <Box>
                            <Button
                                borderRadius='0'
                                mr='20px'
                                fontSize='18px'
                                p='25px 30px'
                                color='twitter.600'
                                variant='ghost'
                             
                            onClick={() => { navigate('/sidebar/time') }}
                            >
                            <MdArrowBackIos /> Back</Button>
                    </Box>
                    <Box>
                        <FormControl>

                            {/* <Button
                                    type='submit'
                                    // isDisabled={access ? false : true}
                                    borderRadius='0'
                                    fontSize='18px'
                                    colorScheme='blue'
                                    p='25px 45px'
                                    color='white'
                                    variant='solid'>
                                    Pay Now</Button> */}

                            <PaymentModal exDate={errorEx} cvvS={cvvEr} card={error} />
                        </FormControl>
                    </Box>



                </Flex>
            </Stack>
        </form>

        </Box >
    )
}
