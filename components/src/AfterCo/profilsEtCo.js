import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";
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
    return(<Box display={{base:"none",lg:"grid"}}>
    <Box borderRadius={"25px"} p={10} width={"240px"} height={"144px"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} >
        <Center><Avatar/></Center>
        <Text textAlign={"center"}  fontWeight={700}> {nom}</Text>
        <Flex textAlign={"center"} fontWeight={700}>
            
           <Center mx={"30%"} display={"flex"}> <Box  w={4} h={4} bg= 'green.300' border= '2px solid white' rounded='full'/><Text >Actif</Text></Center>
        </Flex>
    </Box>
    {/* <Text textAlign={"center"}  fontWeight={400}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text> */}
    </Box>)
}