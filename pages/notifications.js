import Navbar from "@/components/home/Navbar";
import { Avatar, Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";

export default function Offers(){
    const texted="Térrain de 500m2 disponible à cocody angré Contactez moi en inbox pour plus d’informations"
    return(<Box bgColor={"#F6F6F6"} pb={10}>
    <Navbar/>
    <Center>
        <Box width={"788px"} pt={10} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} height={"814px"} mt={"96px"}   borderRadius={"25px"} bgColor={"white"}>
        <Flex ml={10} mb={2} border={"1px solid #F1F1F1"} w={"fit-content"} p={2}>
                <Image src="./sort.png" alt="sort" />
                <Text color={"#CDCDCD"} fontSize={"16px"} fontWeight={700}>Filtre</Text>
            </Flex>
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
            <Text ml={5} color={"#D9D9D9"} mb={5} fontWeight={700}>Il y a 2 jours</Text>
            <Flex ml={10} justifyContent={"space-between"} width={"90%"}>
                <Box ml={2}>
                    
                    <Flex>
                        <Avatar w={"42px"} h={"42px"} mr={2}/>
                        <Box>
                        <Text w={"400px"} ml={5} mb={5}>{texted}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Text ></Text>
            </Flex>
            
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
        </Box>
        </Center>
    </Box>)
}