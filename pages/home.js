
import Messages from "@/components/home/Message";

import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Stats from "@/components/src/AfterCo/Stats";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import Suggestion from "@/components/src/AfterCo/suggestion";
import { Box, Flex } from "@chakra-ui/react";

export default function Home(){
    const message2=[
        {
            idM:"1",
            propio:"user1",
            date:"18/10/2020",
            message:"Hello all",
            image:"",
        },
        {
            idM:"2",
            propio:"user2",
            date:"18/10/2020",
            message:"hello ALL",
            image:"",
        },
        {
            idM:"3",
            propio:"user3",
            date:"18/10/2020",
            message:"Hello me",
            image:"",
        },
        {
            idM:"4",
            propio:"user4",
            date:"18/10/2020",
            message:"Hello me",
            image:"",
        }
    ]
    return(
    <Box  bgColor={"#F6F6F6"} pb={10}>
    <Navbar/>
    
    <Flex  justifyContent={"space-around"} mt={5}  >
    <Box>
            <Profilers/>
            <Stats/>
        </Box>
        <Box >
            <Box></Box>
            {message2.map((data,ind)=><Box key={ind} scr><Messages  idM={data.idM} propio={data.propio} date={data.date} image={data.image} message={data.message}/></Box>)}
            
        </Box>
        <Box >
            <Suggestion/>
        </Box>
    </Flex>
    
    </Box>
    )
}