import { Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import { BusinessCompanion } from './BusinessCompanion'
import { Getstarted } from './Getstarted'
import Navbar from './Navbar'
import { SecondImageTab } from './SecondImageTab'
import { ManageTeamData } from './ManageTeamData'
import { PopularServices } from './PopularServices'
import Footer from './Footer'
import { DifferentTabs } from './DifferentTabs'
import Reviews from './Reviews'
import { TrustedByCompany } from './TrustedByCompany'
import MakeTime from './MakeTime'
import { WhyTmetric } from './WhyTmetric'





export const Homepage = () => {
  return (
   <Box>
    <Navbar/>
    <Getstarted/>
    <SecondImageTab/>
    <BusinessCompanion/>
    <Spacer/>
    <ManageTeamData/>
    <PopularServices/>
    <DifferentTabs/>
    <Reviews/>
    <TrustedByCompany/>
    <WhyTmetric/>
    <MakeTime/>
    <Footer/>
   </Box>
  )
}
