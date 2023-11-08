import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Profilers(){
    const [nom,setNom] = useState("")
    useEffect(()=>{
        setNom(JSON.parse(secureLocalStorage.getItem("local")).data.nom)
    },[nom])
    return(<>
    <Box>
        <Center><Avatar/></Center>
        <Text mx={5}> {nom=="NON DEFINI"? "Veuillez mettre à jour votre profil" : nom}</Text>
        <Flex>
            
            <Text>Actif</Text>
        </Flex>
    </Box>
    </>)
}