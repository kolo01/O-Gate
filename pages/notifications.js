import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Logo from "@/components/src/Logo";
import { Search2Icon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Flex, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Offers(){
    const texted="Térrain de 500m2 disponible à cocody angré Contactez moi en inbox pour plus d’informations"
     const [nom,setNom] = useState("")
  const all=[
      {
      image:"./house.png",
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
    return(<Box bgColor={"#F6F6F6"} pb={10} h={"45em"}>
     <NavbarCo/>
    <Center>
        <Box width={"788px"} pt={10} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} height={"fit-content"} pb={10} mt={"96px"}   borderRadius={"25px"} bgColor={"white"}>
        <Flex ml={10} mb={2} border={"1px solid #F1F1F1"} w={"fit-content"} p={2}>
                <Image src="./sort.png" alt="sort" />
                <Text color={"#CDCDCD"} fontSize={"16px"} cursor={"pointer"} fontWeight={700}>Filtre</Text>
            </Flex>
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
            <Text ml={5} color={"#D9D9D9"} mb={5} fontWeight={700}>Il y a 2 jours</Text>
            <Flex ml={10} justifyContent={"space-between"} width={"90%"}>
                <Box ml={2}>
                    
                    <Flex>
                        <Avatar w={"42px"} h={"42px"} mr={2}/>
                        <Box>
                        <Text w={"400px"} ml={5} mb={5}>{texted}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Text ></Text>
            </Flex>
            
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
        </Box>
        </Center>
    </Box>)
}