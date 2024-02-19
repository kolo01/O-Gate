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
        <Flex   fontSize={'12px'} fontFamily={"-apple-system"} >
            <Box mt={5} mr={5} onClick={()=>router.push("/")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdHome  width={"24px"} height={"24px"} fontSize={"24px"}/>
                   </Box>
               
                <Text fontSize={"12px"} lineHeight={"16px"} >{"Accueil"}</Text>
                </Box>
                <Box mt={5} mr={5}  onClick={()=>router.push("/relation")} cursor={"pointer"} textAlign={"center"}>
                  <Center >
                    <PiUsers   width={"24px"} height={"24px"} fontSize={"24px"}/>
                   </Center>
                <Text fontSize={"12px"} lineHeight={"16px"} minW={"95px"}     width={"95px"}>{"Mes relations"}</Text>
                </Box>
                <Box mt={5} mr={5}  onClick={()=>router.push("/notifications")} cursor={"pointer"}>
                   <Box ml={5}>
                    <IoIosNotifications  width={"24px"} height={"24px"} fontSize={"24px"} />
                   </Box>
               
                <Text fontSize={"12px"} lineHeight={"16px"} >{"Notifications"}</Text>
                </Box>
                <PrincipalePopup/>
                <Box mt={5} mr={5}  onClick={()=>router.push("/messages")} cursor={"pointer"}>
                   <Box ml={2}>
                    <MdMessage   width={"24px"} height={"24px"} fontSize={"24px"}/>
                   </Box>
               
                <Text fontSize={"12px"} lineHeight={"16px"} >{"Message"}</Text>
                </Box>
                
                  
                
           
            <Menu >
  <MenuButton >
    <Box display={"grid"} mt={5} textAlign={"center"}>
  <Avatar  width={"24px"} height={"24px"} fontSize={"24px"} ml={"30%"}/>
  
  <Text fontSize={'12px'} fontFamily={'-apple-system'}>{nom=="NON DEFINI"? "New user" : nom} </Text>
 
  </Box>
  </MenuButton>
  <MenuList>
    <MenuItem _hover={{
        bgColor:'white',
        textDecoration:"none"
    }}>Mon profils</MenuItem>
    <MenuItem _hover={{
        bgColor:'white',
        textDecoration:"none"
    }} onClick={()=>{Logout()}}>Deconnexion de {nom=="NON DEFINI"? "New user" : nom}</MenuItem>
   {/* <Text mx={5}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text> */}
  </MenuList>
</Menu>
            
        </Flex>
    )
}