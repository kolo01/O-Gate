
import Messages from "@/components/home/Message";

import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Stats from "@/components/src/AfterCo/Stats";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import Suggestion from "@/components/src/AfterCo/suggestion";
import Logo from "@/components/src/Logo";
import { Search2Icon } from "@chakra-ui/icons";
import { Avatar, Box, Center, Flex, Icon, Image, Input, InputGroup, InputRightAddon, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    const [nom,setNom] = useState("")
    const all=[
        {
        image:"./all/Home.png",
        text:"Accueil", l:2,link:"/home"},
       
        {
            image:"./all/partenaire.png",
            text:"Mes relations", l:5,link:"/relation"},
            {
                image:"./all/notifications.png",
                text:"Notifications", l:10,link:"/notifications"},,
                {
                    image:"./all/mesasge.png",
                    text:"Messagerie", l:10,link:"/messages"},
    ]
    const router = useRouter()

    useEffect(()=>{
        // setNom(JSON.parse(secureLocalStorage.getItem("local")).data.nom)
        setNom("Default user")
    },[nom])
    return(
    <Box  bgColor={"#F6F6F6"} mb={10} >
   <NavbarCo/>
    
    <Flex  justifyContent={"space-around"} mt={5}  >
    <Box>
            <Profilers/>
            <Stats/>
        </Box>
        <Box mb={50}   >
            <Center width={600} h={600}>
            <iframe
                  width="500"
                  height="400"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"}
                ></iframe>
            </Center>
            {message2.map((data,ind)=><Box key={ind} scr><Messages  idM={data.idM} propio={data.propio} date={data.date} image={data.image} message={data.message}/></Box>)}
            
        </Box>
        <Box >
            <Suggestion/>
        </Box>
    </Flex>
    
    </Box>
    )
}