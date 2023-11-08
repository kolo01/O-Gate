import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function ThreeSec(){
    const [nom,setNom] = useState("")
    const all=[
        {
        image:"./all/Home.png",
        text:"Accueil", l:2},
       
        {
            image:"./all/partenaire.png",
            text:"Mes relations", l:5},
            {
                image:"./all/notifications.png",
                text:"Notifications", l:10},,
                {
                    image:"./all/mesasge.png",
                    text:"Messagerie", l:10},
    ]


    useEffect(()=>{
        setNom(JSON.parse(secureLocalStorage.getItem("local")).data.nom)
    },[nom])


    return(
        <Flex>
            {all.map((data,index)=>(
                <Box key={index} maxW={"107px"} maxH={"56px"} mt={"12px"} mr={"20px"}  textAlign={"center"}>
                    <Image ml={data.l}alt={data.text} src={data.image} color={"black"}/>
                    <Text fontSize={"16px"} lineHeight={"16px"}
                   >{data.text}</Text>
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
    )
}