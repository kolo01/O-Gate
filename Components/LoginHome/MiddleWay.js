import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";



export default function MiddleWay(){
    return(
        <Box mr={10} width={"700px"}>
            <Box bgColor={"white"} mt={5}  p={5} borderRadius={"15px"}>
                <Flex>
                <Image mt={2} ml={2} src="./Home/First.jpeg"  width={"50px"} height={"50px"} alt=" photo utilisateur" borderRadius={"50%"}/>
                <Input width={"full"} mx={5} mt={4} borderRadius={"20px"} border={"1px solid gray"} placeholder="Commencer un poste"/>
                </Flex>
                <Flex ml={5} mt={2} fontSize={"20px"}>
                    <Text>Une vente/Une location</Text>
                    <Text mx={2}>-</Text>
                    <Text>Un besoin</Text>
                    <Text mx={2}>-</Text>
                    <Text>Un média</Text>
                    <Text mx={2}>-</Text>
                    <Text>Un événement</Text>
                </Flex>
            </Box>
        </Box>
    )
}