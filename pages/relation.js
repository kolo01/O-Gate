import Navbar from "@/components/home/Navbar";
import Suggestion from "@/components/src/AfterCo/suggestion";
import { Search2Icon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Center, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

export default function Relation(){
    const texted="Térrain de 500m2 disponible à cocody angré Contactez moi en inbox pour plus d’informations"
    return(<Box bgColor={"#F6F6F6"} pb={10}>
    <Navbar/>
    
    <Center display={"flex"}>
        <Flex>
        <Box width={"788px"} pt={5} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} height={"814px"}  mt={10}  borderRadius={"25px"} bgColor={"white"}>
            <Flex ml={10} mb={5} >
                <Flex  border={"1px solid #F1F1F1"} w={"fit-content"} p={2} mr={20}>
                <Image src="./sort.png" alt="sort" />
                <Text color={"#CDCDCD"} fontSize={"16px"} fontWeight={700}>Trier par</Text>
                </Flex>
               
                    <InputGroup width={"335px"} height={"34px"}>
                    <InputRightElement>
                    <Search2Icon/>  
                    </InputRightElement> 
                    <Input type="text" />
                    </InputGroup>
               
            </Flex>
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
 
            <Flex ml={10} justifyContent={"space-between"} width={"90%"} my={5}>
                <Box ml={2}>
                    
                    <Flex>
                        <Avatar w={"85px"} h={"85px"} mr={2}/>
                        
                            <Text mt={5} fontWeight={700} fontSize={"25px"}>Onomo franck</Text>
                           
                        
                    </Flex>
                </Box>
                <Button mt={5} border={"1px solid #219EF9"} color={"#219EF9"} width={"400px"} bgColor={"transparent"} w={"fit-content"} p={5} _hover={{bgColor:"transparent"}}>Message</Button>
            </Flex>
          
            <Box width={"full"} height={"1px"} bgColor={"#CDCDCD"}/>
        </Box>
        <Box mt={10} ml={5}>
        <Suggestion/>
        </Box>
        </Flex>
        </Center>
      
        
    </Box>)
}