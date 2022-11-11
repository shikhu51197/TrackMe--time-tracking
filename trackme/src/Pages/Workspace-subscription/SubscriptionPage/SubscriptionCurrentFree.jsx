import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import * as data from "./subscriptionData"
import { FaDollarSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SubscriptionCurrentFree = () => {
    return (
        <Box
            border={"1px solid lightgray"}
            borderRadius={'6px'}
            padding={'16px'}
            w={'100%'}
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
                    fontWeight={"700"}
                    color={"#34393d"}
                >
                    Free
                </Text>

                <Text
                    display={'flex'}
                    alignItems={'baseline'}
                    fontSize={'16px'}
                    fontWeight={"500"}
                    color={"#34393d"}
                >
                    <FaDollarSign fontSize={'24px'} />
                    <span
                        style={{ fontSize: '46px', fontWeight: 'bold' }}
                    >
                        0
                        <sup
                            style={{ fontSize: '24px', fontWeight: '500' }} >
                            00
                        </sup>
                    </span>
                    <Text ml={"10px"} p={"6px"} borderRadius={"16px"} bg={'lightgray'} >Up to 5 users</Text>
                </Text>

                <Link to='/payment'>   <Button
                    mb={"16px"}
                    backgroundColor='white'
                    _hover={{ backgroundColor: 'rgb(48,112,240)', color: "white" }}
                    color={"rgb(48,112,240)"}
                    width={"100%"}
                    paddingX={"60px"}
                    alignSelf="center"
                    fontFamily={"Montserrat"}
                    fontSize={"14px"}
                    border={"1px solid rgb(48,112,240)"}
                    fontWeight={"500"}
                // onClick={savingtheEmail} 
                >
                    Choose Free Plan
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
                            fontWeight: '500'
                        }}
                    >
                        <CheckCircleIcon color={`${i > 3 ? "white" : "rgb(23,194,46)"}`} />
                        <Text
                            textDecoration={`${i > 3 ? "line-through" : "none"}`}
                            color={`${i > 3 ? "rgb(119, 126, 133)" : "#34393d"}`}
                        >
                            {e}
                        </Text>
                    </ul>
                })}
                <Button
                    mt={'10px'}
                    backgroundColor='white'
                    _hover={{ backgroundColor: 'rgb(48,112,240)', color: "white" }}
                    color={"rgb(48,112,240)"}
                    width={"100%"}
                    paddingX={"60px"}
                    alignSelf="center"
                    fontFamily={"Montserrat"}
                    fontSize={"14px"}
                    border={"1px solid rgb(48,112,240)"}
                    fontWeight={"500"}
                // onClick={savingtheEmail} 
                >
                    Choose Free Plan
                </Button>
            </Box>

        </Box>
    )
}
