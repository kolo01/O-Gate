import { AbsoluteCenter, Box, Button, Center, Divider, Flex, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc"

import Navbar from "../assets/Navbar";
import { Search2Icon } from "@chakra-ui/icons";

export default function First(){
    return(<Box>
    
        <Navbar/>
        <Flex width={"100%"}  height={"fit-content"} pb={10}   my={10}>
            <Box width={"40%"} mr={20} ml={10}>
                <Text fontSize={"40px"} fontWeight={"light"} width={"70%"} color={"#8f5849"}>Trouvez un poste grâce à votre communauté </Text>
                <Box display={"grid"} mt={5}>
                    <Text  fontSize={"20px"}>E-mail ou téléphone</Text>
                    <Input border={"1px solid black"} type="text" width={"70%"} height={"50px"} />
                    <Text  fontSize={"20px"}>Mot de passe</Text>
                    <Input border={"1px solid black"} type="password"  width={"70%"} height={"50px"} />

                    <Text color={"blue"} fontSize={"20px"} my={5}>Mot de passe oublié?</Text>
                    <Button bgColor={"#0a66c2"} color={"white"} boxShadow={"0 0 0 1px white"} height={"min-content"} p={3} fontSize={"20px"} borderRadius={"25px"}
                    width={"65%"} _hover={{
                        bgColor:"#004182"
                    }} >S'identifier</Button>

                    <Box position='relative' py={10} width={"80%"} >
  <Divider borderColor={"gray"}/>
  <AbsoluteCenter bg='white' px='4'>
    ou
  </AbsoluteCenter>
</Box>
                    <Box display={"grid"}>
                        <Text>En cliquant sur Continuer, vous acceptez les Conditions d’utilisation, la Politique de confidentialité et la Politique relative aux cookies de LinkedIn. </Text>
                        <Button leftIcon={<FcGoogle/>} width={"65%"} bgColor={"white"} border={"1px solid gray"} borderRadius={"25px"} _hover={{bgColor:"white"}} my={5}>
                            Continuer avec Google
                        </Button>
                        <Button bgColor={"white"} boxShadow={"0 0 0 1px black"} height={"min-content"} p={3} fontSize={"20px"} borderRadius={"25px"}
                    width={"65%"} _hover={{
                        bgColor:"rgba(0, 0, 0, 0.1)"
                    }}>
                            Nouveau sur Linkedin ? S'inscrire
                        </Button>
                        

                    </Box>
                    
                </Box>
            </Box>
            <Box width={"60%"}  >
                <Box bgRepeat={"no-repeat"}  bgImage={"./Home/firsty.svg"} height={"full"} width={"100%"}></Box>
            </Box>
            
        </Flex>
        
    </Box>)
}