
import Messages from "@/components/home/Message";

import Navbar from "@/components/home/Navbar";
import NavbarCo from "@/components/home/NavbarCo";
import Stats from "@/components/src/AfterCo/Stats";
import Profilers from "@/components/src/AfterCo/profilsEtCo";
import Suggestion from "@/components/src/AfterCo/suggestion";
import Logo from "@/components/src/Logo";
import { Search2Icon } from "@chakra-ui/icons";
import { AspectRatio, Avatar, Box, Center, Flex, Icon, Image, Input, InputGroup, InputRightAddon, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useStyleRegistry } from "styled-jsx";

export default function Home(){
    const [message,setMessage] = useState([])
    const [token,setToken] = useState("")

   
    const [nom,setNom] = useState("")
    const all=[
        {
        image:"./all/Home.png",
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
  const [checker,setChecker] = useState(false)

    useEffect(()=>{
      

        try{
            // console.log(localStorage.getItem("local"))
            if(JSON.parse(localStorage.getItem("local")).data.accessToken.length >10){
                setChecker(true)
                setToken(JSON.parse(localStorage.getItem("local")).data.accessToken);
    
                let config = {
                  headers: { Authorization: `Bearer ${token}` },
                };
        
                axios
                .get(
                  "http://185.98.139.246:9090/ogatemanagement-api/client/rechercherpublicationparpage?page=0&taille=10",
                  config
                )
                .then((response) => {setMessage(response.data.donnee.publications)})
                .catch((error) => {});
            }else{
                router.push("/")
            }
        }catch (error){
            console.log(error)
            // router.push("/")
        }
       
       
    },[router,token,message])
    if(checker){
        return(
            <Box  bgColor={"##f4f2ee"} mb={10} >
           <NavbarCo/>
            <Center>
            <Flex   mt={5} pb={10} >
            <Box mr={5} display={["none","none","none","block","block"]} height={"fit-content"}>
                    <Profilers/>
                    <Stats/>
                </Box>
                <Box  mr={5}   >
                   
                        <AspectRatio ratio={16 / 9} mb={10} borderRadius={25}>
                        <iframe
                          
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"}
                        ></iframe>
                        </AspectRatio>
                    
                  
                  
                    
                </Box>
                <Box mr={5}>
                {message.length >0 ?message.map((data,ind)=><Box key={ind} scr><Messages like={data.nombrelike} comment={data.nombrecommentaire} favoris={data.nombrefavoris} idM={data.id} propio={data.Client} date={data.datePublication} image={data.fichiers} message={data.description} appart={data.typeBien} doc={data.typeDocuments} init={data.apportInitial} prix={data.prix} periodicite={data.periodicite} ville={data.localisation} piece={data.nombrePieces}
                    chambre={data.nombreChambres} salon={data.nombreSalon}
                    /></Box>) : 
                   
                    <AspectRatio width={{base:"400px",lg:"542px"}} ratio={16 / 9} mb={10} borderRadius={25}>
                    <iframe
                      
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"}
                    ></iframe>
                    </AspectRatio>
                
              
              
                
        }
                </Box>
                <Box display={["none","none","none","grid","grid"]} >
                    <Suggestion/>
                </Box>
            </Flex>
            </Center>
            </Box>
            )
    }
    
}