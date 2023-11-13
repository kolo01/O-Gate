
import Messages from "@/components/home/Message";

import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Stats from "@/components/src/AfterCo/Stats";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import Suggestion from "@/components/src/AfterCo/suggestion";
import Logo from "@/components/src/Logo";
import { Search2Icon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Image, Input, InputGroup, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
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
   <Flex bgColor={"white"} pb={5}>
         <Logo/>
         <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement as={Search2Icon}/>
         </InputGroup>
         <Flex >
            {all.map((data,index)=>(
                <Box key={index} maxW={"107px"} maxH={"56px"} mt={"12px"} mr={"20px"}  textAlign={"center"}>
                    {index==0 ? <Box onClick={()=>router.push(data.link)} cursor={"pointer"}bgColor={"#219EF9"} py={2} px={4}>
                        <Image ml={data.l}alt={data.text} w={"24px"} h={"24px"} src={data.image} color={"black"}/>
                    <Text fontSize={"16px"} lineHeight={"16px"} >{data.text}</Text>
                    </Box>:<Box mt={2} onClick={()=>router.push(data.link)} cursor={"pointer"}> 
                    <Image ml={data.l}alt={data.text} w={"24px"} h={"24px"} src={data.image} color={"black"}/>
                <Text fontSize={"16px"} lineHeight={"16px"} >{data.text}</Text>
                </Box>}
                    
                  
                </Box>
            ))}
            <Menu>
  <MenuButton >
  <Avatar/>
  </MenuButton>
  <MenuList>
    <MenuItem>Mon profils</MenuItem>
    <MenuItem>Deconnexion de {nom=="NON DEFINI"? "New user" : nom}</MenuItem>
   <Text mx={5}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text>
  </MenuList>
</Menu>
            
        </Flex>
        </Flex>
    
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