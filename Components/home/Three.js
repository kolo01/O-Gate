import { Button, Flex, Text } from "@chakra-ui/react";

export default function Three(){
    const first = "Publiez votre offre  auprès de millions de personnes"
    const second = "Publier une offre de terrain/de maison"
    return(
        <>
        <Flex height={"fit-content"}
        bgColor={"#f1ece5"}
        py={[0,0,0,10,10]}
        width={"100%"}
        display={["grid","grid","flex","flex","flex"]}
        >
<Text fontSize={"35px"} width={"400px"} ml={[0,0,0,4040]} color={"#b24020"}>{first}</Text>
<Button color={"linkedin.500"} fontSize={"15px"} mt={"60px"}height={"50px"} py={3} px={5} ml={[10,10,10,20,20]} mr={[10,10,10,0,0]} borderRadius={"25px"} border={"1px solid #01A0DC"}
bgColor={"transparent"} _hover={{
    color:"linkedin.700"
}}>{second}</Button>
        </Flex>
        </>
    )
}