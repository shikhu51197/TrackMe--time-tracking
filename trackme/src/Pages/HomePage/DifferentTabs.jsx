import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box,Text } from '@chakra-ui/react'
import {SingleTab} from './SingleTab'
import * as data from "./data"

import style from "../css-adil/getstarted.css"

export const DifferentTabs = () => {
   
    // importing data from data.js to map the data

  return (
    <Box py={"60px"}>
        <Text 
            textAlign={"center"}
            fontSize={{base:"30px",
                sm: "34px",
                md: "36px",
                lg: "40px",
                xl: "44px",
                '2xl': '48px'}}
            fontWeight={600}
            fontFamily={'sans-serif'}
            >Why track time with TMetric</Text>
    <Tabs 
         margin={'auto'} 
        //  border={'1px solid black'}
         w={{
            base:"100%",
            sm: "100%",
            md: "100%",
            lg: "70%",
            xl: "70%",
            '2xl': '70%'
        }}
    >
        <TabPanels >
                {data.tabsDataInner.map((e,i)=> {
                    return  <TabPanel key={i}> 
                                {/* //SingleTab is a component will create the inner tab components */}
                                <SingleTab  element={e} index ={i} />  
                            </TabPanel>
                })}    
        </TabPanels>

                {/* mapping the data to create the tablist ex Software developers , Marketers */}
        <TabList className='scrollbarRemover' margin={'auto'} overflow={'scroll'} >            
            {data.tabsData.map((e)=> {
                    return  <Tab fontSize={'15px'}
                                fontWeight='500'
                                color={"rgb(119,140,158)"}
                                _focus={{
                                    borderTop:'2px solid rgb(53,112,240)',
                                    fontWeight:'500',
                                }} 
                                key={e} width={"300px"} 
                            >
                                {e}
                            </Tab>
                })}   
        </TabList>

    </Tabs>
</Box>
  )
}
