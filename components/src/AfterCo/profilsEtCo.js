import { Avatar, Box, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Profilers(){
    const [nom,setNom] = useState("")
    const router = useRouter()
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
    <Box pb={5}  display={{base:"none",lg:"grid"}} width={"225px"} fontFamily={"-apple-system"} bgColor={"white"}  borderBottomRadius={"xl"}  borderTopRadius={"xl"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
        <Box bgColor={"red"} width={"225px"} borderTopRadius={"xl"} height={"50px"} ></Box>
    <Box borderBottomRadius={"xl"} mt={-5} width={"225px"} height={"fit-content"}  >
        <Center><Avatar/></Center>
        <Text textAlign={"center"} fontSize={"15px"}  fontWeight={600}>Bonjour  {nom}</Text>
        <Flex textAlign={"center"} fontSize={"15px"} fontWeight={700}>
            
           {/* <Center mx={"30%"} display={"flex"}> <Box  w={4} h={4} bg= 'green.300' border= '2px solid white' rounded='full'/><Text >Actif</Text></Center> */}
        </Flex>

        {/* Debut 2eme elements */}
        <Flex borderTop={"1px solid gray"} my={5} >
        <Image ml={2}  src="./Stats.png" alt="stats" w={"24px"} h={"24px"}/>


    
        <Text fontWeight={600}  fontSize={"15px"} >Statistiques globales</Text>
       </Flex>
       <Box mx={2} mb={2} fontSize={"15px"} fontWeight={600} mt={2}>
       <Flex as={Link} href="/Favoris" _hover={{
        textDecoration:"none"
       }} display={"flex"} justifyContent={"space-between"}>
        <Text>Publications favoris : </Text>
        <Text>12</Text>
       </Flex>
       <Flex as={Link} href="/Interet" _hover={{
        textDecoration:"none"
       }} display={"flex"} justifyContent={"space-between"}>
       <Text>Interessés par :</Text>
        <Text>5 articles</Text>
       </Flex>
       <Flex  as={Link} href="/MesPublications" _hover={{
        textDecoration:"none"
       }} display={"flex"} justifyContent={"space-between"}>
       <Text>Mes publications:</Text>
        <Text>55</Text>
       </Flex>
       <Flex as={Link} href="/Followers" _hover={{
        textDecoration:"none"
       }}   display={"flex"} justifyContent={"space-between"}>
       <Text>Suivis par :</Text>
        <Text>55</Text>
       </Flex>
       </Box>
    </Box>
    {/* <Text textAlign={"center"}  fontWeight={400}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text> */}
    </Box>)
}