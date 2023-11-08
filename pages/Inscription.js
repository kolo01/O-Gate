import Navbar from "@/components/home/Navbar";
import { Box, Button, Center, Input, Select, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {FcGoogle} from "react-icons/fc"
export default function Box2(){
    const av = " l'aventure"
    const insc = " S'incrire"
    const router = useRouter()
    const toast = useToast()
    const [email,setEmail] = useState("")
    const [tel,setTel] = useState("")
    const [mdp,setMdp] = useState("")
    const [mdpC,setMdpC] = useState("")
    // const [color,setColor] = useState("green")
    // const [message,setMessage] = useState("")
    const [] = useState("")
    const [] = useState("")
    const [] = useState("")
    const [] = useState("")
    // const Next = ()=>{
    //     sessionStorage.setItem("email",email)
    // sessionStorage.setItem("tel",tel)
    // sessionStorage.setItem("mdp",mdp)
    // sessionStorage.setItem("mdpC",mdpC)
    // }
    
    const [compte, setCompte] = useState("PARTICULIER");
   

   const Validate =  () => {
    console.log(tel,
      mdp,
      compte)
     if(mdp == mdpC){
         axios.post("http://185.98.139.246:9090/ogatemanagement-api/signup", {
            nom: "NON DEFINI",
            username: tel,
            password:mdp ,
            typeCompte: compte,
            localisation: "NON DEFINI",
          }).then((response)=>{
            
            toast({
              description:"Merci pour votre confiance",title:"Inscription validée",duration:9000,status:"success"
            }),
            sessionStorage.clear()
          }).catch((error)=>{ 
            
            if(error.response.data.donnee=="Le numéro de téléphone appartient à un autre utilisateur"){
                toast({
                    description:"Veuillez vous connectez svp",title:"Compte deja existant",duration:9000,status:"warning"
                  })
            }
            else if (error.response.data.donnee == null){
             
                toast({
                    description:"Merci pour votre confiance",title:"Inscription validée",duration:9000,status:"success"
                  })
            }else{
              toast({
                description:"Une erreur inattendu est survenu, merci de reesayer plus tard",title:"Erreur detecté!!!",duration:9000,status:"success"
              })
            }
           } );
     }else{
     
        toast({
            description:"Veuillez verifier les mots de passe",title:"Mot de passe different",duration:9000,status:"error"
          })
     }
    
    };

    return(
        <>
        <Navbar/>
        <Center >
        <Box  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} p={5} borderRadius={"25px"} my={10}>
        <Text color={" #219EF9"} fontWeight={700} fontSize={"48px"}>
            Inscription
        </Text>
        <Text ></Text>
        {/* <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}> 
            Email  
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} width={"408px"} height={"55px"}  border={"1px solid black"}/>
        </Box> */}
        <Box mt={5}>
            <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
              Type de Compte
            </Text>
            <Select onChange={(e) => setCompte(e.target.value)}>
              <option value={"PARTICULIER"}>PARTICULIER</option>
              <option value={"ENTREPRISE"}>ENTREPRISE</option>
            </Select>
          </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}> 
        Téléphone  
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setTel(e.target.value)}}  type="number" width={"408px"} height={"55px"}  border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Mot de passe
        </Text>
        <Input borderRadius={"16px"}   width={"408px"} onChange={(e)=>{setMdp(e.target.value)}}  type={"password"}height={"55px"} border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Confirmer votre mot de passe
        </Text>
        <Input borderRadius={"16px"} width={"408px"} onChange={(e)=>{setMdpC(e.target.value)}}   type={"password"}height={"55px"} border={"1px solid black"}/>
        </Box>
        <Box display={"grid"}>
        <Button mt={5}fontWeight={700} onClick={()=>{Validate()}} fontSize={"16px"} lineHeight={"19.5px"} borderRadius={"16px"} width={"408px"} height={"55px"} bgColor={"#219EF9"} color={"white"} _hover={{
            bgColor:"#219EF9"
        }}> {insc}</Button>
        <Button mt={5}  bgColor="transparent" border="1px solid black"fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}borderRadius={"16px"} width={"408px"} height={"55px"} leftIcon={<FcGoogle/>} _hover={{
            bgColor:"transparent"
        }}> Continuer avec Google</Button>
        </Box>
        <Center>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"} mt={5}>Ou</Text>
        </Center>
        <Button mt={5} bgColor="transparent" border="1px solid black" fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}borderRadius={"16px"} width={"408px"} height={"55px"} _hover={{
            bgColor:"transparent"
        }}> Déjà membre ?<Text ml={2} color="#219EF9" as={Link} href={"/Connexion"} _hover={{textDecoration:"none",color:"#219EF9"}}>Connectez vous ici</Text> </Button>
        </Box>
        </Center>
        </>
    )
}