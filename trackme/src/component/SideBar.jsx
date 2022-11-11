import React, { useState } from 'react'

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box,
    Img,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    Button,
    useDisclosure,
    AlertDialogBody
} from '@chakra-ui/react'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { BsStopwatchFill } from "react-icons/bs";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiFillFolder } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiBuildingLine } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUserData, Side_Bar_Size } from '../Redux/AuthReducer/action';
import styled from './SideBar.module.css'
import { Outlet } from "react-router";

// import Member from './Member';
// import { useSelector } from 'react-redux';

import "./activeSide.css"
import { useEffect } from 'react';
import RoleAuthrization from './RoleAuthrization/RoleAuthrization';
function SideBar() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [navSize, changeNavSize] = useState("large");
    const [load, setLoad] = useState(false);
    const [value, setValue] = useState();

    const token = useSelector((state) => state.auth.token)
    const UserLogin = useSelector((state) => state.auth.LoginUser)

    console.log(UserLogin, "sidebar page user get")
    const dispatch = useDispatch()

    const naviagte = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("TMRTRICTOKEN");
        naviagte("/")
    }

    // useEffect(() => {
    // dispatch(LoginUserData(token))

    // }, [])

    const IconBtn = () => {
        if (navSize === "small") {
            changeNavSize("large")
            // console.log(navSize)
            dispatch(Side_Bar_Size(navSize))
            setLoad(true)
            setTimeout(() => {
                setLoad(false);
            }, 400)
        }

        else {
            changeNavSize("small")
            dispatch(Side_Bar_Size(navSize))
        }
    }

    const AcCheck1 = () => {
        // console.log("No1")
        setValue(1)
    }
    const AcCheck2 = () => {
        // console.log("No1")
        setValue(2)
    }
    const AcCheck3 = () => {
        // console.log("No1")
        setValue(3)
    }
    return (

        <>


            <Flex
                position="fixed"
                h="750px"
                bg='rgb(246,247,248)'
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                transition={' 0.5s ease-in-out'}
                w={navSize == "small" ? "0" : "240px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    // p="5%"

                    zIndex='-10px'
                    flexDir="column"
                    w="100%"
                    // alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"

                >
                    {/* TMRTIC LOGO */}
                    <Link to='/sidebar/time'>{navSize === 'large' ? load ? "" : <Img p="5%" w='150px' ml='55px' mt='15px' src='/Imges/tmetric_logo_and_text.svg' alt='side bar tmrtric' /> : ""}</Link>

                    {/* Time */}
                    {navSize === 'large' ? <NavLink to='time'>

                        <Flex pl="5%"  > {load ? "" : <Flex alignItems='center' justifyContent='center' gap='10px' h='40px'><BsStopwatchFill /> Time</Flex>}  </Flex>

                    </NavLink> : ""}


                    {/* My Work */}
                    {navSize === 'large' ? <NavLink to='mywork'>
                        <Flex pl="5%" > {load ? "" : <Flex alignItems='center' justifyContent='center' gap='10px' h='40px'><MdOutlineWorkOutline /> My Work</Flex>} </Flex>

                    </NavLink> : ""}
                    {/* </RoleAuthrization> */}


                    {/* Taks */}
                    {navSize === 'large' ? <NavLink to='task'>
                        <Flex pl="5%" > {load ? "" : <Flex alignItems='center' justifyContent='center' gap='10px' h='40px'><IoReaderOutline /> Task</Flex>}  </Flex>
                    </NavLink> : ""}


                    {/* Team */}

                    {navSize === 'large' ? <NavLink to='team'>
                        <Flex pl="5%" > {load ? "" : <Flex alignItems='center' justifyContent='center' gap='10px' h='40px'><AiOutlineTeam /> Team</Flex>}</Flex>

                    </NavLink> : ""}


                    <IconButton
                        background="none"
                        className={styled.IconChange}
                        position='fixed'
                        top='5px'
                        left='20px'
                        zIndex='100px'
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={navSize === 'large' ? <BiChevronLeft /> : <AiOutlineAlignLeft />}
                        onClick={IconBtn}
                    />


                    {/* Accodina=================================================== */}




                    {navSize === 'large' ? <Accordion defaultIndex={value} allowMultiple>
                        {load ? "" : <AccordionItem >
                            <h2>
                                <AccordionButton onClick={AcCheck1} >
                                    <Box flex='1' textAlign='left'>
                                        ANALYZE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <NavLink to='reports'> <Flex alignItems='center' gap='10px' h='40px'><IoBarChartOutline /> Reports</Flex></NavLink>
                            </AccordionPanel>
                        </AccordionItem>}


                        <RoleAuthrization>   {load ? "" : <AccordionItem onClick={console.log("No2")}>
                            <h2>
                                <AccordionButton onClick={AcCheck2}>
                                    <Box flex='1' textAlign='left'>
                                        MANAGE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <NavLink to='project'>  <Flex alignItems='center' gap='10px' h='40px'><AiFillFolder /> Project</Flex></NavLink>
                                <NavLink to='client'>  <Flex alignItems='center' gap='10px' h='40px'><RiBuildingLine /> Client</Flex></NavLink>
                                <NavLink to='invoice'>  <Flex alignItems='center' gap='10px' h='40px'><IoIosPaper /> invoice</Flex></NavLink>
                            </AccordionPanel>
                        </AccordionItem>}


                        </RoleAuthrization>
                        {/* Work Space */}


                        <RoleAuthrization>   {load ? "" : <AccordionItem>
                            <h2>
                                <AccordionButton onClick={AcCheck3}>
                                    <Box flex='1' textAlign='left'>
                                        WORKSPACE
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <NavLink to='member'> <Flex alignItems='center' gap='10px' h='40px'><MdOutlineAccountCircle /> Members</Flex></NavLink>
                                <NavLink to='subscribtion'> <Flex alignItems='center' gap='10px' h='40px'><BsJournalBookmarkFill /> Subcription</Flex></NavLink>
                            </AccordionPanel>
                        </AccordionItem>}
                        </RoleAuthrization>

                    </Accordion> : ""}









                </Flex>

                {navSize === 'large' ? load ? "" : <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    // alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}>
                    <Divider display={navSize == "small" ? "none" : "flex"} />

                    <Flex onClick={onOpen} mt={4} className={styled.UserName}>
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Flex flexDir="column" ml={4}>

                            <Text color="gray" fontSize={12}>{UserLogin?.role}</Text>
                            <Box>   <Heading as="h3" size="sm">{UserLogin?.name}</Heading></Box>
                        </Flex>
                        <Box mt='15px' ml='22px'> <AiOutlineRight /></Box>
                    </Flex>
                </Flex> : ""}


            </Flex>



            {/* Logout Pop up */}


            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>LogOut</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure? You want to LogOut.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button onClick={Logout} colorScheme='red' ml={3}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Outlet />
        </>
    )
}

export default SideBar
