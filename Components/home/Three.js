import { Button, Flex, Text } from "@chakra-ui/react";

export default function Three(){
    const first = "Publiez votre offre d’emploi auprès de millions de personnes"
    const second = "Publier une offre d'emploi"
    return(
        <>
        <Flex height={"fit-content"}
        bgColor={"#f1ece5"}
        py={10}
        width={"100%"}
        
        >
<Text fontSize={"35px"} width={"400px"} ml={40} color={"#b24020"}>{first}</Text>
<Button color={"linkedin.500"} fontSize={"15px"} mt={"60px"}height={"50px"} py={3} px={5} ml={20} borderRadius={"25px"} border={"1px solid #01A0DC"}
bgColor={"transparent"} _hover={{
    color:"linkedin.700"
}}>{second}</Button>
        </Flex>
        </>
    )
}