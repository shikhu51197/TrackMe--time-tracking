import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import * as data from "./subscriptionData"
import { FaDollarSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SubscriptionCurrentBusiness = () => {
    return (
        <Box
            border={"3px solid rgb(48,112,240)"}
            borderRadius={'6px'}
            padding={'16px'}
            w={'100%'}
            bg={'rgb(244,248,254)'}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
            <Box
                borderBottom={"1px solid lightgray"}
                display="flex"
                flexDirection={'column'}
                p={'10px'}
                gap={"16px"}
            >
                <Text
                    fontFamily={'Montserrat'}
                    fontSize={'26px'}
                    color={"rgb(48,112,240)"}
                    fontWeight={"700"}
                >
                    Business
                </Text>

                <Text
                    display={'flex'}
                    alignItems={'baseline'}
                    fontSize={'16px'}
                    color={"rgb(48,112,240)"}
                    fontWeight={"500"}
                >
                    <FaDollarSign fontSize={'24px'} />
                    <span
                        style={{ fontSize: '46px', fontWeight: 'bold' }}
                    >
                        5
                        <sup
                            style={{ fontSize: '24px', fontWeight: '500' }} >
                            83
                        </sup>
                    </span>
                    / user / month
                </Text>

                <Link to='/payment'>    <Button
                    mb={"16px"}
                    backgroundColor='rgb(48,112,240)'
                    _hover={{ backgroundColor: '#0053a6' }}
                    color={"white"}
                    width={"100%"}
                    paddingX={"60px"}
                    alignSelf={'center'}
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    fontSize={"14px"}
                // onClick={savingtheEmail} 
                >
                    Choose Business Plan
                </Button></Link>
            </Box>

            <Box
                display="flex"
                flexDirection={'column'}
                gap={'10px'}
                py={'20px'}
            >
                {data.businessList.map((e, i) => {
                    return <ul
                        style={{
                            fontFamily: 'Montserrat',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: '500',
                            color: "#34393d"
                        }}
                    >
                        <CheckCircleIcon color={"rgb(23,194,46)"} /> {e}
                    </ul>
                })}
                <Button
                    mt={'10px'}
                    backgroundColor='rgb(48,112,240)'
                    _hover={{ backgroundColor: '#0053a6' }}
                    color={"white"}
                    width={"100%"}
                    paddingX={"60px"}
                    alignSelf="center"
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    fontSize={"14px"}
                // onClick={savingtheEmail} 
                >
                    Choose Business Plan
                </Button>
            </Box>

        </Box>
    )
}
