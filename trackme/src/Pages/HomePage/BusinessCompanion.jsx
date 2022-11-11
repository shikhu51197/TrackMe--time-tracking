import { Box,Spacer,TagRightIcon,Text, useDisclosure} from '@chakra-ui/react'
import React, { useState } from 'react'
import * as data from "./data"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import style from "../css-adil/getstarted.css"


export const BusinessCompanion = () => {

    const [imageS,setImage] = useState("https://tmetric.com/media/e5enfaae/img-advantages.png")

    // const [timeTracking,setTimeTracking] = useState(false)
    // const [projectManagement,setProjectManagement] = useState(false)
    // const [teamManagement,setTeamManagement] = useState(false)
    // const [billing_Invoicing,setBilling_Invoicing] = useState(false)
    // const [reporting,setReporting] = useState(false)
    // const [timeOff,setTimeOff] = useState(false)

  return (
    //parent
    <Box 
        pt={{
            base:"50px",
            sm: "50px",
            md: "50px",
            lg: "50px",
            xl: "50px",
            '2xl': '50px'
        }} 
    >
        {/* //first child */}
        <Box 
            w={{
                base:"100%",
                sm: "100%",
                md: "100%",
                lg: "50%",
                xl: "50%",
                '2xl': '50%'
            }} 
            margin={'auto'}
            // lineHeight={".101"}
        >
            <Text 
                fontSize={{
                    base:"30px",
                    sm: "30px",
                    md: "40px",
                    lg: "50px",
                    xl: "50px",
                    '2xl': '50px'
                }}
                fontWeight={700} 
                textAlign={'center'}
            >  
                What makes TMetric your best business companion
            </Text>

        </Box>

        {/* Second child */}
        <Box 
            display={"flex"}
            gap={'30px'}
            flexDirection={{
                base:"column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
                '2xl': 'row'
            }}
            paddingX={'60px'}
            paddingY={'80px'}

        > 
        {/* Second child 1st chil*/}
            <Box 
            boxShadow={"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;"}
                w={{
                    base:"100%",
                    sm: "100%",
                    md: "100%",
                    lg: "60%",
                    xl: "60%",
                    '2xl': '60%'
                }} 
            >
                {/* this hook contain the valueof the clicked image */}
                <img src={imageS} alt="" srcset="" />
            </Box>

{/* Second child 2nd child*/}
            <Box 
                w={{
                    base:"100%",
                    sm: "100%",
                    md: "100%",
                    lg: "40%",
                    xl: "40%",
                    '2xl': '40%'
                }}
            >
                <Box
                    overflow={'scroll'}
                    className='scrollbarRemover'
                    display={"flex"}
                    flexDirection={{
                        base:"row",
                        sm: "row",
                        md: "row",
                        lg: "column",
                        xl: "column",
                        '2xl': 'column'
                    }}
                    gap={"20px"}
                >
                    {/* // looping on icon images to create a list of tabs on the left side which will display image */}
                    {data.iconImages.map((e,i) => {
                        return <Box 
                                    border={'0.5px solid gray'}
                                    value={e} 
                                    key={e} 
                                    borderRadius={'10px'} 
                    // onclicking it will set the image on the right & on every click hook will set the image to display & changing with dispalyImages array 
                                    onClick={() => {setImage(data.dispalyImages[i])}}  
                                > 
                                    <Accordion  allowMultiple>
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box  flex='1' 
                                                        display={"flex"} 
                                                        flexDirection={{
                                                            base:"column",
                                                            sm: "column",
                                                            md: "column",
                                                            lg: "row",
                                                            xl: "row",
                                                            '2xl': 'row'
                                                         }}
                                                        justifyContent={"left"} 
                                                        alignItems={'center'}
                                                        gap={'10px'}
                                                        fontSize={'20px'}
                                                        fontWeight={700}
                                                        fontFamily={"sans-serif"}
                                                        color={"#292e33"}
                                                        >
                                                <img src={`${e}`} alt="" srcset="" />
                                                {data.headText[i]}
                                                </Box>
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel
                                                 pb={4}
                                                fontSize={'18px'}
                                                fontWeight={500}
                                                fontFamily={"sans-serif"}
                                                color={"#292e33"}
                                            >
                                                {data.innerText[i]}
                                                <Spacer/>

                                                <Text color={"rgb(48,112,240)"}>
                                                Learn More <ArrowForwardIcon/>
                                                </Text>

                                            </AccordionPanel>
                                        </AccordionItem>
                                        </Accordion>
                         </Box>
                    })}
                </Box>

            </Box>

        </Box>

    </Box>
  )
}
