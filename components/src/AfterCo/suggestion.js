import { ArrowRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Suggestion(){
    const [nom,setNom] = useState("")
    useEffect(()=>{
        // JSON.parse(secureLocalStorage.getItem("local")).data.nom 
        setNom( "Default user")
    },[nom])
    return(<Box borderRadius={"25px"} position={"fixed"} py={5}  width={"250px"} height={"fit-content"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
    <Box>
      <Text fontWeight={700} fontSize={"16px"} ml={2} mb={5}  width={"240px"}>Suggestions nouvelles relations</Text>
      <Box width={"220px"} ml={5}>
      <Flex fontSize={"12px"} mb={2} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text>Domé Carole</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      <Flex fontSize={"12px"} mb={2} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text>Assita bintou</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      <Flex fontSize={"12px"} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text>Blé Gérard</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      </Box>
    </Box>
    <Center><Button bgColor={"white"} _hover={{bgColor:"white"}} rightIcon={<ArrowRightIcon/>} fontSize={"12px"}>Toutes les suggestions</Button></Center>
  
    </Box>)
}