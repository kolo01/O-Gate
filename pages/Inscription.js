import Navbar from "@/components/home/Navbar";
import { Box, Button, Center, Input, Select, Text, useToast } from "@chakra-ui/react";
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
    const [] = useState("")
    const [] = useState("")
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
    
    const [compte, setCompte] = useState("Particulier");
   

   const Validate = async () => {
     if(mdp == mdpC){
        await axios.post("http://185.98.139.246:9090/ogatemanagement-api/signup", {
            nom: "",
            username: tel,
            password:mdp ,
            typeCompte: compte,
            localisation: "",
          }).then((response)=>{
            toast({
              description:"Merci pour votre confiance",title:"Inscription validée",duration:9000,status:"success"
            }),
            sessionStorage.clear()
          }).catch((error)=>  toast({
            description:"Veuillez reesayer apres 5 minutes",title:"Erreur inattendu",duration:9000,status:"error"
          }), );
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
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}> 
            Email  
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setEmail(e.target.value)}} type="email" value={email} width={"408px"} height={"55px"}  border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
            <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
              Type de Compte
            </Text>
            <Select onChange={(e) => setCompte(e.target.value)}>
              <option>PARTICULIER</option>
              <option>ENTREPRISE</option>
            </Select>
          </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}> 
        Téléphone  
        </Text>
        <Input borderRadius={"16px"} onChange={(e)=>{setTel(e.target.value)}} value={tel} type="number" width={"408px"} height={"55px"}  border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Mot de passe
        </Text>
        <Input borderRadius={"16px"}   width={"408px"} onChange={(e)=>{setMdp(e.target.value)}} value={mdp}  type={"password"}height={"55px"} border={"1px solid black"}/>
        </Box>
        <Box mt={5}>
        <Text fontWeight={700} fontSize={"16px"} lineHeight={"19.5px"}>
            Confirmer votre mot de passe
        </Text>
        <Input borderRadius={"16px"} width={"408px"} onChange={(e)=>{setMdpC(e.target.value)}} value={mdpC}  type={"password"}height={"55px"} border={"1px solid black"}/>
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