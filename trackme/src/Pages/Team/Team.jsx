import { SearchIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Spacer, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMemberData } from '../../Redux/MemberReducer/action'

export const Team = () => {


    const [memeber, setMember] = useState()

    const data = useSelector((store) => store.member.memberData)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);


    const showMemberData = () => {
        dispatch(GetMemberData(token))
            .then((res) => {
                // console.log(res.payload, "datattatat")
                setMember(res.payload)

            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        showMemberData();
    }, [])



    return (
        <Box>
            <Box>
                All
            </Box>

            <Box h={"500px"} border={"0.5px solid lightgray"} mt={"10px"}>

                <Box>
                    <InputGroup htmlSize={2} width='40%' >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='black' />}
                        />
                        <Input border={"0.5px solid lightgray"} borderRadius={"10px 10px 10px 10px"} type='search' placeholder='Search member' />
                    </InputGroup>
                </Box>

                <Box>
                    <TableContainer textAlign={"left"} >
                        <Table>
                            <Thead>
                                <Tr >
                                    <Th>Status</Th>
                                    <Th>User</Th>
                                    <Th isNumeric>Started At</Th>
                                    <Th isNumeric>Finished At</Th>
                                    <Th isNumeric>Total Time Today</Th>
                                    <Th isNumeric>Current Task</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {memeber ? data.map((element, index) => {
                                    return <Tr >
                                        <Td>Idle</Td>
                                        <Td>{element.name}</Td>
                                        <Td textAlign={"left"} isNumeric>-</Td>
                                        <Td textAlign={"left"} isNumeric>-</Td>
                                        <Td textAlign={"left"} isNumeric>-</Td>
                                        <Td textAlign={"left"} isNumeric>-</Td>
                                    </Tr>
                                }) : <SpinnerIcon />}

                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>


            </Box>

        </Box>
    )
}
