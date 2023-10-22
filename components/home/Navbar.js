import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../src/Logo";
import SecondSec from "../src/secondSec";
import Last from "../src/LastSec";

export default function Navbar(){
    const logo ="O'Gate"
    const all=[
        {
        image:"./all/Post add.png",
        text:"Post", l:2},
       
        {
            image:"./all/Member.png",
            text:"Membres", l:5},
            {
                image:"./all/Sell.png",
                text:"Offres immobilières", l:10},
    ]
    const insc = "S’incrire"
    return(
        <Box display={"flex"} width={"full"}  bgColor={"#ffffff"} pb={2}>
          <Logo/>
       <SecondSec/>
            <Box orientation="vertical" height={"42px"} mt={"20px"} mr={5} color={"black"} bgColor={"black"}>
            <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0V42" stroke="black" stroke-width="2"/>
</svg> 
            </Box>
           <Last/>
        </Box>
    )
}