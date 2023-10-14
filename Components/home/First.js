import { Box, Center, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Footer from "../assets/Footer";
import Navbar from "../assets/Navbar";
import { Search2Icon } from "@chakra-ui/icons";

export default function First(){
    return(<Box>
    
        <Navbar/>
        <Box width={"full"}  height={"80vh"} bgImage={"./Home/First.jpeg"}>
            <Center display={"grid"} width={"100%"}>
           
                <Text ml={40} fontSize={20} fontWeight={600} mt={"50%"} color={"white"}>Agents. Tours. Loans. Homes.</Text>
               
                <InputGroup>
                    <Input width={"500px"} type="search" placeholder="Entrez une adresse, une localité, un quartier, un lieu" _placeholder={{color:"white"}}/>
                    <InputRightElement as={Search2Icon} bgColor={"whitesmoke"} />
                </InputGroup>
                
            </Center>
        </Box>
        <Footer/>
    </Box>)
}