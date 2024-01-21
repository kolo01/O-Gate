import { Avatar, Box, Button, Center, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { MdHome } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io"; 
import { MdMessage } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { useRouter } from "next/router";
import PrincipalePopup from "../popupPosts/popupPrincipale";
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

        const Logout= ()=>{
            localStorage.removeItem("local")
            router.push("/")
        }

    
    useEffect(()=>{
        try{
            if(JSON.parse(localStorage.getItem("local")).data.nom == "NON DEFINI"){
                setNom("NON DEFINI")
               }else{
                setNom(JSON.parse(localStorage.getItem("local")).data.nom)
               }
        }catch (error){
            
            router.push("/")
        }
      
    },[nom,router])


    return(
        <Flex >
            <Box mt={2} mr={5} onClick={()=>router.push("/")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdHome width={"42px"}  height={"42px"} fontSize={"30px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Accueil"}</Text>
                </Box>
                <Box mt={2} mr={5}  onClick={()=>router.push("/relation")} cursor={"pointer"}>
                  <Center >
                   <Box borderRadius={"50%"}>
                    <PiUsers  width={"42px"}  height={"42px"} fontSize={"30px"}/>
                   </Box>
                   </Center>
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Mes relations"}</Text>
                </Box>
                <Box mt={2} mr={5}  onClick={()=>router.push("/notifications")} cursor={"pointer"}>
                   <Box ml={5}>
                    <IoIosNotifications  width={"10px"}  height={"42px"} fontSize={"30px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Notifications"}</Text>
                </Box>
                <PrincipalePopup/>
                <Box mt={2} mr={5}  onClick={()=>router.push("/messages")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdMessage  width={"42px"}  height={"42px"} fontSize={"30px"}/>
                   </Box>
               
                <Text fontSize={"16px"} lineHeight={"16px"} >{"Message"}</Text>
                </Box>
                
                  
                
           
            <Menu>
  <MenuButton >
    <Box display={"grid"} textAlign={"center"}>
  <Avatar fontSize={"30px"} height={"30px"} width={"30px"} ml={"30%"}/>
  
  {nom=="NON DEFINI"? "New user" : nom}
 
  </Box>
  </MenuButton>
  <MenuList>
    <MenuItem>Mon profils</MenuItem>
    <MenuItem onClick={()=>{Logout()}}>Deconnexion de {nom=="NON DEFINI"? "New user" : nom}</MenuItem>
   {/* <Text mx={5}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text> */}
  </MenuList>
</Menu>
            
        </Flex>
    )
}