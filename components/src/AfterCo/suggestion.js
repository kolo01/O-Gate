import { ArrowRightIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Suggestion(){
    const [nom,setNom] = useState("")
    const router = useRouter()
    useEffect(()=>{
      try{
          if(JSON.parse(secureLocalStorage.getItem("local")).data.nom == "NON DEFINI"){
              setNom("NON DEFINI")
             }else{
              setNom(JSON.parse(secureLocalStorage.getItem("local")).data.nom)
             }
      }catch (error){
       
          router.push("/")
      }
    
  },[nom,router])
    return(<Box borderRadius={"25px"}  py={5}  width={"250px"} height={"fit-content"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
    <Box>
      <Text fontWeight={700} fontSize={"16px"} ml={2} mb={5}  width={"240px"}>Suggestions nouvelles relations</Text>
      <Box width={"220px"} ml={5}>
      <Flex fontSize={"12px"} mb={2} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text ml={2}>Domé Carole</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      <Flex fontSize={"12px"} mb={2} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text ml={2}>Assita bintou</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      <Flex fontSize={"12px"} justifyContent={"space-between"}><Flex><Avatar width={"24px"} h={"24px"}/><Text ml={2}>Blé Gérard</Text></Flex><Text color={"#219EF9"}>Suivre</Text></Flex>
      </Box>
    </Box>
    <Center><Button bgColor={"white"} _hover={{bgColor:"white"}} rightIcon={<ArrowRightIcon/>} fontSize={"12px"}>Toutes les suggestions</Button></Center>
  
    </Box>)
}