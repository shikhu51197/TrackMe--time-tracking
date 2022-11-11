import { Box } from '@chakra-ui/react'
import React from 'react'

export const TrustedByCompany = () => {

    const image =[
        "https://tmetric.com/media/wlmpffzm/logo_business_endygo.png",
        "https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png",
        "https://tmetric.com/media/eozchehq/logo_business_pulso.png",
        "https://tmetric.com/media/rmvok0xh/logo_business_050media.png",
        "https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg",
        "https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg",
        "https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg",
        "https://tmetric.com/media/nvalaok1/logo_business_swaven.png",
    ]

  return (
    <Box borderBottom={"0.1px solid lightgray"} py={'40px'} bg={"rgb(246,247,248)"} > 
 <p style={{textAlign:'center',fontFamily:"sans-serif",fontWeight:"500"}} >Used and trusted by 3000+ businesses in the world</p>
        <Box
            
            padding={"20px"}
            boxSizing={"border-box"} 
            display={'grid'} 
            margin={"auto"}
            gridTemplateColumns={{
                base:'repeat(2,1fr)',
                sm: 'repeat(3,1fr)',
                md: 'repeat(4,1fr)',
                lg: 'repeat(6,1fr)',
                xl:'repeat(8,1fr)',
                '2xl': 'repeat(8,1fr)'
            }} 
            width={{
                base:"90%",
                sm: "90%",
                md: "90%",
                lg: "90%",
                xl:'90%',
                '2xl': '90%'
            }} 
            gap={{
                base:"30px",
                sm: "30px",
                md: "30px",
                lg: "30px",
                xl:'30px',
                '2xl': '30px'
            }} 
            // border={'1px solid black'} 
        >
            { image.map((e,i) => 
                <Box 
                key={e}
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'} 
                > 
                    <img  src={`${e}`} alt="" srcset="" />  
                </Box>
        )}
        </Box>

    </Box>
  )
}
