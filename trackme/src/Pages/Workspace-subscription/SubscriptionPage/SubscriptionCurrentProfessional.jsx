import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import * as data from "./subscriptionData"
import { FaDollarSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SubscriptionCurrentProfessional = () => {
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
                    Professional
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
                        4
                        <sup
                            style={{ fontSize: '24px', fontWeight: '500' }} >
                            17
                        </sup>
                    </span>
                    / user / month
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
                    Choose Professional Plan
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
                        <CheckCircleIcon color={`${i > 9 ? "white" : "rgb(23,194,46)"}`} />
                        <Text
                            textDecoration={`${i > 9 ? "line-through" : "none"}`}
                            color={`${i > 9 ? "rgb(119, 126, 133)" : "#34393d"}`}
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
                    Choose Professional Plan
                </Button>
            </Box>

        </Box>
    )
}
