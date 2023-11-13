import Navbar from "@/components/home/Navbar";
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
     <Flex bgColor={"white"} pb={5}>
         <Logo/>
         <InputGroup width={"335px"} height={"34px"} mt={5} ml={-5} mr={10}>
         <Input type="search"border={"1px solid black"}  />
         <InputRightElement as={Search2Icon}/>
         </InputGroup>
         <Flex >
            {all.map((data,index)=>(
                <Box key={index} maxW={"107px"} maxH={"56px"} mt={"12px"} mr={"20px"}  textAlign={"center"}>
                    {index==3 ? <Box w={"42px"} h={"42px"} onClick={()=>router.push(data.link)} cursor={"pointer"}bgColor={"#219EF9"} py={2} px={4}>
                        <Image ml={data.l}alt={data.text} w={"24px"} h={"24px"} src={data.image} color={"black"}/>
                    <Text fontSize={"16px"} lineHeight={"16px"} >{data.text}</Text>
                    </Box>:<Box mt={2}  onClick={()=>router.push(data.link)} cursor={"pointer"}> 
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