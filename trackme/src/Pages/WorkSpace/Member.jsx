import React, { useEffect, useRef, useState } from 'react'
import style from './Member.module.css'
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMemberFun, GetMemberData, GetMemberUserData, PostMemberSignup, UpdateMember } from '../../Redux/MemberReducer/action';
import { useNavigate } from 'react-router-dom';
import { LoginUserData } from '../../Redux/AuthReducer/action';


function Member() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState("");
    const [memberData, setMemberData] = useState();
    const [suggestion, setSuggestion] = useState(false);
    const [memeber, setMember] = useState()
    const [editMember, setEditMember] = useState();
    const [roleChnage, setRolechange] = useState();
    const autoComepeleteRef = useRef();
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate();


    // getting the data from redux store
    const token = useSelector((state) => state.auth.token);
    const UserOwner = useSelector((state) => state.auth.LoginUser);

    console.log(UserOwner.name, "owner")








    // get owner data

    const getOwnerData = () => {
        dispatch(LoginUserData(token))
            .then((res) => {
                console.log(res.payload.name, "page")
            })
    }


    useEffect(() => {
        getOwnerData();
    }, [])




    // post the data to member schema

    const showMemberData = () => {
        dispatch(GetMemberData(token))
            .then((res) => {

                // console.log(res.payload, "datattatat")
                setMember(res.payload)
                getOwnerData();

            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        showMemberData();
    }, [])


    // get the data for edit
    const handelAddMember = (item) => {


        const payload = {
            id: item._id,
            token
        }

        dispatch(PostMemberSignup(payload))
            .then((res) => {
                if (res.type == 'POST_MEMBER_DATA_EEEOR') {
                    console.log("res", res.payload.response.data)


                    toast({
                        position: 'top',
                        marginTop: '150px',
                        description: res.payload.response.data,
                        status: 'error',
                        duration: 2000,
                        isClosable: true,
                    })
                }
                else if (res.type == 'POST_MEMBER_DATA') {
                    console.log(res.payload)
                    showMemberData();
                    getOwnerData();

                    toast({
                        position: 'top',
                        marginTop: '150px',
                        description: `${res.payload.data.data.name} has been added as a Team Member`,
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })


    }


    // get the email data

    const handelChangeEmail = (e) => {
        console.log(e.target.value)

        setValue(e.target.value)
    }


    // fontend Throttling logic

    const searching = memberData?.filter(option => option.email.toLowerCase().includes(value.toLowerCase()))


    // get the data function sending to action.js
    useEffect(() => {
        dispatch(GetMemberUserData(token))
            .then((res) => {
                setMemberData(res.payload)
                // console.log(res.payload)
            })
            .catch((err) => console.log(err))
    }, [])


    // this use effect for suggestion box after click outside close the suggestion box 

    useEffect(() => {
        const handleOutSideClick = (e) => {
            if (autoComepeleteRef.current && !autoComepeleteRef.current.contains(e.target)) {
                setSuggestion(false)
            }
        }

        document.addEventListener('click', handleOutSideClick);

        return () => {
            document.removeEventListener('click', handleOutSideClick);
        }


    }, [])

    // Update the memeber

    const handelEdit = (item) => {
        getOwnerData()
        setEditMember(item)

    }

    // teamMember event
    const TeamMemberclick = () => {
        const { userId } = editMember

        const payload = {
            userId,
            token,
            role: "TeamMember"
        }
        dispatch(UpdateMember(payload))
            .then((res) => {

                getOwnerData()
                showMemberData();

                setRolechange(1)
            })

    }

    // Admin event
    const Adminclick = () => {
        const { userId } = editMember
        const payload = {
            userId,
            token,
            role: "admin"
        }
        dispatch(UpdateMember(payload))
            .then((res) => {

                getOwnerData()
                showMemberData();
            })


    }

    const Ownerclick = () => {
        const { userId } = editMember
        const payload = {
            userId,
            token,
            role: "owner"
        }
        dispatch(UpdateMember(payload))
            .then((res) => {

                getOwnerData()
                showMemberData();
            })
    }
    // DELETE MEMEBR
    console.log(editMember, "edit member")

    const Deleteclick = () => {
        const { userId } = editMember
        const payload = {
            userId,
            token
        }
        dispatch(DeleteMemberFun(payload))
            .then((res) => {
                console.log(res)
                getOwnerData()
                showMemberData();

            })
    }

    // useEffect(() => {
    // Deleteclick();
    // }, [])

    return (
        <>


            <h1 className={style.heading}>Members</h1>

            <div className={style.mainBox}>

                <div className={style.inviteBox}>
                    <button onClick={onOpen} className={style.inviteBox_btn}>  <FiPlus /> invite member</button>

                </div>

                {/* table */}
                <table className={style.contain_table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{UserOwner?.name}</td>
                            <td><p className={style.roleA}>{UserOwner?.role}</p></td>
                            <td>{UserOwner?.email}</td>
                            <td><p className={style.active}>Active</p></td>
                            <td></td>
                        </tr>
                    </tbody>
                    {memeber?.map((item, i) => (<tbody key={i}>
                        <tr onClick={() => handelEdit(item)} >
                            <td>{item.name}</td>
                            <td > <p className={item.role == 'owner' ? style.roleA : item.role == 'admin' ? style.role1 : style.role2} >{item.role}</p></td>
                            <td>{item.email}</td>
                            <td><p className={style.active}>Active</p></td>
                            <td>


                                <Menu>
                                    <MenuButton className={style.editButton}>    <BsThreeDots /> </MenuButton>
                                    <MenuList id={style.roleBox}>

                                        <MenuItem onClick={Adminclick}>
                                            Admin
                                        </MenuItem>
                                        <MenuItem onClick={TeamMemberclick}>
                                            TeamMember
                                        </MenuItem>

                                        <MenuItem onClick={Ownerclick}>
                                            Owner
                                        </MenuItem>
                                        <MenuItem onClick={Deleteclick}>
                                            Delete Member
                                        </MenuItem>
                                    </MenuList>
                                </Menu>


                            </td>
                        </tr>


                    </tbody>))}
                </table>

            </div>

            {/* search modal */}

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent h='150px'>
                    <ModalHeader>Search Members</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody ref={autoComepeleteRef}>

                        <Input
                            onChange={handelChangeEmail}
                            onFocus={() => setSuggestion(true)}
                            type='text' placeholder='Search Members' />

                        {/* suggestion box logic */}
                        {
                            value.length > 0 ? suggestion ? <div id={style.mymodal} >

                                {searching?.map((item, index) => (

                                    <div key={index} onClick={() => handelAddMember(item)} className={style.searchEmail_Div}>{item.email}</div>

                                ))
                                }
                            </div> : null : null
                        }
                    </ModalBody>


                </ModalContent>
            </Modal>




        </>
    )
}

export default Member