
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

    const message2=[
        {
            idM:"1",
            propio:"user1",
            date:"18/10/2020",
            message:`Nos maisons sont situées en bordure de voie bitumée et à 5mn de la lagune.
            La Cité est également situé à 10 mn du projet d’état de 144 immeubles et du plus grand mall d’Afrique de l’ouest.
            Nos maisons sont également situées à environ 600m de la lagune et l’Eau, l’électricité sont disponibles dans la zone .
            
            Caractéristiques des Villas Duplex 6 Pièces avec Piscine
            Villas haut standing de 6 pièces sur 300m2.
            ✓ grand Salon + Salle à Manger
            ✓ 5 Grandes Chambres avec Douche Chacune.
            ✓ Garage de 2 voitures + Grande Cours + Piscine + Clôture + jardin + Portails.
            ✓ Villas déjà en construction et en attente de finition selon les gouts et couleurs de l’acquéreur.
            ✓ Villas livrées complètement finies avec clôture, portails, décoration extérieure, gazon etc.
            ✓ Route Bitumée Jusqu’à La Cité – Lagune à 5mn
            
            Condition d’accès
            1. Apport initial : 40.millions pour réserver votre maison
            2. Frais de dossier : 900.milles
            3. Le reste 95 millions échelonnés sur 40 mois
            
            Document : ACD`,
            image:"",
        },
        {
            idM:"2",
            propio:"user2",
            date:"18/10/2020",
            message:`Nos maisons sont situées en bordure de voie bitumée et à 5mn de la lagune.
            La Cité est également situé à 10 mn du projet d’état de 144 immeubles et du plus grand mall d’Afrique de l’ouest.
            Nos maisons sont également situées à environ 600m de la lagune et l’Eau, l’électricité sont disponibles dans la zone .
            
            Caractéristiques des Villas Duplex 6 Pièces avec Piscine
            Villas haut standing de 6 pièces sur 300m2.
            ✓ grand Salon + Salle à Manger
            ✓ 5 Grandes Chambres avec Douche Chacune.
            ✓ Garage de 2 voitures + Grande Cours + Piscine + Clôture + jardin + Portails.
            ✓ Villas déjà en construction et en attente de finition selon les gouts et couleurs de l’acquéreur.
            ✓ Villas livrées complètement finies avec clôture, portails, décoration extérieure, gazon etc.
            ✓ Route Bitumée Jusqu’à La Cité – Lagune à 5mn
            
            Condition d’accès
            1. Apport initial : 40.millions pour réserver votre maison
            2. Frais de dossier : 900.milles
            3. Le reste 95 millions échelonnés sur 40 mois
            
            Document : ACD`,
            image:"",
        },
        {
            idM:"3",
            propio:"user3",
            date:"18/10/2020",
            message:`Nos maisons sont situées en bordure de voie bitumée et à 5mn de la lagune.
            La Cité est également situé à 10 mn du projet d’état de 144 immeubles et du plus grand mall d’Afrique de l’ouest.
            Nos maisons sont également situées à environ 600m de la lagune et l’Eau, l’électricité sont disponibles dans la zone .
            
            Caractéristiques des Villas Duplex 6 Pièces avec Piscine
            Villas haut standing de 6 pièces sur 300m2.
            ✓ grand Salon + Salle à Manger
            ✓ 5 Grandes Chambres avec Douche Chacune.
            ✓ Garage de 2 voitures + Grande Cours + Piscine + Clôture + jardin + Portails.
            ✓ Villas déjà en construction et en attente de finition selon les gouts et couleurs de l’acquéreur.
            ✓ Villas livrées complètement finies avec clôture, portails, décoration extérieure, gazon etc.
            ✓ Route Bitumée Jusqu’à La Cité – Lagune à 5mn
            
            Condition d’accès
            1. Apport initial : 40.millions pour réserver votre maison
            2. Frais de dossier : 900.milles
            3. Le reste 95 millions échelonnés sur 40 mois
            
            Document : ACD`,
            image:"",
        },
        {
            idM:"4",
            propio:"user4",
            date:"18/10/2020",
            message:`Nos maisons sont situées en bordure de voie bitumée et à 5mn de la lagune.
            La Cité est également situé à 10 mn du projet d’état de 144 immeubles et du plus grand mall d’Afrique de l’ouest.
            Nos maisons sont également situées à environ 600m de la lagune et l’Eau, l’électricité sont disponibles dans la zone .
            
            Caractéristiques des Villas Duplex 6 Pièces avec Piscine
            Villas haut standing de 6 pièces sur 300m2.
            ✓ grand Salon + Salle à Manger
            ✓ 5 Grandes Chambres avec Douche Chacune.
            ✓ Garage de 2 voitures + Grande Cours + Piscine + Clôture + jardin + Portails.
            ✓ Villas déjà en construction et en attente de finition selon les gouts et couleurs de l’acquéreur.
            ✓ Villas livrées complètement finies avec clôture, portails, décoration extérieure, gazon etc.
            ✓ Route Bitumée Jusqu’à La Cité – Lagune à 5mn
            
            Condition d’accès
            1. Apport initial : 40.millions pour réserver votre maison
            2. Frais de dossier : 900.milles
            3. Le reste 95 millions échelonnés sur 40 mois
            
            Document : ACD`,
            image:"",
        }
    ]
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
            <Box  bgColor={"#F6F6F6"} mb={10} >
           <NavbarCo/>
            
            <Flex  justifyContent={["normal","normal","normal","space-around","space-around"]} mt={5} mx={["2%","2%","2%","0","0"]}>
            <Box display={["none","none","none","block","block"]} height={"fit-content"}>
                    <Profilers/>
                    <Stats/>
                </Box>
                <Box mb={50}   >
                   
                        <AspectRatio ratio={16 / 9} mb={10} borderRadius={25}>
                        <iframe
                          
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJQLE8uAbWnyPHCv-_udEUhH7HQooJlM&q={'DEUX PLATEAUX BLD LATRILLE ','angre 8eme tranche'}"}
                        ></iframe>
                        </AspectRatio>
                    
                  
                    {message.map((data,ind)=><Box key={ind} scr><Messages like={data.nombrelike} comment={data.nombrecommentaire} favoris={data.nombrefavoris} idM={data.id} propio={data.Client} date={data.datePublication} image={data.fichiers} message={data.description} appart={data.typeBien} doc={data.typeDocuments} init={data.apportInitial} prix={data.prix} periodicite={data.periodicite} ville={data.localisation} piece={data.nombrePieces}
                    chambre={data.nombreChambres} salon={data.nombreSalon}
                    /></Box>)}
                    
                </Box>
                <Box display={["none","none","none","grid","grid"]} >
                    <Suggestion/>
                </Box>
            </Flex>
            
            </Box>
            )
    }
    
}