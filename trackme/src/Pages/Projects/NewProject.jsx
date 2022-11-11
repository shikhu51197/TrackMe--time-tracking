import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Projects/NewProject.module.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import General from './General';
import Billing from './Billing';
import Budget from './Budget';
import WorkType from './Worktype';
import Team from './Team';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';




const NewProject = () => {
  const [project, setproject] = useState()
  const [code, setcode] = useState()
  const [amount, setamount] = useState()
  const [currency, setcurrency] = useState()
  const [hourly, sethourly] = useState()
  const [freetype, setfreetype] = useState()
  const [freeRecurr, setfreeRecurr] = useState()
  const toast = useToast()

  const [client, setClient] = useState()
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = () => {
    const payload = { project, code, amount, currency, hourly, freetype, freeRecurr, client }
    fetch("https://tmetric-41504.herokuapp.com/project/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())

      .then((res) => {
        console.log(res)
        toast({
          position: 'top',
          marginTop: '150px',
          description: "Project Added Successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
      .catch((err) => console.log(err))
  }


  return (
    <Box>

      <Box className={styles.NewProjectMainBox}>

        {/* Back Button Box */}
        <Box className={styles.NewClientarrowBox}>

          <Link to="/sidebar/project"> <IoMdArrowRoundBack size={24} className={styles.arrow} /></Link>

          <Text fontSize="26px" fontWeight="semibold">
            New Project
          </Text>

        </Box>

        {/* Back Button Box End */}


        {/* New Project Box Inside Gray Box */}
        <Box className={styles.NewProjInBox}>


          <Box className={styles.LeftStaticBox}>

            <Link to="general" spy={true} smooth={true}><Text className={styles.StaticSha}>General</Text>  </Link>
            <Text className={styles.StaticSha}>Billing</Text>
            <Link to="budget" spy={true} smooth={true}> <Text className={styles.StaticSha}>Budget</Text> </Link>
            <Text className={styles.StaticSha}>Work Types</Text>
            <Text className={styles.StaticSha}>Team</Text>

          </Box>

          <Box className={styles.RightScrollBox}>

            <General setproject={setproject} setcode={setcode} setClient={setClient} />


            <Billing setamount={setamount} setcurrency={setcurrency} sethourly={sethourly}
              setfreetype={setfreetype} setfreeRecurr={setfreeRecurr}
            />


            <Budget />
            <WorkType />
            {/* <Team /> */}

          </Box>
        </Box>

        <Link to="/sidebar/project"> <Button onClick={handleSubmit}>SAVE</Button> </Link>
      </Box>







    </Box>

  )
}

export default NewProject