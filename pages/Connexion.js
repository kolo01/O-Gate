import Navbar from "@/components/home/Navbar";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import {FcGoogle} from "react-icons/fc"
export default function Box2(){
    const av = " l'aventure"
    const insc = " S'incrivant"
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return(
        <>
        <Navbar/>
        <Center >
        <Box  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} p={5} borderRadius={"25px"} my={10}>
        <Text color={" #219EF9"} fontWeight={700} fontSize={"48px"}>
            Connexion
        </Text>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}> 
            Email ou téléphone
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setEmail(e.target.value)}} width={"408px"} height={"55px"}  border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Mot de passe
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setPassword(e.target.value)}} width={"408px"}  type={"password"}height={"55px"} border={"1px solid black"}/>
        </Box>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"} mt={5}> Mot de passe oublié ?</Text>
        <Box display={"grid"}>
        <Button mt={5}fontWeight={700} isDisabled={email.length<10 || password.length<7} fontSize={"16px"} lineHeight={"19.5px"} borderRadius={"16px"} width={"408px"} height={"55px"} bgColor={"#219EF9"} color={"white"} _hover={{
            bgColor:"#219EF9"
        }}> Se connecter</Button>
        <Button mt={5}  bgColor="transparent" border="1px solid black"fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}borderRadius={"16px"} width={"408px"} height={"55px"} leftIcon={<FcGoogle/>} _hover={{
            bgColor:"transparent"
        }}> Continuer avec Google</Button>
        </Box>
        <Center>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"} mt={5}>Ou</Text>
        </Center>
        <Button mt={5} bgColor="transparent" border="1px solid black" fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}borderRadius={"16px"} width={"408px"} height={"55px"} _hover={{
            bgColor:"transparent"
        }}> Démarrer{av} en <Text ml={2} color="#219EF9" as={Link} href={"/Connexion"} _hover={{textDecoration:"none",color:"#219EF9"}}>{insc}</Text> </Button>
        </Box>
        </Center>
        </>
    )
}