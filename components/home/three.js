import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { MdHome } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io"; 
import { MdMessage } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { useRouter } from "next/router";
export default function ThreeSec(){
    const [nom,setNom] = useState("")
    const router = useRouter()
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
        // setNom(JSON.parse(secureLocalStorage.getItem("local")).data.nom)
        setNom("Default user")
    },[nom])


    return(
        <Flex >
            <Box mt={2} mr={5} onClick={()=>router.push("/")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdHome width={"42px"}  height={"42px"} fontSize={"42px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Accueil"}</Text>
                </Box>
                <Box mt={2} mr={5}  onClick={()=>router.push("/relation")} cursor={"pointer"}>
                   <Box ml={2} width={"45px"} height={"45px"} borderRadius={"50%"} bgColor={"blackAlpha.700"}>
                    <PiUsers  width={"42px"}  height={"42px"} fontSize={"42px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Mes relations"}</Text>
                </Box>
                <Box mt={2} mr={5}  onClick={()=>router.push("/notifications")} cursor={"pointer"}>
                   <Box ml={5}>
                    <IoIosNotifications  width={"42px"}  height={"42px"} fontSize={"42px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Notifications"}</Text>
                </Box>
                <Box mt={2} mr={5} maxW={"107px"} maxH={"56px"} textAlign={"center"}  onClick={()=>router.push("/offres")} cursor={"pointer"}>
                   <Box ml={2}>
                    <Image ml={5} src={"./all/Sell.png"} alt="" width={"42px"}  height={"42px"} fontSize={"42px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Offres immobilières"}</Text>
                </Box>
                <Box mt={2} mr={5}  onClick={()=>router.push("/messages")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdMessage  width={"42px"}  height={"42px"} fontSize={"42px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Message"}</Text>
                </Box>
                
                  
                
           
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